"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import type { FormEvent, MouseEvent } from "react";
import { useEffect, useRef, useState } from "react";

const popupArtwork =
  "/assets/figma/popup/discount-popup-background-v2.png";
const popupArtworkMobile =
  "/assets/figma/popup/discount-popup-background-mobile-v2.png";
const contactNameStorageKey = "publishing-contact-name";
const contactEmailStorageKey = "publishing-contact-email";
const contactPhoneStorageKey = "publishing-contact-phone";
const contactSourceStorageKey = "publishing-contact-source-page";
const skipContactPopupStorageKey = "publishing-discount-skip-contact";

export function PublishingDiscountPopup() {
  const pathname = usePathname();
  const router = useRouter();
  const dialogRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);

    if (
      pathname.startsWith("/contact") &&
      window.sessionStorage.getItem(skipContactPopupStorageKey)
    ) {
      window.sessionStorage.removeItem(skipContactPopupStorageKey);
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      setIsOpen(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement;

    document.body.style.overflow = "hidden";
    dialogRef.current?.focus({ preventScroll: true });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);

      if (previouslyFocused instanceof HTMLElement) {
        previouslyFocused.focus();
      }
    };
  }, [isOpen]);

  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) setIsOpen(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();

    if (!email) return;

    if (name) {
      window.sessionStorage.setItem(contactNameStorageKey, name);
    } else {
      window.sessionStorage.removeItem(contactNameStorageKey);
    }
    window.sessionStorage.setItem(contactEmailStorageKey, email);
    if (phone) {
      window.sessionStorage.setItem(contactPhoneStorageKey, phone);
    } else {
      window.sessionStorage.removeItem(contactPhoneStorageKey);
    }
    window.sessionStorage.setItem(
      contactSourceStorageKey,
      window.location.href,
    );
    setIsOpen(false);

    if (pathname === "/lp" || pathname === "/lp/") {
      router.push("/lp#contact");
      return;
    }

    window.sessionStorage.setItem(skipContactPopupStorageKey, "true");
    router.push("/contact#contact-form");
  };

  if (!isOpen) return null;

  return (
    <div
      className="discount-popup-backdrop fixed inset-0 z-[2147483646] flex items-center justify-center overflow-y-auto bg-black/50 p-3 sm:p-6"
      onMouseDown={handleBackdropClick}
    >
      <section
        ref={dialogRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="publishing-discount-title"
        className="discount-popup-dialog relative aspect-[733/1013] w-full max-w-[22.875rem] overflow-visible text-white outline-none sm:max-w-[61.5rem] sm:aspect-[883/719]"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <Image
          src={popupArtwork}
          alt=""
          fill
          priority
          className="pointer-events-none hidden object-fill drop-shadow-[0_32px_45px_rgba(0,0,0,.32)] sm:block sm:scale-[1.08]"
        />

        <Image
          src={popupArtworkMobile}
          alt=""
          fill
          priority
          className="pointer-events-none object-fill drop-shadow-[0_24px_36px_rgba(0,0,0,.3)] sm:hidden"
        />

        <button
          type="button"
          aria-label="Close discount popup"
          onClick={() => setIsOpen(false)}
          className="absolute top-0 right-[9%] z-40 flex size-8 items-center justify-center rounded-full border-2 border-white bg-[#177b91] text-white transition-colors duration-200 hover:bg-brand-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:top-[13.5%] sm:right-[6%] sm:size-10 sm:border-[3px]"
        >
          <X aria-hidden className="size-4.5 sm:size-6" />
        </button>

        <div className="absolute top-[10.5%] right-[14.5%] left-[14.5%] z-30 origin-top scale-[0.94] sm:top-[24.75%] sm:right-auto sm:left-[15%] sm:w-[34%] sm:scale-100">
          <h2
            id="publishing-discount-title"
            className="origin-center scale-x-[0.8] text-center font-display text-[1.9rem] leading-[0.88] font-normal tracking-[-0.04em] whitespace-nowrap uppercase sm:scale-x-[0.84] sm:text-[3.4rem]"
          >
            Get 50% Off
          </h2>

          <p className="mx-auto mt-1 max-w-[13rem] text-center text-xs leading-[1.08] sm:mt-2 sm:max-w-[18rem] sm:text-[1.02rem]">
            start your publishing journey with 50% discount!
          </p>

          <form onSubmit={handleSubmit} className="mt-2 space-y-1.5 sm:mt-2 sm:space-y-2.5">
            <div>
              <label
                htmlFor="publishing-discount-name"
                className="mb-0.5 block text-xs leading-normal font-medium sm:mb-1 sm:text-base"
              >
                Full Name
              </label>
              <input
                id="publishing-discount-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Full Name"
                className="h-8 w-full rounded-lg border border-white/40 bg-white/5 px-3 text-xs font-medium text-white outline-none transition-[background-color,border-color,box-shadow] duration-200 placeholder:text-white/45 focus:border-white focus:bg-white/10 focus:shadow-[0_0_0_3px_rgba(255,255,255,.12)] sm:h-10 sm:rounded-[0.625rem] sm:px-4 sm:text-base"
              />
            </div>

            <div>
              <label
                htmlFor="publishing-discount-phone"
                className="mb-0.5 block text-xs leading-normal font-medium sm:mb-1 sm:text-base"
              >
                Phone Number
              </label>
              <input
                id="publishing-discount-phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                placeholder="Phone Number"
                className="h-8 w-full rounded-lg border border-white/40 bg-white/5 px-3 text-xs font-medium text-white outline-none transition-[background-color,border-color,box-shadow] duration-200 placeholder:text-white/45 focus:border-white focus:bg-white/10 focus:shadow-[0_0_0_3px_rgba(255,255,255,.12)] sm:h-10 sm:rounded-[0.625rem] sm:px-4 sm:text-base"
              />
            </div>

            <div>
              <label
                htmlFor="publishing-discount-email"
                className="mb-0.5 block text-xs leading-normal font-medium sm:mb-1 sm:text-base"
              >
                Email
              </label>
              <input
                id="publishing-discount-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="Email"
                className="h-8 w-full rounded-lg border border-white/40 bg-white/5 px-3 text-xs font-medium text-white outline-none transition-[background-color,border-color,box-shadow] duration-200 placeholder:text-white/45 focus:border-white focus:bg-white/10 focus:shadow-[0_0_0_3px_rgba(255,255,255,.12)] sm:h-10 sm:rounded-[0.625rem] sm:px-4 sm:text-base"
              />
            </div>

            <button
              type="submit"
              className="min-h-8 w-full rounded-lg bg-white px-4 py-1 text-xs leading-normal font-medium text-ink shadow-sm transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:min-h-10 sm:rounded-[0.625rem] sm:px-5 sm:py-2 sm:text-base"
            >
              Get my 50% Discount
            </button>
          </form>
        </div>

      </section>
    </div>
  );
}
