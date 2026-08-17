import Reveal from "@/components/Reveal";
import SplitHeading from "@/components/SplitHeading";

// Финальный блок «Обсудить ваш проект» — используется на главной и на страницах услуг
export default function Cta() {
  return (
    <section id="contact" className="pb-[120px] pt-[80px]">
      <div className="px-6 md:px-12">
        <div className="h-px w-full bg-line" />
        <div className="mt-16 justify-between gap-12 md:flex">
          <SplitHeading className="text-[clamp(3rem,6.4vw,5.75rem)] font-extrabold uppercase leading-[0.96] tracking-[-0.01em]">
            ОБСУДИТЬ
            <br />
            ВАШ ПРОЕКТ
          </SplitHeading>
          <Reveal delay={0.15} className="mt-10 md:mt-0 md:w-[380px] md:shrink-0">
            <p className="pt-[14px] text-[17px] leading-[1.5] text-gray">
              Работаем с российскими и международными брендами и проектами, для которых важны смысл, форма и результат.
            </p>
            <div className="mt-[34px] flex flex-col gap-[34px]">
              <a
                href="mailto:sfumato-agency@yandex.ru"
                className="flex h-[62px] w-full items-center justify-center bg-ink px-11 text-[14px] font-medium tracking-[0.02em] text-paper transition-opacity hover:opacity-60"
              >
                НАПИСАТЬ НА ПОЧТУ
              </a>
              <a
                href="https://t.me/Sfmt_curator"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-[62px] w-full items-center justify-center bg-ink px-11 text-[14px] font-medium tracking-[0.02em] text-paper transition-opacity hover:opacity-60"
              >
                НАПИСАТЬ В TELEGRAM
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
