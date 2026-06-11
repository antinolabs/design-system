import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-full border border-transparent bg-clip-padding text-button whitespace-nowrap transition-all duration-200 ease-entrance outline-none select-none hover:not-aria-[haspopup]:-translate-y-px focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-0 active:not-aria-[haspopup]:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-soft hover:bg-[color-mix(in_oklch,var(--primary),black_8%)] hover:shadow-card",
        primary:
          "bg-secondary text-secondary-foreground shadow-soft hover:bg-primary hover:text-primary-foreground hover:shadow-card",
        outline:
          "bg-transparent ring-1 ring-inset ring-border hover:bg-muted hover:text-foreground hover:ring-foreground/20 aria-expanded:bg-muted aria-expanded:text-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-soft hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] hover:shadow-card aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        light:
          "bg-surface text-surface-foreground shadow-soft hover:bg-surface-strong hover:shadow-card",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:underline hover:not-aria-[haspopup]:translate-y-0",
      },
      size: {
        default:
          "h-8 gap-6px px-14px has-data-[icon=inline-end]:pr-10px has-data-[icon=inline-start]:pl-10px",
        xs: "h-6 gap-4px px-10px text-caption has-data-[icon=inline-end]:pr-8px has-data-[icon=inline-start]:pl-8px [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-4px px-12px text-caption has-data-[icon=inline-end]:pr-8px has-data-[icon=inline-start]:pl-8px [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-10 gap-6px px-20px has-data-[icon=inline-end]:pr-14px has-data-[icon=inline-start]:pl-14px",
        icon: "size-8",
        "icon-xs": "size-6 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-7",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
