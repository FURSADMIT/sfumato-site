import Link from "next/link";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import SplitHeading from "@/components/SplitHeading";
import ShaderImage from "@/components/ShaderImage";

const SERVICES = [
  {
    name: "smm-стратегия и консультации",
    text: "Оптимальны для брендов и проектов с самостоятельной дальнейшей реализацией: на этапе ребрендинга или запуска проекта, после глубинного исследования вашего запроса мы создаём исчерпывающее руководство, которое обеспечит ясность и фокус на всех этапах развития SMM-каналов.",
  },
  {
    name: "smm-сопровождение",
    text: "Ведение социальных сетей: решение для тех, кто нацелен на результат и предпочитает сфокусироваться на основном бизнесе. Мы берём на себя всю операционную работу по развитию и поддержке SMM-каналов, по запросу включая комплексное рекламное сопровождение.",
  },
  {
    name: "инфлюенс-маркетинг",
    text: "Создаём смысловые коллаборации с тщательно отобранными инфлюенсерами (с аудиторией до 500 000), что позволяет подключаться к желаемым сообществам и текущим культурным кодам в социальных сетях.",
  },
  {
    name: "motion- и AI-дизайн",
    text: "Вовлекаем аудиторию виральными креативами в видео-форматах, а также создаём уникальные эстетичные визуализации в статике с использованием AI-технологий, соответствующие актуальным трендам и стилистике бренда/проекта.",
  },
  {
    name: "таргет — соцсети, Яндекс Директ, CPA",
    text: "Любые виды рекламного сопровождения в социальных сетях: таргетированная реклама в соцсетях, Яндекс Директ и CPA.",
  },
];

const COMMUNITY_LINKS = [
  { name: "telegram", href: "https://t.me/Sfuma_to" },
  { name: "вконтакте", href: "https://vk.com/sfuma_to" },
  { name: "дзен", href: "https://dzen.ru/sfumato" },
  { name: "instagram*", href: "https://instagram.com/sfuma_to" },
];

const APPROACH = [
  {
    n: "01",
    title: "ЭСТЕТИКА КАК ИНСТРУМЕНТ ЛИДЕРСТВА",
    img: "/images/mission-1.png",
    text: "Работаем с эстетикой как с полноценным инструментом коммуникации. Визуальная культура для нас — рабочий способ решения бизнес-задач. Каждый образ, деталь и решение становятся частью общей стратегии бренда или проекта, помогая занимать уникальное место в сознании аудитории и усиливать своё влияние на рынке.",
  },
  {
    n: "02",
    title: "СОЗДАЁМ ОТКЛИК ТАМ, ГДЕ НЕ РАБОТАЮТ ШАБЛОНЫ",
    img: "/images/mission-2.png",
    text: "Работаем с аудиториями, для которых важны контекст, вкус и доверие. В основе нашей работы лежит глубокое понимание ЦА, её мотивов и культурных ориентиров. Формируем коммуникацию, которая привлекает внимание и одновременно генерирует устойчивую эмоциональную связь и подлинный интерес. Находим возможности для развития в нетипичных каналах — там, где традиционные инструменты теряют эффективность.",
  },
  {
    n: "03",
    title: "СОЕДИНЯЕМ КРАСОТУ И РЕЗУЛЬТАТ",
    img: "/images/mission-3.png",
    text: "Мы не разделяем маркетинг на эффективный и эстетичный. Самые сильные проекты рождаются там, где стратегическое мышление встречается с выразительным визуальным языком. Работаем и с имиджевыми задачами, и с коммерческой нацеленностью на бизнес-KPI. Высокий положительный ROI даже на труднодостижимые сегменты — наш главный ориентир: узнаваемость, продажи и долгосрочная связь с аудиторией.",
  },
];

function Container({ children, className = "" }) {
  return <div className={`px-6 md:px-12 ${className}`}>{children}</div>;
}

