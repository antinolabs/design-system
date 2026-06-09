import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ReactNode } from 'react'
import { Page, Section } from './foundations'

const meta = {
  title: 'Foundations/Taxonomy',
  parameters: { layout: 'fullscreen' },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

function Code({ children }: { children: ReactNode }) {
  return (
    <code className="rounded bg-muted px-6px py-2px font-mono text-[0.85em] text-foreground">
      {children}
    </code>
  )
}

function Snippet({ children }: { children: string }) {
  return (
    <pre className="overflow-x-auto rounded-lg border border-border bg-muted/50 p-16px text-caption leading-relaxed text-foreground">
      <code className="font-mono">{children}</code>
    </pre>
  )
}

function Tier({
  step,
  title,
  where,
  children,
}: {
  step: string
  title: string
  where: string
  children: ReactNode
}) {
  return (
    <div className="flex gap-16px rounded-lg border border-border bg-card p-16px">
      <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-body-sm font-semibold text-primary-foreground">
        {step}
      </div>
      <div className="flex min-w-0 flex-col gap-4px">
        <div className="flex flex-wrap items-baseline gap-8px">
          <span className="text-body-sm font-semibold text-card-foreground">{title}</span>
          <span className="font-mono text-[11px] text-muted-foreground">{where}</span>
        </div>
        <div className="text-body-sm leading-relaxed text-muted-foreground">{children}</div>
      </div>
    </div>
  )
}

function FlowStep({ label, sub }: { label: string; sub: string }) {
  return (
    <div className="flex flex-1 flex-col items-center gap-4px rounded-md border border-border bg-card px-12px py-8px text-center">
      <span className="font-mono text-caption font-medium text-card-foreground">{label}</span>
      <span className="text-[11px] text-muted-foreground">{sub}</span>
    </div>
  )
}

function Arrow() {
  return <span className="shrink-0 self-center text-muted-foreground">{'->'}</span>
}

type CategoryRow = { group: string; prefix: string; examples: string; purpose: string }

const categories: CategoryRow[] = [
  { group: 'Base', prefix: '--background, --foreground, --card, --popover, --muted', examples: 'bg-background, text-foreground', purpose: 'Core page surfaces and default text.' },
  { group: 'Semantic', prefix: '--primary, --secondary, --accent, --destructive, --success, --warning', examples: 'bg-primary, text-success-foreground', purpose: 'Intent and action colors.' },
  { group: 'Borders & focus', prefix: '--border, --input, --ring', examples: 'border-border, ring-ring', purpose: 'Outlines, input borders, focus rings.' },
  { group: 'Charts', prefix: '--chart-1 … --chart-5', examples: 'fill-chart-1', purpose: 'Categorical data-viz palette.' },
  { group: 'Sidebar', prefix: '--sidebar, --sidebar-primary, --sidebar-accent …', examples: 'bg-sidebar', purpose: 'Independently themeable navigation.' },
  { group: 'Radius', prefix: '--radius (+ derived --radius-sm … --radius-4xl)', examples: 'rounded-lg, rounded-xl', purpose: 'Corner radius scale, all derived from one base.' },
  { group: 'Spacing', prefix: '--spacing-2px … --spacing-32px', examples: 'p-16px, gap-8px, -mt-6px', purpose: 'Padding / margin / gap rhythm (2px–32px).' },
  { group: 'Typography', prefix: '--font-sans, --font-heading, --font-mono', examples: 'font-sans, font-mono', purpose: 'Font families.' },
  { group: 'Text styles', prefix: '--text-display, --text-h1 … --text-caption', examples: 'text-h1, text-body-sm', purpose: 'Named type ramp (size / line-height / weight).' },
]

export const Taxonomy: Story = {
  render: () => (
    <Page
      title="Taxonomy"
      intro={
        <>
          Every visual decision in the system is expressed as a <strong>token</strong> — a named
          variable rather than a hard-coded value. Components reference semantic tokens (like{' '}
          <Code>bg-primary</Code>), so the entire UI can be re-themed, including light/dark, from a
          single file. This page explains how those tokens are structured, named, and resolved.
        </>
      }
    >
      <Section
        title="The three tiers"
        description="A token travels through three layers before it reaches a component. The single source of truth for all of them is src/index.css."
      >
        <div className="flex flex-col gap-12px">
          <Tier step="1" title="Primitive values" where=":root and .dark in src/index.css">
            Raw color/size values, defined once per theme. <Code>:root</Code> holds the light theme;{' '}
            <Code>.dark</Code> overrides the same variable names for dark mode. Values use{' '}
            <Code>oklch()</Code> for perceptually uniform color.
          </Tier>
          <Tier step="2" title="Theme mapping" where="@theme inline in src/index.css">
            Each primitive is mapped to a Tailwind color/scale token via <Code>--color-*</Code>,{' '}
            <Code>--radius-*</Code>, and <Code>--font-*</Code> entries. This is what teaches Tailwind
            to generate the matching utilities.
          </Tier>
          <Tier step="3" title="Utilities & components" where="src/components/**">
            Tailwind emits utilities like <Code>bg-primary</Code> or <Code>text-success-foreground</Code>,
            and components consume <em>only</em> these — never raw values.
          </Tier>
        </div>
      </Section>

      <Section
        title="How a token resolves"
        description="Example: the Button's background color."
      >
        <div className="flex flex-col gap-12px md:flex-row md:items-stretch">
          <FlowStep label="--primary" sub=":root / .dark value" />
          <Arrow />
          <FlowStep label="--color-primary" sub="@theme inline mapping" />
          <Arrow />
          <FlowStep label="bg-primary" sub="Tailwind utility" />
          <Arrow />
          <FlowStep label="<Button>" sub="component" />
        </div>
      </Section>

      <Section
        title="Naming convention"
        description="Names describe a role, not an appearance. 'primary' instead of 'blue' means the value can change without renaming anything."
      >
        <div className="flex flex-col gap-12px">
          <Tier step="A" title="Surface / foreground pairing" where="--<role> + --<role>-foreground">
            Most semantic roles ship as a pair: the surface color and a legible color to place on
            top of it. Always use them together, e.g. <Code>bg-success</Code> with{' '}
            <Code>text-success-foreground</Code>, to guarantee contrast in both themes.
          </Tier>
          <Tier step="B" title="Scales use numeric suffixes" where="--chart-1 … --chart-5">
            Sets of related values are numbered. Radius is derived: <Code>--radius</Code> is the only
            authored value; <Code>--radius-sm</Code>…<Code>--radius-4xl</Code> are calculated from it.
          </Tier>
        </div>
      </Section>

      <Section title="Token categories" description="The full set of token groups and where each is used.">
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full border-collapse text-left text-body-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50 text-caption uppercase tracking-wide text-muted-foreground">
                <th className="p-12px font-medium">Group</th>
                <th className="p-12px font-medium">Tokens</th>
                <th className="p-12px font-medium">Example utility</th>
                <th className="p-12px font-medium">Purpose</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((row) => (
                <tr key={row.group} className="border-b border-border last:border-b-0">
                  <td className="p-12px font-medium text-foreground">{row.group}</td>
                  <td className="p-12px font-mono text-[11px] text-muted-foreground">{row.prefix}</td>
                  <td className="p-12px font-mono text-[11px] text-muted-foreground">{row.examples}</td>
                  <td className="p-12px text-muted-foreground">{row.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        title="Adding a new token"
        description="Follow the same three tiers so the token works everywhere and in both themes."
      >
        <Snippet>{`/* 1. Primitive values — add to BOTH :root and .dark in src/index.css */
:root  { --info: oklch(0.62 0.17 250); --info-foreground: oklch(0.985 0 0); }
.dark  { --info: oklch(0.70 0.16 250); --info-foreground: oklch(0.205 0 0); }

/* 2. Map it to a Tailwind token inside @theme inline */
@theme inline {
  --color-info: var(--info);
  --color-info-foreground: var(--info-foreground);
}

/* 3. Use the generated utilities in components */
<div className="bg-info text-info-foreground">Info</div>`}</Snippet>
        <p className="text-body-sm leading-relaxed text-muted-foreground">
          Rules of thumb: never hard-code a hex/oklch value in a component, always define light{' '}
          <em>and</em> dark, and ship a matching <Code>-foreground</Code> for any colored surface.
          Then surface the token here and in <Code>Foundations / Colors</Code> so it's discoverable.
        </p>
      </Section>
    </Page>
  ),
}
