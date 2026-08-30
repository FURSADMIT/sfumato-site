import Link from "next/link";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import SplitHeading from "@/components/SplitHeading";
import ShaderImage from "@/components/ShaderImage";
import AutoVideo from "@/components/AutoVideo";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import { SERVICES_EN } from "@/data/services.en";

export const metadata = {
  title: "sfumàto — boutique aesthetic marketing agency",
  alternates: { canonical: "/en", languages: { ru: "/", en: "/en" } },
  description:
    "sfumàto is a boutique aesthetic marketing agency: SMM strategy and management, influencer marketing, motion & AI design, paid social. We turn aesthetics into response — and brand values into meaningful experiences.",
};

const COMMUNITY_LINKS = [
  { name: "telegram", href: "https://t.me/Sfuma_to" },
  { name: "vk", href: "https://vk.com/sfuma_to" },
  { name: "dzen", href: "https://dzen.ru/sfumato" },
  { name: "instagram*", href: "https://www.instagram.com/sfumato_curator" },
];

const APPROACH = [
  {
    n: "01",
    title: "LEADERSHIP THROUGH AESTHETICS",
    text: "We treat aesthetics as a full-fledged instrument of communication: visual culture, to us, is a working way of solving business problems. We shape communication that captures the attention of segments who value context, a sense of form and trust. We build a lasting emotional connection where traditional tools lose their power.",
  },
  {
    n: "02",
    title: "BEAUTY AND RESULTS",
    text: "We don't divide marketing into effective and aesthetic: the strongest projects are born where strategic thinking meets an expressive visual language. We take on both image-driven briefs and commercial, KPI-focused ones — our compass: recognition, sales and a lasting bond with the audience.",
  },
];

function Container({ children, className = "" }) {
  return <div className={`px-6 md:px-12 ${className}`}>{children}</div>;
}

function SectionLabel({ children }) {
  return <p className="text-[13px] font-medium tracking-[0.14em] text-ink">{children}</p>;
}

export default function HomeEn() {
  return (
    <main>
      <Header lang="en" />
      <Hero />

      {/* ABOUT */}
      <section id="about" className="pb-8 pt-9 md:pb-[48px] md:pt-[70px]">
        <Container>
          <Reveal>
            <SectionLabel>ABOUT</SectionLabel>
          </Reveal>
          <SplitHeading className="mt-8 text-[clamp(1.7rem,3.3vw,2.94rem)] font-bold uppercase leading-[1.12] tracking-[-0.01em] md:mt-[56px]">
            <span className="text-[1.35em] font-semibold normal-case leading-none">sfumàto</span> — BOUTIQUE AESTHETIC
            <br />
            MARKETING AGENCY
          </SplitHeading>
        </Container>
        <div className="mt-10 md:mt-[64px]">
          <div className="grid gap-y-10 md:grid-cols-2 md:gap-y-0">
            <Reveal>
              <ShaderImage src="/images/about-1.jpg" alt="Magazine spread — a coat" className="aspect-[4/3] w-full" />
              <div className="px-6 md:pl-12 md:pr-10">
                <h3 className="mt-5 text-[20px] font-bold uppercase leading-[1.2]">MARKETING IN THE LANGUAGE OF ART</h3>
                <p className="mt-5 max-w-[560px] text-[16px] leading-[1.54] text-gray">
                  Every campaign we create is a search for the deeper truth of your brand or project through aesthetics. Elevated symbolism, dramatic tension of spirit and expressiveness are in our DNA.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <ShaderImage src="/images/about-2-green.jpg" alt="Green shoes on a pouf" className="aspect-[4/3] w-full" imgClassName="object-[50%_30%]" />
              <div className="px-6 md:pl-10 md:pr-12">
                <h3 className="mt-5 text-[20px] font-bold uppercase leading-[1.2]">DEPTH, MEANING AND ELEGANCE</h3>
                <p className="mt-5 max-w-[560px] text-[16px] leading-[1.54] text-gray">
                  All of this lives alongside current cultural codes and symbols. We are inspired by projects with particular depth and a striving for infinitely simple (or not so simple) elegance.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="pb-0 pt-[36px]">
        <Container>
          <div className="h-px w-full bg-line" />
          <Reveal>
            <div className="mt-10">
              <SectionLabel>SERVICES</SectionLabel>
            </div>
          </Reveal>
          <SplitHeading as="p" className="mt-10 max-w-[1250px] text-[clamp(1.7rem,2.1vw,1.88rem)] font-semibold uppercase leading-[1.18] tracking-[-0.01em]">
            Systematic growth across social media and digital
          </SplitHeading>
          <div className="mt-14">
            {SERVICES_EN.map((s) => (
              <Reveal key={s.slug}>
                <Link href={`/en/services/${s.slug}`} className="group block border-t border-line py-5 md:flex md:gap-10 md:py-[30px]">
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

      {/* APPROACH */}
      <section id="approach" className="pb-8 pt-10 md:pb-[48px] md:pt-[64px]">
        <Container>
          <Reveal>
            <SectionLabel>APPROACH</SectionLabel>
          </Reveal>
          <SplitHeading as="p" delay={0.1} className="mt-8 text-[clamp(1.7rem,2.1vw,1.88rem)] font-semibold uppercase leading-[1.18] tracking-[-0.01em] md:mt-[52px]">
            WE TURN AESTHETICS INTO RESPONSE — AND BRAND VALUES
            <br className="hidden md:block" /> INTO MEANINGFUL EXPERIENCES FOR PEOPLE
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
      <Cta lang="en" />

      {/* COMMUNITY */}
      <section id="community" className="pb-8 pt-10 md:pb-[96px] md:pt-[64px]">
        <Container>
          <div className="h-px w-full bg-line" />
          <Reveal>
            <div className="mt-11">
              <SectionLabel>COMMUNITY</SectionLabel>
            </div>
          </Reveal>
          <SplitHeading as="p" delay={0.1} className="mt-8 text-[clamp(1.7rem,2.1vw,1.88rem)] font-semibold uppercase leading-[1.18] tracking-[-0.01em] md:mt-[52px]">
            AN INTIMATE <span className="whitespace-nowrap">MEDIA SPACE</span>
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
                  For those drawn to aesthetics, intellectual allusions, art, fashion and contemporary visual culture. Our mission is not to be another ambassador of anxiety: we stand for mindfulness, meaningful quiet, a calm human pace and an intimate space built around shared interests.
                </p>
              </div>
            </Reveal>
          </div>
          <p className="mt-11 text-[12px] leading-[1.45] text-muted">
            * Instagram belongs to Meta Platforms Inc., designated an extremist organisation whose activities are banned in the Russian Federation.
          </p>
        </Container>
      </section>

      {/* FOOTER */}
      <Footer lang="en" />
    </main>
  );
}
