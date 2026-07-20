"use client";

import { useEffect, useRef, useState } from "react";

export function ServicesTimelineProgress() {
  const railRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      frameRef.current = null;

      const rail = railRef.current;

      if (!rail) return;

      const bounds = rail.getBoundingClientRect();
      const viewportGuide = window.innerHeight * 0.5;
      const nextProgress = Math.min(
        1,
        Math.max(0, (viewportGuide - bounds.top) / bounds.height),
      );

      setProgress(nextProgress);
    };

    const requestUpdate = () => {
      if (frameRef.current !== null) return;
      frameRef.current = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const progressValue = `${progress * 100}%`;

  return (
    <div
      ref={railRef}
      aria-hidden="true"
      className="pointer-events-none absolute top-[clamp(12.5rem,13.932vw,16.7186rem)] bottom-[clamp(12.5rem,13.983vw,16.781rem)] left-1/2 z-20 hidden w-px -translate-x-1/2 bg-[#219ebc]/35 lg:block"
    >
      <span
        className="absolute inset-x-0 top-0 bg-[#219ebc]"
        style={{ height: progressValue }}
      />
      <span
        className="bg-gradient-action absolute left-1/2 size-[clamp(2rem,2.222vw,2.6667rem)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30 shadow-[0_2px_8px_rgba(2,48,71,.2)]"
        style={{ top: progressValue }}
      >
        <span className="absolute inset-[21.875%] rounded-full bg-white" />
      </span>
    </div>
  );
}
