import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function Container({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[var(--ds-shell-width)] px-[var(--ds-page-gutter)]",
        className,
      )}
      {...props}
    />
  );
}
