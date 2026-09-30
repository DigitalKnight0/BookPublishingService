import type { Metadata } from "next";

import { BookLaunchSection } from "@/components/home/book-launch-section";
import { FaqContactSection } from "@/components/home/faq-contact-section";
import { HomeHero } from "@/components/home/hero";
import { PortfolioSection } from "@/components/home/portfolio-section";
import { PricingSection } from "@/components/home/pricing-section";
import { PublishingProcessSection } from "@/components/home/publishing-process-section";
import { PublishingServicesCta } from "@/components/home/publishing-services-cta";
import { PublishingStepsCta } from "@/components/home/publishing-steps-cta";
import { ServicesTimelineSection } from "@/components/home/services-timeline-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { TurningIdeasCta } from "@/components/home/turning-ideas-cta";
import { ValuesSection } from "@/components/home/values-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Book Publication Solutions for Authors",
  description:
    "Book publishing services that carry your manuscript from first edit to worldwide shelves. Self-publish a book with designing and distribution handled for you.",
};

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HomeHero />
        <ValuesSection />
        <ServicesTimelineSection />
        <PublishingStepsCta />
        <PortfolioSection />
        <PublishingServicesCta />
        <PublishingProcessSection />
        <PricingSection />
        <BookLaunchSection />
        <TestimonialsSection />
        <TurningIdeasCta />
        <FaqContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
