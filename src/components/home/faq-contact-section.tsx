"use client";

import { useState } from "react";
import Link from "next/link";

import { AccentText, Heading, Input, Textarea } from "@/components/ui";

const faqs = [
  {
    question: "What Is Self-Publishing?",
    answer:
      "Self-publishing gives authors complete ownership of their publishing journey. You can publish independently or work with a professional self-publishing company like Book Publication Services to manage the process. Our self-publishing solutions include manuscript editing, cover design, interior formatting, ISBN assistance, distribution, and marketing support to help transform your manuscript into a professionally published book.",
  },
  {
    question: "What Is the Typical Timeline for the Publishing Process?",
    answer:
      "Publishing timelines vary by manuscript length and the services required. Most projects move from editing through design, approval, and distribution in several weeks, with your project manager providing a clear schedule at onboarding.",
  },
  {
    question: "What Marketing and Promotion Support Do You Provide?",
    answer:
      "Our marketing support can include launch planning, platform optimization, author branding, social and email campaigns, press releases, and promotional strategies tailored to your book and audience.",
  },
  {
    question: "What Types of Editing Services Do You Offer?",
    answer:
      "We offer developmental editing, line and copy editing, proofreading, and manuscript reviews. Your editor recommends the right level of support after evaluating your draft and publishing goals.",
  },
  {
    question: "What Is the Cost of Design and Illustration Services?",
    answer:
      "Design and illustration costs depend on complexity, style, page count, and the number of concepts required. We provide a tailored quote before work begins, with the scope and deliverables clearly defined.",
  },
] as const;

const quoteFieldClassName =
  "border-transparent bg-white/10 font-medium text-white opacity-50 placeholder:text-white focus:border-white/50 focus:bg-white/40 focus:opacity-100 focus:ring-white/30";

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 28 28"
      className={`size-7 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      fill="none"
    >
      <path
        d="m8 11 6 6 6-6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FaqContactSection({
  spaciousTop = false,
  pageTop = false,
}: {
  spaciousTop?: boolean;
  pageTop?: boolean;
}) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const topPadding = pageTop
    ? "pt-20 lg:pt-[6.944vw]"
    : spaciousTop
      ? "pt-16"
      : "pt-8";

  return (
    <section
      id="contact"
      className={`bg-gradient-pale scroll-mt-20 px-5 pb-20 text-ink sm:px-10 lg:px-[6.944vw] lg:pb-[6.25rem] ${topPadding}`}
    >
      <div data-reveal="up">
        <Heading as="h2" size="display" align="center">
          How can we <AccentText>help?</AccentText>
        </Heading>
      </div>

      <div className="mx-auto mt-[3.125rem] grid max-w-[77.5rem] items-start gap-10 lg:grid-cols-[1.258fr_1fr] lg:gap-[3.125rem]">
        <div data-reveal="left" className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            const answerId = `faq-answer-${index}`;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-[1.25rem] border border-brand bg-[linear-gradient(180deg,rgba(33,158,188,0)_0%,rgba(33,158,188,.2)_100%),linear-gradient(90deg,#fff_0%,#fff_100%)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(2,48,71,.1)]"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full cursor-pointer p-6 text-left focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-brand"
                >
                  <span className="flex items-center gap-2.5 font-display text-xl leading-normal tracking-[0.01em]">
                    <span className="min-w-0 flex-1">{faq.question}</span>
                    <Chevron open={isOpen} />
                  </span>
                  <span
                    id={answerId}
                    className={`grid transition-[grid-template-rows,opacity] duration-400 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <span className="overflow-hidden">
                      <span className="mt-2.5 block text-base leading-normal">
                        {faq.answer}
                      </span>
                    </span>
                  </span>
                </button>
              </div>
            );
          })}
        </div>

        <form
          data-reveal="right"
          className="bg-gradient-action flex min-h-[35.3125rem] flex-col gap-[1.3125rem] rounded-[1.25rem] border border-brand p-6 text-white shadow-[0_18px_48px_rgba(2,48,71,.16)] transition-shadow duration-300 hover:shadow-[0_24px_60px_rgba(2,48,71,.24)] sm:p-8"
        >
          <div>
            <h3 className="text-[2rem] leading-normal font-medium tracking-[-0.01em]">
              Get A Free Quote
            </h3>
            <p className="mt-2.5 text-sm leading-normal tracking-[-0.01em]">
              Discuss your project with our Experts!
            </p>
          </div>

          <div className="flex flex-1 flex-col gap-2.5">
            <label htmlFor="quote-name" className="sr-only">
              Name
            </label>
            <Input
              id="quote-name"
              name="name"
              placeholder="Name"
              autoComplete="name"
              className={quoteFieldClassName}
            />

            <div className="grid gap-2.5 sm:grid-cols-2">
              <div>
                <label htmlFor="quote-email" className="sr-only">
                  Email
                </label>
                <Input
                  id="quote-email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  className={quoteFieldClassName}
                />
              </div>
              <div>
                <label htmlFor="quote-phone" className="sr-only">
                  Phone Number
                </label>
                <Input
                  id="quote-phone"
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  autoComplete="tel"
                  className={quoteFieldClassName}
                />
              </div>
            </div>

            <label htmlFor="quote-message" className="sr-only">
              Tell us about your book
            </label>
            <Textarea
              id="quote-message"
              name="message"
              placeholder="Tell us about your book"
              className={`min-h-[10.3125rem] flex-1 ${quoteFieldClassName}`}
            />
          </div>

          <label className="flex items-start gap-[0.3125rem] text-sm leading-normal tracking-[-0.01em]">
            <input
              name="consent"
              type="checkbox"
              className="mt-0.5 size-4 shrink-0 appearance-none rounded-[0.1875rem] border-[1.5px] border-white checked:bg-white checked:bg-[linear-gradient(135deg,transparent_42%,#023047_42%,#023047_55%,transparent_55%)]"
            />
            <span>
              By submitting this form and entering your phone number above, you
              agree to receive automated text messages from our brand and agree
              to our{" "}
              <Link href="#legal" className="underline underline-offset-2">
                Terms and Privacy.
              </Link>
            </span>
          </label>

          <button
            type="submit"
            className="min-h-[2.9375rem] w-full rounded-[0.625rem] bg-white px-5 py-3 text-lg leading-normal font-medium text-ink transition-colors hover:bg-surface-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
