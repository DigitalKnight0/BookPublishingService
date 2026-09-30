"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { ChangeEvent, FormEvent } from "react";
import { useEffect, useState } from "react";

import { Input, Textarea } from "@/components/ui";
import { getLeadFields, submitLead } from "@/lib/lead-submission";
import { cn } from "@/lib/utils";

const fieldClassName =
  "border-transparent bg-black/10 font-medium text-ink opacity-50 placeholder:text-ink transition-[background-color,border-color,opacity,box-shadow] duration-200 focus:border-brand focus:bg-white focus:opacity-100 focus:ring-brand/20";
const contactNameStorageKey = "publishing-contact-name";
const contactEmailStorageKey = "publishing-contact-email";
const contactPhoneStorageKey = "publishing-contact-phone";
const contactSourceStorageKey = "publishing-contact-source-page";

export function QuoteForm({
  id,
  className,
  scaleOnDesktop = false,
  serviceName = "Book Publication Solutions",
  prefillContactEmail = false,
  heading = "Get A Free Quote",
  description = "Discuss your project with our experts.",
  submitLabel = "Submit",
  showServiceSelect = false,
}: {
  id?: string;
  className?: string;
  scaleOnDesktop?: boolean;
  serviceName?: string;
  prefillContactEmail?: boolean;
  heading?: string;
  description?: string;
  submitLabel?: string;
  showServiceSelect?: boolean;
}) {
  const router = useRouter();
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  useEffect(() => {
    if (!prefillContactEmail) return;

    const storedName = window.sessionStorage.getItem(contactNameStorageKey);
    const storedEmail = window.sessionStorage.getItem(contactEmailStorageKey);
    const storedPhone = window.sessionStorage.getItem(contactPhoneStorageKey);

    if (storedName) setNameValue(storedName);
    if (storedEmail) setEmailValue(storedEmail);
    if (storedPhone) setPhoneValue(storedPhone);
  }, [prefillContactEmail]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    setSubmissionStatus("submitting");

    try {
      const leadFields = getLeadFields(form, serviceName);
      const popupSourcePage = prefillContactEmail
        ? window.sessionStorage.getItem(contactSourceStorageKey)
        : null;

      if (popupSourcePage) {
        const sourceNote =
          `This visitor interacted with the discount popup on: ${popupSourcePage}`;

        leadFields.message = leadFields.message
          ? `${leadFields.message}\n\n${sourceNote}`
          : sourceNote;
      }

      await submitLead(leadFields);
      window.sessionStorage.removeItem(contactNameStorageKey);
      window.sessionStorage.removeItem(contactEmailStorageKey);
      window.sessionStorage.removeItem(contactPhoneStorageKey);
      window.sessionStorage.removeItem(contactSourceStorageKey);
      form.reset();
      setSubmissionStatus("success");
      router.push("/thank-you");
    } catch (error) {
      console.error("Unable to submit lead", error);
      setSubmissionStatus("error");
    }
  };

  const scaledFieldClassName = scaleOnDesktop
    ? "lg:h-[clamp(2.8125rem,3.125vw,3.75rem)] lg:rounded-[clamp(.625rem,.694vw,.8333rem)] lg:px-[clamp(1.25rem,1.389vw,1.6667rem)] lg:py-[clamp(.75rem,.868vw,1.0417rem)] lg:text-[clamp(1rem,1.151vw,1.3809rem)]"
    : undefined;

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      className={cn(
        "flex w-full flex-col gap-[1.3125rem] rounded-[1.25rem] border border-brand bg-[linear-gradient(180deg,rgba(33,158,188,0)_0%,rgba(33,158,188,.2)_100%),linear-gradient(90deg,#fff_0%,#fff_100%)] p-6 text-ink shadow-[0_24px_70px_rgba(2,48,71,.16)] sm:p-8",
        scaleOnDesktop &&
          "quote-form-scaled lg:gap-[clamp(1.3125rem,1.458vw,1.75rem)] lg:rounded-[clamp(1.25rem,1.389vw,1.6667rem)] lg:p-[clamp(2rem,2.222vw,2.6667rem)]",
        className,
      )}
    >
      <div>
        <h2
          className={cn(
            "text-[2rem] leading-none font-medium tracking-[-0.01em]",
            scaleOnDesktop &&
              "lg:text-[clamp(2rem,2.222vw,2.6667rem)]",
          )}
        >
          {heading}
        </h2>
        <p
          className={cn(
            "mt-2.5 text-sm leading-normal tracking-[-0.01em]",
            scaleOnDesktop &&
              "lg:mt-[clamp(.625rem,.694vw,.8333rem)] lg:text-[clamp(.875rem,.972vw,1.1667rem)]",
          )}
        >
          {description}
        </p>
      </div>

      <div
        className={cn(
          "flex flex-col gap-2.5",
          scaleOnDesktop && "lg:gap-[clamp(.625rem,.694vw,.8333rem)]",
        )}
      >
        <label htmlFor={`${id ?? "quote"}-name`} className="sr-only">
          Name
        </label>
        <Input
          id={`${id ?? "quote"}-name`}
          name="name"
          required
          placeholder="Name"
          autoComplete="name"
          {...(prefillContactEmail
            ? {
                value: nameValue,
                onChange: (event: ChangeEvent<HTMLInputElement>) =>
                  setNameValue(event.target.value),
              }
            : {})}
          className={cn(fieldClassName, scaledFieldClassName)}
        />

        <div
          className={cn(
            "grid gap-2.5 sm:grid-cols-2",
            scaleOnDesktop && "lg:gap-[clamp(.625rem,.694vw,.8333rem)]",
          )}
        >
          <div>
            <label htmlFor={`${id ?? "quote"}-email`} className="sr-only">
              Email
            </label>
            <Input
              id={`${id ?? "quote"}-email`}
              name="email"
              type="email"
              required
              placeholder="Email"
              autoComplete="email"
              {...(prefillContactEmail
                ? {
                    value: emailValue,
                    onChange: (event: ChangeEvent<HTMLInputElement>) =>
                      setEmailValue(event.target.value),
                  }
                : {})}
              className={cn(fieldClassName, scaledFieldClassName)}
            />
          </div>
          <div>
            <label htmlFor={`${id ?? "quote"}-phone`} className="sr-only">
              Phone Number
            </label>
            <Input
              id={`${id ?? "quote"}-phone`}
              name="phone"
              type="tel"
              required
              placeholder="Phone Number"
              autoComplete="tel"
              {...(prefillContactEmail
                ? {
                    value: phoneValue,
                    onChange: (event: ChangeEvent<HTMLInputElement>) =>
                      setPhoneValue(event.target.value),
                  }
                : {})}
              className={cn(fieldClassName, scaledFieldClassName)}
            />
          </div>
        </div>

        <label htmlFor={`${id ?? "quote"}-message`} className="sr-only">
          Tell us about your book
        </label>
        <Textarea
          id={`${id ?? "quote"}-message`}
          name="message"
          required
          placeholder="Tell us about your book"
          className={cn(
            "min-h-[6.8125rem]",
            fieldClassName,
            scaledFieldClassName,
            scaleOnDesktop &&
              "lg:min-h-[clamp(6.8125rem,7.569vw,9.0833rem)]",
          )}
        />

        {showServiceSelect ? (
          <div>
            <label htmlFor={`${id ?? "quote"}-service`} className="sr-only">
              Service
            </label>
            <select
              id={`${id ?? "quote"}-service`}
              name="service_name"
              required
              defaultValue=""
              className={cn(
                "h-12 w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-offset-2",
                fieldClassName,
                scaledFieldClassName,
              )}
            >
              <option value="" disabled>
                Select a service
              </option>
              {[
                "Book Publishing",
                "Ghostwriting",
                "Book Editing",
                "Proofreading",
                "Cover Design",
                "Interior Formatting",
                "Book Illustration",
                "eBook and Kindle",
                "Audiobook Production",
                "Book Marketing",
                "Author Branding",
                "ISBN Registration",
                "Printing Services",
                "Global Distribution",
              ].map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>
        ) : null}
      </div>

      <label
        className={cn(
          "flex items-start gap-[0.3125rem] text-sm leading-normal tracking-[-0.01em]",
          scaleOnDesktop &&
            "lg:gap-[clamp(.3125rem,.347vw,.4167rem)] lg:text-[clamp(.875rem,.972vw,1.1667rem)]",
        )}
      >
        <input
          name="consent"
          type="checkbox"
          required
          className={cn(
            "mt-0.5 size-4 shrink-0 appearance-none rounded-[0.1875rem] border-[1.5px] border-ink checked:bg-brand-deep checked:bg-[linear-gradient(135deg,transparent_42%,white_42%,white_55%,transparent_55%)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
            scaleOnDesktop &&
              "lg:size-[clamp(1rem,1.111vw,1.3333rem)] lg:rounded-[clamp(.1875rem,.208vw,.25rem)] lg:border-2",
          )}
        />
        <span>
          Tick the box to get updates by SMS or email. See our{" "}
          <Link
            href="/privacy-policy"
            className="text-gradient-brand underline underline-offset-2"
          >
            Privacy Policy
          </Link>
          {" "}and{" "}
          <Link
            href="/terms-and-conditions"
            className="text-gradient-brand underline underline-offset-2"
          >
            Terms and Conditions
          </Link>
          . Carrier charges may apply for SMS. Reply &apos;STOP&apos; any time to
          unsubscribe.
        </span>
      </label>

      <button
        type="submit"
        disabled={submissionStatus === "submitting"}
        className={cn(
          "bg-gradient-action min-h-[2.9375rem] w-full rounded-[0.625rem] border border-white/30 px-5 py-3 text-lg leading-normal font-medium text-white shadow-sm transition-[filter,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
          scaleOnDesktop &&
            "lg:min-h-[clamp(2.9375rem,3.264vw,3.9167rem)] lg:rounded-[clamp(.625rem,.694vw,.8333rem)] lg:px-[clamp(1.25rem,1.389vw,1.6667rem)] lg:py-[clamp(.75rem,.868vw,1.0417rem)] lg:text-[clamp(1.125rem,1.25vw,1.5rem)]",
        )}
      >
        {submissionStatus === "submitting" ? "Submitting…" : submitLabel}
      </button>

      {submissionStatus === "success" || submissionStatus === "error" ? (
        <p
          role="status"
          aria-live="polite"
          className={cn(
            "text-center text-sm font-medium",
            submissionStatus === "success"
              ? "text-emerald-700"
              : "text-red-700",
          )}
        >
          {submissionStatus === "success"
            ? "Thank you! Your details have been sent successfully."
            : "We couldn't send your details. Please try again."}
        </p>
      ) : null}
    </form>
  );
}
