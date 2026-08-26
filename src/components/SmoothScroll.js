"use client";

import { useEffect, useRef } from "react";
import { ReactLenis } from "lenis/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Плавный инерционный скролл (Lenis) на всё приложение,
 * синхронизированный с GSAP ScrollTrigger — чтобы scroll-анимации
 * шли идеально в такт с инерцией.
 *
 * lerp — «тяжесть» скролла: меньше = плавнее/инертнее (0.1 — хороший старт).
 */
export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    // На тач-устройствах Lenis выключаем полностью: iOS скроллит нативно,
    // а Lenis там конфликтует с fixed-элементами и scroll-анимациями.
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    window.addEventListener("scroll", ScrollTrigger.update, { passive: true });

    if (isTouch) {
      lenisRef.current?.lenis?.destroy();
      return () => window.removeEventListener("scroll", ScrollTrigger.update);
    }

    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    const lenis = lenisRef.current?.lenis;
    lenis?.on("scroll", ScrollTrigger.update);

    return () => {
      gsap.ticker.remove(update);
      lenis?.off("scroll", ScrollTrigger.update);
      window.removeEventListener("scroll", ScrollTrigger.update);
    };
  }, []);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      autoRaf={false}
      options={{ lerp: 0.1, duration: 1.2, smoothWheel: true, anchors: true }}
    >
      {children}
    </ReactLenis>
  );
}
