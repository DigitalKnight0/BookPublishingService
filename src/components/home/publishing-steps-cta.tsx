import Image from "next/image";
import Link from "next/link";

import { buttonVariants, Heading } from "@/components/ui";
import { figmaAssets } from "@/design-system";
import { cn } from "@/lib/utils";

export function PublishingStepsCta() {
  return (
    <section className="bg-gradient-section relative isolate min-h-[32rem] overflow-hidden text-white lg:h-[clamp(32.1875rem,35.764vw,42.9167rem)] lg:min-h-0">
      <div
        aria-hidden="true"
        data-reveal="right"
        className="pointer-events-none absolute z-0 hidden lg:right-[clamp(-7.1844rem,-5.987vw,-5.388rem)] lg:bottom-[clamp(-9.0988rem,-7.582vw,-6.825rem)] lg:block lg:h-[clamp(41.6335rem,46.259vw,55.5114rem)] lg:w-[clamp(58.7768rem,65.307vw,78.369rem)]"
      >
        <Image
          src={figmaAssets.cta.booksCompositeBackground}
          alt=""
          fill
          className="z-0 object-cover opacity-40 [mask-image:linear-gradient(90deg,transparent_0%,black_19%,black_100%)]"
          sizes="65vw"
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[32%] bg-gradient-to-b from-[#219ebc] from-[22%] to-transparent" />
        <Image
          src={figmaAssets.cta.booksComposite}
          alt=""
          fill
          className="z-20 object-contain"
          sizes="65vw"
        />
      </div>

      <div className="relative z-10 flex min-h-[32rem] items-center px-5 py-16 sm:px-10 lg:h-full lg:min-h-0 lg:px-[6.944vw] lg:pt-[clamp(3.125rem,3.472vw,4.1667rem)] lg:pb-[clamp(5.8125rem,6.458vw,7.75rem)]">
        <div
          data-reveal="left"
          className="max-w-[39rem] lg:w-[min(43.316vw,51.979rem)] lg:max-w-none"
        >
          <Heading
            as="h2"
            size="display"
            className="text-white lg:text-[clamp(3.5rem,3.889vw,4.6667rem)] lg:leading-[1.4]"
          >
            Publish Your Book in Simple Steps with Our Expert Team
          </Heading>
          <p className="mt-2.5 max-w-[27.25rem] text-base leading-[1.2] text-white lg:mt-[clamp(.625rem,.694vw,.8333rem)] lg:max-w-[min(30.299vw,36.359rem)] lg:text-[clamp(1rem,1.111vw,1.3333rem)] lg:leading-[normal]">
            With affordable, customizable packages, we make it easy to publish
            your book and reach readers on leading global platforms
          </p>
          <Link
            href="/#contact"
            className={cn(
              buttonVariants({ variant: "secondary", size: "md" }),
              "mt-10 lg:mt-[clamp(2.5rem,2.778vw,3.3333rem)] lg:min-h-[clamp(2.9375rem,3.247vw,3.8958rem)] lg:rounded-[clamp(.625rem,.694vw,.8333rem)] lg:px-[clamp(1.25rem,1.389vw,1.6667rem)] lg:py-0 lg:text-[clamp(1.125rem,1.25vw,1.5rem)]",
            )}
          >
            Chat with an Expert
          </Link>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none relative mx-auto -mt-10 h-[25rem] w-[39rem] max-w-[115vw] lg:hidden"
      >
        <Image
          src={figmaAssets.cta.booksCompositeBackground}
          alt=""
          fill
          className="object-cover opacity-25 [mask-image:linear-gradient(180deg,transparent_0%,black_18%,black_100%)]"
          sizes="115vw"
        />
        <Image
          src={figmaAssets.cta.booksComposite}
          alt=""
          fill
          className="object-contain object-bottom"
          sizes="115vw"
        />
      </div>
    </section>
  );
}
