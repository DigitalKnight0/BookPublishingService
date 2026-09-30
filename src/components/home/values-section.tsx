import Image from "next/image";

import { AccentText, Container, Heading } from "@/components/ui";
import { figmaAssets } from "@/design-system";

import { AnimatedCounter } from "./animated-counter";

const metrics = [
  { value: 250, label: "Native Writers" },
  { value: 10, label: "Years of Experience" },
  { value: 400, label: "Internationally Acclaimed Books" },
  { value: 700, label: "Books Written" },
  { value: 500, label: "Published Authors" },
  { value: 200, label: "In-House Experts" },
] as const;

const partnerLogos = [
  {
    name: "AuthorLab",
    src: figmaAssets.brand.partners.authorLab,
    width: 2480,
    height: 158,
    frameClassName:
      "h-[clamp(2.539rem,2.821vw,3.385rem)] w-[clamp(11.554rem,12.838vw,15.406rem)]",
    imageClassName:
      "absolute top-[-47.23%] left-[-3.11%] h-[194.46%] w-[670.76%] max-w-none",
  },
  {
    name: "Scribd",
    src: figmaAssets.brand.partners.scribd,
    width: 3840,
    height: 1065,
    frameClassName:
      "h-[clamp(1.76rem,1.956vw,2.347rem)] w-[clamp(6.346rem,7.051vw,8.461rem)]",
    imageClassName: "h-full w-full object-cover",
  },
  {
    name: "Ingram",
    src: figmaAssets.brand.partners.ingram,
    width: 600,
    height: 600,
    frameClassName:
      "h-[clamp(1.739rem,1.932vw,2.319rem)] w-[clamp(8.822rem,9.802vw,11.762rem)]",
    imageClassName:
      "absolute top-[-258.66%] left-[-3.6%] h-[600.95%] w-[118.47%] max-w-none",
  },
  {
    name: "BookPrinting.com",
    src: figmaAssets.brand.partners.bookPrinting,
    width: 500,
    height: 280,
    frameClassName:
      "h-[clamp(2.417rem,2.685vw,3.222rem)] w-[clamp(12.258rem,13.62vw,16.344rem)]",
    imageClassName: "h-full w-full object-cover",
  },
  {
    name: "IngramSpark",
    src: figmaAssets.brand.partners.ingramSpark,
    width: 921,
    height: 333,
    frameClassName:
      "h-[clamp(3.03rem,3.367vw,4.04rem)] w-[clamp(8.49rem,9.434vw,11.321rem)]",
    imageClassName:
      "absolute top-0 left-[0.64%] h-full w-[98.71%] max-w-none",
  },
  {
    name: "Kobo",
    src: figmaAssets.brand.partners.kobo,
    width: 500,
    height: 161,
    frameClassName:
      "h-[clamp(2.457rem,2.73vw,3.276rem)] w-[clamp(5.708rem,6.342vw,7.611rem)]",
    imageClassName:
      "absolute top-[-24.21%] left-[-58.02%] h-[151.66%] w-[202.73%] max-w-none",
  },
  {
    name: "Lulu",
    src: figmaAssets.brand.partners.lulu,
    width: 446,
    height: 160,
    frameClassName:
      "h-[clamp(1.926rem,2.14vw,2.568rem)] w-[clamp(5.368rem,5.964vw,7.157rem)]",
    imageClassName: "h-full w-full object-cover",
  },
] as const;

const principles = [
  {
    icon: figmaAssets.icons.quality,
    title: "Publishing Experts",
    description:
      "The people on your project have 15 years or more inside trade publishing, not learning on your dime.",
  },
  {
    icon: figmaAssets.icons.transparency,
    title: "Dedicated Project Manager",
    description:
      "One person owns your project from start to finish, so you never have to explain yourself twice.",
  },
  {
    icon: figmaAssets.icons.vision,
    title: "You Keep 100% Rights",
    description:
      "Your book stays yours. Every right and every royalty, with no asterisks.",
  },
  {
    icon: figmaAssets.icons.experience,
    title: "Global Distribution",
    description:
      "Your book reaches Amazon, Barnes & Noble, Ingram, Apple, Kobo, and plenty more, all over the world.",
  },
] as const;

