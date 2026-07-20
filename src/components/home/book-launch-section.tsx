import Image from "next/image";
import Link from "next/link";

import { AccentText, buttonVariants, Heading } from "@/components/ui";
import { figmaAssets } from "@/design-system";

const bookNames = [
  "Carrie Anne’s World",
  "Heir to the Gift",
  "The Museum of Extraordinary Things",
  "Resilience",
  "The Museum of Extraordinary Things",
] as const;

function ShelfBook({ cover, name }: { cover: string; name: string }) {
  return (
    <div className="group/shelf flex w-[20.1414rem] shrink-0 snap-center flex-col items-center justify-center">
      <div className="relative z-10 mb-[-4.2104rem] h-[18.0426rem] w-[13.2578rem]">
        <Image
          src={cover}
          alt={name}
          fill
          className="object-contain transition-transform duration-500 ease-out group-hover/shelf:-translate-y-2 group-hover/shelf:scale-[1.025]"
          sizes="213px"
        />
      </div>
      <div className="relative h-[6.3818rem] w-[22.366rem]">
        <Image
          src={figmaAssets.process.shelf}
          alt=""
          fill
          className="object-contain drop-shadow-[0_13px_11px_rgba(54,29,18,.32)]"
          sizes="358px"
        />
      </div>
    </div>
  );
}

export function BookLaunchSection() {
  return (
    <section className="overflow-hidden border-b-2 border-brand bg-gradient-pale px-0 pt-20 pb-[1.875rem] text-ink lg:pt-[6.25rem]">
      <div
        data-reveal="up"
        className="mx-auto flex max-w-[55.6376rem] flex-col items-center px-5 text-center sm:px-10"
      >
        <Heading as="h2" size="display" align="center">
          Launch a book that gets noticed with Book{" "}
          <AccentText>Publication Services</AccentText>
        </Heading>
        <p className="mt-2.5 max-w-[38.625rem] text-base leading-[1.2]">
          Partner with our experienced publishing professionals and bring your
          book to life with ease. At BPS, we support authors from all
          backgrounds, offering end-to-end publishing services tailored to
          their unique goals
        </p>
        <Link
          href="/#contact"
          className={`${buttonVariants({ variant: "primary", size: "md" })} mt-10`}
        >
          Talk To An Expert
        </Link>
      </div>

      <div className="launch-marquee mt-10 w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent_0%,black_6%,black_94%,transparent_100%)]">
        <div className="launch-marquee-track flex h-[22.4375rem] w-max items-center">
          {[false, true].map((duplicate) => (
            <div
              key={duplicate ? "duplicate" : "original"}
              aria-hidden={duplicate || undefined}
              className="flex shrink-0 items-center gap-[3.1875rem] pr-[3.1875rem]"
            >
              {figmaAssets.process.launchBooks.map((cover, index) => (
                <ShelfBook
                  key={`${duplicate ? "duplicate" : "original"}-${cover}-${index}`}
                  cover={cover}
                  name={duplicate ? "" : bookNames[index]}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
