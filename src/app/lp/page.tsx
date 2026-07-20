import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { IndustryIntro } from "@/components/services/industry-intro";
import { LiteraryAdventureCta } from "@/components/services/literary-adventure-cta";
import { PublishingServicesGrid } from "@/components/services/publishing-services-grid";
import { ServicesHero } from "@/components/services/services-hero";
import { WorkShowcase } from "@/components/services/work-showcase";

export const metadata: Metadata = {
  title: "Book Publishing Services",
  description:
    "Professional ghostwriting, editing, book design, publishing, audiobook production, and book marketing services.",
};

export default function LandingPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <ServicesHero />
        <IndustryIntro />
        <PublishingServicesGrid />
        <WorkShowcase />
        <LiteraryAdventureCta />
      </main>
      <SiteFooter variant="services" />
    </>
  );
}
