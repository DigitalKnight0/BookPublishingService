import Image from "next/image";

import { AccentText, Heading } from "@/components/ui";
import { figmaAssets } from "@/design-system";

const steps = [
  {
    number: "01",
    title: "Share Your Vision",
    description:
      "Your journey begins with a simple sign-up and a conversation about your book before we carefully match your project with the team best suited to bring your story to life.",
  },
  {
    number: "02",
    title: "Meet Your Project Manager",
    description:
      "After onboarding, you’ll be assigned a dedicated project manager who will serve as your primary point of contact throughout the process, keeping everything on schedule.",
  },
  {
    number: "03",
    title: "Watch Your Story Come to Life",
    description:
      "Once the project plan is approved, your writer or editor begins crafting your manuscript. Every chapter is developed with your feedback, ensuring the final work reflects your voice and vision.",
  },
  {
    number: "04",
    title: "Elevate Your Book’s Presentation",
    description:
      "Next, our design specialists take over. Professional formatting ensures a seamless reading experience, while our creative designers produce covers and supporting graphics that make your book stand out.",
  },
  {
    number: "05",
    title: "Publish for a Global Audience",
    description:
      "When everything is ready with your approval, our publishing experts prepare your manuscript for distribution across leading platforms, transforming it into a professionally published title available to readers around the world.",
  },
  {
    number: "06",
    title: "Grow Your Author Brand",
    description:
      "Publishing is only the beginning. Our marketing team develops a customized promotional strategy designed to increase your book’s visibility and strengthen your presence as an author across global markets.",
  },
] as const;

export function PublishingProcessSection() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-5 pt-20 pb-20 text-ink sm:px-10 lg:px-[6.944vw] lg:pt-[6.25rem] lg:pb-0.5">
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
          Simple steps to self <AccentText>Publish a book</AccentText> with flair
        </Heading>
        <p className="mt-2.5 max-w-[33.582rem] text-base leading-[1.2]">
          From editing and formatting to cover design, publishing, and
          distribution, we provide the expertise and support you need to bring
          your vision to life.
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
