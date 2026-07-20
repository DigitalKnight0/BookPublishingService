import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui";
import type { ServicePageConfig } from "@/content/service-pages";
import { figmaAssets } from "@/design-system";

export function SingleServiceHero({
  service,
}: {
  service: ServicePageConfig;
}) {
  return (
    <section className="relative isolate min-h-[50rem] overflow-hidden bg-brand-deep text-white sm:min-h-[46rem] lg:h-[clamp(43.375rem,48.194vw,57.8333rem)] lg:min-h-0">
      <div className="absolute inset-x-0 top-[67px] bottom-0 -z-30 lg:top-[clamp(3.5625rem,3.958vw,4.75rem)]">
        <Image
          src={service.heroImage}
          alt={service.heroImageAlt}
          fill
          priority
          unoptimized
          className="hero-background-motion object-cover object-center"
          style={{ objectPosition: service.heroImagePosition ?? "center" }}
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-x-0 top-[67px] bottom-0 -z-20 bg-[rgba(2,48,71,.83)] lg:top-[clamp(3.5625rem,3.958vw,4.75rem)]" />

      <div className="absolute inset-x-5 top-[7.25rem] z-10 flex justify-center text-center sm:inset-x-10 sm:top-[8.5rem] lg:top-[clamp(5.25rem,5.833vw,7rem)] lg:left-[6.944vw] lg:h-[clamp(27rem,30vw,36rem)] lg:w-[86.111vw] lg:items-center">
        <div className="w-full max-w-[50rem] lg:w-[min(51.042vw,61.25rem)] lg:max-w-none">
          <h1 className="hero-copy-enter font-display text-[clamp(3rem,10vw,4rem)] leading-[1.08] tracking-[0.01em] text-balance lg:text-[clamp(3.5rem,3.889vw,4.6667rem)] lg:leading-[1.4]">
            {service.heroTitle}
          </h1>

          <div className="hero-copy-enter hero-copy-enter-delay-1 mt-4 space-y-3 text-base leading-normal sm:text-lg lg:mt-[clamp(.625rem,.694vw,.8333rem)] lg:space-y-[clamp(.625rem,.694vw,.8333rem)] lg:text-[clamp(1rem,1.111vw,1.3333rem)]">
            {service.heroParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="hero-copy-enter hero-copy-enter-delay-2 mt-7 flex justify-center lg:mt-[clamp(1.875rem,2.083vw,2.5rem)]">
            <Link
              href="#contact"
              className={`${buttonVariants({ variant: "secondary", size: "md" })} lg:min-h-[clamp(2.9375rem,3.264vw,3.9167rem)] lg:rounded-[clamp(.625rem,.694vw,.8333rem)] lg:px-[clamp(1.25rem,1.389vw,1.6667rem)] lg:py-0 lg:text-[clamp(1.125rem,1.25vw,1.5rem)]`}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-[-1px] z-20 h-[7.75rem] sm:h-[10rem] lg:h-[clamp(16.375rem,18.278vw,21.9339rem)]">
        <Image
          src={figmaAssets.ghostwritingPage.heroWave}
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
