"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useLenis } from "lenis/react";

gsap.registerPlugin(useGSAP);

const MenuCtx = createContext({ open: () => {} });
export const useMenu = () => useContext(MenuCtx);

const ITEMS = [
  { n: "01", label: "о проекте", href: "#about" },
  { n: "02", label: "услуги", href: "#services" },
  { n: "03", label: "миссия", href: "#mission" },
  { n: "04", label: "портфолио", href: null }, // страницы пока нет
  { n: "05", label: "обсудить проект", href: "#contact" },
];

export default function MenuProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const overlayRef = useRef(null);
  const tlRef = useRef(null);
  const lenis = useLenis();

  useGSAP(
    () => {
      gsap.set(overlayRef.current, { autoAlpha: 0 });
      tlRef.current = gsap
        .timeline({ paused: true })
        .to(overlayRef.current, { autoAlpha: 1, duration: 0.35, ease: "power2.out" })
        .from(".menu-row", { y: 28, opacity: 0, duration: 0.6, stagger: 0.06, ease: "power3.out" }, "-=0.1")
        .from(".menu-side", { y: 20, opacity: 0, duration: 0.5, ease: "power3.out" }, "-=0.5");
    },
    { scope: overlayRef }
  );

  const open = () => {
    setIsOpen(true);
    lenis?.stop();
    tlRef.current?.timeScale(1).play();
  };
  const close = () => {
    setIsOpen(false);
    lenis?.start();
    tlRef.current?.timeScale(1.6).reverse();
  };
  const goTo = (e, href) => {
    e.preventDefault();
    close();
    if (href) gsap.delayedCall(0.25, () => lenis?.scrollTo(href, { duration: 1.4 }));
  };

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  return (
    <MenuCtx.Provider value={{ open }}>
      {children}

      <div ref={overlayRef} className="invisible fixed inset-0 z-50 flex flex-col overflow-y-auto bg-background px-6 pb-6 pt-5 md:px-12 md:pb-10 md:pt-[45px]">
        {/* Верхняя панель */}
        <div className="flex shrink-0 items-center justify-between">
          <div className="flex items-center gap-5">
            <img src="/images/mark-white.png" alt="sfumàto" className="size-[30px] invert md:size-[42px]" />
            <span className="flex items-start gap-3 text-[8px] font-medium uppercase leading-[1.5] tracking-[0.1em] md:text-[9.5px]">
              <span>
                ОТКЛИК И ЕЩЁ
                <br />
                РАЗ ОТКЛИК
              </span>
              <span className="text-muted">/</span>
              <span>
                A RESPONSE AND
                <br />
                A RESPONSE AGAIN
              </span>
            </span>
          </div>
          <button aria-label="Закрыть меню" onClick={close} className="relative size-[30px] cursor-pointer transition-opacity hover:opacity-60">
            <span className="absolute left-1/2 top-1/2 h-[2.4px] w-[34px] -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-[2px] bg-ink" />
            <span className="absolute left-1/2 top-1/2 h-[2.4px] w-[34px] -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-[2px] bg-ink" />
          </button>
        </div>

        {/* Пункты */}
        <nav className="mt-12 w-full max-w-[860px] md:mt-[100px]">
          {ITEMS.map((item) => {
            const inner = (
              <>
                <span className="pt-[10px] text-[11px] font-medium tracking-[0.02em] text-muted md:text-[13px]">{item.n}</span>
                <span className="text-[22px] font-medium lowercase md:text-[34px]">{item.label}</span>
              </>
            );
            const rowCls = "menu-row flex items-start gap-[14px] border-t border-line py-[14px] md:gap-[28px] md:py-[18px]";
            return item.href ? (
              <a key={item.n} href={item.href} onClick={(e) => goTo(e, item.href)} className={`${rowCls} group cursor-pointer`}>
                <span className="contents transition-opacity group-hover:opacity-60">{inner}</span>
              </a>
            ) : (
              <div key={item.n} className={`${rowCls} opacity-40`} title="страница в разработке">
                {inner}
              </div>
            );
          })}
        </nav>

        {/* Контакты */}
        <div className="menu-side mt-10 flex flex-col gap-6 lg:absolute lg:right-12 lg:top-[206px] lg:mt-0 lg:w-[380px] lg:gap-7">
          <div>
            <p className="text-[13px] font-medium tracking-[0.01em] text-muted">СВЯЗАТЬСЯ С НАМИ:</p>
            <p className="mt-1.5 text-[15px] font-medium">
              <a href="https://t.me/Sfuma_to" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-60">@sfuma_to</a>
              &ensp;·&ensp;
              <a href="mailto:sfumato-agency@yandex.ru" className="transition-opacity hover:opacity-60">sfumato-agency@yandex.ru</a>
            </p>
          </div>
          <div>
            <p className="text-[13px] font-medium tracking-[0.01em] text-muted">СОЦСЕТИ:</p>
            <div className="mt-1.5 flex flex-col gap-1 text-[15px] font-medium lg:flex-col">
              <a href="https://t.me/Sfuma_to" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-60">telegram&ensp;↗</a>
              <a href="https://vk.com/sfuma_to" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-60">вконтакте&ensp;↗</a>
              <a href="https://dzen.ru/sfumato" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-60">дзен&ensp;↗</a>
            </div>
          </div>
          <div>
            <p className="text-[13px] font-medium tracking-[0.01em] text-muted">РАБОТА В sfumàto:</p>
            <p className="mt-1.5 text-[15px] font-medium">@…</p>
          </div>
        </div>

      </div>
    </MenuCtx.Provider>
  );
}
