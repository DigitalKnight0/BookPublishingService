import type { ServicePageConfig } from "@/content/service-pages";

import { SingleServiceBenefits } from "@/components/ghostwriting/ghostwriting-benefits";
import { SingleServiceCta } from "@/components/ghostwriting/ghostwriting-cta";
import { SingleServiceHero } from "@/components/ghostwriting/ghostwriting-hero";
import { SingleServiceProcess } from "@/components/ghostwriting/ghostwriting-process";
import { FaqContactSection } from "@/components/home/faq-contact-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function SingleServicePage({
  service,
}: {
  service: ServicePageConfig;
}) {
  return (
    <>
      <SiteHeader />
      <main>
        <SingleServiceHero service={service} />
        <SingleServiceBenefits service={service} />
        <SingleServiceCta service={service} />
        <SingleServiceProcess service={service} />
        <TestimonialsSection blendFromTop />
        <FaqContactSection spaciousTop />
      </main>
      <SiteFooter />
    </>
  );
}
