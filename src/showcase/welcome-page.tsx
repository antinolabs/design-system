import { ArrowRightIcon } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { categories, totalComponentCount } from '@/showcase/registry'

export function WelcomePage({ onSelect }: { onSelect: (id: string) => void }) {
  return (
    <div className="flex flex-col gap-48px">
      <section className="flex flex-col gap-16px border-b border-border pb-32px">
        <span className="font-mono text-caption tracking-[0.08em] text-primary uppercase">
          Antino Design System
        </span>
        <h1 className="text-display max-w-3xl">
          One warm, editorial language. Borderless, and alive on interaction.
        </h1>
        <p className="max-w-2xl text-body-lg text-muted-foreground">
          A sand-and-ink palette, a Fraunces display serif, and surfaces that read through fill and
          soft elevation — never a border. Every reusable component is built here, then used across
          the product.
        </p>
        <div className="flex flex-wrap items-center gap-12px pt-8px">
          <Button onClick={() => onSelect(categories[0].items[0].id)}>
            Explore foundations
            <ArrowRightIcon data-icon="inline-end" />
          </Button>
          <Button variant="outline" asChild>
            <a
              href="https://github.com/antinolabs/design-system"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub
            </a>
          </Button>
        </div>
        <div className="flex flex-wrap gap-8px pt-8px">
          <Badge variant="muted">{totalComponentCount} components</Badge>
          <Badge variant="outline">shadcn/ui</Badge>
          <Badge variant="outline">Tailwind v4</Badge>
          <Badge variant="outline">Storybook 10</Badge>
        </div>
      </section>

      <section className="flex flex-col gap-16px">
        <span className="font-mono text-caption tracking-[0.08em] text-primary uppercase">
          Browse the system
        </span>
        <div className="grid grid-cols-1 gap-16px sm:grid-cols-2">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => onSelect(category.items[0].id)}
              className="group flex flex-col gap-8px rounded-2xl border border-border bg-card p-24px text-left shadow-soft transition-all duration-200 ease-entrance hover:-translate-y-px hover:shadow-card"
            >
              <span className="text-title">{category.label}</span>
              <span className="text-body-sm text-muted-foreground">
                {category.items
                  .slice(0, 4)
                  .map((item) => item.name)
                  .join(' · ')}
                {category.items.length > 4 ? ` · +${category.items.length - 4} more` : ''}
              </span>
              <span className="mt-4px inline-flex items-center gap-4px text-body-sm font-medium text-primary">
                {category.items.length} items
                <ArrowRightIcon className="size-4 transition-transform duration-200 ease-entrance group-hover:translate-x-1" />
              </span>
            </button>
          ))}
        </div>
      </section>
    </div>
  )
}
