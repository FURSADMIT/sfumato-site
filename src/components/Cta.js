import Reveal from "@/components/Reveal";
import SplitHeading from "@/components/SplitHeading";
import CopyEmail from "@/components/CopyEmail";

const T = {
  ru: {
    line1: "ОБСУДИТЬ",
    line2: "ВАШ ПРОЕКТ",
    text: "Работаем с российскими и международными брендами и проектами, для которых важны смысл, форма и результат.",
    email: "НАПИСАТЬ НА ПОЧТУ",
    emailCopied: "АДРЕС ПОЧТЫ СКОПИРОВАН",
    tg: "НАПИСАТЬ В TELEGRAM",
  },
  en: {
    line1: "DISCUSS",
    line2: "YOUR PROJECT",
    text: "We work with Russian and international brands and projects that value meaning, form and results.",
    email: "EMAIL US",
    emailCopied: "EMAIL ADDRESS COPIED",
    tg: "MESSAGE US ON TELEGRAM",
  },
};

// Финальный блок «Обсудить ваш проект» — используется на главной и внутренних страницах
export default function Cta({ lang = "ru" }) {
  const t = T[lang];
  return (
    <section id="contact" className="pb-12 pt-10 md:pb-[120px] md:pt-[80px]">
      <div className="px-6 md:px-12">
        <div className="h-px w-full bg-line" />
        <div className="mt-8 justify-between gap-12 md:mt-16 md:flex">
          <SplitHeading className="text-[clamp(3rem,6.4vw,5.75rem)] font-extrabold uppercase leading-[0.96] tracking-[-0.01em]">
            {t.line1}
            <br />
            {t.line2}
          </SplitHeading>
          <Reveal delay={0.15} className="mt-10 md:mt-0 md:w-[380px] md:shrink-0">
            <p className="pt-[14px] text-[17px] leading-[1.5] text-gray">{t.text}</p>
            <div className="mt-[34px] flex flex-col gap-[34px]">
              <CopyEmail
                email="hello@sfuma-to.ru"
                idleLabel={t.email}
                copiedLabel={t.emailCopied}
                className="flex h-[62px] w-full items-center justify-center bg-ink px-11 text-[14px] font-medium tracking-[0.02em] text-paper transition-opacity hover:opacity-60"
              />
              <a
                href="https://t.me/Sfmt_curator"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-[62px] w-full items-center justify-center bg-ink px-11 text-[14px] font-medium tracking-[0.02em] text-paper transition-opacity hover:opacity-60"
              >
                {t.tg}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
