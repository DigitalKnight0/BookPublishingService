"use client";

import Image from "next/image";
import { useState } from "react";

import { AccentText, Heading } from "@/components/ui";
import { figmaAssets } from "@/design-system";
import { cn } from "@/lib/utils";

const bookNames = [
  "Carrie Anne’s World",
  "Heir to the Gift",
  "The Museum of Extraordinary Things",
  "Resilience",
  "The Museum of Extraordinary Things",
] as const;

const workCategories = [
  "Autobiography & Memoir",
  "Religion & Spirituality",
  "Children's Book",
  "Fantasy & Sci-Fi",
  "Thriller & Suspense",
  "Romance",
  "Cookbooks",
  "Self-Help",
  "Poetry",
] as const;

function WorkBook({ cover, name }: { cover: string; name: string }) {
  return (
    <div className="group/work-book flex w-[20.1414rem] shrink-0 flex-col items-center justify-center lg:w-[clamp(20.1414rem,22.379vw,26.8553rem)]">
      <div className="relative z-10 mb-[-4.2104rem] h-[18.0426rem] w-[13.2578rem] lg:mb-[calc(-1*clamp(4.2104rem,4.678vw,5.6138rem))] lg:h-[clamp(18.0426rem,20.047vw,24.0568rem)] lg:w-[clamp(13.2578rem,14.731vw,17.6771rem)]">
        <Image
          src={cover}
          alt={name}
          fill
          unoptimized
          className="object-contain transition-transform duration-500 ease-out group-hover/work-book:-translate-y-2 group-hover/work-book:scale-[1.025]"
          sizes="(min-width: 1024px) 15vw, 213px"
        />
      </div>
      <div className="relative h-[6.3818rem] w-[22.366rem] lg:h-[clamp(6.3818rem,7.091vw,8.509rem)] lg:w-[clamp(22.366rem,24.851vw,29.8213rem)]">
        <Image
          src={figmaAssets.process.shelf}
          alt=""
          fill
          unoptimized
          className="object-contain drop-shadow-[0_13px_11px_rgba(54,29,18,.32)]"
          sizes="(min-width: 1024px) 25vw, 358px"
        />
      </div>
    </div>
  );
}

export function WorkShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>(
    workCategories[0],
  );

  return (
    <section
      id="work"
      className="relative isolate overflow-hidden border-b-2 border-brand bg-surface-soft pt-[7.5rem] pb-[1.875rem] text-ink lg:border-b-[clamp(2px,.139vw,2.667px)] lg:pt-[clamp(6.25rem,6.944vw,8.3333rem)] lg:pb-[clamp(1.875rem,2.083vw,2.5rem)]"
    >
      <div className="pointer-events-none absolute -top-24 left-1/2 z-0 flex h-[20rem] w-[125%] -translate-x-1/2 items-center justify-center lg:top-[-9.946vw] lg:left-[-3.27vw] lg:h-[29.12vw] lg:w-[120.501vw] lg:translate-x-0">
        <div className="relative h-[16rem] w-full -scale-y-100 rotate-[2.87deg] lg:h-[23.17vw] lg:w-[119.492vw]">
          <Image
            src={figmaAssets.servicesPage.workWave}
            alt=""
            fill
            unoptimized
            className="object-fill"
            sizes="120vw"
          />
        </div>
      </div>

      <div
        data-reveal="up"
        className="relative z-10 mx-auto flex max-w-[45.5rem] flex-col items-center px-5 text-center sm:px-10 lg:w-[clamp(45.5rem,50.556vw,60.6667rem)] lg:max-w-none lg:px-0"
      >
        <Heading
          as="h2"
          size="display"
          align="center"
          className="lg:text-[clamp(3.5rem,3.889vw,4.6667rem)]"
        >
          Books We&apos;ve <AccentText>Helped Publish</AccentText>
        </Heading>
        <p className="mt-2.5 max-w-[38.625rem] text-base leading-[1.2] lg:mt-[clamp(.625rem,.694vw,.8333rem)] lg:w-[clamp(38.625rem,42.917vw,51.5rem)] lg:max-w-none lg:text-[clamp(1rem,1.111vw,1.3333rem)] lg:leading-normal">
          We make it easy for authors to get their manuscripts edited,
          proofread, and formatted and make them ready to be published for
          their readers.
        </p>
      </div>

      <div
        data-reveal="scale"
        data-reveal-delay="1"
        role="tablist"
        aria-label="Filter work by genre"
        className="relative z-10 mx-auto mt-[3.125rem] flex max-w-[78rem] flex-wrap items-center justify-center gap-2 px-5 text-sm font-medium sm:gap-2.5 sm:px-10 sm:text-[0.9375rem] lg:mt-[clamp(3.125rem,3.472vw,4.1667rem)] lg:gap-[clamp(.5rem,.556vw,.6667rem)] lg:px-0 lg:text-[clamp(.875rem,.972vw,1.1667rem)]"
      >
        {workCategories.map((category) => {
          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls="lp-work-carousel"
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "inline-flex min-h-[2.625rem] cursor-pointer items-center rounded-[0.625rem] border px-3.5 py-2 leading-tight transition-[color,background-color,border-color,transform,box-shadow] duration-300 active:scale-[.98] lg:min-h-[clamp(2.625rem,2.917vw,3.5rem)] lg:rounded-[clamp(.5rem,.556vw,.6667rem)] lg:px-[clamp(.75rem,.833vw,1rem)]",
                isActive
                  ? "border-white/30 bg-gradient-action text-white shadow-[0_8px_20px_rgba(2,48,71,.18)]"
                  : "border-transparent bg-white/80 text-ink hover:-translate-y-0.5 hover:border-brand/20 hover:bg-white",
              )}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div
        key={activeCategory}
        id="lp-work-carousel"
        role="tabpanel"
        aria-label={`${activeCategory} projects`}
        className="genre-content-enter launch-marquee relative z-10 mt-8 w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent_0%,black_5%,black_95%,transparent_100%)] lg:mt-[clamp(3.125rem,3.472vw,4.1667rem)]"
      >
        <div className="launch-marquee-track flex h-[22.4375rem] w-max items-center lg:h-[clamp(22.4375rem,24.931vw,29.9167rem)]">
          {[false, true].map((duplicate) => (
            <div
              key={duplicate ? "duplicate" : "original"}
              aria-hidden={duplicate || undefined}
              className="flex shrink-0 items-center gap-[3.1875rem] pr-[3.1875rem] lg:gap-[clamp(3.1875rem,3.542vw,4.25rem)] lg:pr-[clamp(3.1875rem,3.542vw,4.25rem)]"
            >
              {figmaAssets.process.launchBooks.map((cover, index) => (
                <WorkBook
                  key={`${duplicate ? "duplicate" : "original"}-${cover}-${index}`}
                  cover={cover}
                  name={duplicate ? "" : bookNames[index]}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
