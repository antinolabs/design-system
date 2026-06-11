import type { Category } from '@/showcase/types'

function ColorSwatch({ name, hex }: { name: string; hex: string }) {
  return (
    <div className="flex flex-col gap-12px rounded-2xl bg-card p-12px shadow-card">
      <div
        className="h-28 w-full rounded-xl ring-1 ring-inset ring-border"
        style={{ backgroundColor: hex }}
      />
      <div className="flex flex-col gap-2px px-4px pb-4px">
        <span className="font-mono text-body-sm text-card-foreground">{name}</span>
        <span className="font-mono text-caption text-muted-foreground">{hex}</span>
      </div>
    </div>
  )
}

const palette = [
  { name: 'paper', hex: '#ffffff' },
  { name: 'sand', hex: '#eeece6' },
  { name: 'sand-deep', hex: '#ded8c9' },
  { name: 'ink', hex: '#041222' },
  { name: 'ink-soft', hex: '#2e2e2e' },
  { name: 'ink-faint', hex: '#5a5a5a' },
  { name: 'line', hex: '#d8d1c2' },
  { name: 'clay', hex: '#f2674e' },
  { name: 'clay-dark', hex: '#dd4f37' },
  { name: 'clay-soft', hex: '#fad8d0' },
  { name: 'navy', hex: '#082340' },
  { name: 'mist', hex: '#d2dbee' },
]

const typeScale = [
  { className: 'text-display', label: 'Display' },
  { className: 'text-h1', label: 'Heading 1' },
  { className: 'text-h2', label: 'Heading 2' },
  { className: 'text-h3', label: 'Heading 3' },
  { className: 'text-title', label: 'Title' },
  { className: 'text-lead', label: 'Lead paragraph' },
  { className: 'text-body', label: 'Body — we run the function, you get the outcome.' },
  { className: 'text-body-sm', label: 'Body small — anchored to the cost of the work.' },
  { className: 'text-label', label: 'Label' },
  { className: 'text-caption', label: 'Caption' },
  { className: 'text-overline', label: 'OVERLINE · MONO' },
]

const spacingScale = [
  { name: '2px', cssVar: 'var(--spacing-2px)', usage: 'Hairline gaps; icon-to-text in dense badges.' },
  { name: '4px', cssVar: 'var(--spacing-4px)', usage: 'Tight gaps inside compact controls.' },
  { name: '6px', cssVar: 'var(--spacing-6px)', usage: 'Icon-to-label gaps; inline control padding.' },
  { name: '8px', cssVar: 'var(--spacing-8px)', usage: 'The base unit. Default gap between related items.' },
  { name: '10px', cssVar: 'var(--spacing-10px)', usage: 'Horizontal padding for buttons, inputs and menu items.' },
  { name: '12px', cssVar: 'var(--spacing-12px)', usage: 'Padding inside small cards, popovers and list rows.' },
  { name: '14px', cssVar: 'var(--spacing-14px)', usage: 'Comfortable inline padding for larger controls.' },
  { name: '16px', cssVar: 'var(--spacing-16px)', usage: 'Standard container/card padding; section gaps.' },
  { name: '20px', cssVar: 'var(--spacing-20px)', usage: 'Roomier padding and gaps between groups.' },
  { name: '24px', cssVar: 'var(--spacing-24px)', usage: 'Dialog/sheet padding; space between major sections.' },
  { name: '28px', cssVar: 'var(--spacing-28px)', usage: 'Generous separation in spacious layouts.' },
  { name: '32px', cssVar: 'var(--spacing-32px)', usage: 'Page-level padding and the largest rhythm step.' },
]

const radii = [
  { token: 'sm', className: 'rounded-sm' },
  { token: 'md', className: 'rounded-md' },
  { token: 'lg', className: 'rounded-lg' },
  { token: 'xl', className: 'rounded-xl' },
  { token: '2xl', className: 'rounded-2xl' },
  { token: 'full', className: 'rounded-full' },
]

