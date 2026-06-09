import type { Meta, StoryObj } from '@storybook/react-vite'
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSet } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'

const meta = {
  title: 'UI/Field',
  component: Field,
  tags: ['autodocs'],
} satisfies Meta<typeof Field>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="w-[380px]">
      <FieldSet>
        <FieldLegend>Profile</FieldLegend>
        <FieldDescription>Update how others see you on the platform.</FieldDescription>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="username">Username</FieldLabel>
            <Input id="username" placeholder="@antino" />
            <FieldDescription>This is your public display name.</FieldDescription>
          </Field>
          <Field orientation="horizontal">
            <Switch id="notifications" />
            <FieldLabel htmlFor="notifications">Enable notifications</FieldLabel>
          </Field>
        </FieldGroup>
      </FieldSet>
    </div>
  ),
}
