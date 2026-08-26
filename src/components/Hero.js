"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Hero() {
  const root = useRef(null);

  useGSAP(
    () => {
      // Появление hero при загрузке
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-img", { scale: 1.06, duration: 1.6, ease: "power2.out" })
        // появление — на обёртке, растворение при скролле — на самой картинке:
        // если анимировать одно свойство одного элемента двумя твинами, на iOS они конфликтуют
        .from(".hero-wordmark-wrap", { y: 40, opacity: 0, duration: 1 }, "-=1.1");

      // Параллакс: фото медленнее скролла, вордмарк уплывает
      gsap.to(".hero-img", {
        yPercent: 14,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(".hero-wordmark", {
        yPercent: -60,
        opacity: 0.25,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative h-[68svh] min-h-[440px] overflow-hidden bg-ink md:h-screen md:min-h-[640px]">
      <img
        src="/images/hero.jpg"
        alt="sfumàto — маркетинг на языке искусства"
        className="hero-img absolute inset-0 size-full object-cover"
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[170px] bg-gradient-to-b from-black/35 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[420px] bg-gradient-to-b from-transparent to-black/50" />

      {/* Вордмарк */}
      <div className="hero-wordmark-wrap absolute bottom-[48px] left-1/2 w-[88vw] -translate-x-1/2 md:bottom-[66px]">
        <img
          src="/images/wordmark-white.png"
          alt="sfumàto"
          className="hero-wordmark w-full drop-shadow-[0_1px_14px_rgba(0,0,0,0.4)]"
        />
      </div>
    </section>
  );
}
