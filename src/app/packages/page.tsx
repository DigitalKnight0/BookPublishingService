import type { Metadata } from "next";

import { FaqContactSection } from "@/components/home/faq-contact-section";
import { PricingSection } from "@/components/home/pricing-section";
import { PackagesHero } from "@/components/packages/packages-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Pricing | Transparent Book Publishing Packages",
  description:
    "Clear publishing packages for every author, from starter to enterprise. Self publish a book on a plan you can read at a glance.",
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
