import Image from "next/image";
import Link from "next/link";

import { figmaAssets } from "@/design-system";

const serviceColumns = [
  [
    "Book Publishing",
    "Ghostwriting",
  ],
  [
    "Editing and Proofreading",
    "Design and Illustrations",
  ],
  [
    "Book Marketing",
    "Global Distribution",
  ],
  [
    "Audiobook Production",
    "Printing Services",
  ],
] as const;

const paymentMethods = [
  { src: figmaAssets.payments.visa, name: "Visa" },
  { src: figmaAssets.payments.mastercard, name: "Mastercard" },
  { src: figmaAssets.payments.discover, name: "Discover" },
  { src: figmaAssets.payments.americanExpress, name: "American Express" },
] as const;

export function SiteFooter({
  variant = "default",
}: {
  variant?: "default" | "about" | "services";
}) {
  const isServicesFooter = variant === "services";
  const isAboutFooter = variant === "about";

  return (
    <footer id="legal" className="relative z-0 text-white">
      <div className="bg-gradient-section relative isolate min-h-[44.375rem] overflow-hidden px-5 pt-[6.25rem] pb-12 sm:px-10 lg:px-[6.944vw]">
        <div
          aria-hidden="true"
          className={
            isServicesFooter
              ? "pointer-events-none absolute top-[-3.07vw] left-[-21.128vw] -z-10 h-[18.278vw] w-[142.255vw] -scale-y-100"
              : "pointer-events-none absolute top-0 left-0 -z-10 h-[11.71875rem] w-[101.885%] rotate-180"
          }
        >
          <Image
            src={
              isServicesFooter
                ? figmaAssets.footer.servicesDivider
                : isAboutFooter
                  ? figmaAssets.footer.aboutDivider
                  : figmaAssets.footer.divider
            }
            alt=""
            fill
            unoptimized={isServicesFooter || isAboutFooter}
            className="object-fill"
            sizes="102vw"
          />
        </div>

        <h2 className="text-center font-display text-[clamp(2rem,3.2vw,2.5rem)] leading-[1.4] tracking-[0.01em]">
          Our Wide Variety Of Services Includes:
        </h2>
        <p className="mx-auto mt-4 max-w-[44rem] text-center text-base leading-relaxed text-white/90">
          A full-service publishing partner. We turn finished manuscripts into
          well-made books and get them onto shelves around the world.
        </p>

        <div className="mx-auto mt-[3.125rem] grid max-w-[68.25rem] grid-cols-2 gap-x-10 gap-y-8 text-sm leading-7 sm:text-base lg:grid-cols-4">
          {serviceColumns.map((column, columnIndex) => (
            <ul key={columnIndex}>
              {column.map((service, serviceIndex) => (
                <li key={`${service}-${serviceIndex}`}>{service}</li>
              ))}
            </ul>
          ))}
        </div>

        <div className="mx-auto mt-[3.125rem] max-w-[77.5rem] border-t border-white/25 pt-[3.125rem] text-center">
          <p className="text-base leading-normal">Secure payment by</p>
          <div className="mt-5 flex justify-center gap-2.5">
            {paymentMethods.map((method) => (
              <Image
                key={method.name}
                src={method.src}
                alt={method.name}
                width={55}
                height={30}
                className="h-[1.875rem] w-auto rounded"
              />
            ))}
          </div>
        </div>

        <p className="mx-auto mt-[3.125rem] max-w-[64.634rem] text-center text-base leading-[1.2]">
          Disclaimer: Book Publication Solutions is an independent publishing
          services company and is not affiliated with, endorsed by, or sponsored
          by any literary agency, traditional publishing house, or retailer.
          Results, timelines, and outcomes may vary by project.
        </p>
      </div>

      <div className="bg-white px-5 py-5 text-ink sm:px-10 lg:px-[6.944vw]">
        <div className="mx-auto grid max-w-[77.5rem] gap-6 text-sm leading-6 sm:text-base lg:grid-cols-3">
          <div className="flex flex-col items-center gap-2.5">
            <a href="tel:+13056028290" className="flex items-center gap-2.5">
              <Image src={figmaAssets.icons.phone} alt="" width={24} height={24} />
              <span>(305) 602-8290</span>
            </a>
            <a
              href="mailto:support@bookpublicationsolutions.com"
              className="flex items-center gap-2.5"
            >
              <Image src={figmaAssets.icons.mail} alt="" width={24} height={24} />
              <span>support@bookpublicationsolutions.com</span>
            </a>
          </div>

          <div className="flex flex-col items-center gap-2.5 text-center">
            <p className="flex items-center gap-2.5">
              <Image
                src={figmaAssets.icons.location}
                alt=""
                width={24}
                height={24}
              />
              <span>25 SE 2nd Ave Ste 550, Miami FL 33131</span>
            </p>
            <p>© 2026 Book Publication Solutions. All rights reserved.</p>
          </div>

          <nav className="grid w-full max-w-[22rem] grid-cols-2 items-center justify-self-center gap-x-8 gap-y-2.5 text-center">
            <Link href="/packages">Packages</Link>
            <Link href="/contact">Contact Us</Link>
            <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
