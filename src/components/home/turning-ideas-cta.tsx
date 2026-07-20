import Image from "next/image";
import Link from "next/link";

import { AccentText, buttonVariants, Heading } from "@/components/ui";
import { figmaAssets } from "@/design-system";

export function TurningIdeasCta() {
  return (
    <section className="relative isolate overflow-hidden bg-white text-ink lg:min-h-[clamp(35.890625rem,39.8785vw,47.8542rem)]">
      <div className="relative z-10 px-5 pt-20 sm:px-10 lg:flex lg:min-h-[clamp(35.890625rem,39.8785vw,47.8542rem)] lg:items-center lg:px-[6.944vw] lg:pt-[clamp(9.3125rem,10.3472vw,12.4167rem)] lg:pb-[clamp(5.8125rem,6.4583vw,7.75rem)]">
        <div
          data-reveal="left"
          className="lg:w-[43.3169vw] lg:max-w-[51.979rem]"
        >
          <Heading
            as="h2"
            size="display"
            style={{
              fontSize: "clamp(2.75rem, 3.8889vw, 4.6667rem)",
            }}
          >
            <span className="block">Turning Your Ideas Into</span>
            <AccentText className="block">Published Books</AccentText>
          </Heading>
          <p className="mt-[clamp(0.625rem,0.6944vw,0.8333rem)] max-w-[clamp(27.269rem,30.2991vw,36.359rem)] text-[clamp(1rem,1.1111vw,1.3333rem)] leading-[1.2]">
            Have a story, concept, or unfinished draft but unsure of the next
            step? Our team is here to guide you through the publishing process,
            transforming your ideas into a refined, engaging, and professionally
            crafted manuscript that is ready to reach readers.
          </p>
          <Link
            href="#contact"
            className={`${buttonVariants({ variant: "primary", size: "md" })} mt-[clamp(2.5rem,2.7778vw,3.3333rem)]`}
            style={{
              minHeight: "clamp(2.9375rem, 3.2465vw, 3.8958rem)",
              padding:
                "clamp(0.75rem, 0.8681vw, 1.0417rem) clamp(1.25rem, 1.3889vw, 1.6667rem)",
              borderRadius: "clamp(0.625rem, 0.6944vw, 0.8333rem)",
              fontSize: "clamp(1.125rem, 1.25vw, 1.5rem)",
            }}
          >
            Lets Start Writing A Book
          </Link>
        </div>
      </div>

      <div
        aria-hidden="true"
        data-reveal="right"
        className="pointer-events-none absolute top-[clamp(3.858rem,4.2864vw,5.1437rem)] right-0 hidden h-[clamp(34.347rem,38.1634vw,45.796rem)] w-[57.234vw] max-w-[68.6806rem] [filter:drop-shadow(0_0.3472vw_0.7639vw_rgba(0,0,0,.10))_drop-shadow(0_1.3889vw_1.3889vw_rgba(0,0,0,.09))_drop-shadow(0_3.0556vw_1.8056vw_rgba(0,0,0,.05))_drop-shadow(0_5.4167vw_2.1528vw_rgba(0,0,0,.01))] lg:block"
      >
        <Image
          src={figmaAssets.cta.turningIdeasBooks}
          alt=""
          fill
          className="object-cover object-right"
          sizes="58vw"
        />
      </div>

      <div
        data-reveal="scale"
        className="relative mt-8 ml-auto h-[24rem] w-[min(49rem,110vw)] lg:hidden"
      >
        <Image
          src={figmaAssets.cta.turningIdeasBooks}
          alt=""
          fill
          className="object-contain object-right-bottom drop-shadow-[0_16px_16px_rgba(0,0,0,.08)]"
          sizes="110vw"
        />
      </div>
    </section>
  );
}
