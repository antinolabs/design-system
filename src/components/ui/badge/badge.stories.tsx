import type { Meta, StoryObj } from '@storybook/react-vite'
import { CheckIcon, CircleDotIcon, XIcon } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { TokenUsage } from '@/foundations/token-usage'

const meta = {
  title: 'UI/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'muted', 'destructive', 'outline'],
    },
  },
  args: { children: 'Badge', variant: 'default' },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-12px">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="muted">Muted</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-12px">
      <Badge variant="default">
        <CheckIcon data-icon="inline-start" />
        Leading
      </Badge>
      <Badge variant="muted">
        <CircleDotIcon data-icon="inline-start" />
        Active
      </Badge>
      <Badge variant="outline">
        <CheckIcon data-icon="inline-start" />
        Verified
      </Badge>
      <Badge variant="secondary">
        Dismiss
        <XIcon data-icon="inline-end" />
      </Badge>
    </div>
  ),
}

export const Tokens: Story = {
  tags: ['!dev'],
  parameters: { controls: { disable: true } },
  render: () => (
    <TokenUsage
      intro="Color tokens applied by each Badge variant. All variants share the base focus-ring and invalid-state tokens in the first row. Hover tokens only apply when the badge is a link ([a])."
      rows={[
        { name: 'base (all variants)', tokens: ['border-ring', 'ring-ring/50', 'border-destructive', 'ring-destructive/20'], note: 'focus-visible ring and aria-invalid border/ring.' },
        { name: 'default', tokens: ['bg-primary', 'text-primary-foreground', 'bg-primary/80'], note: 'Last token is the link hover.' },
        { name: 'secondary', tokens: ['bg-secondary', 'text-secondary-foreground', 'bg-secondary/80'] },
        { name: 'muted', tokens: ['bg-muted', 'text-muted-foreground', 'bg-surface-strong'], note: 'Quiet sand fill for taxonomy tags.' },
        { name: 'destructive', tokens: ['bg-destructive/10', 'text-destructive', 'ring-destructive/20', 'bg-destructive/20'], note: 'Tinted via opacity; dark mode uses bg-destructive/20.' },
        { name: 'outline', tokens: ['ring-border', 'text-foreground', 'bg-muted'], note: 'Borderless inset ring; bg-muted on hover.' },
        { name: 'ghost', tokens: ['bg-muted', 'text-muted-foreground', 'bg-muted/50'], note: 'Transparent until hover; dark uses bg-muted/50.' },
        { name: 'link', tokens: ['text-primary'], note: 'Underlined text only, no surface.' },
      ]}
    />
  ),
}
