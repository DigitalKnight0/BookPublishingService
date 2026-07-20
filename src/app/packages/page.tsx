import type { Metadata } from "next";

import { FaqContactSection } from "@/components/home/faq-contact-section";
import { PricingSection } from "@/components/home/pricing-section";
import { PackagesHero } from "@/components/packages/packages-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Publishing Packages",
  description:
    "Flexible book publishing packages for authors, from manuscript review and design to distribution and launch support.",
};

export default function PackagesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PackagesHero />
        <PricingSection />
        <FaqContactSection pageTop />
      </main>
      <SiteFooter />
    </>
  );
}
