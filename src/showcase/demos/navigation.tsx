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

export const navigation: Category = {
  id: 'navigation',
  label: 'Navigation',
  items: [
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