export const foundations: Category = {
  id: 'foundations',
  label: 'Foundations',
  items: [
    {
      id: 'colors',
      name: 'Color',
      description:
        'Warm neutrals carry the page; clay is the single accent and ink anchors text. Every color is a theme token that re-tints in dark mode.',
      examples: [
        {
          title: 'Palette',
          node: (
            <div className="grid w-full grid-cols-2 gap-16px sm:grid-cols-3 lg:grid-cols-4">
              {palette.map((color) => (
                <ColorSwatch key={color.name} name={color.name} hex={color.hex} />
              ))}
            </div>
          ),
        },
      ],
    },
    {
      id: 'typography',
      name: 'Typography',
      description:
        'Fraunces for display and headings, Inter for body and UI, mono for labels and overlines. Use the named text-style tokens rather than raw sizes.',
      examples: [
        {
          title: 'Type scale',
          node: (
            <div className="flex w-full max-w-2xl flex-col gap-12px">
              {typeScale.map((t) => (
                <div key={t.label} className="flex flex-col gap-2px">
                  <span className={t.className}>{t.label}</span>
                </div>
              ))}
            </div>
          ),
        },
      ],
    },
    {
      id: 'spacing',
      name: 'Spacing',
      description:
        'A single named scale (--spacing-*) on a 2px base, from 2px to 32px. Reach for these tokens with any spacing utility (p-, m-, gap-, space-) instead of raw numeric steps.',
      examples: [
        {
          title: 'The scale',
          node: (
            <div className="flex w-full max-w-2xl flex-col">
              {spacingScale.map((token) => (
                <div key={token.name} className="flex items-center gap-16px border-b border-border py-8px last:border-b-0">
                  <span className="w-16 shrink-0 font-mono text-caption text-muted-foreground">{token.name}</span>
                  <span className="h-4 shrink-0 rounded-sm bg-primary" style={{ width: token.cssVar }} />
                  <span className="text-body-sm text-muted-foreground">{token.usage}</span>
                </div>
              ))}
            </div>
          ),
        },
        {
          title: 'In practice',
          node: (
            <div className="max-w-sm rounded-lg border border-border bg-card p-16px">
              <div className="flex flex-col gap-8px">
                <span className="text-title-sm text-card-foreground">Spacing in practice</span>
                <span className="text-body-sm text-muted-foreground">
                  This card uses <code className="font-mono">p-16px</code> for its padding and
                  <code className="font-mono"> gap-8px</code> between the title and this text.
                </span>
              </div>
              <div className="mt-16px flex gap-10px">
                <span className="inline-flex items-center rounded-md bg-primary px-10px py-6px text-button text-primary-foreground">
                  px-10px py-6px
                </span>
                <span className="inline-flex items-center rounded-md border border-border px-10px py-6px text-button">
                  gap-10px
                </span>
              </div>
            </div>
          ),
        },
      ],
    },
    {
      id: 'elevation',
      name: 'Elevation',
      description:
        'Borderless surfaces read through three soft, navy-tinted shadows. Use shadow-soft for resting controls, shadow-card for surfaces, shadow-lift for overlays.',
      examples: [
        {
          title: 'Shadow ladder',
          node: (
            <div className="grid w-full max-w-2xl grid-cols-1 gap-24px sm:grid-cols-3">
              {['shadow-soft', 'shadow-card', 'shadow-lift'].map((shadow) => (
                <div key={shadow} className="flex flex-col items-center gap-8px">
                  <div className={`flex h-24 w-full items-center justify-center rounded-2xl bg-card ${shadow}`}>
                    <span className="text-caption text-muted-foreground">Elevation</span>
                  </div>
                  <span className="text-caption text-muted-foreground">{shadow}</span>
                </div>
              ))}
            </div>
          ),
        },
      ],
    },
    {
      id: 'motion',
      name: 'Motion',
      description:
        'Entrances use an editorial out-expo curve (ease-entrance). Hover lifts, press scales. Interact with the tiles below.',
      examples: [
        {
          title: 'Hover & press',
          node: (
            <div className="flex flex-wrap gap-16px">
              <div className="flex h-24 w-40 cursor-pointer items-center justify-center rounded-2xl bg-card shadow-soft transition-all duration-200 ease-entrance hover:-translate-y-1 hover:shadow-lift">
                <span className="text-body-sm">Hover me — lift</span>
              </div>
              <div className="flex h-24 w-40 cursor-pointer items-center justify-center rounded-2xl bg-card shadow-soft transition-transform duration-200 ease-entrance active:scale-95">
                <span className="text-body-sm">Press me — scale</span>
              </div>
            </div>
          ),
        },
      ],
    },
    {
      id: 'radius',
      name: 'Radius',
      description: 'A single radius scale derived from --radius (0.625rem). Controls range from subtle to fully pill.',
      examples: [
        {
          title: 'Radius scale',
          node: (
            <div className="grid w-full max-w-2xl grid-cols-3 gap-16px sm:grid-cols-6">
              {radii.map((r) => (
                <div key={r.token} className="flex flex-col items-center gap-6px">
                  <div className={`size-16 bg-surface-strong ${r.className}`} />
                  <span className="text-caption text-muted-foreground">{r.token}</span>
                </div>
              ))}
            </div>
          ),
        },
      ],
    },
  ],
}
