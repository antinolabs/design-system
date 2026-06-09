import type { Meta, StoryObj } from '@storybook/react-vite'
import { ChevronsUpDownIcon } from 'lucide-react'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Button } from '@/components/ui/button'

const meta = {
  title: 'UI/Collapsible',
  component: Collapsible,
  tags: ['autodocs'],
} satisfies Meta<typeof Collapsible>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Collapsible className="flex w-[360px] flex-col gap-8px">
      <div className="flex items-center justify-between gap-16px rounded-lg border border-border px-16px py-8px">
        <span className="text-body-sm font-medium">@antino starred 3 repositories</span>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="icon">
            <ChevronsUpDownIcon />
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="flex flex-col gap-8px">
        <div className="rounded-lg border border-border px-16px py-8px text-body-sm">@antino/design-system</div>
        <div className="rounded-lg border border-border px-16px py-8px text-body-sm">@antino/ui</div>
      </CollapsibleContent>
    </Collapsible>
  ),
}
