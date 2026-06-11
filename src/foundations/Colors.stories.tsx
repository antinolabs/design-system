import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  AlphaGrid,
  ColorGrid,
  Page,
  PrimitiveGrid,
  Section,
  type AlphaToken,
  type ColorToken,
  type PrimitiveToken,
} from './foundations'

const meta = {
  title: 'Foundations/Colors',
  parameters: { layout: 'fullscreen' },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

// PRIMITIVES — the raw, absolute color values the system is built on, grouped
// into families ("shade cards"). They're defined directly in src/index.css and
// are mode-independent; tokens (below) are the themed aliases that point at them
// per light/dark mode.

// Sand — warm neutral surfaces (page, cards, muted fills, lines).
const sand: PrimitiveToken[] = [
  { name: 'Paper', value: '#ffffff', usage: 'Background, cards, popovers (light).' },
  { name: 'Sand', value: '#eeece6', usage: 'Muted surface (light), sidebar, foreground (dark).' },
  { name: 'Sand deep', value: '#ded8c9', usage: 'Accent / hover surface (light), muted foreground (dark).' },
  { name: 'Line', value: '#d8d1c2', usage: 'Borders and inputs (light).' },
]

// Ink — dark neutrals for text and the secondary brand surface.
const ink: PrimitiveToken[] = [
  { name: 'Ink', value: '#041222', usage: 'Foreground & secondary (light), background & primary text (dark).' },
  { name: 'Ink soft', value: '#2e2e2e', usage: 'Card / popover / secondary / muted surfaces (dark).' },
  { name: 'Ink faint', value: '#5a5a5a', usage: 'Muted foreground (light), borders & inputs (dark).' },
]

// Clay — the coral brand. Backs Primary plus tints and chart series.
const clay: PrimitiveToken[] = [
  { name: 'Clay', value: '#f2674e', usage: 'Primary, focus ring, chart 1 (both modes).' },
  { name: 'Clay dark', value: '#dd4f37', usage: 'Stronger brand step — chart 5 (light), pressed/hover tints.' },
  { name: 'Clay soft', value: '#fad8d0', usage: 'Soft brand wash — chart 4 (dark), subtle tints.' },
]

// Reserved — part of the palette but not wired into tokens yet.
const reserved: PrimitiveToken[] = [
  { name: 'Navy', value: '#082340', usage: 'Reserved for a future cool-accent role.' },
  { name: 'Mist', value: '#d2dbee', usage: 'Reserved soft cool tint.' },
]

const accent: PrimitiveToken[] = [
  { name: 'Red', value: 'oklch(0.577 0.245 27.325)', usage: 'Source for the Destructive token.' },
  { name: 'Green', value: 'oklch(0.627 0.17 149.2)', usage: 'Source for the Success token.' },
  { name: 'Amber', value: 'oklch(0.828 0.162 84.5)', usage: 'Source for the Warning token.' },
]

// ALPHA — the system has no transparency tokens; instead it layers a solid
// token at reduced opacity with Tailwind's /NN modifier (which compiles to
// color-mix(in oklab, …, transparent)). These are the opacity steps in use.
const alphaScale: AlphaToken[] = [
  { value: 5, usage: 'Faintest wash — barely-there hover/selected hint (bg-primary/5).' },
  { value: 10, usage: 'Subtle intent tint and light scrims (bg-destructive/10, bg-black/10).' },
  { value: 20, usage: 'Light intent fill, focus/overlay (ring-destructive/20, bg-background/20).' },
  { value: 30, usage: 'Translucent input surface and borders (bg-input/30, border-primary/30).' },
  { value: 40, usage: 'Stronger focus ring in dark mode (ring-destructive/40).' },
  { value: 50, usage: 'The workhorse — focus ring, muted & disabled surfaces (ring-ring/50, bg-muted/50).' },
  { value: 60, usage: 'De-emphasized text (text-foreground/60).' },
  { value: 70, usage: 'Secondary text on tinted surfaces (text-sidebar-foreground/70).' },
  { value: 80, usage: 'Near-solid — disabled fill (dark) and solid hovers (bg-input/80, bg-primary/80).' },
  { value: 90, usage: 'Almost opaque — softened intent text (text-destructive/90).' },
]

const alphaUsage: { group: string; description: string; classes: string[] }[] = [
  { group: 'Focus rings', description: 'A translucent ring that reads on any surface.', classes: ['ring-ring/50', 'ring-destructive/20', 'ring-destructive/40'] },
  { group: 'Error / invalid states', description: 'aria-invalid borders and rings from the destructive hue.', classes: ['border-destructive/50', 'ring-destructive/20', 'ring-destructive/40'] },
  { group: 'Disabled & muted surfaces', description: 'Low-opacity fills for inert or secondary surfaces.', classes: ['bg-muted/50', 'bg-input/30', 'bg-input/50', 'bg-input/80'] },
  { group: 'Intent tint fills', description: 'A single accent hue stretched into a soft background.', classes: ['bg-destructive/10', 'bg-destructive/20', 'bg-destructive/30', 'bg-primary/10'] },
  { group: 'Solid hovers', description: 'Near-opaque shifts for hover/active on solid buttons.', classes: ['bg-primary/80', 'bg-secondary/80'] },
  { group: 'Overlays & scrims', description: 'Dimming layers behind dialogs, drawers and media.', classes: ['bg-black/10', 'bg-background/10', 'bg-background/20'] },
  { group: 'Subtle borders & dividers', description: 'Softened separators that don\u2019t compete with content.', classes: ['border-border/50', 'border-input/30', 'border-primary/20', 'stroke-border/50'] },
  { group: 'De-emphasized text', description: 'Lowered-contrast text for metadata and secondary copy.', classes: ['text-foreground/60', 'text-sidebar-foreground/70', 'text-destructive/90'] },
]

function AlphaUsageCard({ use }: { use: (typeof alphaUsage)[number] }) {
  return (
    <div className="flex flex-col gap-10px rounded-lg border border-border bg-card p-16px">
      <div className="flex flex-col gap-2px">
        <span className="text-body-sm font-medium text-card-foreground">{use.group}</span>
        <span className="text-caption text-muted-foreground">{use.description}</span>
      </div>
      <div className="flex flex-wrap gap-6px">
        {use.classes.map((c) => (
          <span
            key={c}
            className="rounded-md border border-border bg-muted/50 px-8px py-2px font-mono text-caption text-foreground"
          >
            {c}
          </span>
        ))}
      </div>
    </div>
  )
}

const base: ColorToken[] = [
  { name: 'Background', cssVar: '--background', fg: '--foreground', usage: 'The default page/app background.' },
  { name: 'Foreground', cssVar: '--foreground', fg: '--background', usage: 'Default body text color on the background.' },
  { name: 'Card', cssVar: '--card', fg: '--card-foreground', usage: 'Surface color for cards and raised containers.' },
  { name: 'Card foreground', cssVar: '--card-foreground', fg: '--card', usage: 'Text and icons placed on a card surface.' },
  { name: 'Popover', cssVar: '--popover', fg: '--popover-foreground', usage: 'Background for popovers, dropdowns and menus.' },
  { name: 'Popover foreground', cssVar: '--popover-foreground', fg: '--popover', usage: 'Text inside popovers and menus.' },
  { name: 'Muted', cssVar: '--muted', fg: '--muted-foreground', usage: 'Subtle backgrounds for secondary surfaces (Sand).' },
  { name: 'Muted foreground', cssVar: '--muted-foreground', fg: '--muted', usage: 'De-emphasized text, captions and placeholders (Ink faint).' },
]

// Surface ladder — "elevation by fill". Unlike Muted (whose foreground is
// de-emphasized), these pair a tinted fill with FULL-contrast text, so they can
// host real content (e.g. a sand Card on a paper page).
const surfaces: ColorToken[] = [
  { name: 'Surface', cssVar: '--surface', fg: '--surface-foreground', usage: 'Tinted content surface, one step up from the background (Sand / Ink soft).' },
  { name: 'Surface foreground', cssVar: '--surface-foreground', fg: '--surface', usage: 'Full-contrast text/icons on a surface (Ink / Sand).' },
  { name: 'Surface strong', cssVar: '--surface-strong', fg: '--surface-strong-foreground', usage: 'The next fill step up for nested or more prominent surfaces (Sand deep / Ink faint).' },
  { name: 'Surface strong foreground', cssVar: '--surface-strong-foreground', fg: '--surface-strong', usage: 'Full-contrast text/icons on a strong surface.' },
]

const semantic: ColorToken[] = [
  { name: 'Primary', cssVar: '--primary', fg: '--primary-foreground', usage: 'Primary actions and key emphasis — the Clay coral brand (e.g. default Button).' },
  { name: 'Primary foreground', cssVar: '--primary-foreground', fg: '--primary', usage: 'Text/icons on a primary surface (Paper, on Clay).' },
  { name: 'Secondary', cssVar: '--secondary', fg: '--secondary-foreground', usage: 'Secondary brand surface — Ink (dark) in light mode, Ink soft in dark.' },
  { name: 'Secondary foreground', cssVar: '--secondary-foreground', fg: '--secondary', usage: 'Text/icons on a secondary surface.' },
  { name: 'Accent', cssVar: '--accent', fg: '--accent-foreground', usage: 'Hover/active highlights for interactive items (Sand deep).' },
  { name: 'Accent foreground', cssVar: '--accent-foreground', fg: '--accent', usage: 'Text/icons on an accent surface.' },
  { name: 'Destructive', cssVar: '--destructive', fg: '--background', usage: 'Errors and destructive actions (delete, remove).' },
  { name: 'Success', cssVar: '--success', fg: '--success-foreground', usage: 'Positive states: confirmations, completed, valid input.' },
  { name: 'Success foreground', cssVar: '--success-foreground', fg: '--success', usage: 'Text/icons rendered on a success surface.' },
  { name: 'Warning', cssVar: '--warning', fg: '--warning-foreground', usage: 'Cautionary states: non-blocking alerts and pending issues.' },
  { name: 'Warning foreground', cssVar: '--warning-foreground', fg: '--warning', usage: 'Text/icons rendered on a warning surface.' },
]

const borders: ColorToken[] = [
  { name: 'Border', cssVar: '--border', fg: '--foreground', usage: 'Default border color for separators and outlines.' },
  { name: 'Input', cssVar: '--input', fg: '--foreground', usage: 'Border color for form inputs.' },
  { name: 'Ring', cssVar: '--ring', fg: '--background', usage: 'Focus ring color for keyboard navigation.' },
]

const charts: ColorToken[] = [
  { name: 'Chart 1', cssVar: '--chart-1', fg: '--background', usage: 'Categorical data series 1 in charts.' },
  { name: 'Chart 2', cssVar: '--chart-2', fg: '--background', usage: 'Categorical data series 2 in charts.' },
  { name: 'Chart 3', cssVar: '--chart-3', fg: '--background', usage: 'Categorical data series 3 in charts.' },
  { name: 'Chart 4', cssVar: '--chart-4', fg: '--background', usage: 'Categorical data series 4 in charts.' },
  { name: 'Chart 5', cssVar: '--chart-5', fg: '--background', usage: 'Categorical data series 5 in charts.' },
]

const sidebar: ColorToken[] = [
  { name: 'Sidebar', cssVar: '--sidebar', fg: '--sidebar-foreground', usage: 'Background for the app sidebar/navigation.' },
  { name: 'Sidebar foreground', cssVar: '--sidebar-foreground', fg: '--sidebar', usage: 'Text/icons in the sidebar.' },
  { name: 'Sidebar primary', cssVar: '--sidebar-primary', fg: '--sidebar-primary-foreground', usage: 'Active/selected nav item background.' },
  { name: 'Sidebar accent', cssVar: '--sidebar-accent', fg: '--sidebar-accent-foreground', usage: 'Hover state for nav items.' },
  { name: 'Sidebar border', cssVar: '--sidebar-border', fg: '--sidebar-foreground', usage: 'Borders/dividers within the sidebar.' },
  { name: 'Sidebar ring', cssVar: '--sidebar-ring', fg: '--sidebar', usage: 'Focus ring for sidebar controls.' },
]

export const Colors: Story = {
  render: () => (
    <Page
      title="Colors"
      intro={
        <>
          A warm palette built on four primitive families — <strong>Sand</strong> (surfaces),{' '}
          <strong>Ink</strong> (text &amp; secondary brand), <strong>Clay</strong> (the coral
          primary brand) and the kept intent hues. <strong>Primitives</strong> are the raw,
          absolute values (they don&rsquo;t change between themes). <strong>Tokens</strong> are
          semantic aliases (e.g. <code className="font-mono">--primary</code>) that point at
          primitives and switch per light/dark mode. Always build with tokens (e.g.{' '}
          <code className="font-mono">bg-primary</code>), never primitives directly. Use the Theme
          toolbar (sun/moon) above to preview token values per mode.
        </>
      }
    >
      <Section
        title="Primitives · Sand"
        description="Warm neutral surfaces — page background, cards, muted fills and lines. Absolute values, defined in src/index.css."
      >
        <PrimitiveGrid tokens={sand} />
      </Section>
      <Section
        title="Primitives · Ink"
        description="Dark neutrals for text and the secondary brand surface; they also become the dark-mode backgrounds."
      >
        <PrimitiveGrid tokens={ink} />
      </Section>
      <Section
        title="Primitives · Clay"
        description="The coral brand family — backs the Primary token plus brand tints and chart series."
      >
        <PrimitiveGrid tokens={clay} />
      </Section>
      <Section
        title="Primitives · Reserved"
        description="Part of the palette but not wired into tokens yet — held for a future cool-accent role."
      >
        <PrimitiveGrid tokens={reserved} />
      </Section>
      <Section
        title="Primitives · Intent hues"
        description="The three accent hues that back the intent tokens, kept from the previous system. (Light-mode source values shown; slightly lighter variants are used in dark mode.)"
      >
        <PrimitiveGrid tokens={accent} />
      </Section>
      <Section
        title="Tokens · Base"
        description="Core surface and text colors. Each surface token is paired with a matching foreground token for legible content."
      >
        <ColorGrid tokens={base} />
      </Section>
      <Section
        title="Tokens · Surfaces"
        description="An elevation-by-fill ladder (background -> surface -> surface-strong). Use these for tinted content surfaces that still carry full-contrast text — distinct from Muted, which is for de-emphasized content."
      >
        <ColorGrid tokens={surfaces} />
      </Section>
      <Section
        title="Tokens · Semantic"
        description="Action and intent colors. Pair every colored surface with its *-foreground token for accessible contrast."
      >
        <ColorGrid tokens={semantic} />
      </Section>
      <Section title="Tokens · Borders & focus" description="Outlines, input borders and the keyboard focus ring.">
        <ColorGrid tokens={borders} />
      </Section>
      <Section title="Tokens · Charts" description="A categorical palette for data visualization (used by the Chart component).">
        <ColorGrid tokens={charts} />
      </Section>
      <Section title="Tokens · Sidebar" description="A dedicated token set so the navigation sidebar can be themed independently.">
        <ColorGrid tokens={sidebar} />
      </Section>
      <Section
        title="Alpha · Scale"
        description="The system has no transparency tokens — it layers a solid token at reduced opacity with the /NN modifier. These are the opacity steps in use (shown on the foreground color over a checkerboard)."
      >
        <AlphaGrid tokens={alphaScale} />
      </Section>
      <Section
        title="Alpha · On an accent hue"
        description="The same ramp on the destructive token — how a single accent shade covers tint, hover and ring states."
      >
        <AlphaGrid
          tokens={[
            { value: 10, usage: 'Idle tint fill (bg-destructive/10).' },
            { value: 20, usage: 'Hover fill / focus ring (bg-destructive/20).' },
            { value: 30, usage: 'Pressed fill in dark mode (bg-destructive/30).' },
            { value: 40, usage: 'Focus ring / border (dark).' },
            { value: 90, usage: 'Softened description text.' },
          ]}
          cssVar="--destructive"
        />
      </Section>
      <Section
        title="Alpha · Where it's used"
        description="Grouped by purpose, with the actual utility classes found in the components."
      >
        <div className="grid grid-cols-1 gap-12px md:grid-cols-2">
          {alphaUsage.map((use) => (
            <AlphaUsageCard key={use.group} use={use} />
          ))}
        </div>
      </Section>
    </Page>
  ),
}
