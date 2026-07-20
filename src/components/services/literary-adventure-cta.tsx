import Link from "next/link";

import { AccentText, buttonVariants, Heading } from "@/components/ui";

import { QuoteForm } from "./quote-form";

export function LiteraryAdventureCta() {
  return (
    <section className="relative z-10 bg-white px-5 py-20 text-ink sm:px-10 lg:h-[clamp(34.8125rem,38.681vw,46.4167rem)] lg:overflow-visible lg:px-[6.944vw] lg:py-[clamp(5rem,5.556vw,6.6667rem)]">
      <div className="mx-auto grid max-w-[77.5rem] items-start gap-12 lg:w-full lg:max-w-none lg:grid-cols-[1fr_clamp(32.9375rem,36.597vw,43.9167rem)] lg:gap-[clamp(3.125rem,3.472vw,4.1667rem)]">
        <div
          data-reveal="left"
          className="py-5 lg:max-w-none lg:py-[clamp(1.25rem,1.389vw,1.6667rem)]"
        >
          <Heading
            as="h2"
            size="display"
            className="lg:w-[clamp(39rem,43.316vw,51.979rem)] lg:text-[clamp(3.5rem,3.889vw,4.6667rem)] lg:leading-[1.4]"
          >
            Are You Prepared To Go On A{" "}
            <AccentText>Literary Adventure</AccentText> Like No Other?
          </Heading>
          <div className="mt-2.5 max-w-[27.25rem] text-base leading-normal lg:mt-[clamp(.625rem,.694vw,.8333rem)] lg:w-[clamp(27.25rem,30.299vw,36.359rem)] lg:max-w-none lg:text-[clamp(1rem,1.111vw,1.3333rem)]">
            <p>
              Whether you&apos;re just starting or have been publishing for
              years, you&apos;ll find what you need among our many offerings.
            </p>
            <p>
              To get started on your tale right away, click the link below.
            </p>
          </div>
          <Link
            href="#contact"
            className={`${buttonVariants({ variant: "primary", size: "md" })} mt-10 lg:mt-[clamp(2.5rem,2.778vw,3.3333rem)] lg:min-h-[clamp(2.9375rem,3.264vw,3.9167rem)] lg:rounded-[clamp(.625rem,.694vw,.8333rem)] lg:px-[clamp(1.25rem,1.389vw,1.6667rem)] lg:py-[clamp(.75rem,.868vw,1.0417rem)] lg:text-[clamp(1.125rem,1.25vw,1.5rem)]`}
          >
            Lets Start Writing A Book
          </Link>
        </div>

        <div data-reveal="right">
          <QuoteForm
            id="contact"
            scaleOnDesktop
            className="shadow-none lg:min-h-[clamp(31.8125rem,35.347vw,42.4167rem)] lg:border-[clamp(1px,.0694vw,1.333px)]"
          />
        </div>
      </div>
    </section>
  );
}
