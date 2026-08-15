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
