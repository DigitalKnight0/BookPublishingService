import Image from "next/image";

import { AccentText, Heading } from "@/components/ui";
import { figmaAssets } from "@/design-system";
import { cn } from "@/lib/utils";

const benefits = [
  {
    title: "Author-First Process",
    description:
      "Every project begins with a conversation, not a contract. We understand your goals and voice before any writing.",
    icon: figmaAssets.aboutPage.benefitIcons.author,
  },
  {
    title: "In-House Experts",
    description:
      "Our team of ghostwriters, editors, designers, and marketers ensures your story is never lost.",
    icon: figmaAssets.aboutPage.benefitIcons.experts,
  },
  {
    title: "Full Rights, Full Control",
    description:
      "You retain complete ownership and rights to your work at every stage. We're here to support your vision, never to own it.",
    icon: figmaAssets.aboutPage.benefitIcons.rights,
  },
  {
    title: "Transparent Pricing",
    description:
      "No hidden charges, no surprise invoices. You know exactly what you're paying for before you sign off on anything.",
    icon: figmaAssets.aboutPage.benefitIcons.pricing,
  },
  {
    title: "End-to-End Support",
    description:
      "From your first draft to your last royalty check, we stay involved — publishing, distribution, and marketing included.",
    icon: figmaAssets.aboutPage.benefitIcons.support,
  },
  {
    title: "Proven Track Record",
    description:
      "250+ five-star reviews, 400+ internationally acclaimed books, and 700+ satisfied authors speak for themselves.",
    icon: figmaAssets.aboutPage.benefitIcons.record,
  },
] as const;

export function WhyAuthorsChoose() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-5 pt-16 pb-14 text-ink sm:px-10 lg:px-[6.944vw] lg:pt-[clamp(2.5rem,2.778vw,3.3333rem)] lg:pb-[clamp(3.5rem,3.889vw,4.6667rem)]">
      <div className="pointer-events-none absolute top-[-2.191vw] right-[-17.754vw] -z-10 hidden size-[44.244vw] lg:block">
        <Image
          src={figmaAssets.aboutPage.flyingBooks}
          alt=""
          fill
          unoptimized
          className="object-contain"
          sizes="45vw"
        />
      </div>

      <div data-reveal="up" className="mx-auto max-w-[42.5rem] text-center lg:w-[clamp(42.5rem,47.02vw,56.424rem)] lg:max-w-none">
        <Heading
          as="h2"
          size="display"
          align="center"
          className="lg:text-[clamp(3.5rem,3.889vw,4.6667rem)]"
        >
          Why Authors Choose <AccentText>Book Publication Solutions</AccentText>
        </Heading>
      </div>

      <div className="mx-auto mt-20 grid max-w-[77.5rem] gap-x-8 gap-y-[4.5rem] lg:mt-[clamp(5rem,5.556vw,6.6667rem)] lg:max-w-none lg:grid-cols-3 lg:gap-x-[clamp(2rem,2.222vw,2.6667rem)] lg:gap-y-[clamp(3.5rem,3.889vw,4.6667rem)] lg:pb-[clamp(1.5rem,1.667vw,2rem)]">
        {benefits.map((benefit, index) => (
          <article
            key={benefit.title}
            data-reveal="up"
            data-reveal-delay={(index % 3).toString()}
            data-motion-card
            className={cn(
              "bg-gradient-pale relative mx-auto flex w-full max-w-[23.125rem] flex-col items-center justify-center gap-2.5 rounded-[1.25rem] border border-brand px-8 pt-12 pb-8 text-center shadow-[0_16px_35px_rgba(2,48,71,.06)] transition-[transform,box-shadow] duration-300 lg:min-h-[clamp(11.3906rem,12.656vw,15.1875rem)] lg:max-w-[clamp(23.0417rem,25.602vw,30.7222rem)] lg:gap-[clamp(.625rem,.694vw,.8333rem)] lg:rounded-[clamp(1.25rem,1.389vw,1.6667rem)] lg:border-[clamp(1px,.0694vw,1.333px)] lg:px-[clamp(2rem,2.222vw,2.6667rem)] lg:pt-[clamp(3rem,3.333vw,4rem)] lg:pb-[clamp(2rem,2.222vw,2.6667rem)]",
              index % 3 === 1 &&
                "lg:translate-y-[clamp(3.5rem,3.889vw,4.6667rem)]",
            )}
          >
            <div className="bg-gradient-action absolute top-[-1.9375rem] left-1/2 flex size-14 -translate-x-1/2 items-center justify-center rounded-[0.8rem] border border-white/30 lg:top-[calc(-1*clamp(1.9375rem,2.153vw,2.5833rem))] lg:size-[clamp(3.5rem,3.889vw,4.6667rem)] lg:rounded-[clamp(.795rem,.884vw,1.0606rem)]">
              <Image
                src={benefit.icon}
                alt=""
                width={28}
                height={28}
                unoptimized
                className="size-7 lg:size-[clamp(1.75rem,1.944vw,2.3333rem)]"
              />
            </div>
            <h3 className="font-display text-2xl leading-[1.4] tracking-[0.01em] lg:text-[clamp(1.5rem,1.667vw,2rem)]">
              {benefit.title}
            </h3>
            <p className="text-base leading-normal lg:text-[clamp(1rem,1.111vw,1.3333rem)]">
              {benefit.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
