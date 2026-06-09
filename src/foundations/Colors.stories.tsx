import type { Meta, StoryObj } from '@storybook/react-vite'
import { ColorGrid, Page, Section, type ColorToken } from './foundations'

const meta = {
  title: 'Foundations/Colors',
  parameters: { layout: 'fullscreen' },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const base: ColorToken[] = [
  { name: 'Background', cssVar: '--background', fg: '--foreground', usage: 'The default page/app background.' },
  { name: 'Foreground', cssVar: '--foreground', fg: '--background', usage: 'Default body text color on the background.' },
  { name: 'Card', cssVar: '--card', fg: '--card-foreground', usage: 'Surface color for cards and raised containers.' },
  { name: 'Card foreground', cssVar: '--card-foreground', fg: '--card', usage: 'Text and icons placed on a card surface.' },
  { name: 'Popover', cssVar: '--popover', fg: '--popover-foreground', usage: 'Background for popovers, dropdowns and menus.' },
  { name: 'Popover foreground', cssVar: '--popover-foreground', fg: '--popover', usage: 'Text inside popovers and menus.' },
  { name: 'Muted', cssVar: '--muted', fg: '--muted-foreground', usage: 'Subtle backgrounds for secondary surfaces.' },
  { name: 'Muted foreground', cssVar: '--muted-foreground', fg: '--muted', usage: 'De-emphasized text, captions and placeholders.' },
]

const semantic: ColorToken[] = [
  { name: 'Primary', cssVar: '--primary', fg: '--primary-foreground', usage: 'Primary actions and key emphasis (e.g. default Button).' },
  { name: 'Primary foreground', cssVar: '--primary-foreground', fg: '--primary', usage: 'Text/icons rendered on a primary surface.' },
  { name: 'Secondary', cssVar: '--secondary', fg: '--secondary-foreground', usage: 'Secondary, lower-emphasis actions and chips.' },
  { name: 'Secondary foreground', cssVar: '--secondary-foreground', fg: '--secondary', usage: 'Text/icons on a secondary surface.' },
  { name: 'Accent', cssVar: '--accent', fg: '--accent-foreground', usage: 'Hover/active highlights for interactive items.' },
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
          Colors are defined as semantic tokens in <code className="font-mono">src/index.css</code>,
          not as raw values. Always reference a token (e.g. <code className="font-mono">bg-primary</code>)
          so components automatically adapt to light and dark themes. Use the Theme toolbar
          (sun/moon) above to preview each value per mode.
        </>
      }
    >
      <Section
        title="Base"
        description="Core surface and text colors. Each surface token is paired with a matching foreground token for legible content."
      >
        <ColorGrid tokens={base} />
      </Section>
      <Section
        title="Semantic"
        description="Action and intent colors. Pair every colored surface with its *-foreground token for accessible contrast."
      >
        <ColorGrid tokens={semantic} />
      </Section>
      <Section title="Borders & focus" description="Outlines, input borders and the keyboard focus ring.">
        <ColorGrid tokens={borders} />
      </Section>
      <Section title="Charts" description="A categorical palette for data visualization (used by the Chart component).">
        <ColorGrid tokens={charts} />
      </Section>
      <Section title="Sidebar" description="A dedicated token set so the navigation sidebar can be themed independently.">
        <ColorGrid tokens={sidebar} />
      </Section>
    </Page>
  ),
}
