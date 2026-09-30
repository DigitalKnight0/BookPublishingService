import type { Metadata } from "next";
import Link from "next/link";

import { FaqContactSection } from "@/components/home/faq-contact-section";
import { PricingSection } from "@/components/home/pricing-section";
import { PackagesHero } from "@/components/packages/packages-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { AccentText, buttonVariants, Heading } from "@/components/ui";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Book Publishing Pricing",
  description:
    "Explore flexible book publishing packages for editing, design, distribution, marketing, ghostwriting, and complete author support.",
};

const assurances = [
  {
    title: "Built around your manuscript",
    copy: "Your quote reflects your book's length, condition, genre, and the support you actually need.",
  },
  {
    title: "Clear scope before work begins",
    copy: "Deliverables, timelines, revision rounds, and payment milestones are agreed before kickoff.",
  },
  {
    title: "Flexible service combinations",
    copy: "Start with one service or combine writing, editing, design, publishing, and marketing in one plan.",
  },
] as const;

export default function PricingPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PackagesHero />
        <PricingSection />

        <section className="bg-gradient-pale px-5 py-20 text-ink sm:px-10 lg:px-[6.944vw] lg:py-[6.25rem]">
          <div className="mx-auto max-w-[77.5rem]">
            <div data-reveal="up" className="mx-auto max-w-[54rem] text-center">
              <Heading as="h2" size="display" align="center">
                A Publishing Plan That <AccentText>Fits Your Book</AccentText>
              </Heading>
              <p className="mx-auto mt-4 max-w-[45rem] text-base leading-relaxed sm:text-lg">
                No two manuscripts require exactly the same path. We use these
                packages as a clear starting point, then tailor the scope around
                your goals, timeline, and budget.
              </p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {assurances.map((item, index) => (
                <article
                  key={item.title}
                  data-reveal="up"
                  data-reveal-delay={index + 1}
                  data-motion-card
                  className="rounded-[1.25rem] border border-brand bg-white p-7 shadow-[0_16px_45px_rgba(2,48,71,.08)]"
                >
                  <span className="bg-gradient-action flex size-12 items-center justify-center rounded-xl text-lg font-medium text-white shadow-sm">
                    0{index + 1}
                  </span>
                  <Heading as="h3" size="subheading" className="mt-6">
                    {item.title}
                  </Heading>
                  <p className="mt-3 text-base leading-relaxed text-ink/75">
                    {item.copy}
                  </p>
                </article>
              ))}
            </div>

            <div
              data-reveal="scale"
              className="bg-gradient-action mt-12 flex flex-col items-center justify-between gap-6 rounded-[1.25rem] px-7 py-8 text-center text-white shadow-[0_20px_55px_rgba(2,48,71,.2)] sm:px-10 lg:flex-row lg:text-left"
            >
              <div>
                <h3 className="font-display text-[clamp(2rem,3vw,2.75rem)] leading-tight">
                  Need a custom combination?
                </h3>
                <p className="mt-2 max-w-[42rem] text-base leading-relaxed text-white/85">
                  Tell us where your manuscript is today and where you want it
                  to go. We&apos;ll recommend the most efficient route.
                </p>
              </div>
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "secondary", size: "lg" }),
                  "shrink-0",
                )}
              >
                Request a custom quote
              </Link>
            </div>
          </div>
        </section>

        <FaqContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
