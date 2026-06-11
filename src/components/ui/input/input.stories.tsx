import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { TokenUsage } from '@/foundations/token-usage'

const meta = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  args: { placeholder: 'Enter text...' },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Disabled: Story = {
  args: { disabled: true, placeholder: 'Disabled' },
}

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-8px">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="you@example.com" />
    </div>
  ),
}

export const Types: Story = {
  render: () => (
    <div className="flex w-full max-w-sm flex-col gap-12px">
      <Input type="text" placeholder="Text" />
      <Input type="password" placeholder="Password" />
      <Input type="number" placeholder="Number" />
      <Input type="file" />
    </div>
  ),
}

export const Tokens: Story = {
  tags: ['!dev'],
  parameters: { controls: { disable: true } },
  render: () => (
    <TokenUsage
      intro="Input has no variants; its appearance changes by state. These are the tokens applied per state (dark-mode equivalents noted)."
      rows={[
        { name: 'base', tokens: ['border-input', 'text-foreground', 'text-muted-foreground'], note: 'Transparent background; placeholder uses text-muted-foreground. Dark mode: bg-input/30.' },
        { name: 'focus-visible', tokens: ['border-ring', 'ring-ring/50'] },
        { name: 'disabled', tokens: ['bg-input/50'], note: 'Dark mode: bg-input/80.' },
        { name: 'aria-invalid', tokens: ['border-destructive', 'ring-destructive/20'], note: 'Dark mode: border-destructive/50, ring-destructive/40.' },
      ]}
    />
  ),
}