export function ValuesSection() {
  return (
    <section id="about" className="bg-white text-ink">
      <Container className="max-w-none px-5 pt-10 sm:px-10 lg:px-[6.944vw] lg:pt-[clamp(2.5rem,2.778vw,3.3333rem)]">
        <div
          data-reveal="scale"
          className="relative mx-auto w-full max-w-[99.062rem] overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)]"
          aria-label="Publishing and distribution partners"
        >
          <div className="partner-marquee flex w-max items-center">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                aria-hidden={copy === 1}
                className="flex shrink-0 items-center gap-[clamp(2.5rem,2.778vw,3.333rem)] py-[clamp(.5625rem,.625vw,.75rem)] pr-[clamp(2.5rem,2.778vw,3.333rem)]"
              >
                {partnerLogos.map((logo) => (
                  <div
                    key={logo.name}
                    className={`relative shrink-0 overflow-hidden ${logo.frameClassName}`}
                  >
                    <Image
                      src={logo.src}
                      alt={copy === 0 ? logo.name : ""}
                      width={logo.width}
                      height={logo.height}
                      className={logo.imageClassName}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 grid gap-16 pb-24 lg:mt-[clamp(8.375rem,9.306vw,11.1667rem)] lg:grid-cols-[1.034fr_1fr] lg:gap-[clamp(3.125rem,3.472vw,4.1667rem)] lg:pb-[clamp(8.375rem,9.306vw,11.1667rem)]">
          <div
            data-reveal="left"
            className="order-2 grid self-start gap-y-12 sm:grid-cols-2 sm:gap-x-[1.875rem] lg:order-1 lg:gap-x-[clamp(1.875rem,2.083vw,2.5rem)] lg:gap-y-[clamp(3rem,3.403vw,4.0833rem)]"
          >
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="flex min-h-[8.5625rem] flex-col justify-center border-l border-brand pl-[1.875rem] lg:min-h-[clamp(7.9375rem,8.819vw,10.5833rem)] lg:pl-[clamp(1.875rem,2.083vw,2.5rem)]"
              >
                <p className="text-gradient-brand font-display text-5xl leading-[1.15] tracking-[0.01em] lg:text-[clamp(3.5rem,3.889vw,4.6667rem)] lg:leading-[1.2]">
                  <AnimatedCounter value={metric.value} suffix="+" />
                </p>
                <p className="mt-5 text-base leading-tight lg:mt-[clamp(1.25rem,1.389vw,1.6667rem)] lg:text-[clamp(1rem,1.111vw,1.3333rem)]">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          <div data-reveal="right" className="order-1 lg:order-2">
            <Heading
              as="h2"
              size="display"
              className="lg:text-[clamp(3.5rem,3.889vw,4.6667rem)]"
            >
              Craft We <AccentText>Refuse To Rush</AccentText>
            </Heading>
            <p className="mt-5 max-w-[36.5625rem] text-base leading-[1.2] lg:mt-[clamp(1.875rem,2.083vw,2.5rem)] lg:max-w-none lg:text-[clamp(1rem,1.111vw,1.3333rem)] lg:leading-[normal]">
              We treat a debut as seriously as a tenth title. From the editing
              to the print run, all of it gets full attention.
            </p>

            <div className="mt-[1.875rem] space-y-5 lg:mt-[clamp(1.875rem,2.083vw,2.5rem)] lg:space-y-[clamp(1.25rem,1.389vw,1.6667rem)]">
              {principles.map((principle) => (
                <div
                  key={principle.title}
                  className="flex items-start gap-2.5 lg:items-center lg:gap-[clamp(.625rem,.694vw,.8333rem)]"
                >
                  <div className="bg-gradient-action flex size-[3.3125rem] shrink-0 items-center justify-center rounded-[0.625rem] lg:size-[clamp(3.3125rem,3.681vw,4.4167rem)] lg:rounded-[clamp(.625rem,.694vw,.8333rem)]">
                    <Image
                      src={principle.icon}
                      alt=""
                      width={28}
                      height={28}
                      unoptimized
                      className="lg:size-[clamp(1.75rem,1.944vw,2.3333rem)]"
                    />
                  </div>
                  <div className="pt-0.5 text-base leading-[1.2] lg:pt-0 lg:text-[clamp(1rem,1.111vw,1.3333rem)] lg:leading-[normal]">
                    <p className="font-medium">{principle.title}</p>
                    <p>{principle.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
