import Image from "next/image";

import { AccentText, Heading } from "@/components/ui";
import type { ServicePageConfig } from "@/content/service-pages";
import { figmaAssets } from "@/design-system";

const benefitIcons = [
  figmaAssets.ghostwritingPage.benefitIcons.dedicatedWriter,
  figmaAssets.ghostwritingPage.benefitIcons.checkIns,
  figmaAssets.ghostwritingPage.benefitIcons.confidentiality,
  figmaAssets.ghostwritingPage.benefitIcons.ownership,
  figmaAssets.ghostwritingPage.benefitIcons.revisions,
] as const;

function BenefitCard({
  title,
  icon,
  delay,
}: {
  title: string;
  icon: string;
  delay: number;
}) {
  return (
    <article
      data-reveal="scale"
      data-reveal-delay={delay}
      className="group/benefit relative min-h-[10.5rem] w-full lg:h-[clamp(8.5rem,9.444vw,11.333rem)] lg:min-h-0"
    >
      <div className="relative flex min-h-[10.5rem] w-full items-center justify-center rounded-[1.25rem] border border-brand bg-[linear-gradient(180deg,#fff_0%,#cfeaf1_100%)] px-7 pt-12 pb-8 text-center shadow-[0_16px_35px_rgba(2,48,71,.08)] transition-[transform,box-shadow,border-color] duration-500 ease-out before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(180deg,#219ebc_0%,#023047_100%)] before:opacity-0 before:transition-opacity before:duration-500 before:ease-out group-hover/benefit:-translate-y-1 group-hover/benefit:border-transparent group-hover/benefit:shadow-[0_20px_42px_rgba(2,48,71,.22)] group-hover/benefit:before:opacity-100 lg:h-full lg:min-h-0 lg:rounded-[clamp(1.25rem,1.389vw,1.6667rem)] lg:px-[clamp(2rem,2.222vw,2.6667rem)] lg:pt-[clamp(3rem,3.333vw,4rem)] lg:pb-[clamp(2rem,2.222vw,2.6667rem)]">
        <div className="bg-gradient-action absolute top-[-1.75rem] left-1/2 z-10 flex size-14 -translate-x-1/2 items-center justify-center rounded-[0.8rem] border border-white/30 transition-transform duration-500 ease-out group-hover/benefit:-translate-y-1 group-hover/benefit:scale-105 lg:top-[calc(-1*clamp(1.75rem,1.944vw,2.333rem))] lg:size-[clamp(3.5rem,3.889vw,4.6667rem)] lg:rounded-[clamp(.8rem,.884vw,1.06rem)]">
          <Image
            src={icon}
            alt=""
            width={34}
            height={34}
            unoptimized
            className="size-[1.875rem] object-contain lg:size-[clamp(1.875rem,2.083vw,2.5rem)]"
          />
        </div>
        <Heading
          as="h3"
          size="subheading"
          className="relative z-[2] w-full max-w-[18rem] text-center text-[1.375rem] leading-[1.35] transition-colors duration-500 ease-out group-hover/benefit:text-white lg:max-w-none lg:text-[clamp(1.25rem,1.389vw,1.6667rem)] lg:leading-[1.4]"
        >
          {title}
        </Heading>
      </div>
    </article>
  );
}

export function SingleServiceBenefits({
  service,
}: {
  service: ServicePageConfig;
}) {
  const benefits = service.benefits.map((title, index) => ({
    title,
    icon: benefitIcons[index],
  }));

  return (
    <section className="relative overflow-hidden bg-white px-5 pt-16 pb-28 text-ink sm:px-10 lg:px-0 lg:pt-[clamp(5rem,5.556vw,6.6667rem)] lg:pb-[clamp(8.375rem,9.306vw,11.1667rem)]">
      <div
        data-reveal="up"
        className="mx-auto max-w-[47rem] text-center lg:w-[53.727vw] lg:max-w-none"
      >
        <Heading
          as="h2"
          size="display"
          align="center"
          className="lg:text-[clamp(3.5rem,3.889vw,4.6667rem)]"
        >
          {service.benefitsLead}{" "}
          <AccentText>{service.benefitsAccent}</AccentText>
        </Heading>
      </div>

      <div className="mx-auto mt-20 grid w-full max-w-[77.5rem] grid-cols-1 gap-y-16 lg:mt-[clamp(5rem,5.556vw,6.6667rem)] lg:w-[81.389vw] lg:max-w-none lg:grid-cols-3 lg:gap-x-[clamp(2rem,2.222vw,2.6667rem)] lg:gap-y-0">
        <div className="contents lg:flex lg:flex-col lg:gap-[clamp(3.25rem,3.611vw,4.333rem)]">
          <BenefitCard {...benefits[0]} delay={1} />
          <BenefitCard {...benefits[1]} delay={2} />
        </div>
        <div className="contents lg:flex lg:items-center">
          <BenefitCard {...benefits[2]} delay={2} />
        </div>
        <div className="contents lg:flex lg:flex-col lg:gap-[clamp(3.25rem,3.611vw,4.333rem)]">
          <BenefitCard {...benefits[3]} delay={2} />
          <BenefitCard {...benefits[4]} delay={3} />
        </div>
      </div>
    </section>
  );
}
