import { CalendarIcon, SettingsIcon, SmileIcon } from 'lucide-react'
import { toast } from 'sonner'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from '@/components/ui/context-menu'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from '@/components/ui/menubar'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import type { Category } from '@/showcase/types'

export const overlays: Category = {
  id: 'overlays',
  label: 'Overlays',
  items: [
    {
      id: 'dialog',
      name: 'Dialog',
      description: 'Modal with focus trap, scroll-lock, ESC, and symmetric fade+scale enter/exit.',
      examples: [
        {
          title: 'Default',
          node: (
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Edit profile</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when you're done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-16px py-8px">
                  <div className="grid gap-8px">
                    <Label htmlFor="dialog-name">Name</Label>
                    <Input id="dialog-name" defaultValue="Antino" />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          ),
        },
      ],
    },
    {
      id: 'alert-dialog',
      name: 'Alert dialog',
      description: 'A focused confirmation modal for destructive or irreversible actions.',
      examples: [
        {
          title: 'Default',
          node: (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">Delete account</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your account and remove
                    your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          ),
        },
      ],
    },
    {
      id: 'sheet',
      name: 'Sheet',
      description: 'Slide-over drawer with focus trap and a scrollbar-stable lock.',
      examples: [
        {
          title: 'Default',
          node: (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">Open sheet</Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Edit profile</SheetTitle>
                  <SheetDescription>Make changes to your profile here.</SheetDescription>
                </SheetHeader>
                <div className="grid gap-16px px-16px">
                  <div className="grid gap-8px">
                    <Label htmlFor="sheet-name">Name</Label>
                    <Input id="sheet-name" defaultValue="Antino" />
                  </div>
                </div>
                <SheetFooter>
                  <Button type="submit">Save changes</Button>
                  <SheetClose asChild>
                    <Button variant="outline">Close</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          ),
        },
      ],
    },
    {
      id: 'drawer',
      name: 'Drawer',
      description: 'Bottom-anchored panel for mobile-friendly flows.',
      examples: [
        {
          title: 'Default',
          node: (
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline">Open drawer</Button>
              </DrawerTrigger>
              <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                  <DrawerHeader>
                    <DrawerTitle>Are you sure?</DrawerTitle>
                    <DrawerDescription>This action will sign you out of all devices.</DrawerDescription>
                  </DrawerHeader>
                  <DrawerFooter>
                    <Button>Confirm</Button>
                    <DrawerClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </div>
              </DrawerContent>
            </Drawer>
          ),
        },
      ],
    },
    {
      id: 'popover',
      name: 'Popover',
      description: 'Non-modal click panel with collision-aware placement.',
      examples: [
        {
          title: 'Default',
          node: (
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">Open popover</Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <PopoverHeader>
                  <PopoverTitle>Dimensions</PopoverTitle>
                  <PopoverDescription>Set the dimensions for the layer.</PopoverDescription>
                </PopoverHeader>
                <div className="mt-12px grid gap-8px">
                  <Label htmlFor="popover-width">Width</Label>
                  <Input id="popover-width" defaultValue="100%" />
                </div>
              </PopoverContent>
            </Popover>
          ),
        },
      ],
    },
    {
      id: 'dropdown-menu',
      name: 'Dropdown menu',
      description: 'WAI-ARIA menu with roving focus, shortcuts, and a destructive item.',
      examples: [
        {
          title: 'Default',
          node: (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Open menu</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  Profile
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Settings
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ),
        },
      ],
    },
    {
      id: 'context-menu',
      name: 'Context menu',
      description: 'Right-click menu with labels, shortcuts, and destructive items.',
      examples: [
        {
          title: 'Right click the area',
          node: (
            <ContextMenu>
              <ContextMenuTrigger className="flex h-40 w-80 items-center justify-center rounded-lg border border-dashed border-border text-body-sm text-muted-foreground">
                Right click here
              </ContextMenuTrigger>
              <ContextMenuContent className="w-52">
                <ContextMenuLabel>Actions</ContextMenuLabel>
                <ContextMenuItem>
                  Back
                  <ContextMenuShortcut>⌘[</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>Reload</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          ),
        },
      ],
    },
    {
      id: 'menubar',
      name: 'Menubar',
      description: 'A persistent application menu bar with nested menus and shortcuts.',
      examples: [
        {
          title: 'Default',
          node: (
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>New Window</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Print</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>Edit</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>Undo</MenubarItem>
                  <MenubarItem>Redo</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          ),
        },
      ],
    },
    {
      id: 'tooltip',
      name: 'Tooltip',
      description: 'Hover/focus bubble with intent delay, viewport flip, and a connecting caret.',
      examples: [
        {
          title: 'Default',
          node: (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Hover me</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add to library</p>
              </TooltipContent>
            </Tooltip>
          ),
        },
      ],
    },
    {
      id: 'hover-card',
      name: 'Hover card',
      description: 'Rich preview on hover/focus, with a gap bridge so content stays reachable.',
      examples: [
        {
          title: 'Default',
          node: (
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="link">@antino</Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-72">
                <div className="flex flex-col gap-4px">
                  <span className="text-body-sm font-semibold">Antino Labs</span>
                  <span className="text-body-sm text-muted-foreground">
                    Building the Antino Design System. Hover cards show a preview on hover.
                  </span>
                </div>
              </HoverCardContent>
            </HoverCard>
          ),
        },
      ],
    },
    {
      id: 'command',
      name: 'Command',
      description: 'Command palette / searchable list with groups, shortcuts, and separators.',
      examples: [
        {
          title: 'Default',
          node: (
            <Command className="w-[360px] rounded-lg border border-border shadow-sm">
              <CommandInput placeholder="Type a command or search..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                  <CommandItem>
                    <CalendarIcon />
                    Calendar
                  </CommandItem>
                  <CommandItem>
                    <SmileIcon />
                    Search Emoji
                  </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Settings">
                  <CommandItem>
                    <SettingsIcon />
                    Settings
                    <CommandShortcut>⌘S</CommandShortcut>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          ),
        },
      ],
    },
    {
      id: 'sonner',
      name: 'Toast (Sonner)',
      description: 'Bottom-right toast stack; pauses on hover/focus, auto-dismisses, ESC to clear.',
      examples: [
        {
          title: 'Variants',
          node: (
            <div className="flex flex-wrap gap-8px">
              <Button
                variant="outline"
                onClick={() =>
                  toast('Event has been created', {
                    description: 'Sunday, December 03 at 9:00 AM',
                    action: { label: 'Undo', onClick: () => {} },
                  })
                }
              >
                Default
              </Button>
              <Button variant="outline" onClick={() => toast.success('Saved successfully')}>
                Success
              </Button>
              <Button variant="outline" onClick={() => toast.error('Something went wrong')}>
                Error
              </Button>
              <Button variant="outline" onClick={() => toast.info('Heads up')}>
                Info
              </Button>
            </div>
          ),
        },
      ],
    },
  ],
}
