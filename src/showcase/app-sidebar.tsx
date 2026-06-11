import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { categories, WELCOME_ID } from '@/showcase/registry'

type AppSidebarProps = {
  activeId: string
  query: string
  onQueryChange: (value: string) => void
  onSelect: (id: string) => void
}

export function AppSidebar({ activeId, query, onQueryChange, onSelect }: AppSidebarProps) {
  const normalized = query.trim().toLowerCase()

  const filtered = categories
    .map((category) => ({
      ...category,
      items: category.items.filter((item) => item.name.toLowerCase().includes(normalized)),
    }))
    .filter((category) => category.items.length > 0)

  return (
    <Sidebar className="top-16 h-[calc(100svh-4rem)]" collapsible="offcanvas">
      <SidebarHeader>
        <SidebarInput
          type="search"
          placeholder="Search components..."
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          aria-label="Search components"
        />
      </SidebarHeader>
      <SidebarContent>
        {normalized === '' ? (
          <SidebarGroup>
            <SidebarGroupLabel>Overview</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    isActive={activeId === WELCOME_ID}
                    onClick={() => onSelect(WELCOME_ID)}
                  >
                    <span>Welcome</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ) : null}
        {filtered.map((category) => (
          <SidebarGroup key={category.id}>
            <SidebarGroupLabel>{category.label}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {category.items.map((item) => (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton
                      isActive={item.id === activeId}
                      onClick={() => onSelect(item.id)}
                    >
                      <span>{item.name}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
        {filtered.length === 0 ? (
          <p className="px-16px py-8px text-body-sm text-muted-foreground">No components found.</p>
        ) : null}
      </SidebarContent>
    </Sidebar>
  )
}
