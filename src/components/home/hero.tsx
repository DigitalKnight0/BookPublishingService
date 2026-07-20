import Image from "next/image";
import Link from "next/link";

import { buttonVariants, Container } from "@/components/ui";
import { figmaAssets } from "@/design-system";
import { cn } from "@/lib/utils";

export function HomeHero() {
  return (
    <section className="bg-brand-deep relative isolate flex min-h-[100svh] overflow-hidden text-white lg:h-[100svh]">
      <div className="absolute inset-x-0 top-[67px] bottom-0 -z-30 lg:top-[clamp(3.5625rem,3.958vw,4.75rem)]">
        <Image
          src={figmaAssets.hero.homeBackground}
          alt="A library lined with books"
          fill
          loading="eager"
          fetchPriority="high"
          className="hero-background-motion object-cover object-center"
          sizes="100vw"
        />
      </div>

      <div className="absolute inset-x-0 top-[67px] bottom-0 -z-20 bg-black/60 lg:top-[clamp(3.5625rem,3.958vw,4.75rem)]" />
      <div className="absolute inset-x-0 top-[67px] bottom-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,.55)_0%,rgba(2,48,71,.82)_100%)] lg:top-[clamp(3.5625rem,3.958vw,4.75rem)]" />

      <div className="ambient-float ambient-float-slow pointer-events-none absolute right-[-15vw] bottom-[6rem] z-0 hidden w-[72vw] opacity-75 sm:block lg:top-[9.444vh] lg:right-[2.318vw] lg:bottom-auto lg:w-[min(51.251vw,91.113vh)] lg:opacity-100">
        <Image
          src={figmaAssets.hero.homeBookStack}
          alt=""
          width={2000}
          height={2000}
          loading="eager"
          fetchPriority="high"
          className="h-auto w-full object-contain"
          sizes="(min-width: 1024px) 52vw, 90vw"
        />
      </div>

      <Container className="relative z-10 flex min-h-[100svh] max-w-none items-start px-5 pt-[clamp(8rem,15vh,10rem)] pb-[clamp(8rem,15vh,10rem)] sm:px-10 lg:absolute lg:top-[12.84vh] lg:left-[6.944vw] lg:h-[83.951vh] lg:min-h-0 lg:w-[86.111vw] lg:items-center lg:px-0 lg:pt-0 lg:pb-[11.358vh]">
        <div className="max-w-[41rem] lg:w-[min(44.438vw,53.326rem)] lg:max-w-none">
          <h1
            className="hero-copy-enter font-display text-[clamp(2.8rem,8vw,3.5rem)] leading-[1.08] font-normal tracking-[0.01em] text-balance sm:text-[52px] lg:text-[clamp(2.8rem,3.889vw,4.6667rem)] lg:leading-[1.4]"
          >
            Get Your Story Heard Through Immaculate Book Publishing Services
          </h1>

          <div
            className="hero-copy-enter hero-copy-enter-delay-1 mt-4 max-w-[36.5rem] space-y-3 font-sans text-base leading-[1.35] text-white sm:text-lg lg:mt-[clamp(.625rem,.694vw,.8333rem)] lg:w-[min(40.459vw,48.551rem)] lg:max-w-none lg:space-y-[clamp(.625rem,.694vw,.8333rem)] lg:text-[clamp(1rem,1.389vw,1.6667rem)] lg:leading-[normal]"
          >
            <p>
              Every great story deserves to be shared with the world. If
              you&apos;ve ever wondered, “How do I publish my eBook?” Book
              Publication Services is here to help.
            </p>
            <p>
              Our comprehensive, end-to-end publishing solutions are designed to
              turn your manuscript into a professionally published book. Whether
              you&apos;re an aspiring author with a fresh idea or an experienced
              writer looking to reach a wider audience, our team is with you
              every step of the way.
            </p>
          </div>

          <div
            className="hero-copy-enter hero-copy-enter-delay-2 mt-6 flex flex-wrap gap-3 sm:gap-[15px] lg:mt-[clamp(1.25rem,1.389vw,1.6667rem)] lg:gap-[clamp(.9375rem,1.042vw,1.25rem)]"
          >
            <Link
              href="#contact"
              className={cn(
                buttonVariants({ variant: "secondary" }),
                "min-w-32 lg:min-h-[clamp(2.9375rem,3.264vw,3.9167rem)] lg:min-w-0 lg:rounded-[clamp(.625rem,.694vw,.8333rem)] lg:px-[clamp(1.25rem,1.389vw,1.6667rem)] lg:py-0 lg:text-[clamp(1.125rem,1.25vw,1.5rem)]",
              )}
            >
              Get Started
            </Link>
            <Link
              href="#contact"
              className={cn(
                buttonVariants({ variant: "primary" }),
                "min-w-32 lg:min-h-[clamp(2.9375rem,3.264vw,3.9167rem)] lg:min-w-0 lg:rounded-[clamp(.625rem,.694vw,.8333rem)] lg:px-[clamp(1.25rem,1.389vw,1.6667rem)] lg:py-0 lg:text-[clamp(1.125rem,1.25vw,1.5rem)]",
              )}
            >
              Talk To Us
            </Link>
          </div>
        </div>
      </Container>

      <div className="pointer-events-none absolute right-0 bottom-[-1px] left-0 z-20 h-[clamp(7.5rem,15vh,10rem)] lg:bottom-[-0.519vh] lg:h-[32.495vh]">
        <Image
          src={figmaAssets.hero.pageWave}
          alt=""
          fill
          className="scale-x-[-1] object-fill"
          sizes="100vw"
        />
      </div>
    </section>
  );
}
