import type { Metadata } from "next";

import { AboutHero } from "@/components/about/about-hero";
import { AboutPortfolio } from "@/components/about/about-portfolio";
import { ConsultantCta } from "@/components/about/consultant-cta";
import { PublishingJourney } from "@/components/about/publishing-journey";
import { WhyAuthorsChoose } from "@/components/about/why-authors-choose";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "About Book Publication Solutions",
  description:
    "Meet the publishing team that helps authors write, edit, design, publish, and market books while retaining full ownership of their work.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <AboutHero />
        <WhyAuthorsChoose />
        <PublishingJourney />
        <ConsultantCta />
        <AboutPortfolio />
      </main>
      <SiteFooter variant="about" />
    </>
  );
}
