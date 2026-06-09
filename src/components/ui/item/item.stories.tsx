import type { Meta, StoryObj } from '@storybook/react-vite'
import { UserIcon } from 'lucide-react'
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from '@/components/ui/item'
import { Button } from '@/components/ui/button'

const meta = {
  title: 'UI/Item',
  component: Item,
  tags: ['autodocs'],
} satisfies Meta<typeof Item>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="w-[420px]">
      <ItemGroup>
        <Item variant="outline">
          <ItemMedia variant="icon">
            <UserIcon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Profile</ItemTitle>
            <ItemDescription>Manage your account settings and preferences.</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button size="sm" variant="ghost">
              Edit
            </Button>
          </ItemActions>
        </Item>
      </ItemGroup>
    </div>
  ),
}
