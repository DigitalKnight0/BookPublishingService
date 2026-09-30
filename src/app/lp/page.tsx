import type { Metadata } from "next";

import { PublishingProcessSection } from "@/components/home/publishing-process-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { IndustryIntro } from "@/components/services/industry-intro";
import { LiteraryAdventureCta } from "@/components/services/literary-adventure-cta";
import { LpFaqSection } from "@/components/services/lp-faq-section";
import { LpTrustBar } from "@/components/services/lp-trust-bar";
import { PublishingServicesGrid } from "@/components/services/publishing-services-grid";
import { ServicesHero } from "@/components/services/services-hero";
import { WorkShowcase } from "@/components/services/work-showcase";

export const metadata: Metadata = {
  title: "Publish a Book with Confidence",
  description:
    "Self publish a book with a full-service team behind you: editing, design and illustrations, publishing, and marketing. Trusted children's book publishers. Free consultation.",
};

export default function LandingPage() {
  return (
    <>
      <SiteHeader hideNavigation />
      <main>
        <ServicesHero />
        <LpTrustBar />
        <IndustryIntro />
        <PublishingServicesGrid />
        <PublishingProcessSection variant="lp" />
        <WorkShowcase />
        <TestimonialsSection />
        <LpFaqSection />
        <LiteraryAdventureCta />
      </main>
      <SiteFooter variant="services" />
    </>
  );
}
