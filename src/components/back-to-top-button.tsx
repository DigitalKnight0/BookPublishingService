"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let frame: number | null = null;

    const updateVisibility = () => {
      frame = null;
      setIsVisible(window.scrollY > window.innerHeight * 0.75);
    };

    const requestUpdate = () => {
      if (frame !== null) return;
      frame = window.requestAnimationFrame(updateVisibility);
    };

    updateVisibility();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);

      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, []);

  const scrollToTop = () => {
    const event = new Event("site:scroll-to-top", { cancelable: true });
    const handledBySmoothScroll = !window.dispatchEvent(event);

    if (!handledBySmoothScroll) {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    }
  };

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={scrollToTop}
      className={`bg-gradient-action fixed right-5 bottom-[calc(1.25rem+env(safe-area-inset-bottom))] z-40 flex size-12 items-center justify-center rounded-full border border-white/30 text-white shadow-[0_10px_28px_rgba(2,48,71,.3)] transition-[opacity,transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(2,48,71,.4)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:right-8 sm:bottom-8 ${
        isVisible
          ? "pointer-events-auto scale-100 opacity-100"
          : "pointer-events-none scale-90 opacity-0"
      }`}
    >
      <ArrowUp aria-hidden="true" size={23} strokeWidth={2.25} />
    </button>
  );
}
