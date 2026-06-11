import {
  AlignCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
  ArrowRightIcon,
  BoldIcon,
  CheckIcon,
  DownloadIcon,
  ItalicIcon,
  PlusIcon,
  XIcon,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from '@/components/ui/button-group'
import { Toggle } from '@/components/ui/toggle'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Badge } from '@/components/ui/badge'
import { Kbd, KbdGroup } from '@/components/ui/kbd'
import type { Category } from '@/showcase/types'

export const actions: Category = {
  id: 'actions',
  label: 'Actions',
  items: [
    {
      id: 'button',
      name: 'Button',
      description: 'Pill geometry, ink-to-clay hover, focus ring on keyboard. Eight variants across four sizes.',
      examples: [
        {
          title: 'Variants',
          node: (
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
        },
        {
          title: 'Sizes',
          node: (
            <div className="flex flex-wrap items-center gap-12px">
              <Button size="xs">Extra small</Button>
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
            </div>
          ),
        },
        {
          title: 'With icons & disabled',
          node: (
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
              <Button disabled>Disabled</Button>
            </div>
          ),
        },
      ],
    },
    {
      id: 'button-group',
      name: 'Button group',
      description: 'Segments related actions into a single connected control, with optional separators and text.',
      examples: [
        {
          title: 'Default',
          node: (
            <ButtonGroup>
              <Button variant="outline">Cut</Button>
              <Button variant="outline">Copy</Button>
              <Button variant="outline">Paste</Button>
            </ButtonGroup>
          ),
        },
        {
          title: 'With separator & text',
          node: (
            <div className="flex flex-wrap items-center gap-16px">
              <ButtonGroup>
                <Button variant="outline">Undo</Button>
                <ButtonGroupSeparator />
                <Button variant="outline">Redo</Button>
              </ButtonGroup>
              <ButtonGroup>
                <ButtonGroupText>https://</ButtonGroupText>
                <Button variant="outline">antino.com</Button>
              </ButtonGroup>
            </div>
          ),
        },
      ],
    },
    {
      id: 'toggle',
      name: 'Toggle',
      description: 'A two-state button. Available as default and outline, in three sizes.',
      examples: [
        {
          title: 'Variants',
          node: (
            <div className="flex flex-wrap items-center gap-12px">
              <Toggle aria-label="Toggle bold">
                <BoldIcon />
              </Toggle>
              <Toggle aria-label="Toggle italic">
                <ItalicIcon />
                Italic
              </Toggle>
              <Toggle variant="outline" aria-label="Toggle bold">
                <BoldIcon />
              </Toggle>
            </div>
          ),
        },
      ],
    },
    {
      id: 'toggle-group',
      name: 'Toggle group',
      description: 'Segmented control with single or multiple selection; the active pill animates between options.',
      examples: [
        {
          title: 'Single & multiple',
          node: (
            <div className="flex flex-wrap items-center gap-24px">
              <ToggleGroup type="single" defaultValue="left">
                <ToggleGroupItem value="left" aria-label="Align left">
                  <AlignLeftIcon />
                </ToggleGroupItem>
                <ToggleGroupItem value="center" aria-label="Align center">
                  <AlignCenterIcon />
                </ToggleGroupItem>
                <ToggleGroupItem value="right" aria-label="Align right">
                  <AlignRightIcon />
                </ToggleGroupItem>
              </ToggleGroup>
              <ToggleGroup type="multiple" variant="outline">
                <ToggleGroupItem value="a">A</ToggleGroupItem>
                <ToggleGroupItem value="b">B</ToggleGroupItem>
                <ToggleGroupItem value="c">C</ToggleGroupItem>
              </ToggleGroup>
            </div>
          ),
        },
      ],
    },
    {
      id: 'badge',
      name: 'Badge',
      description: 'Compact status and taxonomy tags in five variants.',
      examples: [
        {
          title: 'Variants',
          node: (
            <div className="flex flex-wrap gap-12px">
              <Badge variant="default">Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="muted">Muted</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          ),
        },
        {
          title: 'With icons',
          node: (
            <div className="flex flex-wrap items-center gap-12px">
              <Badge variant="default">
                <CheckIcon data-icon="inline-start" />
                Verified
              </Badge>
              <Badge variant="muted">Insurance</Badge>
              <Badge variant="secondary">
                Dismiss
                <XIcon data-icon="inline-end" />
              </Badge>
            </div>
          ),
        },
      ],
    },
    {
      id: 'kbd',
      name: 'Kbd',
      description: 'Renders keyboard keys and shortcut combinations.',
      examples: [
        {
          title: 'Keys & combinations',
          node: (
            <div className="flex flex-wrap items-center gap-16px">
              <Kbd>Esc</Kbd>
              <KbdGroup>
                <Kbd>⌘</Kbd>
                <Kbd>K</Kbd>
              </KbdGroup>
              <KbdGroup>
                <Kbd>⇧</Kbd>
                <Kbd>⌘</Kbd>
                <Kbd>P</Kbd>
              </KbdGroup>
            </div>
          ),
        },
      ],
    },
  ],
}
