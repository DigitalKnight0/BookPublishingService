import type { Metadata } from "next";

import { AboutHero } from "@/components/about/about-hero";
import { AboutPortfolio } from "@/components/about/about-portfolio";
import { ConsultantCta } from "@/components/about/consultant-cta";
import { WhyAuthorsChoose } from "@/components/about/why-authors-choose";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The editors, designers, and marketers behind Book Publication Solutions, helping authors publish a book worth being proud of.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <AboutHero />
        <WhyAuthorsChoose />
        <ConsultantCta />
        <AboutPortfolio />
      </main>
      <SiteFooter variant="about" />
    </>
  );
}
