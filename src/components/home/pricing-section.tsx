import Image from "next/image";
import Link from "next/link";

import { AccentText, buttonVariants, Heading } from "@/components/ui";
import { figmaAssets } from "@/design-system";
import { cn } from "@/lib/utils";

const packages = [
  {
    tier: "Starter",
    name: "For First-Time Authors",
    features: [
      "Manuscript review",
      "Proofreading",
      "Basic cover design",
      "eBook formatting",
      "ISBN and KDP upload",
    ],
  },
  {
    tier: "Professional",
    name: "The Essential Launch",
    features: [
      "Line & copy editing",
      "Custom cover design",
      "Print & eBook formatting",
      "Author website",
      "Amazon launch strategy",
    ],
  },
  {
    tier: "Premium",
    name: "Full-Service Launch",
    features: [
      "Developmental editing",
      "Premium cover concepts",
      "Global distribution",
      "PR & press release",
      "6-week marketing sprint",
    ],
  },
  {
    tier: "Enterprise",
    name: "For Imprints And Series",
    features: [
      "Ghostwriting available",
      "Series branding system",
      "Audiobook production",
      "Dedicated launch team",
      "12-month campaign",
    ],
  },
] as const;

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="bg-white px-5 pt-20 pb-20 text-ink sm:px-10 lg:px-[6.944vw] lg:pt-[6.25rem] lg:pb-0.5"
    >
      <div className="mx-auto flex max-w-[77.5rem] flex-col items-center">
        <div data-reveal="up" className="text-center">
          <Heading as="h2" size="display" align="center">
            <AccentText>Transparent Pricing</AccentText>, Real Value
          </Heading>
          <p className="mt-2.5 text-base leading-[1.2]">
            Pick a ready-made package, or sit with your project manager and
            build your own.
          </p>
        </div>

        <div className="mt-[3.125rem] grid w-full gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {packages.map((item, index) => (
            <article
              key={item.name}
              data-reveal="scale"
              data-reveal-delay={(index % 3) + 1}
              data-motion-card
              className="flex min-h-[28.6875rem] flex-col overflow-hidden rounded-[1.25rem] border border-brand bg-[linear-gradient(180deg,rgba(33,158,188,0)_0%,rgba(33,158,188,.1)_100%),linear-gradient(90deg,#fff_0%,#fff_100%)] p-6 transition-[background-image] duration-200 hover:bg-[linear-gradient(180deg,rgba(33,158,188,0)_0%,rgba(33,158,188,.4)_100%),linear-gradient(90deg,#fff_0%,#fff_100%)] focus-within:bg-[linear-gradient(180deg,rgba(33,158,188,0)_0%,rgba(33,158,188,.4)_100%),linear-gradient(90deg,#fff_0%,#fff_100%)]"
            >
              <div>
                <p className="text-base leading-normal">{item.tier}</p>
                <Heading as="h3" size="title" className="mt-3">
                  {item.name}
                </Heading>
              </div>

              <ul className="mt-8 space-y-3">
                {item.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2.5 text-[1.1607rem] leading-normal font-medium tracking-[-0.01em]"
                  >
                    <Image
                      src={figmaAssets.icons.check}
                      alt=""
                      width={24}
                      height={24}
                      className="size-6 shrink-0"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "primary", size: "md" }),
                  "mt-auto w-full",
                )}
              >
                Get Started
              </Link>
            </article>
          ))}
        </div>
        <p className="mt-6 max-w-[52rem] text-center text-base leading-relaxed text-ink/75">
          Whichever you pick, you keep 100% of your rights and get a dedicated
          project manager. Prefer something bespoke? We will quote it.
        </p>
      </div>
    </section>
  );
}
