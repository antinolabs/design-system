import {
  BarChart3Icon,
  ClipboardListIcon,
  LayoutDashboardIcon,
  SettingsIcon,
  UsersIcon,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import type { Category } from '@/showcase/types'

const sidebarSections = [
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

export const navigation: Category = {
  id: 'navigation',
  label: 'Navigation',
  items: [
    {
      id: 'sidebar',
      name: 'Sidebar',
      description: 'App navigation with sections, active state, and a clay accent. (Used by this very page.)',
      examples: [
        {
          title: 'Application sidebar',
          node: (
            <div className="h-[420px] w-full overflow-hidden rounded-2xl border border-border">
              <SidebarProvider className="min-h-full">
                <Sidebar className="absolute">
                  <SidebarHeader>
                    <div className="flex items-center gap-8px px-8px py-6px">
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-xl bg-primary text-title-sm font-semibold text-primary-foreground">
                        A
                      </span>
                      <span className="text-title-sm font-semibold">Antino</span>
                    </div>
                  </SidebarHeader>
                  <SidebarContent>
                    {sidebarSections.map((section) => (
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
        },
      ],
    },
    {
      id: 'tabs',
      name: 'Tabs',
      description: 'Pill-track segmented control for switching between related views.',
      examples: [
        {
          title: 'Default',
          node: (
            <Tabs defaultValue="account" className="w-[360px]">
              <TabsList>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
              </TabsList>
              <TabsContent value="account" className="text-body-sm text-muted-foreground">
                Make changes to your account here.
              </TabsContent>
              <TabsContent value="password" className="text-body-sm text-muted-foreground">
                Change your password here.
              </TabsContent>
            </Tabs>
          ),
        },
      ],
    },
    {
      id: 'breadcrumb',
      name: 'Breadcrumb',
      description: 'Path with chevron separators; supports collapse for deep trees.',
      examples: [
        {
          title: 'Default & collapsed',
          node: (
            <div className="flex flex-col gap-16px">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Components</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbEllipsis />
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Current</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          ),
        },
      ],
    },
    {
      id: 'pagination',
      name: 'Pagination',
      description: 'Numbered pages with prev/next and ellipsis collapse.',
      examples: [
        {
          title: 'Default',
          node: (
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          ),
        },
      ],
    },
    {
      id: 'navigation-menu',
      name: 'Navigation menu',
      description: 'Top-level navigation with expandable content panels.',
      examples: [
        {
          title: 'Default',
          node: (
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-4px p-12px">
                      <li>
                        <NavigationMenuLink href="#">Introduction</NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink href="#">Installation</NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-4px p-12px">
                      <li>
                        <NavigationMenuLink href="#">Button</NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink href="#">Card</NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          ),
        },
      ],
    },
  ],
}
