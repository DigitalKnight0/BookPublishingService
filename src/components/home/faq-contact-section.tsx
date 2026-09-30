"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { AccentText, Heading, Input, Textarea } from "@/components/ui";
import { getLeadFields, submitLead } from "@/lib/lead-submission";

const faqs = [
  {
    question: "What does self-publishing actually mean?",
    answer:
      "It means you call the shots on content, cover, price, and timing, and we do the professional work. The rights to the book remain yours.",
  },
  {
    question: "How long does the whole process take?",
    answer:
      "Roughly 2 to 4 weeks for most projects. A polished manuscript moves quickest, and writing from scratch takes longer. You get a real schedule after our first call.",
  },
  {
    question: "What kind of marketing do you handle?",
    answer:
      "We set up your launch, build your platform, and write the description and keywords that attract readers. Reviews, press, and longer campaigns maintain the momentum.",
  },
  {
    question: "Which levels of editing can I choose from?",
    answer:
      "Four, and you can take one or all. Developmental editing improves structure, line editing sharpens style, copyediting fixes accuracy, and proofreading handles the final polish.",
  },
  {
    question: "What do design and illustrations cost?",
    answer:
      "It depends. A single cover sits well below a full package with interior layout and custom art. You always see the number before we begin.",
  },
  {
    question: "Do I really keep the rights?",
    answer:
      "Completely. Ownership and royalties are yours alone. We never take a slice of your sales or lay any claim to your work.",
  },
  {
    question: "Where can people buy my book?",
    answer:
      "We push it out to Amazon, Barnes & Noble, Apple Books, Kobo, and thousands of other retailers in more than 200 countries.",
  },
  {
    question: "Do you make children's books?",
    answer:
      "We do. As children's book publishers, we create custom illustrations and layouts built around young readers.",
  },
  {
    question: "Can I hire you for just one thing?",
    answer:
      "Absolutely. Many authors come to us only for editing, or only for design and illustrations, then publish their book their own way.",
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
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    setSubmissionStatus("submitting");

    try {
      await submitLead(getLeadFields(form, "General Publishing Inquiry"));
      form.reset();
      setSubmissionStatus("success");
      router.push("/thank-you");
    } catch (error) {
      console.error("Unable to submit lead", error);
      setSubmissionStatus("error");
    }
  };

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
      <div id="faq" data-reveal="up" className="scroll-mt-24">
        <Heading as="h2" size="display" align="center">
          The Questions <AccentText>Authors Always Ask</AccentText>
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
          onSubmit={handleSubmit}
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
              required
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
                  required
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
                  required
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
              required
              placeholder="Tell us about your book"
              className={`min-h-[10.3125rem] flex-1 ${quoteFieldClassName}`}
            />
          </div>

          <label className="flex items-start gap-[0.3125rem] text-sm leading-normal tracking-[-0.01em]">
            <input
              name="consent"
              type="checkbox"
              required
              className="mt-0.5 size-4 shrink-0 appearance-none rounded-[0.1875rem] border-[1.5px] border-white checked:bg-white checked:bg-[linear-gradient(135deg,transparent_42%,#023047_42%,#023047_55%,transparent_55%)]"
            />
            <span>
              By submitting this form and entering your phone number above, you
              agree to receive automated text messages from our brand and agree
              to our{" "}
              <Link
                href="/terms-and-conditions"
                className="underline underline-offset-2"
              >
                Terms
              </Link>
              {" "}and{" "}
              <Link
                href="/privacy-policy"
                className="underline underline-offset-2"
              >
                Privacy Policy
              </Link>
              .
            </span>
          </label>

          <button
            type="submit"
            disabled={submissionStatus === "submitting"}
            className="min-h-[2.9375rem] w-full rounded-[0.625rem] bg-white px-5 py-3 text-lg leading-normal font-medium text-ink transition-colors hover:bg-surface-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {submissionStatus === "submitting" ? "Submitting…" : "Submit"}
          </button>

          {submissionStatus === "success" || submissionStatus === "error" ? (
            <p
              role="status"
              aria-live="polite"
              className={`text-center text-sm font-medium ${
                submissionStatus === "success"
                  ? "text-emerald-200"
                  : "text-red-200"
              }`}
            >
              {submissionStatus === "success"
                ? "Thank you! Your details have been sent successfully."
                : "We couldn't send your details. Please try again."}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
