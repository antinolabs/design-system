import type { Meta, StoryObj } from '@storybook/react-vite'
import { Page, RadiusCard, Section, useComputedVar, type RadiusToken } from './foundations'

const meta = {
  title: 'Foundations/Radius',
  parameters: { layout: 'fullscreen' },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const radii: RadiusToken[] = [
  { name: 'Small', className: 'rounded-sm', cssVar: '--radius-sm', usage: 'Badges, tags and small inline controls.' },
  { name: 'Medium', className: 'rounded-md', cssVar: '--radius-md', usage: 'Inputs, buttons and most interactive elements.' },
  { name: 'Large', className: 'rounded-lg', cssVar: '--radius-lg', usage: 'Cards, popovers and dropdowns (the base radius).' },
  { name: 'Extra large', className: 'rounded-xl', cssVar: '--radius-xl', usage: 'Dialogs and larger raised surfaces.' },
  { name: '2XL', className: 'rounded-2xl', cssVar: '--radius-2xl', usage: 'Hero panels and prominent containers.' },
  { name: '3XL', className: 'rounded-3xl', cssVar: '--radius-3xl', usage: 'Decorative, oversized surfaces.' },
  { name: 'Full', className: 'rounded-full', usage: 'Pills, avatars and circular icon buttons.' },
]

function BaseToken() {
  const radius = useComputedVar('--radius')
  return (
    <div className="rounded-lg border border-border bg-card p-16px">
      <div className="flex items-baseline justify-between">
        <span className="text-body-sm font-medium text-card-foreground">Base radius</span>
        <span className="font-mono text-[11px] text-muted-foreground">
          --radius{radius ? ` -> ${radius}` : ''}
        </span>
      </div>
      <p className="mt-4px text-caption text-muted-foreground">
        Every step in the scale is derived from this single token. Change it once and the whole
        scale updates proportionally.
      </p>
    </div>
  )
}

export const Radius: Story = {
  render: () => (
    <Page
      title="Radius"
      intro={
        <>
          Corner radii come from a single <code className="font-mono">--radius</code> token in
          <code className="font-mono"> src/index.css</code>; the rest of the scale is calculated from
          it. Use the named Tailwind utilities below rather than arbitrary values. Each card shows
          the actual rendered pixel value.
        </>
      }
    >
      <Section title="Base token">
        <BaseToken />
      </Section>
      <Section
        title="Scale"
        description="Pick the smallest radius that suits the element's size; larger surfaces take larger radii."
      >
        <div className="grid grid-cols-2 gap-16px sm:grid-cols-3 lg:grid-cols-4">
          {radii.map((token) => (
            <RadiusCard key={token.name} token={token} />
          ))}
        </div>
      </Section>
    </Page>
  ),
}
