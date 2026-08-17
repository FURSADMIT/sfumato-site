import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import Reveal from "@/components/Reveal";
import SplitHeading from "@/components/SplitHeading";
import { SERVICES, getService } from "@/data/services";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  return { title: service ? `${service.name} — sfumàto` : "sfumàto" };
}

function Container({ children, className = "" }) {
  return <div className={`px-6 md:px-12 ${className}`}>{children}</div>;
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <main>
      <Header solid allServices />

      <section className="pb-[64px] pt-[150px]">
        <Container>
          <SplitHeading className="max-w-[1100px] text-[clamp(1.9rem,3vw,2.7rem)] font-bold uppercase leading-[1.1] tracking-[-0.01em]">
            {service.name}
          </SplitHeading>
          <SplitHeading as="p" delay={0.1} className="mt-[44px] max-w-[1250px] text-[clamp(1.25rem,1.9vw,1.7rem)] font-semibold uppercase leading-[1.2] tracking-[-0.01em] text-gray-2">
            {service.lead}
          </SplitHeading>
        </Container>
      </section>

      {service.blocks.map((block) => (
        <section key={block.heading} className="pb-[72px]">
          <Container>
            <div className="h-px w-full bg-line" />
            <div className="mt-12 gap-16 md:flex">
              <Reveal className="md:w-[340px] md:shrink-0">
                <h2 className="text-[23px] font-semibold uppercase leading-[1.18]">{block.heading}</h2>
              </Reveal>
              {!block.steps && (
                <Reveal delay={0.08} className="mt-6 grow md:mt-0">
                  {block.text?.map((t) => (
                    <p key={t} className="max-w-[760px] text-[16px] leading-[1.54] text-gray [&+p]:mt-4">{t}</p>
                  ))}
                  {block.tags && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {block.tags.map((tag) => (
                        <span key={tag} className="border border-line px-4 py-2 text-[13px] font-medium tracking-[0.01em]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </Reveal>
              )}
              {block.steps && (
                <div className="mt-10 grow md:mt-0">
                  {block.steps.map((step, i) => (
                    <Reveal key={step.title} delay={i * 0.08}>
                      <div className="border-t border-line py-8 first:border-t-0 first:pt-0 md:flex md:gap-10">
                        <p className="text-[15px] font-medium text-muted md:w-[60px] md:shrink-0">/{i + 1}</p>
                        <div className="md:w-[300px] md:shrink-0">
                          <h3 className="mt-2 text-[17px] font-semibold leading-[1.3] md:mt-0">{step.title}</h3>
                        </div>
                        {(step.text || step.bullets) && (
                          <div className="mt-3 md:mt-0">
                            {step.text && <p className="text-[15px] leading-[1.54] text-gray">{step.text}</p>}
                            {step.bullets && (
                              <ul className="mt-4 flex list-disc flex-col gap-2 pl-5 text-[15px] leading-[1.5] text-gray">
                                {step.bullets.map((b) => (
                                  <li key={b}>{b}</li>
                                ))}
                              </ul>
                            )}
                          </div>
                        )}
                      </div>
                    </Reveal>
                  ))}
                </div>
              )}
            </div>
          </Container>
        </section>
      ))}

      {service.note && (
        <Container>
          <p className="pb-8 text-[12px] leading-[1.45] text-muted">{service.note}</p>
        </Container>
      )}

      <Cta />
      <Footer />
    </main>
  );
}
