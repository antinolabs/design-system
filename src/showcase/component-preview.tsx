import type { ComponentDoc } from '@/showcase/types'

export function ComponentSection({
  item,
  categoryLabel,
}: {
  item: ComponentDoc
  categoryLabel?: string
}) {
  return (
    <section id={item.id} className="flex scroll-mt-24 flex-col gap-32px">
      <div className="flex flex-col gap-8px">
        {categoryLabel ? (
          <span className="font-mono text-caption tracking-[0.08em] text-primary uppercase">
            {categoryLabel}
          </span>
        ) : null}
        <h2 className="text-h2">{item.name}</h2>
        <p className="max-w-2xl text-body text-muted-foreground">{item.description}</p>
      </div>

      <div className="flex flex-col gap-32px">
        {item.examples.map((example) => (
          <div key={example.title} className="flex flex-col gap-16px">
            <div className="flex flex-col gap-2px">
              <span className="font-mono text-caption tracking-[0.08em] text-muted-foreground uppercase">
                {example.title}
              </span>
              {example.description ? (
                <span className="text-body-sm text-muted-foreground">{example.description}</span>
              ) : null}
            </div>
            <div className="flex min-h-24 flex-wrap items-center gap-24px rounded-2xl border border-border bg-card p-40px shadow-soft">
              {example.node}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
