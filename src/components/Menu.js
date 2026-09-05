"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import CopyEmailInline from "@/components/CopyEmailInline";

gsap.registerPlugin(useGSAP);

const MenuCtx = createContext({ open: () => {} });
export const useMenu = () => useContext(MenuCtx);

const ITEMS = {
  ru: [
    { label: "о проекте", href: "#about" },
    { label: "услуги", href: "#services" },
    { label: "экспертно", href: "/media" },
    { label: "сообщество", href: "#community" },
    { label: "обсудить ваш проект", href: "#contact" },
  ],
  en: [
    { label: "about", href: "#about" },
    { label: "services", href: "#services" },
    { label: "insights", href: "/en/media" },
    { label: "community", href: "#community" },
    { label: "discuss your project", href: "#contact" },
  ],
};

const T = {
  ru: { contact: "СВЯЗАТЬСЯ С НАМИ:", careers: <>РАБОТА В <span className="text-[1.35em] font-normal leading-none">sfumàto</span>:</>, copied: "адрес скопирован", switch: "[ EN ]" },
  en: { contact: "CONTACT US:", careers: <>CAREERS AT <span className="text-[1.35em] font-normal leading-none">sfumàto</span>:</>, copied: "address copied", switch: "[ RU ]" },
};

export default function MenuProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const overlayRef = useRef(null);
  const tlRef = useRef(null);
  const lenis = useLenis();
  const pathname = usePathname() || "/";
  const isEn = pathname === "/en" || pathname.startsWith("/en/");
  const lang = isEn ? "en" : "ru";
  const t = T[lang];
  // адрес той же страницы на другом языке (у политики англ. версии нет — ведём на главную)
  const switchHref = isEn
    ? (pathname.replace(/^\/en/, "") || "/")
    : pathname.startsWith("/privacy")
      ? "/en"
      : pathname === "/"
        ? "/en"
        : "/en" + pathname;

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
    try { lenis?.stop(); } catch {}
    document.body.style.overflow = "hidden"; // нативная блокировка фона (на таче Lenis отключён)
    tlRef.current?.timeScale(1).play();
  };
  const close = () => {
    setIsOpen(false);
    try { lenis?.start(); } catch {}
    document.body.style.overflow = "";
    tlRef.current?.timeScale(1.6).reverse();
  };
  const goTo = (e, href) => {
    e.preventDefault();
    close();
    if (!href) return;
    // обычные страницы (не якоря) — простой переход
    if (href.startsWith("/")) {
      gsap.delayedCall(0.15, () => { window.location.href = href; });
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      const isTouch = window.matchMedia("(pointer: coarse)").matches;
      gsap.delayedCall(0.25, () => {
        if (isTouch) target.scrollIntoView();
        else lenis?.scrollTo(href, { duration: 1.4 });
      });
    } else {
      // якоря нет на текущей странице — уходим на главную (своего языка)
      window.location.href = (isEn ? "/en/" : "/") + href;
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
              if (window.location.pathname === (isEn ? "/en" : "/") || window.location.pathname === "/en/") {
                const isTouch = window.matchMedia("(pointer: coarse)").matches;
                gsap.delayedCall(0.25, () => {
                  if (isTouch) window.scrollTo(0, 0);
                  else lenis?.scrollTo(0, { duration: 1.4 });
                });
                history.replaceState(null, "", isEn ? "/en" : "/"); // сбрасываем #раздел из адреса
              } else {
                window.location.href = isEn ? "/en" : "/";
              }
            }}
            className="flex cursor-pointer items-center gap-4 transition-opacity hover:opacity-60"
          >
            <img src="/images/mark-white.png" alt="sfumàto" className="size-[42px] invert" />
          </a>
          <button aria-label="Закрыть меню" onClick={close} className="relative size-[30px] cursor-pointer transition-opacity hover:opacity-60">
            <span className="absolute left-1/2 top-1/2 h-[2.4px] w-[34px] -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-[2px] bg-ink" />
            <span className="absolute left-1/2 top-1/2 h-[2.4px] w-[34px] -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-[2px] bg-ink" />
          </button>
        </div>

        {/* Пункты + контакты: flex-раскладка, колонки никогда не пересекаются */}
        <div className="mt-12 flex flex-col gap-10 md:mt-[100px] lg:flex-row lg:items-start lg:justify-between lg:gap-16">
        <nav className="w-full max-w-[860px] lg:min-w-0 lg:flex-1">
          {ITEMS[lang].map((item) => (
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
            <a href={switchHref} className="text-[15px] font-medium tracking-[0.01em] transition-colors hover:text-muted">
              {t.switch}
            </a>
          </div>
          <div>
            <p className="text-[13px] font-medium tracking-[0.01em] text-muted">{t.contact}</p>
            <p className="mt-1 text-[15px] font-medium">
              <CopyEmailInline email="hello@sfuma-to.ru" copiedLabel={t.copied} className="transition-colors hover:text-muted" />
            </p>
          </div>
          <div>
            <p className="text-[13px] font-medium tracking-[0.01em] text-muted">{t.careers}</p>
            <p className="mt-1 text-[15px] font-medium">
              <CopyEmailInline email="vacancy@sfuma-to.ru" copiedLabel={t.copied} className="transition-colors hover:text-muted" />
            </p>
          </div>
          <div>
            <div className="flex items-center gap-3">
              <a href="https://t.me/Sfuma_to" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-60">
                <img src="/images/social-1.svg" alt="Telegram" className="size-10" />
              </a>
              <a href="https://vk.com/sfuma_to" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-60">
                <img src="/images/social-2.svg" alt="ВКонтакте" className="size-10" />
              </a>
              <a href="https://dzen.ru/sfumato" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-60">
                <img src="/images/social-3.svg" alt="Дзен" className="size-10" />
              </a>
            </div>
          </div>
        </div>
        </div>

      </div>
    </MenuCtx.Provider>
  );
}
