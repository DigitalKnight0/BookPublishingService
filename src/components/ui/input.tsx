import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const controlClassName =
  "w-full rounded-[var(--ds-radius-control)] border border-[var(--ds-color-brand-400)] bg-white/40 px-5 py-3 font-sans text-base text-[var(--ds-color-ink)] outline-none transition placeholder:text-[var(--ds-color-ink)]/55 focus:bg-white/70 focus:ring-2 focus:ring-[var(--ds-color-brand-400)]/25 disabled:cursor-not-allowed disabled:opacity-50";

export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input className={cn(controlClassName, "h-[45px]", className)} {...props} />
  );
}

export function Textarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(controlClassName, "min-h-[109px] resize-y", className)}
      {...props}
    />
  );
}
