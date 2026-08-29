"use client";

import { useEffect, useState } from "react";
import { useLenis } from "lenis/react";
import { useMenu } from "@/components/Menu";

/**
 * Фиксированная шапка-«шторка»: над хиро прозрачная с белыми элементами,
 * после хиро — компактная плашка на фоне с блюром и тёмными элементами.
 * Контент всегда скроллится под неё.
 */
// allServices: на страницах услуг пункт «УСЛУГИ» показывается как «ВСЕ УСЛУГИ»
// backHref: ссылка «Назад» в мобильной шапке (кнопка всегда под рукой при скролле)
export default function Header({ solid = false, allServices = false, backHref = null }) {
  const [scrolled, setScrolled] = useState(solid);
  const { open } = useMenu();

  const lenis = useLenis(({ scroll }) => {
    const on = solid || scroll > window.innerHeight - 120;
    setScrolled((prev) => (prev === on ? prev : on));
  });

  // На тач-устройствах Lenis отключён — состояние шапки ведём по нативному скроллу
  useEffect(() => {
    const onScroll = () => {
      const on = solid || window.scrollY > window.innerHeight - 120;
      setScrolled((prev) => (prev === on ? prev : on));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [solid]);

  const linkCls = `text-[14px] font-medium tracking-[0.01em] transition-opacity hover:opacity-60 ${
    scrolled ? "text-ink" : "text-white [text-shadow:0_1px_12px_rgba(0,0,0,0.35)]"
  }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-[background-color,border-color] duration-300 ${
        scrolled ? "border-b border-line bg-background/90 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div className="flex h-12 items-center justify-between px-6 md:h-16 md:px-12">
        <div className="flex items-center gap-6">
          <a
            href="/"
            aria-label="На главную"
            className={`transition-opacity hover:opacity-60 ${backHref ? "hidden" : ""}`}
            onClick={(e) => {
              if (window.location.pathname !== "/") return; // с внутренних страниц — обычный переход
              e.preventDefault();
              if (window.matchMedia("(pointer: coarse)").matches) window.scrollTo(0, 0);
              else lenis?.scrollTo(0, { duration: 1.4 });
            }}
          >
            <img
              src="/images/mark-white.png"
              alt="sfumàto"
              className={`size-[42px] transition-[filter] duration-300 ${
                scrolled ? "invert" : "drop-shadow-[0_1px_14px_rgba(0,0,0,0.4)]"
              }`}
            />
          </a>
          {backHref && (
            <a href={backHref} className={linkCls}>
              [ НАЗАД ]
            </a>
          )}
          <nav className="hidden items-center gap-[26px] md:flex">
            <a href="/#about" className={linkCls}>[ О ПРОЕКТЕ ]</a>
            <a href="/#services" className={linkCls}>{allServices ? "[ ВСЕ УСЛУГИ ]" : "[ УСЛУГИ ]"}</a>
            <a href="#contact" className={linkCls}>[ ОБСУДИТЬ ПРОЕКТ ]</a>
          </nav>
        </div>
        <button
          aria-label="Открыть меню"
          onClick={open}
          className="flex cursor-pointer flex-col gap-[6px] transition-opacity hover:opacity-60"
        >
          <span className={`h-[2.4px] w-[30px] rounded-[2px] transition-colors duration-300 ${scrolled ? "bg-ink" : "bg-white"}`} />
          <span className={`h-[2.4px] w-[30px] rounded-[2px] transition-colors duration-300 ${scrolled ? "bg-ink" : "bg-white"}`} />
          <span className={`h-[2.4px] w-[30px] rounded-[2px] transition-colors duration-300 ${scrolled ? "bg-ink" : "bg-white"}`} />
        </button>
      </div>
    </header>
  );
}
