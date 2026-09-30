import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { QuoteForm } from "@/components/services/quote-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { AccentText, buttonVariants, Heading } from "@/components/ui";
import { figmaAssets } from "@/design-system";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Book a free consultation and talk to a publishing strategist about editing, design and illustrations, distribution, and marketing.",
};

const contactDetails = [
  {
    icon: Phone,
    title: "Call us",
    value: "(305) 602-8290",
    href: "tel:+13056028290",
  },
  {
    icon: Mail,
    title: "Email us",
    value: "support@bookpublicationsolutions.com",
    href: "mailto:support@bookpublicationsolutions.com",
  },
  {
    icon: MapPin,
    title: "Visit us",
    value: "25 SE 2nd Ave Ste 550, Miami FL 33131",
    href: undefined,
  },
  {
    icon: Clock3,
    title: "Consultation hours",
    value: "Monday–Friday, 9:00 AM–6:00 PM",
    href: undefined,
  },
] as const;

const nextSteps = [
  {
    title: "Tell us about your book",
    copy: "Share your manuscript stage, genre, goals, and any services you already have in mind.",
  },
  {
    title: "Meet your consultant",
    copy: "We'll review your details and arrange a focused conversation about the right publishing path.",
  },
  {
    title: "Receive a clear plan",
    copy: "You'll get a tailored scope with recommended services, deliverables, timeline, and pricing.",
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative isolate overflow-hidden bg-brand-deep px-5 pt-36 pb-28 text-white sm:px-10 sm:pt-40 lg:px-[6.944vw] lg:pt-48 lg:pb-36">
          <Image
            src={figmaAssets.packagesPage.heroBackground}
            alt=""
            fill
            priority
            unoptimized
            className="-z-30 object-cover object-center opacity-35"
            sizes="100vw"
          />
          <div className="absolute inset-0 -z-20 bg-[linear-gradient(100deg,rgba(2,48,71,.98)_0%,rgba(0,95,142,.92)_48%,rgba(33,158,188,.72)_100%)]" />
          <div className="absolute -top-24 -right-20 -z-10 size-[28rem] rounded-full bg-white/10 blur-3xl" />

          <div className="mx-auto grid max-w-[77.5rem] items-center gap-12 lg:grid-cols-[1.15fr_.85fr]">
            <div>
              <p className="hero-copy-enter text-sm font-medium tracking-[0.16em] text-white/75 uppercase">
                Contact Book Publication Solutions
              </p>
              <h1 className="hero-copy-enter hero-copy-enter-delay-1 mt-5 max-w-[48rem] font-display text-[clamp(3rem,4vw,4rem)] leading-[1.02] tracking-[0.01em] text-balance">
                <span className="block">Tell Us About The Book</span>
              </h1>
              <p className="hero-copy-enter hero-copy-enter-delay-2 mt-6 max-w-[42rem] text-lg leading-relaxed text-white/88 sm:text-xl">
                Book a free consultation and tell us where the manuscript
                stands. We will help you choose the next practical step.
              </p>
              <div className="hero-copy-enter hero-copy-enter-delay-2 mt-8 flex flex-wrap gap-4">
                <Link
                  href="#contact-form"
                  data-live-chat
                  className={buttonVariants({ variant: "secondary", size: "lg" })}
                >
                  Free Consultation
                </Link>
                <Link
                  href="/packages"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "border-white/65 text-white hover:bg-white/10",
                  )}
                >
                  View Packages
                </Link>
              </div>
            </div>

            <aside
              data-reveal="right"
              className="rounded-[1.25rem] border border-white/25 bg-white/10 p-7 shadow-[0_24px_80px_rgba(2,48,71,.25)] backdrop-blur-md sm:p-9"
            >
              <h2 className="font-display text-[clamp(2rem,3vw,2.75rem)] leading-tight">
                A Thoughtful First Conversation
              </h2>
              <ul className="mt-6 space-y-4 text-base leading-relaxed text-white/90 sm:text-lg">
                {[
                  "No obligation and no pressure",
                  "Practical guidance for your manuscript stage",
                  "A tailored scope instead of a one-size-fits-all pitch",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 size-6 shrink-0 text-brand" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section
          id="contact-form"
          className="bg-gradient-pale scroll-mt-20 px-5 py-20 text-ink sm:px-10 lg:px-[6.944vw] lg:py-[6.25rem]"
        >
          <div className="mx-auto max-w-[77.5rem]">
            <div data-reveal="up" className="mx-auto max-w-[52rem] text-center">
              <Heading as="h2" size="display" align="center">
                Book A <AccentText>Free Consultation</AccentText>
              </Heading>
              <p className="mx-auto mt-4 max-w-[44rem] text-base leading-relaxed sm:text-lg">
                You will hear back from a real person within one working day.
              </p>
            </div>

            <div className="mt-12 grid items-start gap-8 lg:grid-cols-[.82fr_1.18fr] lg:gap-12">
              <div data-reveal="left" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {contactDetails.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <>
                      <span className="bg-gradient-action flex size-12 shrink-0 items-center justify-center rounded-xl text-white shadow-sm">
                        <Icon aria-hidden className="size-6" strokeWidth={1.8} />
                      </span>
                      <span>
                        <span className="block text-sm font-medium tracking-[0.08em] text-brand-deep/60 uppercase">
                          {item.title}
                        </span>
                        <span className="mt-1 block text-base leading-relaxed font-medium sm:text-lg">
                          {item.value}
                        </span>
                      </span>
                    </>
                  );

                  return item.href ? (
                    <a
                      key={item.title}
                      href={item.href}
                      className="flex items-center gap-4 rounded-[1.25rem] border border-brand bg-white p-5 shadow-[0_12px_35px_rgba(2,48,71,.07)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(2,48,71,.12)]"
                    >
                      {content}
                    </a>
                  ) : (
                    <div
                      key={item.title}
                      className="flex items-center gap-4 rounded-[1.25rem] border border-brand bg-white p-5 shadow-[0_12px_35px_rgba(2,48,71,.07)]"
                    >
                      {content}
                    </div>
                  );
                })}
              </div>

              <QuoteForm
                id="contact-quote"
                serviceName="Publishing Consultation"
                prefillContactEmail
                heading="Book A Free Consultation"
                description="You will hear back from a real person within one working day."
                submitLabel="Send Message"
                className="bg-white/90"
              />
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-20 text-ink sm:px-10 lg:px-[6.944vw] lg:py-[6.25rem]">
          <div className="mx-auto max-w-[77.5rem]">
            <div data-reveal="up" className="text-center">
              <Heading as="h2" size="display" align="center">
                What Happens <AccentText>Next?</AccentText>
              </Heading>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {nextSteps.map((step, index) => (
                <article
                  key={step.title}
                  data-reveal="up"
                  data-reveal-delay={index + 1}
                  data-motion-card
                  className="rounded-[1.25rem] border border-brand bg-[linear-gradient(180deg,rgba(33,158,188,0)_0%,rgba(33,158,188,.15)_100%),#fff] p-7"
                >
                  <span className="font-display text-5xl leading-none text-brand">
                    0{index + 1}
                  </span>
                  <Heading as="h3" size="subheading" className="mt-5">
                    {step.title}
                  </Heading>
                  <p className="mt-3 text-base leading-relaxed text-ink/75">
                    {step.copy}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter variant="about" />
    </>
  );
}
