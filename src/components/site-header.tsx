"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { buttonVariants, Container } from "@/components/ui";
import { cn } from "@/lib/utils";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/lp" },
  { label: "Portfolio", href: "/#portfolio" },
] as const;

const serviceNavigation = [
  { label: "Ghostwriting", href: "/services/ghostwriting" },
  { label: "Book Editing", href: "/services/book-editing" },
  { label: "Design Services", href: "/services/design-services" },
  { label: "Publishing Service", href: "/services/publishing" },
  { label: "Audiobook Production", href: "/services/audiobook-production" },
  { label: "Book Marketing", href: "/services/book-marketing" },
] as const;

export function SiteHeader({
  contactHref = "#contact",
}: {
  contactHref?: string;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="site-header-enter text-ink fixed inset-x-0 top-0 z-50 border-b border-black/[0.06] bg-white shadow-[0_2px_12px_rgba(2,48,71,0.08)]">
      <Container className="flex h-[67px] max-w-none items-center justify-between px-5 sm:px-10 lg:h-[clamp(3.5625rem,4.653vw,5.5833rem)] lg:px-[6.944vw]">
        <Link
          href="/"
          className="font-display text-2xl leading-none lg:hidden"
          aria-label="Immaculate Publishing home"
        >
          Immaculate
        </Link>

        <nav
          className="hidden items-center gap-[clamp(2.5rem,2.778vw,3.333rem)] text-[clamp(1.125rem,1.25vw,1.5rem)] font-medium lg:flex"
          aria-label="Primary"
        >
          {navigation.map((item) =>
            item.label === "Services" ? (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className="hover:text-brand focus-visible:text-brand flex items-center gap-1.5 transition-colors duration-200 focus-visible:outline-none"
                  aria-haspopup="menu"
                >
                  {item.label}
                  <ChevronDown
                    aria-hidden
                    className="size-[1em] transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180"
                    strokeWidth={1.8}
                  />
                </Link>

                <div className="invisible absolute top-full left-1/2 z-50 w-[19rem] -translate-x-1/2 translate-y-2 pt-4 opacity-0 transition-[opacity,transform,visibility] duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <div className="rounded-2xl border border-black/10 bg-white p-2 shadow-[0_18px_50px_rgba(2,48,71,.16)]">
                    {serviceNavigation.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        role="menuitem"
                        className="hover:bg-surface-soft hover:text-brand focus-visible:bg-surface-soft focus-visible:text-brand block rounded-xl px-4 py-3 text-base font-medium transition-colors focus-visible:outline-none"
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-brand focus-visible:text-brand transition-colors duration-200 focus-visible:outline-none"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <Link
          href={contactHref}
          className={cn(
            buttonVariants({ variant: "primary" }),
            "hidden lg:inline-flex lg:min-h-[clamp(2.9375rem,3.264vw,3.9167rem)] lg:rounded-[clamp(.625rem,.694vw,.8333rem)] lg:px-[clamp(1.25rem,1.389vw,1.6667rem)] lg:py-0 lg:text-[clamp(1.125rem,1.25vw,1.5rem)]",
          )}
        >
          Contact us
        </Link>

        <button
          type="button"
          className="text-ink focus-visible:ring-brand inline-flex size-11 items-center justify-center rounded-lg transition-colors hover:bg-black/5 focus-visible:ring-2 focus-visible:outline-none lg:hidden"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <X aria-hidden size={24} />
          ) : (
            <Menu aria-hidden size={24} />
          )}
        </button>
      </Container>

      <div
        id="mobile-navigation"
        className={cn(
          "absolute inset-x-0 top-full overflow-hidden border-t border-black/10 bg-white transition-[max-height,opacity] duration-300 lg:hidden",
          menuOpen
            ? "max-h-[44rem] opacity-100"
            : "pointer-events-none max-h-0 opacity-0",
        )}
      >
        <Container className="flex max-w-none flex-col gap-1 px-5 py-4 sm:px-10">
          {navigation.map((item) =>
            item.label === "Services" ? (
              <div key={item.label}>
                <button
                  type="button"
                  aria-expanded={servicesOpen}
                  aria-controls="mobile-services-navigation"
                  className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-base font-medium hover:bg-black/5"
                  onClick={() => setServicesOpen((open) => !open)}
                >
                  {item.label}
                  <ChevronDown
                    aria-hidden
                    size={18}
                    className={cn(
                      "transition-transform duration-300",
                      servicesOpen && "rotate-180",
                    )}
                  />
                </button>
                <div
                  id="mobile-services-navigation"
                  className={cn(
                    "grid transition-[grid-template-rows,opacity] duration-300",
                    servicesOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="ml-3 flex flex-col border-l border-brand/25 pl-2">
                      {serviceNavigation.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="hover:bg-surface-soft hover:text-brand rounded-lg px-3 py-2.5 text-sm font-medium transition-colors"
                          onClick={() => {
                            setMenuOpen(false);
                            setServicesOpen(false);
                          }}
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-lg px-3 py-3 text-base font-medium hover:bg-black/5"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ),
          )}
          <Link
            href={contactHref}
            className={cn(buttonVariants({ variant: "primary" }), "mt-2")}
            onClick={() => setMenuOpen(false)}
          >
            Contact us
          </Link>
        </Container>
      </div>
    </header>
  );
}
