import type { Meta, StoryObj } from '@storybook/react-vite'
import { ArrowRightIcon, DownloadIcon, PlusIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { TokenUsage } from '@/foundations/token-usage'

const meta = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'outline', 'secondary', 'ghost', 'light', 'destructive', 'link'],
    },
    size: {
      control: 'select',
      options: ['default', 'xs', 'sm', 'lg', 'icon'],
    },
    disabled: { control: 'boolean' },
  },
  args: {
    children: 'Button',
    variant: 'default',
    size: 'default',
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-12px">
      <Button variant="default">Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="light">Light</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-12px">
      <Button size="xs">Extra small</Button>
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-12px">
      <Button>
        <PlusIcon data-icon="inline-start" />
        Add item
      </Button>
      <Button variant="light">
        <DownloadIcon data-icon="inline-start" />
        Download
      </Button>
      <Button variant="primary">
        Continue
        <ArrowRightIcon data-icon="inline-end" />
      </Button>
    </div>
  ),
}

export const Disabled: Story = {
  args: { disabled: true },
}

export const Tokens: Story = {
  tags: ['!dev'],
  parameters: { controls: { disable: true } },
  render: () => (
    <TokenUsage
      intro="Color tokens applied by each Button variant. All variants also share the base focus-ring and invalid-state tokens listed in the first row."
      rows={[
        {
          name: 'base (all variants)',
          tokens: ['ring-ring/50', 'border-ring', 'border-destructive', 'ring-destructive/20'],
          note: 'Focus ring (focus-visible) and aria-invalid border/ring.',
        },
        { name: 'default', tokens: ['bg-primary', 'text-primary-foreground', 'shadow-soft', 'shadow-card'], note: 'Clay fill; darkens + lifts to shadow-card on hover.' },
        { name: 'primary', tokens: ['bg-secondary', 'text-secondary-foreground', 'bg-primary', 'text-primary-foreground', 'shadow-soft'], note: 'Ink fill that transitions to clay on hover (the headline interaction).' },
        { name: 'secondary', tokens: ['bg-secondary', 'text-secondary-foreground', 'shadow-soft'] },
        { name: 'outline', tokens: ['ring-border', 'bg-muted', 'text-foreground', 'ring-foreground/20'], note: 'Borderless inset ring; bg-muted on hover.' },
        { name: 'ghost', tokens: ['bg-muted', 'text-foreground', 'bg-muted/50'], note: 'Transparent until hover; dark mode uses bg-muted/50.' },
        { name: 'light', tokens: ['bg-surface', 'text-surface-foreground', 'bg-surface-strong', 'shadow-soft'], note: 'Sand surface fill; deepens to surface-strong on hover.' },
        { name: 'destructive', tokens: ['bg-destructive/10', 'text-destructive', 'bg-destructive/20', 'ring-destructive/20'], note: 'Tinted via opacity on a single destructive shade.' },
        { name: 'link', tokens: ['text-primary'], note: 'Underlined text only, no surface.' },
      ]}
    />
  ),
}
