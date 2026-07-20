"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;

    if (reduceMotion || !hasFinePointer) return;

    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.085,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      anchors: {
        offset: -80,
      },
    });

    const scrollToTop = (event: Event) => {
      event.preventDefault();
      lenis.scrollTo(0, { duration: 1.15 });
    };

    window.addEventListener("site:scroll-to-top", scrollToTop);

    return () => {
      window.removeEventListener("site:scroll-to-top", scrollToTop);
      lenis.destroy();
    };
  }, []);

  return null;
}
