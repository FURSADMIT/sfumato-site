import Link from "next/link";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import SplitHeading from "@/components/SplitHeading";
import ShaderImage from "@/components/ShaderImage";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import { SERVICES } from "@/data/services";

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
      <section id="about" className="pb-[48px] pt-[70px]">
        <Container>
          <Reveal>
            <SectionLabel>[ О ПРОЕКТЕ ]</SectionLabel>
          </Reveal>
          <SplitHeading className="mt-[56px] text-[clamp(2rem,3.3vw,2.94rem)] font-bold uppercase leading-[1.1] tracking-[-0.01em]">
            <span className="text-[1.35em] font-semibold normal-case leading-none">sfumàto</span> — БУТИКОВОЕ АГЕНТСТВО
            <br />
            ЭСТЕТИЧНОГО МАРКЕТИНГА
          </SplitHeading>
        </Container>
        <div className="mt-[64px] grid md:grid-cols-2">
          <Reveal>
            <ShaderImage src="/images/about-1.png" alt="Журнальный разворот — пальто" className="aspect-[4/5] w-full" />
            <div className="px-6 md:pl-12 md:pr-10">
              <h3 className="mt-5 text-[20px] font-bold uppercase leading-[1.2]">МАРКЕТИНГ НА ЯЗЫКЕ ИСКУССТВА</h3>
              <p className="mt-5 max-w-[560px] text-[16px] leading-[1.54] text-gray">
                Каждая кампания — это поиск глубинной истины вашего бренда через эстетику. В нашем ДНК возвышенная символика, драматическое напряжение духа и выразительность.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <ShaderImage src="/images/about-2.jpg" alt="Флаконы с янтарной жидкостью" className="aspect-[4/5] w-full" />
            <div className="px-6 md:pl-10 md:pr-12">
              <h3 className="mt-5 text-[20px] font-bold uppercase leading-[1.2]">ГЛУБИНА, СМЫСЛ И ИЗЯЩЕСТВО</h3>
              <p className="mt-5 max-w-[560px] text-[16px] leading-[1.54] text-gray">
                Всё это существует параллельно с текущими современными кодами и символами. Мы вдохновлены проектами с особой глубиной и стремлением к бесконечно простому (или не очень) изяществу.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* УСЛУГИ */}
      <section id="services" className="pb-0 pt-[36px]">
        <Container>
          <div className="h-px w-full bg-line" />
          <Reveal>
            <div className="mt-10">
              <SectionLabel>[ УСЛУГИ ]</SectionLabel>
            </div>
          </Reveal>
          <SplitHeading as="p" className="mt-10 max-w-[1250px] text-[clamp(1.35rem,2.1vw,1.88rem)] font-semibold uppercase leading-[1.18] tracking-[-0.01em]">
            Системное развитие бренда в социальных сетях и digital через контент, визуальную среду и эмоциональную связь с аудиторией
          </SplitHeading>
          <div className="mt-14">
            {SERVICES.map((s) => (
              <Reveal key={s.slug}>
                <Link href={`/services/${s.slug}`} className="group block border-t border-line py-[30px] md:flex md:gap-10">
                  <h3 className="text-[23px] font-semibold uppercase leading-[1.18] transition-colors group-hover:text-muted md:w-[340px] md:shrink-0">
                    {s.name}
                  </h3>
                  <p className="mt-4 text-[16px] leading-[1.5] text-gray md:mt-0">{s.short}</p>
                </Link>
              </Reveal>
            ))}
            <div className="h-px w-full bg-line" />
          </div>
        </Container>
      </section>

      {/* ПОДХОД */}
      <section id="approach" className="pb-[48px] pt-[64px]">
        <Container>
          <Reveal>
            <SectionLabel>[ ПОДХОД ]</SectionLabel>
          </Reveal>
          <SplitHeading as="p" delay={0.1} className="mt-[52px] text-[clamp(1.35rem,2.1vw,1.88rem)] font-semibold uppercase leading-[1.18] tracking-[-0.01em]">
            ПРЕВРАЩАТЬ ЭСТЕТИКУ В ОТКЛИК, А ЦЕННОСТИ БРЕНДА —
            <br />В ЗНАЧИМЫЙ ОПЫТ ДЛЯ ЛЮДЕЙ
          </SplitHeading>
        </Container>
        <Reveal className="mt-[52px]">
          <video
            src="/videos/about.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full object-cover"
          />
        </Reveal>
        <Container>
          <div className="mt-6">
            {APPROACH.map((a) => (
              <Reveal key={a.n}>
                <div className="border-t border-line py-[30px] first:border-t-0 md:flex md:gap-10">
                  <h3 className="text-[20px] font-bold uppercase leading-[1.2] md:w-[600px] md:shrink-0">{a.title}</h3>
                  <p className="mt-4 max-w-[700px] text-[15px] leading-[1.54] text-gray md:mt-0">{a.text}</p>
                </div>
              </Reveal>
            ))}
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

      {/* CTA */}
      <Cta />

      {/* ФУТЕР */}
      <Footer />
    </main>
  );
}
