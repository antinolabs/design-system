import type { Category, ComponentDoc } from '@/showcase/types'

/**
 * A single component sub-section: name + blurb on the left, examples on the
 * right. Spacing comes from padding inside each column (not gaps) so the
 * surrounding strokes connect into a continuous grid. The vertical rule
 * between the two columns spans the full row height, meeting the horizontal
 * sub-section strokes above and below.
 */
export function ComponentBlock({ item }: { item: ComponentDoc }) {
  return (
    <div id={item.id} className="grid scroll-mt-24 grid-cols-1 lg:grid-cols-[14rem_minmax(0,1fr)]">
      <div className="flex flex-col gap-6px px-[2.5rem] py-[2.5rem] lg:pr-[2rem]">
        <h3 className="text-title">{item.name}</h3>
        <p className="text-body-sm text-muted-foreground">{item.description}</p>
      </div>

      <div className="flex min-w-0 flex-col gap-32px px-[2.5rem] py-[2.5rem] lg:border-l lg:border-border lg:pl-[2rem]">
        {item.examples.map((example) => (
          <figure key={example.title} className="flex min-w-0 flex-col gap-12px">
            {example.title || example.description ? (
              <figcaption className="flex flex-col gap-2px">
                <span className="font-mono text-caption tracking-[0.08em] text-muted-foreground uppercase">
                  {example.title}
                </span>
                {example.description ? (
                  <span className="text-body-sm text-muted-foreground">{example.description}</span>
                ) : null}
              </figcaption>
            ) : null}
            <div className="flex min-w-0 flex-wrap items-center gap-24px">{example.node}</div>
          </figure>
        ))}
      </div>
    </div>
  )
}

/**
 * A numbered top-level section: a padded title band, then its components
 * stacked with single full-bleed strokes between them (and one above the
 * first, separating it from the title band).
 */
export function CategorySection({ category, index }: { category: Category; index: number }) {
  const number = String(index + 1).padStart(2, '0')

  return (
    <section id={category.id} className="scroll-mt-24">
      <div className="flex flex-col gap-8px bg-surface/40 px-[2.5rem] py-[2.5rem]">
        <div className="flex items-center gap-12px font-mono text-caption tracking-[0.12em] uppercase">
          <span className="text-primary">{number}</span>
          <span className="text-muted-foreground">{category.label}</span>
        </div>
        <h2 className="max-w-3xl text-h1 font-normal">{category.tagline ?? category.label}</h2>
      </div>

      <div className="flex flex-col divide-y divide-border border-t border-border">
        {category.items.map((item) => (
          <ComponentBlock key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}
