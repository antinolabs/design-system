import type { Meta, StoryObj } from '@storybook/react-vite'
import { AlertCircleIcon, CheckCircle2Icon } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { TokenUsage } from '@/foundations/token-usage'

const meta = {
  title: 'UI/Alert',
  component: Alert,
  tags: ['autodocs'],
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Alert className="max-w-md">
      <CheckCircle2Icon />
      <AlertTitle>Success! Your changes have been saved.</AlertTitle>
      <AlertDescription>This is an alert with an icon, title and description.</AlertDescription>
    </Alert>
  ),
}

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive" className="max-w-md">
      <AlertCircleIcon />
      <AlertTitle>Unable to process your payment.</AlertTitle>
      <AlertDescription>Please verify your billing information and try again.</AlertDescription>
    </Alert>
  ),
}

export const Tokens: Story = {
  tags: ['!dev'],
  parameters: { controls: { disable: true } },
  render: () => (
    <TokenUsage
      intro="Color tokens applied by each Alert variant. The alert surface is always the card color; the variant changes the text/icon color."
      rows={[
        { name: 'base (all variants)', tokens: ['border-border'], note: 'Default border around the alert.' },
        { name: 'default', tokens: ['bg-card', 'text-card-foreground'] },
        { name: 'destructive', tokens: ['bg-card', 'text-destructive', 'text-destructive/90'], note: 'Title uses text-destructive; description softens to text-destructive/90. Icon inherits via text-current.' },
      ]}
    />
  ),
}
