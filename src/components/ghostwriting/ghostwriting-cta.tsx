import Image from "next/image";
import Link from "next/link";

import { buttonVariants, Heading } from "@/components/ui";
import type { ServicePageConfig } from "@/content/service-pages";
import { figmaAssets } from "@/design-system";
import { cn } from "@/lib/utils";

export function SingleServiceCta({
  service,
}: {
  service: ServicePageConfig;
}) {
  return (
    <section className="relative isolate min-h-[43rem] overflow-hidden bg-[linear-gradient(180deg,#005f8e_0%,#219ebc_100%)] text-white lg:h-[clamp(30.8125rem,34.254vw,41.104rem)] lg:min-h-0">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-[2%] z-0 h-[23rem] w-[155%] sm:left-[22%] sm:w-[105%] lg:top-[clamp(2.0625rem,2.309vw,2.7708rem)] lg:bottom-auto lg:left-[44.073vw] lg:h-[clamp(28.609rem,31.786vw,38.1436rem)] lg:w-[73.015vw]"
        style={{
          WebkitMaskImage: `url(${figmaAssets.ghostwritingPage.ctaMask})`,
          maskImage: `url(${figmaAssets.ghostwritingPage.ctaMask})`,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskSize: "100% 100%",
          maskSize: "100% 100%",
        }}
      >
        <Image
          src={figmaAssets.ghostwritingPage.ctaBooks}
          alt=""
          fill
          unoptimized
          className="object-cover object-bottom"
          sizes="(min-width: 1024px) 74vw, 155vw"
        />
      </div>

      <div className="relative z-10 flex min-h-[43rem] items-start px-5 pt-16 pb-[23rem] sm:px-10 lg:h-full lg:min-h-0 lg:items-center lg:px-[6.944vw] lg:py-0">
        <div data-reveal="left" className="max-w-[38rem] lg:w-[37.128vw] lg:max-w-none">
          <Heading
            as="h2"
            size="display"
            className="text-white lg:text-[clamp(3.5rem,3.889vw,4.6667rem)] lg:leading-[1.4]"
          >
            {service.ctaTitle}
          </Heading>
          <p className="mt-2.5 max-w-[31rem] text-base leading-normal lg:w-[min(30.556vw,36.667rem)] lg:max-w-none lg:text-[clamp(1rem,1.111vw,1.3333rem)]">
            {service.ctaDescription}
          </p>
          <Link
            href="#contact"
            className={cn(
              buttonVariants({ variant: "secondary", size: "md" }),
              "mt-10 lg:mt-[clamp(2.5rem,2.778vw,3.3333rem)] lg:min-h-[clamp(2.9375rem,3.264vw,3.9167rem)] lg:rounded-[clamp(.625rem,.694vw,.8333rem)] lg:px-[clamp(1.25rem,1.389vw,1.6667rem)] lg:py-0 lg:text-[clamp(1.125rem,1.25vw,1.5rem)]",
            )}
          >
            {service.ctaButton}
          </Link>
        </div>
      </div>
    </section>
  );
}
