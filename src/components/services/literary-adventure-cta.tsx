import Link from "next/link";

import { AccentText, buttonVariants, Heading } from "@/components/ui";

import { QuoteForm } from "./quote-form";

export function LiteraryAdventureCta() {
  return (
    <section className="relative z-10 bg-white px-5 py-20 text-ink sm:px-10 lg:overflow-visible lg:px-[6.944vw] lg:pt-[clamp(5rem,5.556vw,6.6667rem)] lg:pb-0">
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
            Your Book Is Ready <AccentText>For The World</AccentText>
          </Heading>
          <div className="mt-2.5 max-w-[27.25rem] text-base leading-normal lg:mt-[clamp(.625rem,.694vw,.8333rem)] lg:w-[clamp(27.25rem,30.299vw,36.359rem)] lg:max-w-none lg:text-[clamp(1rem,1.111vw,1.3333rem)]">
            <p>
              Take the first step today. Tell us about the book and book a
              free, no-pressure call.
            </p>
          </div>
          <Link
            href="#contact"
            className={`${buttonVariants({ variant: "primary", size: "md" })} mt-10 lg:mt-[clamp(2.5rem,2.778vw,3.3333rem)] lg:min-h-[clamp(2.9375rem,3.264vw,3.9167rem)] lg:rounded-[clamp(.625rem,.694vw,.8333rem)] lg:px-[clamp(1.25rem,1.389vw,1.6667rem)] lg:py-[clamp(.75rem,.868vw,1.0417rem)] lg:text-[clamp(1.125rem,1.25vw,1.5rem)]`}
          >
            Get My Free Quote
          </Link>
        </div>

        <div
          data-reveal="right"
          className="relative z-20 lg:top-[clamp(.375rem,.417vw,.5rem)] lg:-mb-[clamp(1rem,1.111vw,1.3333rem)]"
        >
          <QuoteForm
            id="contact"
            serviceName="Book Publication Solutions"
            prefillContactEmail
            heading="Tell Us About Your Book"
            description="A real publishing strategist will follow up."
            submitLabel="Request Free Consultation"
            showServiceSelect
            scaleOnDesktop
            className="shadow-none lg:min-h-[clamp(31.8125rem,35.347vw,42.4167rem)] lg:border-[clamp(1px,.0694vw,1.333px)]"
          />
        </div>
      </div>
    </section>
  );
}
