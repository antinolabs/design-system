import type { Meta, StoryObj } from '@storybook/react-vite'
import { Page, Section, TypeRow, useComputedVar, type TypeStyle } from './foundations'

const meta = {
  title: 'Foundations/Typography',
  parameters: { layout: 'fullscreen' },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const textStyles: TypeStyle[] = [
  { name: 'Display', className: 'text-display', usage: 'Hero / marketing headlines (Fraunces serif). Use once per view.' },
  { name: 'Heading 1', className: 'text-h1', usage: 'Page titles (Fraunces serif).' },
  { name: 'Heading 2', className: 'text-h2', usage: 'Major section titles (Fraunces serif).' },
  { name: 'Heading 3', className: 'text-h3', usage: 'Sub-section titles (Fraunces serif).' },
  { name: 'Title', className: 'text-title', usage: 'Dialog / sheet / panel titles.' },
  { name: 'Title small', className: 'text-title-sm', usage: 'Card titles and compact headers (used by Card, Dialog, Sheet…).' },
  { name: 'Lead', className: 'text-lead', usage: 'Intro paragraphs and lead-ins under a heading.' },
  { name: 'Body large', className: 'text-body-lg', usage: 'Comfortable reading text for long-form content.' },
  { name: 'Body', className: 'text-body', usage: 'Default app body text (the global default on <body>).' },
  { name: 'Body small', className: 'text-body-sm', usage: 'Dense UI text: descriptions, helper copy (used by most components).' },
  { name: 'Label', className: 'text-label', usage: 'Form labels and inline emphasis (Inter; used by Label, Field…).' },
  { name: 'Button', className: 'text-button', usage: 'Button and control text (used by Button).' },
  { name: 'Caption', className: 'text-caption text-muted-foreground', usage: 'Metadata, timestamps and the smallest helper text.' },
  { name: 'Overline', className: 'text-overline uppercase', usage: 'Eyebrow labels above a title; mono, regular weight, rendered uppercase.', sample: 'SECTION LABEL' },
  { name: 'Code', className: 'font-mono text-body-sm', usage: 'Inline code and monospaced values.', sample: 'npm run storybook' },
]

function FontFamilies() {
  const sans = useComputedVar('--font-sans')
  const heading = useComputedVar('--font-heading')
  const mono = useComputedVar('--font-mono')
  const families = [
    { label: 'Sans', token: '--font-sans', value: sans, className: 'font-sans', usage: 'Body, UI text, labels and component titles — the default everywhere.' },
    { label: 'Heading', token: '--font-heading', value: heading, className: 'font-heading', usage: 'Serif (Fraunces). Bound to Display and Headings (H1–H3) only.' },
    { label: 'Mono', token: '--font-mono', value: mono, className: 'font-mono', usage: 'Code, tokens, numeric values — also bound to the Overline style.' },
  ]
  return (
    <div className="flex flex-col gap-16px">
      {families.map((f) => (
        <div key={f.token} className="flex flex-col gap-4px rounded-lg border border-border bg-card p-16px">
          <div className="flex items-baseline justify-between">
            <span className="text-body-sm font-medium text-card-foreground">{f.label}</span>
            <span className="font-mono text-[11px] text-muted-foreground">
              {f.token}
              {f.value ? ` -> ${f.value}` : ''}
            </span>
          </div>
          <span className="text-caption text-muted-foreground">{f.usage}</span>
          <span className={`${f.className} text-h3`}>The quick brown fox jumps over the lazy dog</span>
        </div>
      ))}
    </div>
  )
}

export const Typography: Story = {
  render: () => (
    <Page
      title="Typography"
      intro={
        <>
          Typography is built on a named text-style scale defined as real tokens in{' '}
          <code className="font-mono">src/index.css</code> (under <code className="font-mono">@theme</code>),
          which generate utilities like <code className="font-mono">text-h1</code>,{' '}
          <code className="font-mono">text-body</code> and <code className="font-mono">text-button</code>.
          Each token bundles font-size, line-height, weight and letter-spacing, and components consume
          these utilities directly (e.g. Button uses <code className="font-mono">text-button</code>,
          card/dialog titles use <code className="font-mono">text-title-sm</code>) so type stays in sync
          everywhere. Font families remain token-driven: <code className="font-mono">--font-sans</code>{' '}
          (Inter) is the default, while <code className="font-mono">--font-heading</code> (Fraunces, a serif)
          is bound to the Display and Heading styles only. Specs below are measured live from each sample.
        </>
      }
    >
      <Section
        title="Font families"
        description="Swap a family by updating its token in src/index.css; every style below inherits the change."
      >
        <FontFamilies />
      </Section>
      <Section
        title="Text styles"
        description="Prefer these named styles over ad-hoc sizes so type stays consistent across the product."
      >
        <div className="rounded-lg border border-border bg-card px-20px">
          {textStyles.map((style) => (
            <TypeRow key={style.name} style={style} />
          ))}
        </div>
      </Section>
    </Page>
  ),
}
