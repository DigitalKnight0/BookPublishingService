import Image from "next/image";

import { AccentText, Heading } from "@/components/ui";
import { figmaAssets } from "@/design-system";
import { cn } from "@/lib/utils";

const topRow = [
  { cover: figmaAssets.portfolio.rowOne[1], name: "Adjust Your Crown" },
  {
    cover: figmaAssets.portfolio.rowOne[2],
    name: "The Making of the Iron Lady",
  },
  { cover: figmaAssets.portfolio.rowOne[3], name: "Reflections of Infinity" },
  {
    cover: figmaAssets.portfolio.rowOne[4],
    name: "Grocery Shopping Savings Secrets",
  },
  { cover: figmaAssets.portfolio.rowOne[5], name: "Principal's Matter" },
  { cover: figmaAssets.portfolio.rowOne[0], name: "Indigent but Not Broken" },
] as const;

const bottomRow = [
  { cover: figmaAssets.portfolio.rowTwo[1], name: "Pencil Fun for Little Ones" },
  { cover: figmaAssets.portfolio.rowTwo[2], name: "Zero to Kumzitz" },
  {
    cover: figmaAssets.portfolio.rowTwo[3],
    name: "The Untold Truth of Time Robbers",
  },
  {
    cover: figmaAssets.portfolio.rowTwo[4],
    name: "The Substitute Who Sparkled",
  },
  {
    cover: figmaAssets.portfolio.rowTwo[5],
    name: "Great Answers to Life's Questions",
  },
  { cover: figmaAssets.portfolio.rowTwo[6], name: "Davey and the Buck'n Bull" },
  { cover: figmaAssets.portfolio.rowTwo[0], name: "The Enchanted City" },
] as const;

function IntroBookRow({
  books,
  reverse = false,
}: {
  books: readonly { cover: string; name: string }[];
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
            className="flex shrink-0 items-center gap-6 pr-6 lg:gap-[clamp(2.0625rem,2.292vw,2.75rem)] lg:pr-[clamp(2.0625rem,2.292vw,2.75rem)]"
          >
            {books.map((book) => (
              <div
                key={`${duplicate ? "duplicate" : "original"}-${book.name}`}
                className="group/intro-book relative h-[13.25rem] w-[10.625rem] shrink-0 lg:h-[clamp(15.8005rem,17.556vw,21.0674rem)] lg:w-[clamp(12.6947rem,14.105vw,16.9263rem)]"
              >
                <Image
                  src={book.cover}
                  alt={duplicate ? "" : book.name}
                  fill
                  unoptimized
                  className="object-contain transition-transform duration-500 ease-out group-hover/intro-book:-translate-y-1.5 group-hover/intro-book:scale-[1.025]"
                  sizes="(min-width: 1024px) 15vw, 170px"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function IndustryIntro() {
  return (
    <section className="overflow-hidden bg-white px-5 py-20 text-ink sm:px-10 lg:px-[6.944vw] lg:pt-[5.208vw] lg:pb-0">
      <div className="mx-auto grid w-full items-center gap-12 lg:grid-cols-[41.319vw_1fr] lg:gap-[3.472vw]">
        <div
          data-reveal="left"
          className="order-2 -mx-5 flex flex-col gap-8 overflow-hidden [mask-image:linear-gradient(90deg,black_0%,black_86%,transparent_100%)] sm:-mx-10 lg:order-1 lg:mx-0 lg:h-[37.821vw] lg:gap-[clamp(2.4375rem,2.708vw,3.25rem)]"
        >
          <IntroBookRow books={topRow} />
          <IntroBookRow books={bottomRow} reverse />
        </div>

        <div data-reveal="right" className="order-1 lg:order-2">
          <Heading
            as="h2"
            size="display"
            className="lg:text-[clamp(3.5rem,3.889vw,4.6667rem)] lg:leading-[1.4]"
          >
            The best in the Industry:{" "}
            <AccentText>Amazon Publications LLC</AccentText>
          </Heading>
          <p className="mt-2.5 text-base leading-normal lg:mt-[clamp(.625rem,.694vw,.8333rem)] lg:text-[clamp(1rem,1.111vw,1.3333rem)]">
            Do you dream of becoming a writer? Do you have a story to tell or
            have a book living inside of you? Our ghostwriting services are
            designed to assist you in achieving all your book writing and
            publishing goals. Whether you struggle to find the time to write a
            book, or you have come to a conclusion that the actual writing
            process is not for you, the team behind Langley Sutton Publications
            LLC is here to help you become a writer without even going through
            the pains of putting a pen to the paper.
          </p>
        </div>
      </div>
    </section>
  );
}
