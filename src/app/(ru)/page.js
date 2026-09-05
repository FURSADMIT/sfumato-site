import Link from "next/link";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import SplitHeading from "@/components/SplitHeading";
import ShaderImage from "@/components/ShaderImage";
import AutoVideo from "@/components/AutoVideo";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import { SERVICES } from "@/data/services";

const COMMUNITY_LINKS = [
  { name: "telegram", href: "https://t.me/Sfuma_to" },
  { name: "вконтакте", href: "https://vk.com/sfuma_to" },
  { name: "дзен", href: "https://dzen.ru/sfumato" },
  { name: "instagram*", href: "https://www.instagram.com/sfumato_curator" },
];

const APPROACH = [
  {
    n: "01",
    title: "ЛИДЕРСТВО ЧЕРЕЗ ЭСТЕТИКУ",
    text: "Работаем с эстетикой как с полноценным инструментом коммуникации: визуальная культура для нас — рабочий способ решения бизнес-задач. Формируем коммуникацию, привлекающую внимание сегментов, для которых важны контекст, чувство формы и доверие. Создаём устойчивую эмоциональную связь там, где традиционные инструменты теряют эффективность.",
  },
  {
    n: "02",
    title: "КРАСОТА И РЕЗУЛЬТАТ",
    text: "Мы не разделяем маркетинг на эффективный и эстетичный: самые сильные проекты рождаются там, где стратегическое мышление встречается с выразительным визуальным языком. Работаем и с имиджевыми задачами, и с коммерческой нацеленностью на бизнес-KPI — наш ориентир: узнаваемость, продажи и долгосрочная связь с аудиторией.",
  },
];

function Container({ children, className = "" }) {
  return <div className={`px-6 md:px-12 ${className}`}>{children}</div>;
}