function SectionLabel({ children }) {
  return <p className="text-[13px] font-medium tracking-[0.01em] text-ink">{children}</p>;
}

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />

      {/* О ПРОЕКТЕ */}
      <section id="about" className="pb-[100px] pt-[70px]">
        <Container>
          <Reveal>
            <SectionLabel>[ О ПРОЕКТЕ ]</SectionLabel>
          </Reveal>
          <SplitHeading className="mt-[56px] text-[clamp(2rem,3.3vw,2.94rem)] font-bold uppercase leading-[1.1] tracking-[-0.01em]">
            <span className="text-[1.32em] font-semibold">sfumàto</span> — АГЕНТСТВО
            <br />
            ЭСТЕТИЧНОГО МАРКЕТИНГА
          </SplitHeading>
          <SplitHeading as="p" delay={0.1} className="mt-[56px] max-w-[1100px] text-[clamp(1.35rem,2.1vw,1.88rem)] font-semibold uppercase leading-[1.18] tracking-[-0.01em] text-gray-2">
            ПРЕВРАЩАТЬ ЭСТЕТИКУ В ОТКЛИК, А ЦЕННОСТИ БРЕНДА — В ЗНАЧИМЫЙ ОПЫТ ДЛЯ ЛЮДЕЙ
          </SplitHeading>
          <div className="mt-[64px] grid gap-12 md:grid-cols-2 md:gap-8">
            <Reveal className="max-w-[100vh]">
              <ShaderImage src="/images/about-art.png" alt="Минималистичные скульптурные формы" className="aspect-[4/3] w-full" effect="cycle" images={["/images/about-art.png","/images/mission-1.png","/images/about-elegance.png","/images/mission-2.png","/images/mission-3.png"]} />
              <h3 className="mt-5 text-[20px] font-bold uppercase leading-[1.2]">МАРКЕТИНГ НА ЯЗЫКЕ ИСКУССТВА</h3>
              <p className="mt-5 text-[16px] leading-[1.54] text-gray">
                Каждая кампания — это поиск глубинной истины вашего бренда через эстетику. В нашем ДНК возвышенная символика, драматическое напряжение духа и выразительность.
              </p>
            </Reveal>
            <Reveal delay={0.12} className="max-w-[100vh]">
              <ShaderImage src="/images/about-elegance.png" alt="Портрет с драпировками" className="aspect-[4/3] w-full" effect="cycle" images={["/images/about-elegance.png","/images/mission-3.png","/images/about-art.png","/images/mission-2.png","/images/mission-1.png"]} />
              <h3 className="mt-5 text-[20px] font-bold uppercase leading-[1.2]">ГЛУБИНА, СМЫСЛ И ИЗЯЩЕСТВО</h3>
              <p className="mt-5 text-[16px] leading-[1.54] text-gray">
                Всё это существует параллельно с текущими современными кодами и символами. Мы вдохновлены проектами с особой глубиной и стремлением к бесконечно простому (или не очень) изяществу.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* УСЛУГИ */}
      <section id="services" className="pb-[96px] pt-[64px]">
        <Container>
          <div className="h-px w-full bg-line" />
          <Reveal>
            <div className="mt-10">
              <SectionLabel>[ УСЛУГИ ]</SectionLabel>
            </div>
          </Reveal>
          <SplitHeading as="p" className="mt-10 max-w-[1000px] text-[clamp(1.25rem,1.8vw,1.63rem)] font-medium leading-[1.32]">
            Системное развитие бренда в социальных сетях и digital через контент, визуальную среду и эмоциональную связь с аудиторией.
          </SplitHeading>
          <div className="mt-14">
            {SERVICES.map((s, i) => (
              <Reveal key={s.name}>
                <div className="border-t border-line py-[30px] md:flex md:gap-10">
                  <h3 className="text-[23px] font-semibold uppercase leading-[1.18] md:w-[340px] md:shrink-0">{s.name}</h3>
                  <p className="mt-4 text-[16px] leading-[1.5] text-gray md:mt-0">{s.text}</p>
                </div>
              </Reveal>
            ))}
            <Reveal>
              <a href="#contact" className="group flex items-center justify-between border-t border-line py-[25px]">
                <span className="text-[23px] font-semibold">ОБСУДИТЬ ПРОЕКТ</span>
                <span className="text-[26px] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
              </a>
            </Reveal>
            <div className="h-px w-full bg-line" />
          </div>
        </Container>
      </section>

      {/* СООБЩЕСТВО */}
      <section id="community" className="pb-[96px] pt-[64px]">
        <Container>
          <div className="h-px w-full bg-line" />
          <Reveal>
            <div className="mt-11">
              <SectionLabel>[ СООБЩЕСТВО ]</SectionLabel>
            </div>
          </Reveal>
          <div className="mt-11 gap-20 md:flex">
            <Reveal className="md:w-[420px] md:shrink-0">
              <div>
                {COMMUNITY_LINKS.map((l) => (
                  <a
                    key={l.name}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between border-t border-line py-[18px] last:border-b"
                  >
                    <span className="text-[27px] font-medium transition-colors group-hover:text-muted">{l.name}</span>
                    <span className="text-[20px] text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                  </a>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.12} className="mt-10 md:mt-0">
              <div className="flex flex-col gap-[26px] text-[17px] leading-[1.5] text-gray">
                <p>
                  Развиваем собственное медиа-пространство для аудитории, которой близки эстетика, интеллектуальные аллюзии, искусство, мода и современная визуальная культура. Для тех, кто хочет наполняться чем-то большим, чем повседневность, привнося в свою жизнь вдохновляющие контексты.
                </p>
                <p>
                  Задача комьюнити — не быть очередным амбассадором тревожности. Хаотичность, резкость и перегрузка — не наши ориентиры. На наш взгляд, осмысленная тишина сегодня дороже. Мы за осознанность, эмоциональную поддержку, спокойный человеческий темп и воплощение камерного пространства по интересам.
                </p>
              </div>
            </Reveal>
          </div>
          <p className="mt-11 text-[12px] leading-[1.45] text-muted">
            * Instagram принадлежит компании Meta Platforms Inc., признанной экстремистской организацией, деятельность которой запрещена на территории Российской Федерации.
          </p>
        </Container>
      </section>

      {/* ПОДХОД */}
      <section id="approach" className="pb-[100px] pt-[64px]">
        <Container>
          <div className="h-px w-full bg-line" />
          <Reveal>
            <div className="mt-[52px]">
              <SectionLabel>[ ПОДХОД ]</SectionLabel>
            </div>
          </Reveal>
          <div className="mt-[52px] grid gap-12 md:grid-cols-3">
            {APPROACH.map((a, i) => (
              <Reveal key={a.n} delay={i * 0.12}>
                <p className="text-[13px] font-medium tracking-[0.02em] text-muted">{a.n}</p>
                <h3 className="mt-[18px] text-[22px] font-bold uppercase leading-[1.22] md:min-h-[54px]">{a.title}</h3>
                <div className="mt-[18px] h-px w-full bg-line" />
                <ShaderImage src={a.img} alt="" className="mt-[18px] aspect-[4/5] w-full" />
                <p className="mt-[18px] text-[15px] leading-[1.54] text-gray">{a.text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section id="contact" className="pb-[120px] pt-[80px]">
        <Container>
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
                  className="flex h-[62px] w-full items-center justify-center bg-ink px-11 text-[14px] font-medium tracking-[0.02em] text-paper transition-colors hover:bg-black"
                >
                  НАПИСАТЬ НА ПОЧТУ
                </a>
                <a
                  href="https://t.me/Sfuma_to"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-[62px] w-full items-center justify-center bg-ink px-11 text-[14px] font-medium tracking-[0.02em] text-paper transition-colors hover:bg-black"
                >
                  НАПИСАТЬ В TELEGRAM
                </a>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ФУТЕР */}
      <footer className="overflow-hidden bg-white pb-10">
        <Container>
          <div className="h-[1.5px] w-full bg-ink" />
          <div className="mt-10 flex flex-wrap items-start justify-between gap-10">
            <div className="text-[13px] font-medium leading-[1.5] tracking-[0.01em]">
              БУТИКОВОЕ АГЕНТСТВО ЭСТЕТИЧНЫХ
              <br />
              МАРКЕТИНГОВЫХ КАМПАНИЙ
              <p className="mt-6">
                <Link href="/privacy" className="transition-colors hover:text-muted">ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</Link>
              </p>
            </div>
            <nav className="flex flex-col gap-3 text-[15px] font-medium tracking-[0.01em]">
              <a href="#about" className="transition-colors hover:text-muted">[ О ПРОЕКТЕ ]</a>
              <a href="#services" className="transition-colors hover:text-muted">[ УСЛУГИ ]</a>
              <a href="#contact" className="transition-colors hover:text-muted">[ ОБСУДИТЬ ПРОЕКТ ]</a>
            </nav>
            <div className="flex flex-col gap-[18px] text-[15px] font-medium">
              <div>
                <p className="text-[13px] tracking-[0.01em] text-muted">РАБОТА В sfumàto:</p>
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
          <p className="mt-24 text-right text-[13px] font-medium tracking-[0.01em]">COPYRIGHT «sfumàto» © 2026</p>
          <Reveal y={60}>
            <img src="/images/wordmark-black.png" alt="sfumàto" className="mx-auto mt-4 w-full max-w-[1340px]" />
          </Reveal>
        </Container>
      </footer>
    </main>
  );
}
