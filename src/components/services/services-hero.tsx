import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui";
import { figmaAssets } from "@/design-system";

import { QuoteForm } from "./quote-form";

export function ServicesHero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-deep text-white lg:min-h-[100svh]">
      <Image
        src={figmaAssets.hero.servicesBackground}
        alt="Bookstore tables filled with published books"
        fill
        priority
        unoptimized
        className="hero-background-motion -z-30 object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 -z-20 bg-black/60" />

      <div className="relative z-30 grid w-full gap-10 px-5 pt-[8.5rem] pb-[10rem] sm:px-10 lg:absolute lg:top-[12.84vh] lg:left-[6.944vw] lg:h-[83.951vh] lg:w-[86.111vw] lg:grid-cols-[1fr_36.597vw] lg:items-center lg:gap-[clamp(.625rem,.694vw,.8333rem)] lg:px-0 lg:pt-0 lg:pb-0">
        <div className="max-w-[34rem] lg:max-w-none">
          <h1 className="hero-copy-enter font-display text-[clamp(3rem,8vw,3.75rem)] leading-[1.08] tracking-[0.01em] text-balance lg:w-[34.978vw] lg:text-[clamp(3.5rem,3.889vw,4.6667rem)] lg:leading-[1.4]">
            Get Your Story Heard Through Expert Book Publishing Services.
          </h1>
          <p className="hero-copy-enter hero-copy-enter-delay-1 mt-2.5 max-w-[28.9375rem] text-base leading-normal lg:mt-[clamp(.625rem,.694vw,.8333rem)] lg:w-[32.153vw] lg:max-w-none lg:text-[clamp(1rem,1.111vw,1.3333rem)]">
            We take care of everything, from writing and maintaining stories to
            publishing and distributing them all over the world!
          </p>
          <div className="hero-copy-enter hero-copy-enter-delay-2 mt-5 flex flex-wrap gap-[0.9375rem] lg:mt-[clamp(1.25rem,1.389vw,1.6667rem)] lg:gap-[clamp(.9375rem,1.042vw,1.25rem)]">
            <Link
              href="#contact"
              className={`${buttonVariants({ variant: "secondary", size: "md" })} lg:min-h-[clamp(2.9375rem,3.264vw,3.9167rem)] lg:rounded-[clamp(.625rem,.694vw,.8333rem)] lg:px-[clamp(1.25rem,1.389vw,1.6667rem)] lg:py-[clamp(.75rem,.868vw,1.0417rem)] lg:text-[clamp(1.125rem,1.25vw,1.5rem)]`}
            >
              Get Started
            </Link>
            <Link
              href="#contact"
              className={`${buttonVariants({ variant: "primary", size: "md" })} lg:min-h-[clamp(2.9375rem,3.264vw,3.9167rem)] lg:rounded-[clamp(.625rem,.694vw,.8333rem)] lg:px-[clamp(1.25rem,1.389vw,1.6667rem)] lg:py-[clamp(.75rem,.868vw,1.0417rem)] lg:text-[clamp(1.125rem,1.25vw,1.5rem)]`}
            >
              Talk To Us
            </Link>
          </div>
        </div>

        <div className="services-hero-form-enter relative z-30 w-full justify-self-end">
          <QuoteForm
            scaleOnDesktop
            className="lg:min-h-[clamp(31.8125rem,35.347vw,42.4167rem)] lg:justify-center"
          />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-[-1px] z-20 h-[7rem] lg:h-[18.278vw]">
        <Image
          src={figmaAssets.servicesPage.heroWave}
          alt=""
          fill
          priority
          unoptimized
          className="scale-x-[-1] object-fill"
          sizes="100vw"
        />
      </div>
    </section>
  );
}
