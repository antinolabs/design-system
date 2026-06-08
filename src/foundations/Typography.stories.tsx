import type { Meta, StoryObj } from '@storybook/react-vite'
import { Page, Section, TypeRow, useComputedVar, type TypeStyle } from './foundations'

const meta = {
  title: 'Foundations/Typography',
  parameters: { layout: 'fullscreen' },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const textStyles: TypeStyle[] = [
  { name: 'Display', className: 'text-4xl font-bold tracking-tight', usage: 'Hero and marketing headlines. Use sparingly, once per view.' },
  { name: 'Heading 1', className: 'text-3xl font-semibold tracking-tight', usage: 'Page titles.' },
  { name: 'Heading 2', className: 'text-2xl font-semibold', usage: 'Major section titles.' },
  { name: 'Title', className: 'text-xl font-medium', usage: 'Card, dialog and panel titles.' },
  { name: 'Subtitle', className: 'text-lg font-medium', usage: 'Secondary titles and lead-ins.' },
  { name: 'Body large', className: 'text-base', usage: 'Comfortable reading text for long-form content.' },
  { name: 'Body', className: 'text-sm', usage: 'Default UI body text (the app default).' },
  { name: 'Caption', className: 'text-xs text-muted-foreground', usage: 'Helper text, metadata, labels and timestamps.' },
  { name: 'Code', className: 'font-mono text-sm', usage: 'Inline code and monospaced values.', sample: 'npm run storybook' },
]

function FontFamilies() {
  const sans = useComputedVar('--font-sans')
  const heading = useComputedVar('--font-heading')
  const mono = useComputedVar('--font-mono')
  const families = [
    { label: 'Sans', token: '--font-sans', value: sans, className: 'font-sans' },
    { label: 'Heading', token: '--font-heading', value: heading, className: 'font-heading' },
    { label: 'Mono', token: '--font-mono', value: mono, className: 'font-mono' },
  ]
  return (
    <div className="flex flex-col gap-4">
      {families.map((f) => (
        <div key={f.token} className="flex flex-col gap-1 rounded-lg border border-border bg-card p-4">
          <div className="flex items-baseline justify-between">
            <span className="text-sm font-medium text-card-foreground">{f.label}</span>
            <span className="font-mono text-[11px] text-muted-foreground">
              {f.token}
              {f.value ? ` -> ${f.value}` : ''}
            </span>
          </div>
          <span className={`${f.className} text-2xl`}>The quick brown fox jumps over the lazy dog</span>
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
          Typography is built on a small set of named text styles composed from Tailwind utilities.
          Font families come from tokens in <code className="font-mono">src/index.css</code>
          (<code className="font-mono">--font-sans</code>, <code className="font-mono">--font-heading</code>,
          <code className="font-mono"> --font-mono</code>). Each style below lists its
          font-size / line-height / weight, measured live from the rendered sample.
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
        <div className="rounded-lg border border-border bg-card px-5">
          {textStyles.map((style) => (
            <TypeRow key={style.name} style={style} />
          ))}
        </div>
      </Section>
    </Page>
  ),
}
