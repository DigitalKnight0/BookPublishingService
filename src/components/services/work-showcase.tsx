import Image from "next/image";

import { AccentText, Heading } from "@/components/ui";
import { figmaAssets } from "@/design-system";

const bookNames = [
  "Carrie Anne’s World",
  "Heir to the Gift",
  "The Museum of Extraordinary Things",
  "Resilience",
  "The Museum of Extraordinary Things",
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
          Check out Our <AccentText>Work</AccentText>
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
        className="relative z-10 mt-[3.125rem] flex flex-wrap items-center justify-center gap-3 px-5 text-base font-medium sm:gap-[1.875rem] sm:text-xl lg:mt-[clamp(3.125rem,3.472vw,4.1667rem)] lg:gap-[clamp(1.875rem,2.083vw,2.5rem)] lg:text-[clamp(1.25rem,1.389vw,1.6667rem)]"
      >
        <span className="bg-gradient-action inline-flex min-h-[3.0625rem] items-center rounded-[0.625rem] border border-white/30 px-5 text-white lg:min-h-[clamp(3.0625rem,3.403vw,4.0833rem)] lg:rounded-[clamp(.625rem,.694vw,.8333rem)] lg:px-[clamp(1.25rem,1.389vw,1.6667rem)]">
          Ghost Writing
        </span>
        <span>Creative Writing</span>
        <span>Wikipedia Writing</span>
      </div>

      <div className="launch-marquee relative z-10 mt-8 w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent_0%,black_5%,black_95%,transparent_100%)] lg:mt-[clamp(3.125rem,3.472vw,4.1667rem)]">
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
