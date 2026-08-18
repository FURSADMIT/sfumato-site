"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useLenis } from "lenis/react";

gsap.registerPlugin(useGSAP);

const MenuCtx = createContext({ open: () => {} });
export const useMenu = () => useContext(MenuCtx);

const ITEMS = [
  { label: "о проекте", href: "#about" },
  { label: "услуги", href: "#services" },
  { label: "сообщество", href: "#community" },
  { label: "обсудить ваш проект", href: "#contact" },
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
    if (!href) return;
    if (document.querySelector(href)) {
      gsap.delayedCall(0.25, () => lenis?.scrollTo(href, { duration: 1.4 }));
    } else {
      // якоря нет на текущей странице — уходим на главную
      window.location.href = "/" + href;
    }
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
          <a
            href="#"
            aria-label="На главную"
            onClick={(e) => {
              e.preventDefault();
              close();
              if (window.location.pathname === "/") {
                gsap.delayedCall(0.25, () => lenis?.scrollTo(0, { duration: 1.4 }));
              } else {
                window.location.href = "/";
              }
            }}
            className="flex cursor-pointer items-center gap-4 transition-opacity hover:opacity-60"
          >
            <img src="/images/mark-white.png" alt="" className="size-[30px] invert md:size-[42px]" />
            <span className="text-[30px] font-bold lowercase leading-none tracking-[-0.01em] md:text-[42px]">sfumàto</span>
          </a>
          <button aria-label="Закрыть меню" onClick={close} className="relative size-[30px] cursor-pointer transition-opacity hover:opacity-60">
            <span className="absolute left-1/2 top-1/2 h-[2.4px] w-[34px] -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-[2px] bg-ink" />
            <span className="absolute left-1/2 top-1/2 h-[2.4px] w-[34px] -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-[2px] bg-ink" />
          </button>
        </div>

        {/* Пункты + контакты: flex-раскладка, колонки никогда не пересекаются */}
        <div className="mt-12 flex flex-col gap-10 md:mt-[100px] lg:flex-row lg:items-start lg:justify-between lg:gap-16">
        <nav className="w-full max-w-[860px] lg:min-w-0 lg:flex-1">
          {ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => goTo(e, item.href)}
              className="menu-row group block cursor-pointer border-t border-line py-[14px] md:py-[18px]"
            >
              <span className="text-[22px] font-medium lowercase transition-opacity group-hover:opacity-60 md:text-[34px]">{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Контакты */}
        <div className="menu-side flex flex-col gap-6 lg:w-[380px] lg:shrink-0 lg:gap-7">
          <div>
            <p className="text-[13px] font-medium tracking-[0.01em] text-muted">СВЯЗАТЬСЯ С НАМИ:</p>
            <p className="mt-1 text-[15px] font-medium">
              <a href="mailto:sfumato-agency@yandex.ru" className="transition-colors hover:text-muted">sfumato-agency@yandex.ru</a>
            </p>
          </div>
          <div>
            <p className="text-[13px] font-medium tracking-[0.01em] text-muted">РАБОТА В <span className="text-[1.35em] font-normal leading-none">sfumàto</span>:</p>
            <p className="mt-1 text-[15px] font-medium">
              <a href="mailto:sfumato-agency@yandex.ru" className="transition-colors hover:text-muted">sfumato-agency@yandex.ru</a>
            </p>
          </div>
          <div>
            <p className="text-[13px] font-medium tracking-[0.01em] text-muted">СОЦСЕТИ:</p>
            <div className="mt-1 flex flex-col gap-1 text-[15px] font-medium">
              <a href="https://t.me/Sfuma_to" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-muted">telegram</a>
              <a href="https://vk.com/sfuma_to" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-muted">вконтакте</a>
              <a href="https://dzen.ru/sfumato" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-muted">дзен</a>
              <a href="https://www.instagram.com/sfumato_curator" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-muted">instagram*</a>
            </div>
          </div>
        </div>
        </div>

        {/* Юридическая пометка */}
        <p className="menu-side mt-auto shrink-0 pt-10 text-[11px] leading-[1.45] text-muted">
          * Instagram принадлежит компании Meta Platforms Inc., признанной экстремистской организацией, деятельность которой запрещена на территории Российской Федерации.
        </p>
      </div>
    </MenuCtx.Provider>
  );
}
