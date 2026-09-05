import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import Reveal from "@/components/Reveal";
import SplitHeading from "@/components/SplitHeading";
import { ARTICLES } from "@/data/articles";

export const metadata = {
  title: "Экспертно — sfumàto",
  description:
    "Экспертные материалы sfumàto об эстетичном маркетинге: как бренды превращают продукт в особые символы, актуальные тренды и эффективные практики.",
};

export default function ExpertPage() {
  return (
    <main>
      <Header solid backHref="/" />

      <section className="pb-8 pt-[104px] md:pb-[64px] md:pt-[150px]">
        <div className="px-6 md:px-12">
          <SplitHeading className="max-w-[1100px] text-[clamp(1.9rem,3vw,2.7rem)] font-bold uppercase leading-[1.1] tracking-[-0.01em]">
            ЭКСПЕРТНО
          </SplitHeading>
          <SplitHeading as="p" delay={0.1} className="mt-4 max-w-[1250px] text-[clamp(1.25rem,1.9vw,1.7rem)] font-semibold uppercase leading-[1.2] tracking-[-0.01em] text-gray-2 md:mt-[44px]">
            Эстетичный маркетинг: как бренды превращают продукт в&nbsp;особые символы, актуальные тренды и&nbsp;эффективные практики
          </SplitHeading>
        </div>
      </section>

      <section className="pb-10 md:pb-[72px]">
        <div className="px-6 md:px-12">
          <div className="h-px w-full bg-line" />
          <div>
            {ARTICLES.map((a) => {
              const inner = (
                <div className="py-7 md:flex md:gap-10 md:py-9">
                  <div className="flex items-baseline gap-4 text-[13px] font-medium tracking-[0.02em] text-muted md:w-[200px] md:shrink-0 md:flex-col md:gap-1">
                    <span>{a.date}</span>
                    <span className="uppercase">{a.type}</span>
                  </div>
                  <div className="mt-3 md:mt-0">
                    <h2 className="text-[20px] font-bold uppercase leading-[1.2] transition-colors group-hover:text-muted md:text-[23px]">
                      {a.title}
                    </h2>
                    <p className="mt-3 max-w-[760px] text-[15px] leading-[1.54] text-gray">{a.excerpt}</p>
                    <p className="mt-4 text-[13px] font-medium tracking-[0.01em]">
                      {a.sourceUrl ? `[ ЧИТАТЬ В ${a.source.toUpperCase()} ]` : "[ ЧИТАТЬ ]"}
                    </p>
                  </div>
                </div>
              );
              return (
                <Reveal key={a.title}>
                  {a.sourceUrl ? (
                    <a href={a.sourceUrl} target="_blank" rel="noopener noreferrer" className="group block border-t border-line first:border-t-0">
                      {inner}
                    </a>
                  ) : (
                    <Link href={`/media/${a.slug}`} className="group block border-t border-line first:border-t-0">
                      {inner}
                    </Link>
                  )}
                </Reveal>
              );
            })}
          </div>
          <p className="mt-8 text-[12px] leading-[1.45] text-muted">
            * Instagram принадлежит компании Meta Platforms Inc., признанной экстремистской организацией, деятельность которой запрещена на территории Российской Федерации.
          </p>
        </div>
      </section>

      <Cta />
      <Footer />
    </main>
  );
}
