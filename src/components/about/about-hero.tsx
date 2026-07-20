import Image from "next/image";

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

      <div className="absolute inset-x-5 top-[8.75rem] z-10 flex justify-center text-center sm:inset-x-10 lg:top-[clamp(6.5rem,7.222vw,8.6667rem)] lg:left-[6.944vw] lg:h-[clamp(24.375rem,27.083vw,32.5rem)] lg:w-[86.111vw] lg:items-center">
        <div className="w-full max-w-[43.625rem] lg:w-[clamp(43.625rem,48.472vw,58.1667rem)] lg:max-w-none">
          <h1 className="hero-copy-enter font-display text-[clamp(3rem,10vw,4rem)] leading-[1.08] tracking-[0.01em] text-balance lg:text-[clamp(3.5rem,3.889vw,4.6667rem)] lg:leading-[1.4]">
            Where Your Story Meets Our Expertise
          </h1>
          <p className="hero-copy-enter hero-copy-enter-delay-1 mt-4 text-base leading-normal sm:text-lg lg:mt-[clamp(.625rem,.694vw,.8333rem)] lg:text-[clamp(1.25rem,1.389vw,1.6667rem)]">
            Book Publication Solutions was built on a simple belief — every
            author deserves a team that treats their manuscript with the same
            care they gave it. We are a full-service publishing partner for
            first-time writers, seasoned authors, and everyone in between,
            offering everything from ghostwriting and editing to design,
            publishing, and marketing under one roof.
          </p>
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
