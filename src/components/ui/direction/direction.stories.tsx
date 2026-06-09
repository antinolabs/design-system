import type { Meta, StoryObj } from '@storybook/react-vite'
import { DirectionProvider } from '@/components/ui/direction'
import { Button } from '@/components/ui/button'

const meta = {
  title: 'UI/Direction',
  component: DirectionProvider,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'DirectionProvider sets the reading direction (LTR/RTL) for descendant components. Wrap part of your app to flip layout direction.',
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj

export const LeftToRight: Story = {
  render: () => (
    <DirectionProvider dir="ltr">
      <div dir="ltr" className="flex gap-8px rounded-lg border border-border p-16px">
        <Button>First</Button>
        <Button variant="outline">Second</Button>
      </div>
    </DirectionProvider>
  ),
}

export const RightToLeft: Story = {
  render: () => (
    <DirectionProvider dir="rtl">
      <div dir="rtl" className="flex gap-8px rounded-lg border border-border p-16px">
        <Button>الأول</Button>
        <Button variant="outline">الثاني</Button>
      </div>
    </DirectionProvider>
  ),
}
