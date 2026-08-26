import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-white">
      <div className="px-6 md:px-12">
        <div className="h-[1.5px] w-full bg-ink" />
        <div className="mt-10 flex flex-col items-start gap-10 md:flex-row md:flex-wrap md:justify-between">
          <div className="text-[13px] font-medium leading-[1.5] tracking-[0.01em]">
            БУТИКОВОЕ АГЕНТСТВО ЭСТЕТИЧНЫХ
            <br />
            МАРКЕТИНГОВЫХ КАМПАНИЙ
            <p className="mt-6">
              <Link href="/privacy" className="transition-colors hover:text-muted">ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</Link>
            </p>
          </div>
          <nav className="flex flex-col gap-3 text-[15px] font-medium tracking-[0.01em]">
            <Link href="/#about" className="transition-colors hover:text-muted">[ О ПРОЕКТЕ ]</Link>
            <Link href="/#services" className="transition-colors hover:text-muted">[ УСЛУГИ ]</Link>
            <a href="#contact" className="transition-colors hover:text-muted">[ ОБСУДИТЬ ПРОЕКТ ]</a>
          </nav>
          <div className="flex flex-col gap-[18px] text-[15px] font-medium">
            <div>
              <p className="text-[13px] tracking-[0.01em] text-muted">РАБОТА В <span className="text-[1.35em] font-normal leading-none">sfumàto</span>:</p>
              <p className="mt-1">
                <a href="mailto:sfumato-agency@yandex.ru" className="transition-colors hover:text-muted">sfumato-agency@yandex.ru</a>
              </p>
            </div>
            <div>
              <p className="text-[13px] tracking-[0.01em] text-muted">СВЯЗАТЬСЯ С НАМИ:</p>
              <p className="mt-1">
                <a href="mailto:sfumato-agency@yandex.ru" className="transition-colors hover:text-muted">sfumato-agency@yandex.ru</a>
              </p>
            </div>
          </div>
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
        <Reveal y={60} start="top bottom">
          <div className="relative -mx-5 mt-10 -mb-[10px] max-w-none md:mx-auto md:-mb-[18px] md:mt-24 md:w-full md:max-w-[1340px]">
            <p className="mb-[3px] text-right text-[9px] font-medium tracking-[0.01em] md:hidden">
              дизайн и разработка — sfumàto © 2026
            </p>
            <img src="/images/wordmark-black.png" alt="sfumàto" className="block w-full" />
            <p className="absolute -right-[10px] top-[calc(26%+4px)] hidden text-right text-[10px] font-medium tracking-[0.01em] md:block">
              дизайн и разработка — sfumàto © 2026
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
