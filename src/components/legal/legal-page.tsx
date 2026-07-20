import type { LegalSection } from "@/content/legal-pages";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

function LegalCopySection({ section }: { section: LegalSection }) {
  return (
    <section className="space-y-2.5">
      <h2 className="text-[clamp(1.125rem,1.389vw,1.6667rem)] leading-normal font-medium">
        {section.title}
      </h2>

      {section.paragraphs?.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}

      {section.intro ? <p>{section.intro}</p> : null}

      {section.bullets ? (
        <ul className="list-disc space-y-2.5 pl-6">
          {section.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}

export function LegalPage({
  title,
  sections,
}: {
  title: string;
  sections: readonly LegalSection[];
}) {
  return (
    <>
      <SiteHeader contactHref="/#contact" />
      <main>
        <section className="bg-brand-deep pt-[67px] text-white lg:pt-[clamp(3.5625rem,4.653vw,5.5833rem)]">
          <div className="flex min-h-[22rem] items-center justify-center px-5 py-20 text-center sm:px-10 lg:min-h-[clamp(22rem,28.663vw,34.3958rem)] lg:px-[6.944vw] lg:py-0">
            <div className="w-full max-w-[58.1667rem]">
              <h1 className="hero-copy-enter font-display text-[clamp(3rem,10vw,4rem)] leading-[1.08] tracking-[0.01em] text-balance lg:text-[clamp(3.5rem,3.889vw,4.6667rem)] lg:leading-[1.4]">
                {title}
              </h1>
              <p className="hero-copy-enter hero-copy-enter-delay-1 mt-2.5 text-base leading-normal sm:text-lg lg:text-[clamp(1rem,1.389vw,1.6667rem)]">
                Last Updated: [Insert Date]
              </p>
            </div>
          </div>
        </section>

        <div className="bg-white px-5 py-20 text-ink sm:px-10 lg:px-[6.944vw] lg:py-[clamp(5rem,5.556vw,6.6667rem)]">
          <div
            data-reveal="up"
            className="flex w-full max-w-[78.3333rem] flex-col gap-5 text-base leading-normal lg:w-[min(65.278vw,78.3333rem)] lg:max-w-none lg:gap-[clamp(1.25rem,1.389vw,1.6667rem)] lg:text-[clamp(1rem,1.111vw,1.3333rem)]"
          >
            {sections.map((section) => (
              <LegalCopySection key={section.title} section={section} />
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
