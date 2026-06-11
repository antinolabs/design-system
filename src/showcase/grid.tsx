import { cn } from '@/lib/utils'

/**
 * Faint full-viewport graph-paper grid that sits behind everything, giving the
 * page its "blueprint / spec sheet" feel. Lines are drawn from the --border
 * token so they re-tint with the theme. Self-contained — no global CSS.
 */
export function GridBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10"
      style={{
        backgroundImage:
          'linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        opacity: 0.4,
      }}
    />
  )
}

/**
 * A small "+" crosshair tick used to mark where the column rails meet the
 * horizontal section dividers. Position it on a corner of a `relative` parent
 * via the className, e.g. `-left-[6px] -top-[6px]`.
 */
export function Crosshair({ className }: { className?: string }) {
  return (
    <span aria-hidden className={cn('pointer-events-none absolute z-10 block size-[12px]', className)}>
      <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-foreground/25" />
      <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-foreground/25" />
    </span>
  )
}
