import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

// The design system defines custom tokens in src/index.css: typography
// (text-h1, text-body-sm, text-button, …), a font family (font-heading), a
// pixel-named spacing scale (p-8px, gap-16px, …) and an extra radius step
// (rounded-4xl). tailwind-merge doesn't know about these, so by default it
// mis-classifies them — most importantly it treats `text-caption` like a text
// *color* and drops a real color (`text-primary-foreground`) as a "conflict".
// Registering the tokens here keeps colors, sizes and spacing overrides correct.
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "display",
            "h1",
            "h2",
            "h3",
            "title",
            "title-sm",
            "lead",
            "body-lg",
            "body",
            "body-sm",
            "label",
            "button",
            "caption",
            "overline",
          ],
        },
      ],
      "font-family": [{ font: ["heading"] }],
    },
    theme: {
      spacing: [
        "2px",
        "4px",
        "6px",
        "8px",
        "10px",
        "12px",
        "14px",
        "16px",
        "20px",
        "24px",
        "28px",
        "32px",
      ],
      radius: ["4xl"],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
