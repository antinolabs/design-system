import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Toggle as TogglePrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "group/toggle inline-flex items-center justify-center gap-4px rounded-full text-button whitespace-nowrap transition-all duration-200 ease-entrance outline-none hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 aria-pressed:bg-background aria-pressed:text-foreground aria-pressed:shadow-soft data-[state=on]:bg-background data-[state=on]:text-foreground data-[state=on]:shadow-soft dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "bg-transparent ring-1 ring-inset ring-border hover:bg-muted hover:ring-foreground/20",
      },
      size: {
        default:
          "h-8 min-w-8 px-10px has-data-[icon=inline-end]:pr-8px has-data-[icon=inline-start]:pl-8px",
        sm: "h-7 min-w-7 px-10px text-[0.8rem] has-data-[icon=inline-end]:pr-6px has-data-[icon=inline-start]:pl-6px [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 min-w-9 px-10px has-data-[icon=inline-end]:pr-8px has-data-[icon=inline-start]:pl-8px",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Toggle({
  className,
  variant = "default",
  size = "default",
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Toggle, toggleVariants }
