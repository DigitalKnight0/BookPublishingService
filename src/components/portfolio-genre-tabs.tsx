"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

export function PortfolioGenreTabs({
  genres,
}: {
  genres: readonly string[];
}) {
  const [activeGenre, setActiveGenre] = useState(genres[0]);

  return (
    <div
      role="tablist"
      aria-label="Filter portfolio by genre"
      className="flex max-w-[70.125rem] flex-wrap justify-center gap-3"
    >
      {genres.map((genre) => {
        const isActive = activeGenre === genre;

        return (
          <button
            key={genre}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => setActiveGenre(genre)}
            className={cn(
              "inline-flex min-h-[3.0625rem] cursor-pointer items-center justify-center whitespace-nowrap rounded-[0.625rem] border px-5 py-3 text-xl leading-none font-medium transition-[color,background-color,border-color,transform,box-shadow] duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand active:scale-[0.98]",
              isActive
                ? "border-white/30 bg-gradient-action text-white shadow-[0_8px_20px_rgba(2,48,71,.18)]"
                : "border-transparent bg-[#f5f5f5] text-ink hover:-translate-y-0.5 hover:border-brand/20 hover:bg-[#eaf7fa]",
            )}
          >
            {genre}
          </button>
        );
      })}
    </div>
  );
}
