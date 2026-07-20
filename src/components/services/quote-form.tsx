import Link from "next/link";

import { Input, Textarea } from "@/components/ui";
import { cn } from "@/lib/utils";

const fieldClassName =
  "border-transparent bg-black/10 font-medium text-ink opacity-50 placeholder:text-ink transition-[background-color,border-color,opacity,box-shadow] duration-200 focus:border-brand focus:bg-white focus:opacity-100 focus:ring-brand/20";

export function QuoteForm({
  id,
  className,
  scaleOnDesktop = false,
}: {
  id?: string;
  className?: string;
  scaleOnDesktop?: boolean;
}) {
  const scaledFieldClassName = scaleOnDesktop
    ? "lg:h-[clamp(2.8125rem,3.125vw,3.75rem)] lg:rounded-[clamp(.625rem,.694vw,.8333rem)] lg:px-[clamp(1.25rem,1.389vw,1.6667rem)] lg:py-[clamp(.75rem,.868vw,1.0417rem)] lg:text-[clamp(1rem,1.151vw,1.3809rem)]"
    : undefined;

  return (
    <form
      id={id}
      className={cn(
        "flex w-full flex-col gap-[1.3125rem] rounded-[1.25rem] border border-brand bg-[linear-gradient(180deg,rgba(33,158,188,0)_0%,rgba(33,158,188,.2)_100%),linear-gradient(90deg,#fff_0%,#fff_100%)] p-6 text-ink shadow-[0_24px_70px_rgba(2,48,71,.16)] sm:p-8",
        scaleOnDesktop &&
          "lg:gap-[clamp(1.3125rem,1.458vw,1.75rem)] lg:rounded-[clamp(1.25rem,1.389vw,1.6667rem)] lg:p-[clamp(2rem,2.222vw,2.6667rem)]",
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
          Get A Free Quote
        </h2>
        <p
          className={cn(
            "mt-2.5 text-sm leading-normal tracking-[-0.01em]",
            scaleOnDesktop &&
              "lg:mt-[clamp(.625rem,.694vw,.8333rem)] lg:text-[clamp(.875rem,.972vw,1.1667rem)]",
          )}
        >
          Discuss your project with our Experts!
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
          placeholder="Name"
          autoComplete="name"
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
              placeholder="Email"
              autoComplete="email"
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
              placeholder="Phone Number"
              autoComplete="tel"
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
          placeholder="Tell us about your book"
          className={cn(
            "min-h-[6.8125rem]",
            fieldClassName,
            scaledFieldClassName,
            scaleOnDesktop &&
              "lg:min-h-[clamp(6.8125rem,7.569vw,9.0833rem)]",
          )}
        />
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
          className={cn(
            "mt-0.5 size-4 shrink-0 appearance-none rounded-[0.1875rem] border-[1.5px] border-ink checked:bg-brand-deep checked:bg-[linear-gradient(135deg,transparent_42%,white_42%,white_55%,transparent_55%)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
            scaleOnDesktop &&
              "lg:size-[clamp(1rem,1.111vw,1.3333rem)] lg:rounded-[clamp(.1875rem,.208vw,.25rem)] lg:border-2",
          )}
        />
        <span>
          By submitting this form and entering your phone number above, you
          agree to receive automated text messages from our brand and agree to
          our{" "}
          <Link
            href="#legal"
            className="text-gradient-brand underline underline-offset-2"
          >
            Terms and Privacy.
          </Link>
        </span>
      </label>

      <button
        type="submit"
        className={cn(
          "bg-gradient-action min-h-[2.9375rem] w-full rounded-[0.625rem] border border-white/30 px-5 py-3 text-lg leading-normal font-medium text-white shadow-sm transition-[filter,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
          scaleOnDesktop &&
            "lg:min-h-[clamp(2.9375rem,3.264vw,3.9167rem)] lg:rounded-[clamp(.625rem,.694vw,.8333rem)] lg:px-[clamp(1.25rem,1.389vw,1.6667rem)] lg:py-[clamp(.75rem,.868vw,1.0417rem)] lg:text-[clamp(1.125rem,1.25vw,1.5rem)]",
        )}
      >
        Submit
      </button>
    </form>
  );
}
