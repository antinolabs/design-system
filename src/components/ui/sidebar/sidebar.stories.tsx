import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  LayoutDashboardIcon,
  UsersIcon,
  ClipboardListIcon,
  BarChart3Icon,
  SettingsIcon,
} from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'

const meta = {
  title: 'UI/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

const sections = [
  {
    label: 'Overview',
    items: [
      { title: 'Dashboard', icon: LayoutDashboardIcon, active: true },
      { title: 'Healthcare members', icon: UsersIcon },
    ],
  },
  {
    label: 'Operate',
    items: [
      { title: 'Insurance claims', icon: ClipboardListIcon },
      { title: 'Analytics', icon: BarChart3Icon },
      { title: 'Settings', icon: SettingsIcon },
    ],
  },
]

export const Default: Story = {
  render: () => (
    <div className="h-[480px] w-full overflow-hidden">
      <SidebarProvider>
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-8px px-8px py-6px">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-xl bg-primary text-title-sm font-semibold text-primary-foreground">
                A
              </span>
              <span className="text-title-sm font-semibold">Antino</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            {sections.map((section) => (
              <SidebarGroup key={section.label}>
                <SidebarGroupLabel>{section.label}</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {section.items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton isActive={item.active}>
                          <item.icon />
                          <span>{item.title}</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            ))}
          </SidebarContent>
          <SidebarFooter>
            <div className="px-8px py-4px text-caption text-sidebar-foreground/60">
              Go Digit · HCL Healthcare · Revfin
            </div>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset>
          <div className="flex items-center gap-8px p-16px">
            <SidebarTrigger />
            <span className="text-body-sm text-muted-foreground">Operations dashboard</span>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  ),
}

export const MenuStates: Story = {
  name: 'Menu button states',
  render: () => (
    <div className="h-[360px] w-full overflow-hidden">
      <SidebarProvider>
        <Sidebar>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Menu button states</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <LayoutDashboardIcon />
                      <span>Default</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    {/* Live hover: hover this item to see the real hover state */}
                    <SidebarMenuButton>
                      <LayoutDashboardIcon />
                      <span>Hover me</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    {/* Simulated hover so the resting hover look is visible in docs */}
                    <SidebarMenuButton className="bg-sidebar-accent text-sidebar-accent-foreground">
                      <LayoutDashboardIcon />
                      <span>Hover (simulated)</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive>
                      <LayoutDashboardIcon />
                      <span>Active</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton disabled>
                      <LayoutDashboardIcon />
                      <span>Disabled</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <SidebarInset>
          <div className="p-16px text-body-sm text-muted-foreground">
            Default · hover (live + simulated) · active (clay accent) · disabled.
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  ),
}
