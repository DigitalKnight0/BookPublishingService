import type { Metadata } from "next";
import Link from "next/link";
import { Check, Phone } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { buttonVariants } from "@/components/ui";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Thank You",
  description:
    "Thank you for contacting Book Publication Solutions. A publishing consultant will be in touch soon.",
};

export default function ThankYouPage() {
  return (
    <>
      <SiteHeader />
      <main className="relative isolate flex min-h-[calc(100vh-5rem)] items-center overflow-hidden bg-gradient-pale px-5 py-32 text-ink sm:px-10 lg:px-[6.944vw]">
        <div className="absolute top-[12%] left-[7%] -z-10 size-72 rounded-full bg-brand/15 blur-3xl" />
        <div className="absolute right-[5%] bottom-[10%] -z-10 size-80 rounded-full bg-brand-deep/10 blur-3xl" />

        <section className="mx-auto w-full max-w-[52rem] rounded-[1.75rem] border border-brand bg-white/90 px-6 py-12 text-center shadow-[0_28px_80px_rgba(2,48,71,.14)] backdrop-blur-sm sm:px-12 sm:py-16">
          <span className="bg-gradient-action mx-auto flex size-20 items-center justify-center rounded-full text-white shadow-[0_12px_30px_rgba(2,48,71,.22)]">
            <Check aria-hidden className="size-10" strokeWidth={2.2} />
          </span>

          <p className="mt-7 text-sm font-semibold tracking-[0.16em] text-brand-deep/65 uppercase">
            Message received
          </p>
          <h1 className="mt-3 font-display text-[clamp(3.25rem,7vw,5.75rem)] leading-[.95] tracking-[-0.02em]">
            Thank <span className="text-gradient-brand">You!</span>
          </h1>
          <p className="mx-auto mt-6 max-w-[39rem] text-lg leading-relaxed text-ink/75 sm:text-xl">
            Your details have been sent successfully. One of our publishing
            consultants will review your request and get in touch with you
            shortly.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className={buttonVariants({ variant: "primary", size: "lg" })}
            >
              Return to home
            </Link>
            <a
              href="tel:+13056028290"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "gap-2",
              )}
            >
              <Phone aria-hidden className="size-5" />
              (305) 602-8290
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
