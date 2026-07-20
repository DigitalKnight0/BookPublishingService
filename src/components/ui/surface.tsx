import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function Surface({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-[var(--ds-radius-card)] border border-[var(--ds-color-brand-400)] bg-[var(--ds-gradient-glass)]",
        className,
      )}
      {...props}
    />
  );
}
