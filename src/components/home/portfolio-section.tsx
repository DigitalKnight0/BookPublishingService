"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { PortfolioGenreTabs } from "@/components/portfolio-genre-tabs";
import { AccentText, buttonVariants, Heading } from "@/components/ui";
import { figmaAssets } from "@/design-system";
import { cn } from "@/lib/utils";

const genres = [
  "Autobiography & Memoir",
  "Children's Book",
  "Fantasy & Sci-Fi",
  "Thriller & Suspense",
  "Romance",
  "Cookbooks",
  "Self-Help & Personal Development",
  "Poetry",
  "Religion & Spirituality",
] as const;

const coverNames = {
  rowOne: [
    "Indigent but Not Broken",
    "Adjust Your Crown",
    "The Making of the Iron Lady",
    "Reflections of Infinity",
    "Grocery Shopping Savings Secrets",
    "Principal's Matter",
  ],
  rowTwo: [
    "The Enchanted City",
    "Pencil Fun for Little Ones",
    "Zero to Kumzitz",
    "The Untold Truth of Time Robbers",
    "The Substitute Who Sparkled",
    "Great Answers to Life's Questions",
    "Davey and the Buck'n Bull",
  ],
} as const;

function CoverRow({
  covers,
  names,
  reverse = false,
}: {
  covers: readonly string[];
  names: readonly string[];
  reverse?: boolean;
}) {
  return (
    <div className="portfolio-marquee w-full overflow-hidden">
      <div
        className={cn(
          "portfolio-marquee-track flex w-max items-center",
          reverse && "portfolio-marquee-track-reverse",
        )}
      >
        {[false, true].map((duplicate) => (
          <div
            key={duplicate ? "duplicate" : "original"}
            aria-hidden={duplicate || undefined}
            className="flex shrink-0 items-center gap-[2.4746rem] pr-[2.4746rem]"
          >
            {covers.map((cover, index) => (
              <div
                key={`${duplicate ? "duplicate" : "original"}-${cover}`}
                className="group/book relative h-[18.9576rem] w-[15.2313rem] shrink-0"
              >
                <Image
                  src={cover}
                  alt={duplicate ? "" : names[index]}
                  fill
                  className="object-contain transition-transform duration-500 ease-out group-hover/book:-translate-y-2 group-hover/book:scale-[1.025]"
                  sizes="244px"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function PortfolioSection() {
  const [activeGenre, setActiveGenre] = useState<string>(genres[0]);

  return (
    <section
      id="portfolio"
      className="overflow-hidden bg-white py-20 text-ink lg:py-[6.25rem]"
    >
      <div className="mx-auto flex w-full max-w-[77.5rem] flex-col items-center px-5 sm:px-10 lg:px-0">
        <div
          data-reveal="up"
          className="flex max-w-[45.5rem] flex-col items-center text-center"
        >
          <Heading as="h2" size="display" align="center">
            Shelves We&apos;ve <AccentText>Had A Hand In</AccentText>
          </Heading>
          <p className="mt-2.5 max-w-[38.625rem] text-base leading-[1.2]">
            A selection of books we have helped shape, design, publish, and
            place in front of readers around the world.
          </p>
        </div>

        <div
          data-reveal="scale"
          data-reveal-delay="1"
          className="mt-[3.125rem]"
        >
          <PortfolioGenreTabs
            genres={genres}
            activeGenre={activeGenre}
            onGenreChange={setActiveGenre}
            controls="home-portfolio-carousel"
          />
        </div>
      </div>

      <div
        key={activeGenre}
        id="home-portfolio-carousel"
        role="tabpanel"
        aria-label={`${activeGenre} books`}
        className="genre-content-enter mt-[4.5rem] flex flex-col gap-[2.4375rem]"
      >
        <CoverRow
          covers={figmaAssets.portfolio.rowOne}
          names={coverNames.rowOne}
        />
        <CoverRow
          covers={figmaAssets.portfolio.rowTwo}
          names={coverNames.rowTwo}
          reverse
        />
      </div>

      <div data-reveal="up" className="mt-[4.5rem] flex justify-center px-5">
        <Link
          href="#portfolio"
          className={buttonVariants({ variant: "primary", size: "md" })}
        >
          See Full Portfolio
        </Link>
      </div>
    </section>
  );
}
