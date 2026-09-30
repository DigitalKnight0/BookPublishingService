import {
  BadgeCheck,
  Barcode,
  BookImage,
  BookOpen,
  FileCheck,
  FileText,
  Globe,
  Headphones,
  LayoutTemplate,
  Megaphone,
  Palette,
  PenTool,
  Printer,
  TabletSmartphone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { AccentText, buttonVariants, Heading } from "@/components/ui";
import { figmaAssets } from "@/design-system";

const services = [
  {
    title: "Ghost Writing",
    description:
      "We turn your idea into a finished manuscript in your voice.",
    image: figmaAssets.services.timelineMedia.ghostwriting,
    position: "center 48%",
    icon: PenTool,
    href: "/services/ghostwriting",
  },
  {
    title: "Book Editing",
    description:
      "We shape, sharpen, and polish every page.",
    image: figmaAssets.services.timelineMedia.editing,
    position: "center",
    icon: FileText,
    href: "/services/book-editing",
  },
  {
    title: "Design Services",
    description:
      "We create the cover, the interior, and any original art.",
    image: figmaAssets.services.timelineMedia.design,
    position: "center",
    icon: Palette,
    href: "/services/design-services",
  },
  {
    title: "Publishing Service",
    description:
      "We get your book listed with retailers worldwide.",
    image: figmaAssets.services.timelineMedia.publishing,
    position: "center",
    icon: BookOpen,
    href: "/services/publishing",
  },
  {
    title: "Audiobook Production",
    description:
      "We record, edit, master, and deliver a professional listening experience.",
    image: figmaAssets.services.timelineMedia.audiobook,
    position: "center 40%",
    icon: Headphones,
    href: "/services/audiobook-production",
  },
  {
    title: "Proofreading",
    description:
      "We clear out the final typos, spacing issues, and tiny slips before publication.",
    image: "/assets/generated/services/proofreading.png",
    position: "center",
    icon: FileCheck,
    href: "/services/proofreading",
  },
  {
    title: "Cover Design",
    description:
      "We create a cover that earns attention and speaks to the right reader.",
    image: "/assets/generated/services/cover-design.png",
    position: "center",
    icon: Palette,
    href: "/services/cover-design",
  },
  {
    title: "Interior Formatting",
    description:
      "We set every page for comfortable reading in print and on screen.",
    image: "/assets/generated/services/interior-formatting.png",
    position: "center",
    icon: LayoutTemplate,
    href: "/services/interior-formatting",
  },
  {
    title: "Book Illustration",
    description:
      "We develop original artwork from the first sketch to the finished page.",
    image: "/assets/generated/services/book-illustration.png",
    position: "center",
    icon: BookImage,
    href: "/services/book-illustration",
  },
  {
    title: "eBook and Kindle",
    description:
      "We build and test digital editions that work beautifully on every device.",
    image: "/assets/generated/services/ebook-kindle.png",
    position: "center",
    icon: TabletSmartphone,
    href: "/services/ebook-kindle",
  },
  {
    title: "Author Branding",
    description:
      "We shape a recognizable author identity that can grow beyond one book.",
    image: "/assets/generated/services/author-branding.png",
    position: "center",
    icon: BadgeCheck,
    href: "/services/author-branding",
  },
  {
    title: "ISBN Registration",
    description:
      "We handle ISBN, barcode, copyright, and metadata administration for you.",
    image: "/assets/generated/services/isbn-registration.png",
    position: "center",
    icon: Barcode,
    href: "/services/isbn-registration",
  },
  {
    title: "Printing Services",
    description:
      "We arrange premium print-on-demand or larger print runs in your chosen finish.",
    image: "/assets/generated/services/printing-services.png",
    position: "center",
    icon: Printer,
    href: "/services/printing-services",
  },
  {
    title: "Global Distribution",
    description:
      "We place your finished book in front of retailers and readers worldwide.",
    image: "/assets/generated/services/global-distribution.png",
    position: "center",
    icon: Globe,
    href: "/services/global-distribution",
  },
  {
    title: "Book Marketing",
    description:
      "We help readers find your book and keep it selling.",
    image: figmaAssets.services.timelineMedia.marketing,
    position: "center",
    icon: Megaphone,
    href: "/services/book-marketing",
  },
] as const;

export function PublishingServicesGrid() {
  return (
    <section
      id="services"
      className="scroll-mt-20 bg-white px-5 py-20 text-ink sm:px-10 lg:px-[6.944vw] lg:py-[6.25rem]"
    >
      <div className="mx-auto max-w-[77.5rem]">
        <div
          data-reveal="up"
          className="mx-auto flex max-w-[45.5rem] flex-col items-center text-center"
        >
          <Heading as="h2" size="display" align="center">
            Everything It Takes <AccentText>To Publish Your Own Book</AccentText>
          </Heading>
          <p className="mt-2.5 max-w-[38.625rem] text-base leading-[1.2]">
            Choose a single service or bring the full project under one roof.
          </p>
        </div>

        <div className="mt-[3.125rem] grid gap-x-5 gap-y-[3.125rem] sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const ServiceIcon = service.icon;

            return (
              <article
                key={service.title}
                data-reveal="scale"
                data-reveal-delay={(index % 3) + 1}
                className="group/service"
              >
                <div
                  data-motion-media
                  className="relative h-[13.834rem] overflow-hidden rounded-2xl bg-surface-soft shadow-sm transition-[transform,box-shadow] duration-500 ease-out group-hover/service:-translate-y-1 group-hover/service:shadow-[0_18px_38px_rgba(2,48,71,.18)] group-focus-within/service:-translate-y-1 group-focus-within/service:shadow-[0_18px_38px_rgba(2,48,71,.18)]"
                >
                  <Link
                    href={service.href}
                    aria-label={`View ${service.title} services`}
                    className="absolute inset-0 z-30 rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-white"
                  />
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 ease-out group-hover/service:scale-[1.045] group-focus-within/service:scale-[1.045]"
                    style={{ objectPosition: service.position }}
                    sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 z-10 bg-[rgba(2,48,71,.58)] opacity-0 transition-opacity duration-500 ease-out group-hover/service:opacity-100 group-focus-within/service:opacity-100" />
                  <div className="absolute inset-0 z-20 flex scale-75 items-center justify-center opacity-0 transition-[opacity,transform] duration-500 ease-out group-hover/service:scale-100 group-hover/service:opacity-100 group-focus-within/service:scale-100 group-focus-within/service:opacity-100">
                    <ServiceIcon
                      aria-hidden="true"
                      className="size-[4.25rem] text-white drop-shadow-[0_5px_12px_rgba(0,0,0,.35)]"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <Heading as="h3" size="subheading" className="text-xl">
                    <Link
                      href={service.href}
                      className="transition-colors duration-300 group-hover/service:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                    >
                      {service.title}
                    </Link>
                  </Heading>
                  <p className="mt-1.5 max-w-[15.3125rem] text-base leading-[1.2]">
                    {service.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <div data-reveal="up" className="mt-[3.125rem] flex justify-center">
          <Link
            href="#contact"
            className={buttonVariants({ variant: "primary", size: "md" })}
          >
            Explore More
          </Link>
        </div>
      </div>
    </section>
  );
}
