import Image from "next/image";
import Link from "next/link";

import { AccentText, buttonVariants, Heading } from "@/components/ui";
import { figmaAssets } from "@/design-system";
import { cn } from "@/lib/utils";

import { ServicesTimelineProgress } from "./services-timeline-progress";

const services = [
  {
    title: (
      <>
        <AccentText>Ghost</AccentText> Writing
      </>
    ),
    label: "Ghost Writing",
    description:
      "You bring the story. A writer who suits your subject understands your voice and style, then gets it all down so the pages sound like you.",
    image: figmaAssets.services.timelineMedia.ghostwriting,
    imagePosition: "center 56%",
    href: "/services/ghostwriting",
  },
  {
    title: (
      <>
        Book <AccentText>Editing</AccentText>
      </>
    ),
    label: "Book Editing",
    description:
      "The best editing is invisible. We settle the big structural questions first, then work down to rhythm and word choice until reading feels seamless.",
    image: figmaAssets.services.timelineMedia.editing,
    imagePosition: "center",
    href: "/services/book-editing",
  },
  {
    title: (
      <>
        <AccentText>Design</AccentText> Services
      </>
    ),
    label: "Design Services",
    description:
      "We design covers that earn a second look, set interiors so every page breathes, and create original illustrations that make the story sing.",
    image: figmaAssets.services.timelineMedia.design,
    imagePosition: "center",
    href: "/services/design-services",
  },
  {
    title: (
      <>
        Publishing <AccentText>Service</AccentText>
      </>
    ),
    label: "Publishing Service",
    description:
      "Think of us as the crew that transforms your draft into a book that readers would buy. Every call we make centers your genre and goals.",
    image: figmaAssets.services.timelineMedia.publishing,
    imagePosition: "center",
    href: "/services/publishing",
  },
  {
    title: (
      <>
        Audiobook <AccentText>Production</AccentText>
      </>
    ),
    label: "Audiobook Production",
    description:
      "More people listen to books than ever. We record yours with professional narration in a real studio, then make it publicly accessible.",
    image: figmaAssets.services.timelineMedia.audiobook,
    imagePosition: "center",
    href: "/services/audiobook-production",
  },
  {
    title: (
      <>
        Book <AccentText>Marketing</AccentText>
      </>
    ),
    label: "Book Marketing",
    description:
      "Finishing the book is half the job. We plan the launch, gather early reviews, and keep your title in the light long after release week.",
    image: figmaAssets.services.timelineMedia.marketing,
    imagePosition: "center",
    href: "/services/book-marketing",
  },
] as const;

export function ServicesTimelineSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white text-ink"
    >
      <div
        data-reveal="up"
        className="mx-auto flex max-w-[60rem] flex-col items-center px-5 pt-2 text-center sm:px-10 lg:max-w-[min(66.608vw,79.9303rem)] lg:px-0"
      >
        <Heading
          as="h2"
          size="display"
          align="center"
          className="lg:text-[clamp(3.5rem,3.889vw,4.6667rem)]"
        >
          One Platform For <AccentText>Every Part Of The Job</AccentText>
        </Heading>
        <p className="mt-2.5 max-w-[38.625rem] text-base leading-[1.2] lg:mt-[clamp(.625rem,.694vw,.8333rem)] lg:max-w-[min(42.917vw,51.5rem)] lg:text-[clamp(1rem,1.111vw,1.3333rem)] lg:leading-[normal]">
          From the first rough draft to a worldwide launch, all services under
          one roof.
        </p>
      </div>

      <div className="relative mt-[3.125rem] space-y-14 lg:mt-[clamp(3.125rem,3.472vw,4.1667rem)] lg:space-y-[clamp(3.125rem,3.472vw,4.1667rem)]">
        <ServicesTimelineProgress />

        {services.map((service, index) => {
          const imageFirst = index % 2 === 1;

          const content = (
            <div
              data-reveal={imageFirst ? "right" : "left"}
              className={cn(
                "flex min-h-full items-center px-5 py-2 sm:px-10 lg:px-0",
                imageFirst
                  ? "lg:justify-start lg:pr-[6.944vw]"
                  : "lg:justify-end lg:pl-[6.944vw]",
              )}
            >
              <div className="w-full max-w-[34.9375rem] lg:w-[min(38.819vw,46.3333rem)] lg:max-w-none">
                <Heading
                  as="h3"
                  size="service"
                  className="lg:text-[clamp(3rem,3.333vw,4rem)]"
                >
                  {service.title}
                </Heading>
                <p className="mt-5 text-base leading-[1.2] lg:mt-[clamp(1.25rem,1.389vw,1.6667rem)] lg:text-[clamp(1rem,1.111vw,1.3333rem)] lg:leading-[normal]">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className={cn(
                    buttonVariants({ variant: "primary", size: "sm" }),
                    "mt-5 min-h-[2.9375rem] px-5 text-lg lg:mt-[clamp(1.25rem,1.389vw,1.6667rem)] lg:min-h-[clamp(2.9375rem,3.247vw,3.8958rem)] lg:rounded-[clamp(.625rem,.694vw,.8333rem)] lg:px-[clamp(1.25rem,1.389vw,1.6667rem)] lg:text-[clamp(1.125rem,1.25vw,1.5rem)]",
                  )}
                >
                  Read more
                </Link>
              </div>
            </div>
          );

          const media = (
            <div
              data-reveal={imageFirst ? "left" : "right"}
              data-motion-media
              className={cn(
                "relative min-h-[19rem] overflow-hidden sm:min-h-[25rem] lg:min-h-0 lg:h-full",
                imageFirst
                  ? "rounded-r-[2rem] lg:rounded-r-[clamp(2rem,2.222vw,2.6667rem)]"
                  : "rounded-l-[2rem] lg:rounded-l-[clamp(2rem,2.222vw,2.6667rem)]",
              )}
            >
              <Image
                src={service.image}
                alt={service.label}
                fill
                className="object-cover"
                style={{ objectPosition: service.imagePosition }}
                sizes="(min-width: 1024px) 46vw, 100vw"
              />
            </div>
          );

          return (
            <article
              key={service.label}
              className={cn(
                "relative z-10 grid gap-7 lg:h-[clamp(32.3278rem,35.92vw,43.1037rem)] lg:items-stretch lg:gap-[clamp(7.3125rem,8.125vw,9.75rem)]",
                imageFirst
                  ? "lg:grid-cols-[46.111vw_45.764vw]"
                  : "lg:grid-cols-[45.764vw_46.111vw]",
              )}
            >
              {imageFirst ? (
                <>
                  <div className="order-2 lg:order-1">{media}</div>
                  <div className="order-1 lg:order-2">{content}</div>
                </>
              ) : (
                <>
                  <div>{content}</div>
                  <div>{media}</div>
                </>
              )}
            </article>
          );
        })}
      </div>

      <div className="h-24 lg:h-[clamp(6.25rem,6.944vw,8.3333rem)]" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[clamp(16.375rem,18.203vw,21.8435rem)]">
        <Image
          src={figmaAssets.services.sectionWave}
          alt=""
          fill
          className="object-fill"
          sizes="100vw"
        />
      </div>
    </section>
  );
}
