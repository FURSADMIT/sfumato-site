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
        .from(".hero-wordmark", { y: 40, opacity: 0, duration: 1 }, "-=1.1")
        .from(".hero-meta", { y: 16, opacity: 0, duration: 0.8, stagger: 0.1 }, "-=0.6");

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
    <section ref={root} className="relative h-screen min-h-[640px] overflow-hidden bg-ink">
      <img
        src="/images/hero.jpg"
        alt="sfumàto — маркетинг на языке искусства"
        className="hero-img absolute inset-0 size-full object-cover"
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[170px] bg-gradient-to-b from-black/35 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[420px] bg-gradient-to-b from-transparent to-black/50" />

      {/* Вордмарк */}
      <img
        src="/images/wordmark-white.png"
        alt="sfumàto"
        className="hero-wordmark absolute bottom-[42px] left-1/2 w-[min(640px,80vw)] -translate-x-1/2 drop-shadow-[0_1px_14px_rgba(0,0,0,0.4)]"
      />

      {/* Мета-строки */}
      <div className="hero-meta absolute bottom-[72px] left-6 text-[13px] font-medium leading-[1.4] tracking-[0.01em] text-white [text-shadow:0_1px_12px_rgba(0,0,0,0.35)] md:left-12">
        БУТИКОВОЕ АГЕНТСТВО ЭСТЕТИЧНЫХ
        <br />
        МАРКЕТИНГОВЫХ КАМПАНИЙ
      </div>
      <div className="hero-meta absolute bottom-[72px] right-6 hidden text-right text-[13px] font-medium leading-[1.4] tracking-[0.01em] text-white [text-shadow:0_1px_12px_rgba(0,0,0,0.35)] md:right-12 lg:block">
        МАРКЕТИНГ — ЧЕРЕЗ ЭСТЕТИКУ,
        <br />
        СТРАТЕГИЮ И КУЛЬТУРНЫЙ КОНТЕКСТ
      </div>
    </section>
  );
}
