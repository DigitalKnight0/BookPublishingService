import Image from "next/image";
import Link from "next/link";

import { buttonVariants, Heading } from "@/components/ui";
import { figmaAssets } from "@/design-system";
import { cn } from "@/lib/utils";

export function PublishingServicesCta() {
  return (
    <section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#005f8e_0%,#219ebc_100%)] text-white lg:overflow-visible lg:min-h-[clamp(36.75rem,41.076vw,49.2917rem)]">
      <div
        aria-hidden="true"
        data-reveal="right"
        className="pointer-events-none absolute right-[2.137vw] z-0 hidden lg:top-[clamp(-6.7998rem,-5.666vw,-5.1rem)] lg:block lg:h-[clamp(44.1rem,48.999vw,58.7992rem)] lg:w-[clamp(45.4668rem,50.519vw,60.6224rem)]"
      >
        <Image
          src={figmaAssets.cta.publishingServices}
          alt=""
          fill
          className="object-fill"
          sizes="51vw"
        />
        <div className="absolute top-[8.618%] left-[9.057%] h-[83.32%] w-[88.352%]">
          <Image
            src={figmaAssets.cta.publishingServicesOutline}
            alt=""
            fill
            className="object-fill"
            sizes="45vw"
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex w-full items-start px-5 pt-16 pb-0 sm:px-10 lg:min-h-[clamp(36.75rem,41.076vw,49.2917rem)] lg:items-center lg:px-[6.944vw] lg:py-[clamp(6.25rem,6.944vw,8.3333rem)]">
        <div
          data-reveal="left"
          className="max-w-[39rem] lg:w-[min(43.316vw,51.979rem)] lg:max-w-none"
        >
          <Heading
            as="h2"
            size="display"
            className="text-white lg:text-[clamp(3.5rem,3.889vw,4.6667rem)] lg:leading-[1.4]"
          >
            Ready To Publish?
            <br />
            Check Our Book Publication Solutions.
          </Heading>
          <p className="mt-2.5 max-w-[27.25rem] text-base leading-[1.2] lg:mt-[clamp(.625rem,.694vw,.8333rem)] lg:max-w-[min(30.299vw,36.359rem)] lg:text-[clamp(1rem,1.111vw,1.3333rem)] lg:leading-[normal]">
            No matter your background or experience, we&apos;re committed to
            helping you publish with confidence and share your story with
            readers around the world.
          </p>
          <Link
            href="/#contact"
            data-live-chat
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
        className="pointer-events-none relative mx-auto mt-8 aspect-[2/1] w-full max-w-[42rem] lg:hidden"
      >
        <Image
          src={figmaAssets.cta.publishingServices}
          alt=""
          fill
          className="object-contain object-bottom"
          sizes="100vw"
        />
      </div>
    </section>
  );
}