function SectionLabel({ children }) {
  return <p className="text-[13px] font-medium tracking-[0.14em] text-ink">{children}</p>;
}

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />

      {/* О ПРОЕКТЕ */}
      <section id="about" className="pb-8 pt-9 md:pb-[48px] md:pt-[70px]">
        <Container>
          <Reveal>
            <SectionLabel>О ПРОЕКТЕ</SectionLabel>
          </Reveal>
          <SplitHeading className="mt-8 text-[clamp(1.7rem,3.3vw,2.94rem)] font-bold uppercase leading-[1.12] tracking-[-0.01em] md:mt-[56px]">
            <span className="text-[1.35em] font-semibold normal-case leading-none">sfumàto</span> — БУТИКОВОЕ АГЕНТСТВО ЭСТЕТИЧНОГО
            <br />
            МАРКЕТИНГА
          </SplitHeading>
        </Container>
        <div className="mt-10 md:mt-[64px]">
          <div className="grid gap-y-10 md:grid-cols-2 md:gap-y-0">
            <Reveal>
              <ShaderImage src="/images/about-1.jpg" alt="Эстетичная предметная съёмка для бренда одежды — журнальный разворот с пальто" className="aspect-[4/3] w-full" />
              <div className="px-6 md:pl-12 md:pr-10">
                <h3 className="mt-5 text-[20px] font-bold uppercase leading-[1.2]">МАРКЕТИНГ НА ЯЗЫКЕ ИСКУССТВА</h3>
                <p className="mt-5 max-w-[560px] text-[16px] leading-[1.54] text-gray">
                  Мы создаём маркетинг, где каждая кампания — это поиск глубинной истины вашего бренда или проекта через эстетику. В нашем ДНК возвышенная символика, драматическое напряжение духа и выразительность существуют параллельно с текущими современными кодами и символами.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <ShaderImage src="/images/about-2-green.jpg" alt="Эстетичный контент для бренда — зелёные туфли на пуфе" className="aspect-[4/3] w-full" imgClassName="object-[50%_30%]" />
              <div className="px-6 md:pl-10 md:pr-12">
                <h3 className="mt-5 text-[20px] font-bold uppercase leading-[1.2]">ВЫБОР SFUMÀTO</h3>
                <p className="mt-5 max-w-[560px] text-[16px] leading-[1.54] text-gray">
                  Мы вдохновлены быть частью проектов с особой глубиной, смыслами и стремлением к бесконечно простому (или не очень) изяществу.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* УСЛУГИ */}
      <section id="services" className="pb-0 pt-[36px]">
        <Container>
          <div className="h-px w-full bg-line" />
          <Reveal>
            <div className="mt-10">
              <SectionLabel>УСЛУГИ</SectionLabel>
            </div>
          </Reveal>
          <SplitHeading as="p" className="mt-10 max-w-[1250px] text-[clamp(1.7rem,2.1vw,1.88rem)] font-semibold uppercase leading-[1.18] tracking-[-0.01em]">
            Системное развитие в социальных сетях и digital
          </SplitHeading>
          <div className="mt-14">
            {SERVICES.map((s) => (
              <Reveal key={s.slug}>
                <Link href={`/services/${s.slug}`} className="group block border-t border-line py-5 md:flex md:gap-10 md:py-[30px]">
                  <div className="flex items-baseline justify-between gap-4 md:block md:w-[340px] md:shrink-0">
                    <h3 className="text-[20px] font-semibold uppercase leading-[1.18] transition-colors group-hover:text-muted md:text-[23px]">
                      {s.name}
                    </h3>
                    <span className="text-[18px] text-muted md:hidden">{"↗︎"}</span>
                  </div>
                  <p className="mt-4 hidden text-[16px] leading-[1.5] text-gray md:mt-0 md:block">{s.short}</p>
                </Link>
              </Reveal>
            ))}
            <div className="h-px w-full bg-line" />
          </div>
        </Container>
      </section>

      {/* ПОДХОД */}
      <section id="approach" className="pb-8 pt-10 md:pb-[48px] md:pt-[64px]">
        <Container>
          <Reveal>
            <SectionLabel>ПОДХОД</SectionLabel>
          </Reveal>
          <SplitHeading as="p" delay={0.1} className="mt-8 text-[clamp(1.7rem,2.1vw,1.88rem)] font-semibold uppercase leading-[1.18] tracking-[-0.01em] md:mt-[52px]">
            ПРЕВРАЩАЕМ ЭСТЕТИКУ <span className="whitespace-nowrap">В&nbsp;ОТКЛИК,</span> А ЦЕННОСТИ{" "}
            <span className="whitespace-nowrap">БРЕНДА&nbsp;—<span className="md:hidden">&nbsp;В&nbsp;ЗНАЧИМЫЙ</span></span>
            <br className="hidden md:block" />
            <span className="hidden md:inline">В&nbsp;ЗНАЧИМЫЙ </span>ОПЫТ <span className="whitespace-nowrap">ДЛЯ&nbsp;ЛЮДЕЙ</span>
          </SplitHeading>
        </Container>
        <Reveal className="mt-8 md:mt-[52px]">
          <AutoVideo src="/videos/about.mp4" className="w-full object-cover" />
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

      {/* CTA */}
      <Cta />

      {/* СООБЩЕСТВО */}
      <section id="community" className="pb-8 pt-10 md:pb-[96px] md:pt-[64px]">
        <Container>
          <div className="h-px w-full bg-line" />
          <Reveal>
            <div className="mt-11">
              <SectionLabel>СООБЩЕСТВО</SectionLabel>
            </div>
          </Reveal>
          <SplitHeading as="p" delay={0.1} className="mt-8 text-[clamp(1.7rem,2.1vw,1.88rem)] font-semibold uppercase leading-[1.18] tracking-[-0.01em] md:mt-[52px]">
            КАМЕРНОЕ <span className="whitespace-nowrap">МЕДИА-ПРОСТРАНСТВО</span>
          </SplitHeading>
          <div className="mt-8 gap-20 md:mt-11 md:flex">
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
                    <span className="text-[20px] font-medium transition-colors group-hover:text-muted md:text-[27px]">{l.name}</span>
                    <span className="text-[20px] text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">{"↗︎"}</span>
                  </a>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.12} className="mt-10 md:mt-0">
              <div className="text-[17px] leading-[1.5] text-gray">
                <p>
                  Для тех, кому близка эстетика, интеллектуальные аллюзии, искусство, мода и современная визуальная культура. Наша задача — не быть очередным амбассадором тревожности: мы за осознанность, осмысленную тишину, спокойный человеческий темп и воплощение камерного пространства по интересам.
                </p>
              </div>
            </Reveal>
          </div>
          <p className="mt-11 text-[12px] leading-[1.45] text-muted">
            * Instagram принадлежит компании Meta Platforms Inc., признанной экстремистской организацией, деятельность которой запрещена на территории Российской Федерации.
          </p>
        </Container>
      </section>

      {/* ФУТЕР */}
      <Footer />
    </main>
  );
}
