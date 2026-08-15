"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useMenu } from "@/components/Menu";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Hero() {
  const root = useRef(null);
  const { open } = useMenu();

  useGSAP(
    () => {
      // Появление hero при загрузке
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-img", { scale: 1.06, duration: 1.6, ease: "power2.out" })
        .from(".hero-top", { y: -16, opacity: 0, duration: 0.8 }, "-=1.2")
        .from(".hero-wordmark", { y: 40, opacity: 0, duration: 1 }, "-=0.8")
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

      {/* Верхняя навигация */}
      <div className="hero-top absolute inset-x-0 top-0 flex items-center justify-between px-6 pt-10 text-white md:px-12">
        <div className="flex items-center gap-6">
          <img src="/images/mark-white.png" alt="sfumàto" className="size-[42px] drop-shadow-[0_1px_14px_rgba(0,0,0,0.4)]" />
          <nav className="hidden items-center gap-[26px] text-[14px] font-medium tracking-[0.01em] [text-shadow:0_1px_12px_rgba(0,0,0,0.35)] md:flex">
            <a href="#about" className="transition-opacity hover:opacity-70">[ О ПРОЕКТЕ ]</a>
            <a href="#services" className="transition-opacity hover:opacity-70">[ УСЛУГИ ]</a>
            <a href="#contact" className="transition-opacity hover:opacity-70">[ ОБСУДИТЬ ПРОЕКТ ]</a>
          </nav>
        </div>
        <button aria-label="Открыть меню" onClick={open} className="flex cursor-pointer flex-col gap-[6px] transition-opacity hover:opacity-60">
          <span className="h-[2.4px] w-[30px] rounded-[2px] bg-white" />
          <span className="h-[2.4px] w-[30px] rounded-[2px] bg-white" />
          <span className="h-[2.4px] w-[30px] rounded-[2px] bg-white" />
        </button>
      </div>

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
