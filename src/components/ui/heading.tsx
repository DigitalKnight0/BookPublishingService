import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const headingVariants = cva(
  "font-display font-normal text-balance text-[var(--ds-color-ink)]",
  {
    variants: {
      size: {
        display:
          "text-[clamp(2.75rem,4.2vw,3.5rem)] leading-[1.12] tracking-[0.01em] lg:leading-[1.4]",
        section:
          "text-[clamp(2.25rem,3.7vw,3.5rem)] leading-[1.12] tracking-[0.01em] lg:leading-[1.4]",
        service:
          "text-[clamp(2rem,3.2vw,3rem)] leading-[1.18] tracking-[0.01em] lg:leading-[1.4]",
        title: "text-[2rem] leading-[1.2] tracking-[0.01em]",
        subheading: "text-xl leading-[1.2] tracking-[0.01em]",
      },
      align: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
      },
    },
    defaultVariants: {
      size: "section",
      align: "left",
    },
  },
);

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type HeadingProps = HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof headingVariants> & {
    as?: HeadingTag;
  };

export function Heading({
  as: Tag = "h2",
  className,
  size,
  align,
  ...props
}: HeadingProps) {
  return (
    <Tag
      className={cn(headingVariants({ size, align }), className)}
      {...props}
    />
  );
}

export function AccentText({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn("text-gradient-brand", className)} {...props} />;
}
