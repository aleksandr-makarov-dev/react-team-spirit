import * as React from "react";

import { cn } from "@/lib/utils";

function Input({
  className,
  type,
  invalid = false,
  ...props
}: React.ComponentProps<"input"> & { invalid?: boolean }) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-8 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-sm transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "focus:ring-2 focus:ring-primary ring-offset-1",
        "aria-invalid:ring-destructive",
        invalid && "focus:ring-destructive ring-destructive ring-2",
        className
      )}
      {...props}
    />
  );
}

export { Input };
