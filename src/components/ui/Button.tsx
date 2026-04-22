"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "relative inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "font-mono uppercase tracking-[0.18em] text-xs",
    "transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
    "will-change-transform select-none",
    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink",
    "disabled:pointer-events-none disabled:opacity-50",
  ].join(" "),
  {
    variants: {
      variant: {
        default: [
          "bg-gold text-ink border border-gold",
          "hover:-translate-y-0.5 hover:shadow-[0_20px_60px_-20px_rgba(201,168,76,0.5)]",
          "active:translate-y-0",
        ].join(" "),
        outline: [
          "bg-transparent text-gold border border-gold/70",
          "hover:bg-gold hover:text-ink hover:-translate-y-0.5",
          "hover:shadow-[0_20px_60px_-20px_rgba(201,168,76,0.4)]",
          "active:translate-y-0",
        ].join(" "),
        ghost: [
          "bg-transparent text-bone border border-transparent",
          "hover:text-gold hover:border-gold/30",
        ].join(" "),
      },
      size: {
        sm: "h-9 px-4 text-[11px]",
        md: "h-11 px-6 text-xs",
        lg: "h-14 px-8 text-sm",
      },
      shape: {
        sharp: "rounded-none",
        slight: "rounded-sharp",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      shape: "sharp",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, shape, type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(buttonVariants({ variant, size, shape }), className)}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { buttonVariants };
