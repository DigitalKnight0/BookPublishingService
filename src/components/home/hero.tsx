"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { QuoteForm } from "@/components/services/quote-form";
import { buttonVariants } from "@/components/ui";
import { figmaAssets } from "@/design-system";
import { cn } from "@/lib/utils";

export function HomeHero() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const panelTriggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isQuoteOpen) return;

    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsQuoteOpen(false);
        panelTriggerRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isQuoteOpen]);

  const closeQuotePanel = () => {
    setIsQuoteOpen(false);
    panelTriggerRef.current?.focus();
  };

  return (
    <section className="relative isolate flex min-h-[100svh] overflow-hidden bg-[#219ebc] text-white lg:h-[100svh]">
      <div className="figma-hero-photo absolute inset-x-0 top-[67px] bottom-0 -z-30 lg:top-[7.037vh] lg:bottom-auto">
        <Image
          src={figmaAssets.hero.homeBackground}
          alt="A publishing consultant speaking with an author while taking notes"
          fill
          loading="eager"
          fetchPriority="high"
          className="hero-background-motion object-cover object-[68%_center] lg:object-center"
          sizes="100vw"
        />
      </div>

      <div className="pointer-events-none absolute top-[67px] bottom-0 left-0 -z-10 w-screen bg-[linear-gradient(180deg,rgba(33,158,188,.82)_0%,rgba(2,48,71,.82)_100%)] sm:w-[88vw] sm:bg-none lg:top-[7.037vh] lg:w-[61.5vw]">
        <Image
          src={figmaAssets.hero.homeOverlay}
          alt=""
          fill
          loading="eager"
          fetchPriority="high"
          className="hidden object-fill sm:block"
          sizes="(min-width: 1024px) 60vw, 115vw"
        />
      </div>

      <div className="home-hero-layout relative z-30 grid w-full gap-10 px-5 pt-[8.5rem] pb-[10rem] sm:px-10 lg:absolute lg:top-[12.84vh] lg:left-[6.944vw] lg:h-[83.951vh] lg:w-[86.111vw] lg:items-center lg:gap-[clamp(.625rem,.694vw,.8333rem)] lg:px-0 lg:pt-0 lg:pb-0">
        <div className="max-w-[41rem] lg:max-w-none">
          <h1 className="home-hero-title hero-copy-enter font-display text-[clamp(2.8rem,8vw,3.5rem)] leading-[1.08] font-normal tracking-[0.01em] text-balance sm:text-[52px] lg:text-[clamp(2.8rem,3.889vw,4.6667rem)] lg:leading-[1.4]">
            From Your Desk To Bookshelves Worldwide
          </h1>

          <div className="home-hero-description hero-copy-enter hero-copy-enter-delay-1 mt-4 max-w-[36.5rem] space-y-3 font-sans text-base leading-[1.35] text-white sm:text-lg lg:mt-[clamp(.625rem,.694vw,.8333rem)] lg:w-[min(40.459vw,48.551rem)] lg:max-w-none lg:space-y-[clamp(.625rem,.694vw,.8333rem)] lg:text-[clamp(1rem,1.389vw,1.6667rem)] lg:leading-[normal]">
            <p>
              We help you polish your rough drafts and publish a book the
              professional way. Editing, design and illustrations, marketing,
              and distribution all offered under one umbrella.
            </p>
          </div>

          <div className="home-hero-actions hero-copy-enter hero-copy-enter-delay-2 mt-6 flex flex-wrap gap-3 sm:gap-[15px] lg:mt-[clamp(1.25rem,1.389vw,1.6667rem)] lg:gap-[clamp(.9375rem,1.042vw,1.25rem)]">
            <a
              href="https://www.livechat.com/chat-with/19839776/"
              data-live-chat
              className={cn(
                buttonVariants({ variant: "secondary" }),
                "home-hero-button min-w-32 lg:min-h-[clamp(2.9375rem,3.264vw,3.9167rem)] lg:min-w-0 lg:rounded-[clamp(.625rem,.694vw,.8333rem)] lg:px-[clamp(1.25rem,1.389vw,1.6667rem)] lg:py-0 lg:text-[clamp(1.125rem,1.25vw,1.5rem)]",
              )}
            >
              Get Started
            </a>
            <Link
              href="tel:+13056028290"
              aria-label="Call Book Publication Solutions at (305) 602-8290"
              className={cn(
                buttonVariants({ variant: "primary" }),
                "phone-cta-blink home-hero-button min-w-32 lg:min-h-[clamp(2.9375rem,3.264vw,3.9167rem)] lg:min-w-0 lg:rounded-[clamp(.625rem,.694vw,.8333rem)] lg:px-[clamp(1.25rem,1.389vw,1.6667rem)] lg:py-0 lg:text-[clamp(1.125rem,1.25vw,1.5rem)]",
              )}
            >
              (305) 602-8290
            </Link>
          </div>
        </div>
      </div>

      <aside
        id="home-hero-quote-panel"
        role="dialog"
        aria-label="Get a free publishing quote"
        className={cn(
          "absolute top-[83px] right-0 bottom-4 z-40 flex w-[calc(100vw-3.5rem)] max-w-[34rem] items-center transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] lg:top-[12.84vh] lg:right-[6.944vw] lg:bottom-[3.209vh] lg:w-[min(32.917vw,58.519vh)] lg:max-w-none",
          isQuoteOpen
            ? "translate-x-0"
            : "translate-x-full lg:translate-x-[calc(100%+6.944vw)]",
        )}
      >
        <button
          ref={panelTriggerRef}
          type="button"
          aria-label={
            isQuoteOpen ? "Close free quote form" : "Open free quote form"
          }
          aria-haspopup="dialog"
          aria-expanded={isQuoteOpen}
          aria-controls="home-hero-quote-panel"
          onClick={() => setIsQuoteOpen((open) => !open)}
          className="bg-gradient-action absolute top-1/2 left-0 z-10 flex h-24 w-14 -translate-x-full -translate-y-1/2 items-center justify-center pl-2 text-white shadow-[-8px_8px_28px_rgba(2,48,71,.28)] transition-[filter,width] duration-300 [clip-path:polygon(22%_0,100%_0,100%_100%,22%_100%,0_50%)] hover:w-16 hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-white"
        >
          <ChevronLeft
            aria-hidden
            className={cn(
              "size-8 transition-transform duration-500",
              !isQuoteOpen && "quote-panel-arrow",
              isQuoteOpen && "rotate-180",
            )}
            strokeWidth={2.25}
          />
        </button>

        <div
          aria-hidden={!isQuoteOpen}
          className={cn(
            "relative max-h-full w-full overflow-y-auto rounded-[1.25rem] transition-[visibility] duration-500",
            isQuoteOpen ? "visible" : "invisible delay-500",
          )}
        >
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Close quote form"
            onClick={closeQuotePanel}
            className="border-brand/30 text-ink hover:bg-brand-deep focus-visible:outline-brand absolute top-5 right-5 z-10 flex size-11 items-center justify-center rounded-full border bg-white shadow-sm transition-[background-color,color,transform] duration-200 hover:rotate-90 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <X aria-hidden className="size-5" />
          </button>

          <QuoteForm
            id="home-hero-quote"
            serviceName="Home Page Publishing Inquiry"
            heading="Tell Us About Your Book"
            description="Share a few details and our publishing team will follow up."
            submitLabel="Request Free Consultation"
            showServiceSelect
            scaleOnDesktop
            className="lg:min-h-[clamp(31.8125rem,35.347vw,42.4167rem)] lg:justify-center"
          />
        </div>
      </aside>

      <div className="pointer-events-none absolute right-0 bottom-[-1px] left-0 z-20 h-[clamp(7.5rem,15vh,10rem)] lg:bottom-[-0.519vh] lg:h-[32.495vh]">
        <Image
          src={figmaAssets.hero.homeWave}
          alt=""
          fill
          className="object-fill"
          sizes="100vw"
        />
      </div>
    </section>
  );
}
