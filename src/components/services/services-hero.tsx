import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui";
import { figmaAssets } from "@/design-system";

import { QuoteForm } from "./quote-form";

export function ServicesHero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-[#219ebc] text-white lg:h-[100svh]">
      <div className="figma-hero-photo absolute inset-x-0 top-[67px] bottom-0 -z-30 lg:top-[7.037vh] lg:bottom-auto">
        <Image
          src={figmaAssets.hero.servicesBackground}
          alt="A publishing consultant working on a laptop"
          fill
          priority
          unoptimized
          className="hero-background-motion object-cover object-[72%_center] lg:object-[85%_center]"
          sizes="100vw"
        />
      </div>

      <div className="lp-hero-overlay pointer-events-none absolute top-[67px] bottom-0 left-0 -z-10 bg-[linear-gradient(180deg,rgba(33,158,188,.82)_0%,rgba(2,48,71,.82)_100%)] sm:bg-none lg:top-[7.037vh]">
        <Image
          src={figmaAssets.servicesPage.heroOverlay}
          alt=""
          fill
          priority
          unoptimized
          className="hidden object-fill sm:block"
          sizes="(min-width: 1024px) 54vw, 115vw"
        />
      </div>

      <div className="lp-hero-layout relative z-30 grid w-full gap-10 px-5 pt-[8.5rem] pb-[10rem] sm:px-10 lg:absolute lg:top-[12.84vh] lg:left-[6.944vw] lg:h-[83.951vh] lg:w-[86.111vw] lg:items-center lg:gap-[clamp(.625rem,.694vw,.8333rem)] lg:px-0 lg:pt-0 lg:pb-0">
        <div className="max-w-[34rem] lg:max-w-none">
          <h1 className="lp-hero-title hero-copy-enter font-display text-[clamp(3rem,8vw,3.75rem)] leading-[1.08] tracking-[0.01em] text-balance lg:w-[34.978vw] lg:text-[clamp(3.5rem,3.889vw,4.6667rem)] lg:leading-[1.4]">
            Self Publish A Book Without The Overwhelm
          </h1>
          <p className="lp-hero-description hero-copy-enter hero-copy-enter-delay-1 mt-2.5 max-w-[28.9375rem] text-base leading-normal lg:mt-[clamp(.625rem,.694vw,.8333rem)] lg:w-[32.153vw] lg:max-w-none lg:text-[clamp(1rem,1.111vw,1.3333rem)]">
            Book Publication Solutions helps you turn your idea into a
            professionally published book with publishing packages starting at
            just <strong className="hero-price-blink font-bold">$199</strong>.
            Partner with us to transform your vision into a polished,
            publication-ready masterpiece.
          </p>
          <div className="lp-hero-actions hero-copy-enter hero-copy-enter-delay-2 mt-5 flex flex-wrap gap-[0.9375rem] lg:mt-[clamp(1.25rem,1.389vw,1.6667rem)] lg:gap-[clamp(.9375rem,1.042vw,1.25rem)]">
            <Link
              href="#contact"
              className={`${buttonVariants({ variant: "secondary", size: "md" })} lp-hero-button lg:min-h-[clamp(2.9375rem,3.264vw,3.9167rem)] lg:rounded-[clamp(.625rem,.694vw,.8333rem)] lg:px-[clamp(1.25rem,1.389vw,1.6667rem)] lg:py-[clamp(.75rem,.868vw,1.0417rem)] lg:text-[clamp(1.125rem,1.25vw,1.5rem)]`}
            >
              Get My Free Quote
            </Link>
            <Link
              href="tel:+13056028290"
              aria-label="Call Book Publication Solutions at (305) 602-8290"
              className={`${buttonVariants({ variant: "primary", size: "md" })} phone-cta-blink lp-hero-button lg:min-h-[clamp(2.9375rem,3.264vw,3.9167rem)] lg:rounded-[clamp(.625rem,.694vw,.8333rem)] lg:px-[clamp(1.25rem,1.389vw,1.6667rem)] lg:py-[clamp(.75rem,.868vw,1.0417rem)] lg:text-[clamp(1.125rem,1.25vw,1.5rem)]`}
            >
              (305) 602-8290
            </Link>
          </div>
        </div>

        <div className="services-hero-form-enter relative z-30 mx-auto w-full max-w-[22rem] justify-self-end lg:-top-[7vh] lg:left-[4vw] lg:mx-0 lg:max-w-none">
          <QuoteForm
            serviceName="Book Publication Solutions"
            heading="Tell Us About Your Book"
            description="Start with a free, no-pressure publishing consultation."
            submitLabel="Request Free Consultation"
            showServiceSelect
            scaleOnDesktop
            className="lp-mobile-quote origin-center lg:min-h-[clamp(31.8125rem,35.347vw,42.4167rem)] lg:justify-center min-[1800px]:scale-90"
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
          className="object-fill"
          sizes="100vw"
        />
      </div>
    </section>
  );
}
