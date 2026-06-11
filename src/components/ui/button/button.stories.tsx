import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '@/components/ui/button'
import { TokenUsage } from '@/foundations/token-usage'

const meta = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline', 'secondary', 'ghost', 'destructive', 'link'],
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
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
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
        { name: 'default', tokens: ['bg-primary', 'text-primary-foreground', 'bg-primary/80'], note: 'Last token is the hover state.' },
        { name: 'secondary', tokens: ['bg-secondary', 'text-secondary-foreground'] },
        { name: 'outline', tokens: ['border-border', 'bg-background', 'bg-muted', 'text-foreground', 'border-input', 'bg-input/30'], note: 'bg-muted / text-foreground on hover; dark mode uses border-input and bg-input/30.' },
        { name: 'ghost', tokens: ['bg-muted', 'text-foreground', 'bg-muted/50'], note: 'Transparent until hover; dark mode uses bg-muted/50.' },
        { name: 'destructive', tokens: ['bg-destructive/10', 'text-destructive', 'bg-destructive/20', 'ring-destructive/20'], note: 'Tinted via opacity on a single destructive shade.' },
        { name: 'link', tokens: ['text-primary'], note: 'Underlined text only, no surface.' },
      ]}
    />
  ),
}
