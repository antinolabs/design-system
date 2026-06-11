import { useState } from 'react'
import { SearchIcon } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from '@/components/ui/input-group'
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/components/ui/input-otp'
import { NativeSelect, NativeSelectOptGroup, NativeSelectOption } from '@/components/ui/native-select'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from '@/components/ui/combobox'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Switch } from '@/components/ui/switch'
import { Slider } from '@/components/ui/slider'
import { Label } from '@/components/ui/label'
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from '@/components/ui/field'
import { Calendar } from '@/components/ui/calendar'
import type { Category } from '@/showcase/types'

const frameworks = ['Next.js', 'SvelteKit', 'Nuxt.js', 'Remix', 'Astro', 'Vite']

function CalendarDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  return (
    <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-lg border border-border" />
  )
}

export const inputs: Category = {
  id: 'inputs',
  label: 'Inputs & forms',
  items: [
    {
      id: 'input',
      name: 'Input',
      description: 'Filled text field with an inset ring that deepens to ink on focus.',
      examples: [
        {
          title: 'Default & disabled',
          node: (
            <div className="flex w-[320px] flex-col gap-12px">
              <Input placeholder="Function to run" />
              <Input placeholder="Disabled" disabled />
            </div>
          ),
        },
        {
          title: 'With label',
          node: (
            <div className="flex w-[320px] flex-col gap-8px">
              <Label htmlFor="demo-email">Email</Label>
              <Input id="demo-email" type="email" placeholder="you@antino.com" />
            </div>
          ),
        },
      ],
    },
    {
      id: 'textarea',
      name: 'Textarea',
      description: 'Multi-line text input sharing the filled input treatment.',
      examples: [
        {
          title: 'With label',
          node: (
            <div className="flex w-[360px] flex-col gap-8px">
              <Label htmlFor="demo-message">Message</Label>
              <Textarea id="demo-message" placeholder="Describe the function to run..." />
            </div>
          ),
        },
      ],
    },
    {
      id: 'input-group',
      name: 'Input group',
      description: 'Compose inputs with leading/trailing icons, text, and buttons.',
      examples: [
        {
          title: 'Addons',
          node: (
            <div className="flex w-[340px] flex-col gap-12px">
              <InputGroup>
                <InputGroupAddon>
                  <SearchIcon />
                </InputGroupAddon>
                <InputGroupInput placeholder="Search..." />
              </InputGroup>
              <InputGroup>
                <InputGroupAddon>
                  <InputGroupText>https://</InputGroupText>
                </InputGroupAddon>
                <InputGroupInput placeholder="antino.com" />
              </InputGroup>
              <InputGroup>
                <InputGroupInput placeholder="Enter your email" />
                <InputGroupAddon align="inline-end">
                  <InputGroupButton>Subscribe</InputGroupButton>
                </InputGroupAddon>
              </InputGroup>
            </div>
          ),
        },
      ],
    },
    {
      id: 'input-otp',
      name: 'Input OTP',
      description: 'One-time-password entry with grouped slots and a separator.',
      examples: [
        {
          title: 'Six digits',
          node: (
            <InputOTP maxLength={6}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          ),
        },
      ],
    },
    {
      id: 'native-select',
      name: 'Native select',
      description: 'A styled wrapper over the native <select>, with optional option groups.',
      examples: [
        {
          title: 'With groups',
          node: (
            <NativeSelect defaultValue="apple" className="w-[220px]">
              <NativeSelectOptGroup label="Fruits">
                <NativeSelectOption value="apple">Apple</NativeSelectOption>
                <NativeSelectOption value="banana">Banana</NativeSelectOption>
              </NativeSelectOptGroup>
              <NativeSelectOptGroup label="Vegetables">
                <NativeSelectOption value="carrot">Carrot</NativeSelectOption>
              </NativeSelectOptGroup>
            </NativeSelect>
          ),
        },
      ],
    },
    {
      id: 'select',
      name: 'Select',
      description: 'Custom select — keyboard navigable, fades open, selected row marked in clay.',
      examples: [
        {
          title: 'Default',
          node: (
            <Select>
              <SelectTrigger className="w-[220px]">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          ),
        },
      ],
    },
    {
      id: 'combobox',
      name: 'Combobox',
      description: 'Autocomplete input with a filtered, keyboard-navigable list.',
      examples: [
        {
          title: 'Default',
          node: (
            <div className="w-[260px]">
              <Combobox items={frameworks}>
                <ComboboxInput placeholder="Select framework..." />
                <ComboboxContent>
                  <ComboboxEmpty>No framework found.</ComboboxEmpty>
                  <ComboboxList>
                    {frameworks.map((framework) => (
                      <ComboboxItem key={framework} value={framework}>
                        {framework}
                      </ComboboxItem>
                    ))}
                  </ComboboxList>
                </ComboboxContent>
              </Combobox>
            </div>
          ),
        },
      ],
    },
    {
      id: 'checkbox',
      name: 'Checkbox',
      description: 'Clay-filled toggle with tactile press states.',
      examples: [
        {
          title: 'States',
          node: (
            <div className="flex flex-col gap-12px">
              <div className="flex items-center gap-8px">
                <Checkbox id="c1" />
                <Label htmlFor="c1">Outcome-priced</Label>
              </div>
              <div className="flex items-center gap-8px">
                <Checkbox id="c2" defaultChecked />
                <Label htmlFor="c2">Human-in-the-loop</Label>
              </div>
              <div className="flex items-center gap-8px">
                <Checkbox id="c3" disabled />
                <Label htmlFor="c3">Disabled</Label>
              </div>
            </div>
          ),
        },
      ],
    },
    {
      id: 'radio-group',
      name: 'Radio group',
      description: 'Single-select with full keyboard support and roving focus.',
      examples: [
        {
          title: 'Default',
          node: (
            <RadioGroup defaultValue="comfortable">
              <div className="flex items-center gap-8px">
                <RadioGroupItem value="default" id="r1" />
                <Label htmlFor="r1">Hours model</Label>
              </div>
              <div className="flex items-center gap-8px">
                <RadioGroupItem value="comfortable" id="r2" />
                <Label htmlFor="r2">Outcome model</Label>
              </div>
              <div className="flex items-center gap-8px">
                <RadioGroupItem value="compact" id="r3" />
                <Label htmlFor="r3">Hybrid model</Label>
              </div>
            </RadioGroup>
          ),
        },
      ],
    },
    {
      id: 'switch',
      name: 'Switch',
      description: 'Clay-filled on/off control with a tactile press state.',
      examples: [
        {
          title: 'With label',
          node: (
            <div className="flex flex-col gap-12px">
              <div className="flex items-center gap-8px">
                <Switch id="s1" defaultChecked />
                <Label htmlFor="s1">Live only</Label>
              </div>
              <div className="flex items-center gap-8px">
                <Switch id="s2" />
                <Label htmlFor="s2">Notifications</Label>
              </div>
            </div>
          ),
        },
      ],
    },
    {
      id: 'slider',
      name: 'Slider',
      description: 'Clay-filled track. Supports single value and range selection.',
      examples: [
        {
          title: 'Single & range',
          node: (
            <div className="flex w-[320px] flex-col gap-24px">
              <Slider defaultValue={[64]} max={100} step={1} />
              <Slider defaultValue={[25, 75]} max={100} step={1} />
            </div>
          ),
        },
      ],
    },
    {
      id: 'label',
      name: 'Label',
      description: 'Accessible label associated with a control via htmlFor.',
      examples: [
        {
          title: 'With input',
          node: (
            <div className="flex w-[320px] flex-col gap-8px">
              <Label htmlFor="demo-name">Name</Label>
              <Input id="demo-name" placeholder="Your name" />
            </div>
          ),
        },
      ],
    },
    {
      id: 'field',
      name: 'Field',
      description: 'Form field primitives — legend, label, description, and grouping — for consistent forms.',
      examples: [
        {
          title: 'Field set',
          node: (
            <div className="w-[380px]">
              <FieldSet>
                <FieldLegend>Profile</FieldLegend>
                <FieldDescription>Update how others see you on the platform.</FieldDescription>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="demo-username">Username</FieldLabel>
                    <Input id="demo-username" placeholder="@antino" />
                    <FieldDescription>This is your public display name.</FieldDescription>
                  </Field>
                  <Field orientation="horizontal">
                    <Switch id="demo-notifications" />
                    <FieldLabel htmlFor="demo-notifications">Enable notifications</FieldLabel>
                  </Field>
                </FieldGroup>
              </FieldSet>
            </div>
          ),
        },
      ],
    },
    {
      id: 'calendar',
      name: 'Calendar',
      description: 'Date picker built on react-day-picker, themed to the system palette.',
      examples: [
        {
          title: 'Single date',
          node: <CalendarDemo />,
        },
      ],
    },
  ],
}
