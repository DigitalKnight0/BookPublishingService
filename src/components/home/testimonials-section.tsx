"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { Heading } from "@/components/ui";
import { figmaAssets } from "@/design-system";

const testimonials = [
  {
    quote:
      "“I honestly thought publishing a book would be overwhelming, but Book Publication Solutions made everything so much easier than I expected. Seeing my book published was such a rewarding moment, and I couldn't have done it without their support.”",
    author: "Sarah M. – First-Time Author",
  },
  {
    quote:
      "“One of the best decisions I made was having Book Publication Solutions build my author website. It looks professional, is easy to navigate, and gives readers one place to learn about me and my books.”",
    author: "David R. – Business Author",
  },
  {
    quote:
      "“I was nervous about letting someone edit my manuscript because I didn't want to lose my writing style. The editor completely understood my vision and only made changes that strengthened the story. My book reads so much better now, and I'm incredibly grateful for their thoughtful feedback.”",
    author: "Jessica L. – Fiction Writer",
  },
  {
    quote:
      "“I knew my cover had to make a great first impression, and the design team absolutely delivered. They listened to my ideas, shared creative suggestions, and came back with a cover that felt like it belonged on a bookstore shelf.”",
    author: "Mark T. – Self-Published Author",
  },
  {
    quote:
      "“From our very first conversation, I felt like the team genuinely cared about my book. Every step was handled professionally, and the whole experience was much smoother than I imagined.”",
    author: "Rachel P. – Children's Book Author",
  },
  {
    quote:
      "“What stood out to me most was the communication. Whenever I had a question, someone was always there to help. Book Publication Solutions delivered exactly what they promised, stayed transparent throughout the process. I'd happily work with them again for my next project.”",
    author: "Kevin A. – Author & Speaker",
  },
] as const;

function Rating() {
  return (
    <div className="flex gap-[0.15rem]" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          aria-hidden="true"
          className="flex size-6 items-center justify-center bg-[#219653] text-[1rem] leading-none text-white"
        >
          ★
        </span>
      ))}
    </div>
  );
}

function ArrowButton({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={`${direction === "left" ? "Previous" : "Next"} testimonials`}
      aria-controls="testimonial-carousel"
      onClick={onClick}
      className="flex size-[3.375rem] shrink-0 items-center justify-center rounded-xl bg-white text-ink transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className="size-8"
        fill="none"
      >
        <path
          d={
            direction === "left"
              ? "M15.2 24.65 6.55 16l8.65-8.65M7.2 16h18.25"
              : "m16.8 7.35 8.65 8.65-8.65 8.65M24.8 16H6.55"
          }
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export function TestimonialsSection({
  blendFromTop = false,
}: {
  blendFromTop?: boolean;
}) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const maxIndex = Math.max(0, testimonials.length - visibleCards);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 64rem)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updatePreferences = () => {
      const nextVisibleCards = desktopQuery.matches ? 2 : 1;

      setVisibleCards(nextVisibleCards);
      setReduceMotion(motionQuery.matches);
      setActiveIndex((current) =>
        Math.min(current, testimonials.length - nextVisibleCards),
      );
    };

    updatePreferences();
    desktopQuery.addEventListener("change", updatePreferences);
    motionQuery.addEventListener("change", updatePreferences);

    return () => {
      desktopQuery.removeEventListener("change", updatePreferences);
      motionQuery.removeEventListener("change", updatePreferences);
    };
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    const activeCard = carousel?.children[activeIndex] as HTMLElement | undefined;

    if (!carousel || !activeCard) return;

    carousel.scrollTo({
      left: activeCard.offsetLeft,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }, [activeIndex, reduceMotion]);

  useEffect(() => {
    if (isPaused || reduceMotion || maxIndex === 0) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current >= maxIndex ? 0 : current + 1));
    }, 5000);

    return () => window.clearInterval(timer);
  }, [isPaused, maxIndex, reduceMotion]);

  const showPrevious = () => {
    setActiveIndex((current) => (current <= 0 ? maxIndex : current - 1));
  };

  const showNext = () => {
    setActiveIndex((current) => (current >= maxIndex ? 0 : current + 1));
  };

  return (
    <section className="bg-gradient-section relative isolate overflow-hidden px-5 py-16 text-white sm:px-10 lg:min-h-[45.9375rem] lg:px-[6.944vw] lg:py-[4.6875rem]">
      <div
        className="absolute inset-0 -z-20"
        style={
          blendFromTop
            ? {
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent 0, #000 7.5rem, #000 100%)",
                maskImage:
                  "linear-gradient(to bottom, transparent 0, #000 7.5rem, #000 100%)",
              }
            : undefined
        }
      >
        <Image
          src={figmaAssets.testimonials.background}
          alt=""
          fill
          className="object-cover opacity-70"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(33,158,188,.8)_0%,rgba(2,48,71,.9)_100%)]" />

      <div
        data-reveal="up"
        className="mx-auto flex max-w-[37.875rem] flex-col items-center text-center"
      >
        <Heading as="h2" size="display" align="center" className="text-white">
          What Our Author Says
        </Heading>
        <p className="mt-2.5 max-w-[36.047rem] text-base leading-[1.2]">
          We&apos;ve helped hundreds of people to capture their stories and we
          have a lot of happy clients! Learn about their experience in their own
          words.
        </p>
      </div>

      <div
        data-reveal="scale"
        data-reveal-delay="1"
        className="mx-auto mt-[3.9375rem] flex max-w-[77.5rem] items-center gap-8"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={(event) => {
          if (
            !(event.relatedTarget instanceof Node) ||
            !event.currentTarget.contains(event.relatedTarget)
          ) {
            setIsPaused(false);
          }
        }}
      >
        <div className="hidden lg:block">
          <ArrowButton direction="left" onClick={showPrevious} />
        </div>

        <div
          id="testimonial-carousel"
          ref={carouselRef}
          aria-label="Client testimonials"
          aria-live="polite"
          className="relative flex min-w-0 flex-1 snap-x snap-mandatory gap-6 overflow-x-auto [scrollbar-width:none] lg:gap-8 lg:overflow-hidden [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.author}
              className="flex min-h-[24.75rem] w-full min-w-full shrink-0 snap-start flex-col items-center justify-center gap-5 rounded-3xl bg-white p-8 text-center text-ink sm:p-[3.125rem] lg:min-w-0 lg:basis-[calc((100%-2rem)/2)]"
            >
              <Rating />
              <blockquote className="text-[clamp(1.125rem,1.67vw,1.5rem)] leading-normal">
                {testimonial.quote}
              </blockquote>
              <p className="mt-auto text-[clamp(1.125rem,1.67vw,1.5rem)] leading-normal font-medium tracking-[-0.01em]">
                {testimonial.author}
              </p>
            </article>
          ))}
        </div>

        <div className="hidden lg:block">
          <ArrowButton direction="right" onClick={showNext} />
        </div>
      </div>

      <div className="mt-8 flex justify-center gap-4 lg:hidden">
        <ArrowButton direction="left" onClick={showPrevious} />
        <ArrowButton direction="right" onClick={showNext} />
      </div>
    </section>
  );
}
