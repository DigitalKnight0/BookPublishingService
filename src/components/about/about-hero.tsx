import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui";
import { figmaAssets } from "@/design-system";

export function AboutHero() {
  return (
    <section className="relative isolate min-h-[43rem] overflow-hidden bg-brand-deep text-white lg:h-[clamp(43.375rem,48.194vw,57.8333rem)] lg:min-h-0">
      <div className="absolute inset-x-0 top-[67px] bottom-0 -z-30 lg:top-[clamp(3.5625rem,3.958vw,4.75rem)]">
        <Image
          src={figmaAssets.aboutPage.heroBackground}
          alt="Open books suspended in a library"
          fill
          priority
          unoptimized
          className="hero-background-motion object-cover object-center"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-x-0 top-[67px] bottom-0 -z-20 bg-[rgba(2,48,71,.83)] lg:top-[clamp(3.5625rem,3.958vw,4.75rem)]" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-1/2 z-0 hidden w-[min(100vw,120rem)] -translate-x-1/2 min-[1180px]:block"
      >
        <div className="absolute top-[6.34%] left-[-5.35%] w-[32.778%]">
          <Image
            src={figmaAssets.aboutPage.heroArtwork.left}
            alt=""
            width={472}
            height={555}
            priority
            unoptimized
            className="h-auto w-full"
            sizes="(min-width: 1920px) 629px, 32.778vw"
          />
        </div>

        <div className="absolute top-[17.85%] left-[53.82%] aspect-[970/572] w-[67.36%]">
          <Image
            src={figmaAssets.aboutPage.heroArtwork.right}
            alt=""
            fill
            priority
            unoptimized
            className="object-contain"
            sizes="(min-width: 1920px) 1293px, 67.36vw"
          />
        </div>
      </div>

      <div className="absolute inset-x-5 top-[8.75rem] z-10 flex justify-center text-center sm:inset-x-10 lg:top-[clamp(6.5rem,7.222vw,8.6667rem)] lg:left-[6.944vw] lg:h-[clamp(24.375rem,27.083vw,32.5rem)] lg:w-[86.111vw] lg:items-center">
        <div className="w-full max-w-[43.625rem] lg:w-[clamp(43.625rem,48.472vw,58.1667rem)] lg:max-w-none">
          <h1 className="hero-copy-enter font-display text-[clamp(3rem,10vw,4rem)] leading-[1.08] tracking-[0.01em] text-balance lg:text-[clamp(3.5rem,3.889vw,4.6667rem)] lg:leading-[1.4]">
            A Publishing Home For Independent Authors
          </h1>
          <p className="hero-copy-enter hero-copy-enter-delay-1 mt-4 text-base leading-normal sm:text-lg lg:mt-[clamp(.625rem,.694vw,.8333rem)] lg:text-[clamp(1.25rem,1.389vw,1.6667rem)]">
            Everything it takes to publish a book well lives here, from the
            first edit to the day readers anywhere can buy it.
          </p>
          <div className="hero-copy-enter hero-copy-enter-delay-2 mt-7 flex justify-center">
            <Link
              href="/contact"
              className={buttonVariants({ variant: "secondary", size: "md" })}
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-[-1px] z-20 h-[8.5rem] lg:h-[clamp(16.375rem,18.278vw,21.9339rem)]">
        <Image
          src={figmaAssets.aboutPage.heroWave}
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
