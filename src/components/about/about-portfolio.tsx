import Image from "next/image";
import Link from "next/link";

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
                className="group/about-book relative h-[18.9576rem] w-[15.2313rem] shrink-0"
              >
                <Image
                  src={cover}
                  alt={duplicate ? "" : names[index]}
                  fill
                  unoptimized
                  className="object-contain transition-transform duration-500 ease-out group-hover/about-book:-translate-y-2 group-hover/about-book:scale-[1.025]"
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

export function AboutPortfolio() {
  return (
    <section
      id="portfolio"
      className="overflow-hidden bg-white py-20 text-ink lg:py-[6.25rem]"
    >
      <div className="mx-auto flex w-full flex-col items-center px-5 text-center sm:px-10">
        <div data-reveal="up" className="flex max-w-[45.5rem] flex-col items-center">
          <Heading
            as="h2"
            size="display"
            align="center"
          >
            Stories We&apos;ve Helped <AccentText>Bring to Life</AccentText>
          </Heading>
        </div>
        <div className="mt-2.5 max-w-[38.625rem] text-base leading-normal">
          <p>
            Over the years, we&apos;ve worked across nearly every genre —
            autobiographies and memoirs, children&apos;s books, fantasy and
            sci-fi, thrillers, romance, cookbooks, self-help, poetry, and books
            on religion and spirituality. Each project on our shelf represents
            an author who trusted us with something personal, and a team that
            showed up to get it right.
          </p>
          <p className="mt-5">
            Browse a selection of the books we&apos;ve written, edited,
            designed, and published below, or explore by genre to see work most
            similar to your own project.
          </p>
        </div>

        <div
          data-reveal="scale"
          data-reveal-delay="1"
          className="mt-[3.125rem]"
        >
          <PortfolioGenreTabs genres={genres} />
        </div>
      </div>

      <div className="mt-[4.5rem] flex flex-col gap-[2.4375rem]">
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
          href="/#portfolio"
          className={buttonVariants({ variant: "primary", size: "md" })}
        >
          See Full Portfolio
        </Link>
      </div>
    </section>
  );
}
