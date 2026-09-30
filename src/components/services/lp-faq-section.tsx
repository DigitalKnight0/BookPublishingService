"use client";

import { useState } from "react";

import { AccentText, Heading } from "@/components/ui";

const lpFaqs = [
  {
    question: "What does it cost to publish a book?",
    answer:
      "It depends on the services you choose. A single service costs far less than a full package, and you will always get a clear quote before we start.",
  },
  {
    question: "Do I keep the rights to my book?",
    answer:
      "Yes, all of them. Ownership and royalties stay with you, and we never take a cut of your sales.",
  },
  {
    question: "Can you help if I already have a manuscript?",
    answer:
      "Gladly. Hand us a finished draft, and we can take it through editing, design and illustrations, formatting, publishing, and marketing.",
  },
  {
    question: "How soon can you publish my book?",
    answer:
      "A finished manuscript can be ready in 8 to 14 weeks. Writing from scratch runs longer. You get a realistic date up front.",
  },
  {
    question: "Do you work on children's books?",
    answer:
      "Yes. As children's book publishers, we build custom illustrations and layouts made for young readers.",
  },
  {
    question: "Where will my book be sold?",
    answer:
      "On Amazon, Barnes & Noble, Apple Books, Kobo, and thousands of retailers across more than 200 countries.",
  },
  {
    question: "Can I book a single service?",
    answer:
      "Of course. Plenty of authors come for editing or design and illustrations alone, then publish their book their own way.",
  },
  {
    question: "What if this is my first book?",
    answer:
      "Then you are exactly who we work with most. We walk first-time authors through each step, so you always know what comes next.",
  },
] as const;

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

export function LpFaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="bg-gradient-pale px-5 py-20 text-ink sm:px-10 lg:px-[6.944vw] lg:py-[6.25rem]">
      <div data-reveal="up" className="mx-auto max-w-[50rem] text-center">
        <Heading as="h2" size="display" align="center">
          Valid Questions, <AccentText>Honest Answers</AccentText>
        </Heading>
        <p className="mx-auto mt-3 max-w-[38rem] text-base leading-relaxed">
          Straight answers about cost, ownership, timing, distribution, and
          what it is like to publish your first book with us.
        </p>
      </div>

      <div data-reveal="up" className="mx-auto mt-12 max-w-[62rem] space-y-4">
        {lpFaqs.map((faq, index) => {
          const isOpen = openFaq === index;
          const answerId = `lp-faq-answer-${index}`;

          return (
            <div
              key={faq.question}
              className="overflow-hidden rounded-[1.25rem] border border-brand bg-[linear-gradient(180deg,rgba(33,158,188,0)_0%,rgba(33,158,188,.2)_100%),#fff] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(2,48,71,.1)]"
            >
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={answerId}
                onClick={() => setOpenFaq(isOpen ? null : index)}
                className="w-full cursor-pointer p-6 text-left focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-brand sm:px-8"
              >
                <span className="flex items-center gap-3 font-display text-xl leading-normal sm:text-2xl">
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
                    <span className="mt-3 block text-base leading-relaxed">
                      {faq.answer}
                    </span>
                  </span>
                </span>
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
