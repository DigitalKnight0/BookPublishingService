import Image from "next/image";

import { AccentText, Heading } from "@/components/ui";
import { figmaAssets } from "@/design-system";
import { cn } from "@/lib/utils";

const homeSteps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We hop on a free call to hear about the book, who it is for, and what a win looks like to you.",
  },
  {
    number: "02",
    title: "Manuscript Review",
    description:
      "We read the whole draft closely, then hand you a plain roadmap of what it needs.",
  },
  {
    number: "03",
    title: "Editing",
    description:
      "We work through the pages at every level, from structure down to the last comma.",
  },
  {
    number: "04",
    title: "Design and Illustrations",
    description:
      "We build the cover, choose the type, and lay out every interior page.",
  },
  {
    number: "05",
    title: "Publishing",
    description:
      "We sort the ISBN and metadata, then push your book live with retailers.",
  },
  {
    number: "06",
    title: "Distribution",
    description:
      "We widen the net through premium channels that reach readers worldwide.",
  },
  {
    number: "07",
    title: "Marketing",
    description:
      "We run the launch, gather reviews, and keep the book selling well past week one.",
  },
] as const;

const lpSteps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We get to know the book, the reader, and what you want from it.",
  },
  {
    number: "02",
    title: "Manuscript Review",
    description:
      "We ghostwrite from scratch, or read and map your existing draft.",
  },
  {
    number: "03",
    title: "Editing",
    description: "We shape, tighten, and proofread the manuscript.",
  },
  {
    number: "04",
    title: "Design and Illustrations",
    description: "We create the cover, interior, and any original artwork.",
  },
  {
    number: "05",
    title: "Publishing",
    description:
      "We handle ISBN, metadata, and your book's retail listings.",
  },
  {
    number: "06",
    title: "Distribution",
    description:
      "We send the book out through premium global distribution channels.",
  },
  {
    number: "07",
    title: "Marketing",
    description: "We help readers find it and keep it selling.",
  },
] as const;

export function PublishingProcessSection({
  variant = "home",
}: {
  variant?: "home" | "lp";
}) {
  const isLp = variant === "lp";
  const steps = isLp ? lpSteps : homeSteps;

  return (
    <section
      className={cn(
        "relative isolate overflow-hidden bg-white px-5 pt-20 pb-20 text-ink sm:px-10 lg:px-[6.944vw] lg:pt-[6.25rem]",
        isLp ? "lg:pb-[6.25rem]" : "lg:pb-0.5",
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[-2rem] right-[-72vw] -z-10 hidden h-[67.6rem] w-[102.5vw] overflow-hidden lg:block"
      >
        <div className="absolute top-0 left-[-35.57%] h-[100.78%] w-[135.58%]">
          <Image
            src={figmaAssets.process.floatingBooks}
            alt=""
            fill
            className="object-fill"
            sizes="139vw"
          />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[8.7rem] left-[-89.8vw] -z-10 hidden h-[66.6rem] w-[118.8vw] overflow-hidden lg:block"
      >
        <div className="absolute top-0 left-[-0.01%] h-[102.34%] w-[116.94%]">
          <Image
            src={figmaAssets.process.floatingBooks}
            alt=""
            fill
            className="object-fill"
            sizes="139vw"
          />
        </div>
      </div>

      <div
        data-reveal="up"
        className="mx-auto flex max-w-[37.8125rem] flex-col items-center text-center"
      >
        <Heading as="h2" size="display" align="center">
          {isLp ? (
            <>
              How It Works <AccentText>Start To Finish</AccentText>
            </>
          ) : (
            <>
              How A Manuscript <AccentText>Becomes A Book</AccentText>
            </>
          )}
        </Heading>
        <p className="mt-2.5 max-w-[33.582rem] text-base leading-[1.2]">
          {isLp
            ? "Here is exactly how we help you publish a book, one step at a time."
            : "A clear, seven-step path from your first conversation to an active book launch."}
        </p>
      </div>

      <div className="mx-auto mt-[5.125rem] mb-0 grid w-full max-w-[57.3125rem] gap-x-[4.0625rem] gap-y-16 lg:mb-14 lg:grid-cols-2 lg:items-start lg:gap-y-[2.28125rem]">
        {steps.map((step, index) => (
          <article
            key={step.number}
            className={index % 2 === 1 ? "lg:translate-y-14" : undefined}
          >
            <div
              data-reveal="scale"
              data-reveal-delay={(index % 3) + 1}
            >
              <div className="group/step relative min-h-[10.25rem] rounded-[1.25rem] border border-brand bg-[linear-gradient(180deg,rgba(33,158,188,0)_0%,rgba(33,158,188,.2)_100%),#fff] p-6 pt-10 transition-[transform,box-shadow,border-color] duration-300 ease-out before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(180deg,#219ebc_0%,#023047_100%)] before:opacity-0 before:transition-opacity before:duration-300 hover:-translate-y-1.5 hover:border-transparent hover:shadow-[0_18px_40px_rgba(2,48,71,.2)] hover:before:opacity-100 sm:p-8">
                <span className="bg-gradient-action absolute top-[-2rem] left-5 z-20 inline-flex size-14 items-center justify-center rounded-[0.795rem] border border-white/30 text-[1.432rem] font-medium text-white shadow-none transition-[transform,box-shadow] duration-300 ease-out group-hover/step:scale-110 group-hover/step:shadow-[0_8px_22px_rgba(2,48,71,.32)] lg:left-[-2rem]">
                  {step.number}
                </span>
                <Heading
                  as="h3"
                  size="subheading"
                  className="relative z-10 text-2xl transition-colors duration-300 group-hover/step:text-white"
                >
                  {step.title}
                </Heading>
                <p className="relative z-10 mt-2.5 text-base leading-[1.2] transition-colors duration-300 group-hover/step:text-white">
                  {step.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

    </section>
  );
}
