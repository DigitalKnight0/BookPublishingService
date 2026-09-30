import Image from "next/image";

import { figmaAssets } from "@/design-system";

export function PackagesHero() {
  return (
    <section className="relative isolate min-h-[44rem] overflow-hidden bg-brand-deep text-white lg:h-[clamp(43.375rem,48.194vw,57.8333rem)] lg:min-h-0">
      <div className="absolute inset-x-0 top-[67px] bottom-0 -z-30 lg:top-[clamp(3.5625rem,3.958vw,4.75rem)]">
        <Image
          src={figmaAssets.packagesPage.heroBackground}
          alt="Open books suspended in the air"
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
        <div className="absolute top-[36.89%] left-0 w-[14.028%]">
          <Image
            src={figmaAssets.packagesPage.heroArtwork.left}
            alt=""
            width={202}
            height={384}
            priority
            unoptimized
            className="h-auto w-full"
            sizes="(min-width: 1920px) 269px, 14.028vw"
          />
        </div>

        <div className="absolute top-[20.63%] left-[69.097%] w-[30.903%]">
          <Image
            src={figmaAssets.packagesPage.heroArtwork.right}
            alt=""
            width={445}
            height={474}
            priority
            unoptimized
            className="h-auto w-full"
            sizes="(min-width: 1920px) 593px, 30.903vw"
          />
        </div>
      </div>

      <div className="absolute inset-x-5 top-[8.5rem] z-10 flex justify-center text-center sm:inset-x-10 sm:top-[9.5rem] lg:top-[clamp(12.71875rem,14.132vw,16.9583rem)]">
        <div className="w-full max-w-[58.1667rem]">
          <h1 className="hero-copy-enter mx-auto max-w-[48.75rem] font-display text-[clamp(3rem,10vw,4rem)] leading-[1.08] tracking-[0.01em] text-balance lg:max-w-[min(40.623vw,48.7478rem)] lg:text-[clamp(3.5rem,3.889vw,4.6667rem)] lg:leading-[1.4]">
            <span className="block">Prices In</span>
            <span className="block">Plain Sight</span>
          </h1>
          <p className="hero-copy-enter hero-copy-enter-delay-1 mx-auto mt-4 max-w-[48rem] text-base leading-normal text-balance sm:text-lg lg:mt-[clamp(.625rem,.694vw,.8333rem)] lg:max-w-[min(48.472vw,58.1667rem)] lg:text-[clamp(1rem,1.389vw,1.6667rem)]">
            Choose one of the packages below, or sit down with your project
            manager and build something custom.
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-[-1px] z-20 h-36 sm:h-44 lg:h-[clamp(16.375rem,18.278vw,21.9339rem)]">
        <Image
          src={figmaAssets.packagesPage.heroWave}
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
