import type { Meta, StoryObj } from '@storybook/react-vite'
import { Page, Section, SpaceRow, type SpacingToken } from './foundations'

const meta = {
  title: 'Foundations/Spacing',
  parameters: { layout: 'fullscreen' },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const scale: SpacingToken[] = [
  { name: '2px', step: '2px', cssVar: '--spacing-2px', usage: 'Hairline gaps; icon-to-text in dense badges.' },
  { name: '4px', step: '4px', cssVar: '--spacing-4px', usage: 'Tight gaps inside compact controls.' },
  { name: '6px', step: '6px', cssVar: '--spacing-6px', usage: 'Icon-to-label gaps; inline control padding.' },
  { name: '8px', step: '8px', cssVar: '--spacing-8px', usage: 'The base unit. Default gap between related items.' },
  { name: '10px', step: '10px', cssVar: '--spacing-10px', usage: 'Horizontal padding for buttons, inputs and menu items.' },
  { name: '12px', step: '12px', cssVar: '--spacing-12px', usage: 'Padding inside small cards, popovers and list rows.' },
  { name: '14px', step: '14px', cssVar: '--spacing-14px', usage: 'Comfortable inline padding for larger controls.' },
  { name: '16px', step: '16px', cssVar: '--spacing-16px', usage: 'Standard container/card padding; section gaps.' },
  { name: '20px', step: '20px', cssVar: '--spacing-20px', usage: 'Roomier padding and gaps between groups.' },
  { name: '24px', step: '24px', cssVar: '--spacing-24px', usage: 'Dialog/sheet padding; space between major sections.' },
  { name: '28px', step: '28px', cssVar: '--spacing-28px', usage: 'Generous separation in spacious layouts.' },
  { name: '32px', step: '32px', cssVar: '--spacing-32px', usage: 'Page-level padding and the largest rhythm step.' },
]

function UsageExample() {
  return (
    <div className="flex flex-col gap-16px">
      {/* A card composed entirely with spacing tokens */}
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
    </div>
  )
}

export const Spacing: Story = {
  render: () => (
    <Page
      title="Spacing"
      intro={
        <>
          Spacing is driven by a single named scale defined in
          <code className="font-mono"> src/index.css</code> under the
          <code className="font-mono"> --spacing-*</code> tokens. Every step maps to a value already
          used across the system, so padding, margins and gaps stay on a consistent rhythm. Reach for
          these tokens with any spacing utility &mdash; <code className="font-mono">p-</code>,
          <code className="font-mono"> m-</code>, <code className="font-mono">gap-</code> and
          <code className="font-mono"> space-</code> &mdash; instead of raw numeric steps. Names are
          pixel-based on purpose: Tailwind&rsquo;s <code className="font-mono">max-w-*</code> scale
          shares this namespace, so t-shirt names (sm, md, lg&hellip;) would clash with it.
        </>
      }
    >
      <Section
        title="The scale"
        description="Built on a 2px base from 2px up to 32px. The bar shows the true rendered size; values update live with the theme."
      >
        <div className="rounded-lg border border-border bg-card px-16px">
          {scale.map((token) => (
            <SpaceRow key={token.step} token={token} />
          ))}
        </div>
      </Section>

      <Section
        title="How to use it"
        description="Prefer a token over a raw number. Any spacing utility accepts these keys, including negatives (e.g. -mt-8px)."
      >
        <div className="overflow-hidden rounded-lg border border-border">
          <table className="w-full text-body-sm">
            <thead className="bg-muted/50 text-left">
              <tr>
                <th className="px-12px py-10px font-medium">Instead of</th>
                <th className="px-12px py-10px font-medium">Use</th>
                <th className="px-12px py-10px font-medium">Resolves to</th>
              </tr>
            </thead>
            <tbody className="font-mono text-caption">
              <tr className="border-t border-border">
                <td className="px-12px py-10px text-muted-foreground">gap-2</td>
                <td className="px-12px py-10px">gap-8px</td>
                <td className="px-12px py-10px text-muted-foreground">8px</td>
              </tr>
              <tr className="border-t border-border">
                <td className="px-12px py-10px text-muted-foreground">px-2.5</td>
                <td className="px-12px py-10px">px-10px</td>
                <td className="px-12px py-10px text-muted-foreground">10px</td>
              </tr>
              <tr className="border-t border-border">
                <td className="px-12px py-10px text-muted-foreground">p-4</td>
                <td className="px-12px py-10px">p-16px</td>
                <td className="px-12px py-10px text-muted-foreground">16px</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        title="In practice"
        description="A small composition built only from spacing tokens."
      >
        <UsageExample />
      </Section>
    </Page>
  ),
}
