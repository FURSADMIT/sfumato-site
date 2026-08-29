import Link from "next/link";
import Reveal from "@/components/Reveal";
import CopyEmailInline from "@/components/CopyEmailInline";

const T = {
  ru: {
    privacy: "ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ",
    careers: <>РАБОТА В <span className="text-[1.35em] font-normal leading-none">sfumàto</span>:</>,
    contact: "СВЯЗАТЬСЯ С НАМИ:",
    copied: "адрес скопирован",
    credit: "дизайн и разработка — sfumàto © 2026",
  },
  en: {
    privacy: "PRIVACY POLICY (IN RUSSIAN)",
    careers: <>CAREERS AT <span className="text-[1.35em] font-normal leading-none">sfumàto</span>:</>,
    contact: "CONTACT US:",
    copied: "address copied",
    credit: "design & development — sfumàto © 2026",
  },
};

export default function Footer({ lang = "ru" }) {
  const t = T[lang];
  return (
    <footer className="overflow-hidden bg-white">
      <div className="px-6 md:px-12">
        <div className="h-[1.5px] w-full bg-ink" />
        <div className="mt-10 flex flex-col items-start gap-7 md:flex-row md:flex-wrap md:justify-between md:gap-10">
          <div className="text-[13px] font-medium leading-[1.5] tracking-[0.01em]">
            <Link href="/privacy" className="transition-colors hover:text-muted">{t.privacy}</Link>
          </div>
          <div className="flex flex-col gap-[18px] text-[15px] font-medium">
            <div>
              <p className="text-[13px] tracking-[0.01em] text-muted">{t.careers}</p>
              <p className="mt-1">
                <CopyEmailInline email="vacancy@sfuma-to.ru" copiedLabel={t.copied} className="transition-colors hover:text-muted" />
              </p>
            </div>
            <div>
              <p className="text-[13px] tracking-[0.01em] text-muted">{t.contact}</p>
              <p className="mt-1">
                <CopyEmailInline email="hello@sfuma-to.ru" copiedLabel={t.copied} className="transition-colors hover:text-muted" />
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
          <div className="relative -mx-5 mt-10 md:mx-auto md:mt-24 md:w-full md:max-w-[1340px]">
            {/* обрезаем низ букв контейнером с фиксированной пропорцией — работает одинаково
                в Safari и Chrome, в отличие от отрицательного margin (он давал «зазор» на iPhone) */}
            <div className="overflow-hidden [aspect-ratio:1956/404] md:[aspect-ratio:1956/392]">
              <img src="/images/wordmark-black.png" alt="sfumàto" className="block w-full" />
            </div>
            {/* подпись: на мобильном — в «небе» над буквами umà, на десктопе — над перекладиной t */}
            <p className="absolute left-[21.5%] top-[19%] whitespace-nowrap text-left text-[7px] font-medium tracking-[0.01em] md:left-auto md:-right-[10px] md:top-[calc(26%+4px)] md:text-right md:text-[10px]">
              {t.credit}
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
