import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-[var(--ds-radius-control)] border px-5 font-sans text-lg font-medium transition-[filter,transform,box-shadow,background-color,color] duration-300 ease-out outline-none hover:-translate-y-0.5 hover:shadow-md focus-visible:ring-2 focus-visible:ring-[var(--ds-color-brand-400)] focus-visible:ring-offset-2 active:translate-y-px disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "border-white/30 bg-[linear-gradient(180deg,var(--ds-color-brand-400)_0%,var(--ds-color-brand-900)_100%)] text-white shadow-sm hover:brightness-110",
        secondary:
          "border-transparent bg-white text-[var(--ds-color-ink)] shadow-sm hover:bg-[var(--ds-color-surface-soft)]",
        outline:
          "border-[var(--ds-color-brand-400)] bg-transparent text-[var(--ds-color-brand-900)] hover:bg-[var(--ds-color-surface-soft)]",
        ghost:
          "border-transparent bg-transparent text-[var(--ds-color-ink)] hover:bg-black/5",
      },
      size: {
        sm: "min-h-9 px-4 text-sm",
        md: "min-h-[47px] px-5 py-3 text-[18px]",
        lg: "min-h-14 px-7 text-xl",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export function Button({
  className,
  variant,
  size,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
