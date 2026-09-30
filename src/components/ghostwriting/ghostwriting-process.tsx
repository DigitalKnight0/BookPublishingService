import Image from "next/image";

import { AccentText, Heading } from "@/components/ui";
import type { ServicePageConfig } from "@/content/service-pages";
import { figmaAssets } from "@/design-system";

export function SingleServiceProcess({
  service,
}: {
  service: ServicePageConfig;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-white px-5 pt-20 pb-52 text-ink sm:px-10 lg:h-[clamp(75rem,83.42vw,100.104rem)] lg:px-[6.944vw] lg:pt-[clamp(6.25rem,6.944vw,8.333rem)] lg:pb-[clamp(16rem,17.778vw,21.333rem)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[-2.222vw] right-[-72.92vw] z-[1] hidden h-[75.112vw] w-[102.453vw] overflow-hidden lg:block"
      >
        <div className="absolute top-0 left-[-35.57%] h-[100.78%] w-[135.58%]">
          <Image
            src={figmaAssets.ghostwritingPage.processBooks}
            alt=""
            fill
            unoptimized
            className="object-fill"
            sizes="139vw"
          />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[9.653vw] left-[-89.789vw] z-[1] hidden h-[52.847vw] w-[118.785vw] overflow-hidden lg:block"
      >
        <div className="absolute top-0 left-[-0.01%] h-[143.23%] w-[116.94%]">
          <Image
            src={figmaAssets.ghostwritingPage.processBooks}
            alt=""
            fill
            unoptimized
            className="object-fill"
            sizes="139vw"
          />
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-[-1px] z-[2] h-[13rem] sm:h-[15rem] lg:h-[clamp(16.375rem,18.203vw,21.8435rem)]"
      >
        <Image
          src={figmaAssets.ghostwritingPage.processWave}
          alt=""
          fill
          unoptimized
          className="object-fill"
          sizes="100vw"
        />
      </div>

      <div
        data-reveal="up"
        className="relative z-10 mx-auto flex max-w-[47rem] flex-col items-center text-center lg:w-[min(48.952vw,58.742rem)] lg:max-w-none"
      >
        <Heading
          as="h2"
          size="display"
          align="center"
          className="lg:text-[clamp(3.5rem,3.889vw,4.6667rem)]"
        >
          Simple Steps To Start <AccentText>{service.processAccent}</AccentText>{" "}
          With Us
        </Heading>
        <p className="mt-2.5 max-w-[33.582rem] text-base leading-[1.2] lg:max-w-[min(37.313vw,44.776rem)] lg:text-[clamp(1rem,1.111vw,1.3333rem)]">
          {service.processDescription}
        </p>
      </div>

      <div className="relative z-10 mx-auto mt-[5.125rem] grid w-full max-w-[57.3125rem] gap-x-[4.0625rem] gap-y-16 lg:mt-[clamp(3.125rem,3.472vw,4.1667rem)] lg:max-w-[min(60.694vw,72.833rem)] lg:grid-cols-2 lg:items-start lg:gap-x-[clamp(4.0625rem,4.514vw,5.4167rem)] lg:gap-y-[clamp(3.5rem,3.889vw,4.6667rem)]">
        {service.processSteps.map((step, index) => (
          <article
            key={step.number}
            className={index % 2 === 1 ? "lg:translate-y-[clamp(3.5rem,3.889vw,4.6667rem)]" : undefined}
          >
            <div data-reveal="scale" data-reveal-delay={(index % 3) + 1}>
              <div
                className={`group/step relative min-h-[10.25rem] rounded-[1.25rem] border border-brand p-6 pt-10 shadow-[0_12px_28px_rgba(2,48,71,.06)] transition-[transform,box-shadow,border-color] duration-300 ease-out before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(180deg,#219ebc_0%,#023047_100%)] before:opacity-0 before:transition-opacity before:duration-300 hover:-translate-y-1.5 hover:border-transparent hover:shadow-[0_18px_40px_rgba(2,48,71,.2)] hover:before:opacity-100 sm:p-8 lg:rounded-[clamp(1.25rem,1.389vw,1.6667rem)] lg:p-[clamp(2rem,2.222vw,2.6667rem)] ${
                  index >= 4
                    ? "lg:min-h-[clamp(12.828rem,14.253vw,17.1042rem)]"
                    : "lg:min-h-[clamp(11.625rem,12.899vw,15.4792rem)]"
                }`}
                style={{
                  background:
                    "linear-gradient(180deg, #ffffff 0%, #cfeaf1 100%)",
                }}
              >
                <span className="bg-gradient-action absolute top-[-2rem] left-5 z-20 inline-flex size-14 items-center justify-center rounded-[0.795rem] border border-white/30 text-[1.432rem] font-medium text-white transition-[transform,box-shadow] duration-300 ease-out group-hover/step:scale-110 group-hover/step:shadow-[0_8px_22px_rgba(2,48,71,.32)] lg:top-[calc(-1*clamp(2rem,2.222vw,2.6667rem))] lg:left-[calc(-1*clamp(2rem,2.222vw,2.6667rem))] lg:size-[clamp(3.5rem,3.889vw,4.6667rem)] lg:rounded-[clamp(.795rem,.884vw,1.06rem)] lg:text-[clamp(1.432rem,1.591vw,1.909rem)]">
                  {step.number}
                </span>
                <Heading
                  as="h3"
                  size="subheading"
                  className="relative z-10 text-2xl transition-colors duration-300 group-hover/step:text-white lg:text-[clamp(1.5rem,1.667vw,2rem)] lg:leading-[1.4]"
                >
                  {step.title}
                </Heading>
                <p className="relative z-10 mt-2.5 text-base leading-[1.2] transition-colors duration-300 group-hover/step:text-white lg:text-[clamp(1rem,1.111vw,1.3333rem)]">
                  {step.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
