import Image from "next/image";
import Link from "next/link";

import { buttonVariants, Heading } from "@/components/ui";
import { figmaAssets } from "@/design-system";
import { cn } from "@/lib/utils";

export function ConsultantCta() {
  return (
    <section
      id="contact"
      className="bg-gradient-section relative isolate min-h-[42rem] overflow-hidden text-white lg:h-[clamp(32.1875rem,35.764vw,42.9167rem)] lg:min-h-0"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-[5%] z-0 h-[21rem] w-[150%] sm:left-[20%] sm:w-[105%] lg:top-0 lg:left-[40.783vw] lg:h-[35.556vw] lg:w-[67.725vw]"
        style={{
          WebkitMaskImage: `url(${figmaAssets.aboutPage.ctaMask})`,
          maskImage: `url(${figmaAssets.aboutPage.ctaMask})`,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskSize: "100% 100%",
          maskSize: "100% 100%",
        }}
      >
        <Image
          src={figmaAssets.aboutPage.ctaBooks}
          alt=""
          fill
          unoptimized
          className="object-cover"
          sizes="(min-width: 1024px) 68vw, 150vw"
        />
      </div>

      <div className="relative z-10 flex min-h-[42rem] items-start px-5 pt-16 pb-[21rem] sm:px-10 lg:h-full lg:min-h-0 lg:items-center lg:px-[6.944vw] lg:pt-[clamp(3.125rem,3.472vw,4.1667rem)] lg:pb-[clamp(5.8125rem,6.458vw,7.75rem)]">
        <div data-reveal="left" className="max-w-[39rem] lg:w-[min(43.316vw,51.979rem)] lg:max-w-none">
          <Heading
            as="h2"
            size="display"
            className="text-wrap text-white lg:text-[clamp(3.5rem,3.889vw,4.6667rem)] lg:leading-[1.4]"
          >
            Not sure where to start? Talk to a Publishing Consultant.
          </Heading>
          <p className="mt-2.5 max-w-[27.25rem] text-base leading-normal lg:mt-[clamp(.625rem,.694vw,.8333rem)] lg:max-w-[min(30.299vw,36.359rem)] lg:text-[clamp(1rem,1.111vw,1.3333rem)]">
            With affordable, customizable packages, we make it easy to publish
            your book and reach readers on leading global platforms
          </p>
          <Link
            href="/#contact"
            className={cn(
              buttonVariants({ variant: "secondary", size: "md" }),
              "mt-10 lg:mt-[clamp(2.5rem,2.778vw,3.3333rem)] lg:min-h-[clamp(2.9375rem,3.264vw,3.9167rem)] lg:rounded-[clamp(.625rem,.694vw,.8333rem)] lg:px-[clamp(1.25rem,1.389vw,1.6667rem)] lg:py-0 lg:text-[clamp(1.125rem,1.25vw,1.5rem)]",
            )}
          >
            Chat with an Expert
          </Link>
        </div>
      </div>
    </section>
  );
}
