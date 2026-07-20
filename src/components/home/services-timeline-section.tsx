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
      "Transform your ideas into a captivating manuscript by collaborating with skilled ghostwriters who not only understand your unique voice but also help shape your vision into a compelling narrative. These professionals are dedicated to crafting a book that resonates deeply with readers across the globe, ensuring that your message is communicated effectively and engagingly. With their expertise, you can bring your story to life in a way that truly connects with audiences everywhere.",
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
      "Our team of skilled editors is dedicated to enhancing your manuscript through a comprehensive process that includes developmental editing, line editing, and proofreading. We meticulously refine every aspect of your work, focusing on improving clarity, flow, structure, and accuracy. This thorough approach ensures that your book not only meets high standards but is also polished and ready for publication, captivating your readers from the very first page.",
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
      "Transform your book into a stunning visual experience with our comprehensive professional design solutions. We offer captivating cover designs that not only attract attention but also reflect the essence of your story. Our custom illustrations are tailored to bring your narrative to life, adding depth and character to your pages. Additionally, our expert formatting and typesetting services ensure that every word is presented beautifully, enhancing readability and engagement. Each visual element is meticulously crafted to elevate your story, ensuring it leaves a lasting impression on readers.",
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
      "Transform your manuscript from a polished draft into a published book with our comprehensive end-to-end publishing support. We ensure that your work is not only professionally produced but also effectively distributed to readers across the globe. Our dedicated team will guide you through every step of the process, from editing and design to marketing and sales, making sure your literary masterpiece reaches its full potential and finds its audience.",
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
      "Expand your audience significantly with our expertly produced audiobooks that feature high-quality narration and top-notch audio editing. We take your manuscript and transform it into an immersive listening experience that truly resonates with audiences on today’s leading audiobook platforms. Our team of skilled professionals ensures that every detail is meticulously crafted, allowing your story to shine and captivate listeners, ultimately broadening your reach and enhancing your brand’s presence in the audiobook market.",
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
      "Expand your readership by implementing customized marketing strategies that are specifically designed to enhance the visibility of your book. These strategies will not only help to strengthen your author brand but also facilitate meaningful connections between your work and the ideal audience across a variety of channels. By leveraging social media, email campaigns, and targeted promotions, you can effectively reach more readers and create a lasting impact in the literary community.",
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
        className="mx-auto flex max-w-[60rem] flex-col items-center px-5 text-center sm:px-10 lg:max-w-[min(66.608vw,79.9303rem)] lg:px-0"
      >
        <Heading
          as="h2"
          size="display"
          align="center"
          className="lg:text-[clamp(3.5rem,3.889vw,4.6667rem)]"
        >
          Comprehensive Publishing Solutions for{" "}
          <AccentText>Aspiring &amp; Established Authors</AccentText>
        </Heading>
        <p className="mt-2.5 max-w-[38.625rem] text-base leading-[1.2] lg:mt-[clamp(.625rem,.694vw,.8333rem)] lg:max-w-[min(42.917vw,51.5rem)] lg:text-[clamp(1rem,1.111vw,1.3333rem)] lg:leading-[normal]">
          At Book Publication Services, we provide end-to-end publishing
          services designed to transform your ideas into professionally
          published books. From perfecting every page to creating stunning
          visuals, our experienced team manages every stage with precision,
          creativity, and care, so you can focus on what matters most: your
          story.
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
