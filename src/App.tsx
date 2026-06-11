import { useEffect, useState } from 'react'
import { TooltipProvider } from '@/components/ui/tooltip'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { Toaster } from '@/components/ui/sonner'
import { SiteHeader } from '@/showcase/site-header'
import { AppSidebar } from '@/showcase/app-sidebar'
import { ComponentSection } from '@/showcase/component-preview'
import { WelcomePage } from '@/showcase/welcome-page'
import { findCategory, findItem, WELCOME_ID } from '@/showcase/registry'

function getInitialId() {
  if (typeof window === 'undefined') return WELCOME_ID
  const hash = window.location.hash.replace('#', '')
  return findItem(hash) ? hash : WELCOME_ID
}

function App() {
  const [activeId, setActiveId] = useState<string>(getInitialId)
  const [query, setQuery] = useState('')

  const activeItem = activeId === WELCOME_ID ? undefined : findItem(activeId)
  const activeCategory = activeItem ? findCategory(activeItem.id) : undefined

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', `#${activeId}`)
      window.scrollTo({ top: 0 })
    }
  }, [activeId])

  return (
    <TooltipProvider delayDuration={200}>
      <SidebarProvider className="flex flex-col">
        <SiteHeader onHome={() => setActiveId(WELCOME_ID)} />
        <div className="flex w-full flex-1">
          <AppSidebar
            activeId={activeId}
            query={query}
            onQueryChange={setQuery}
            onSelect={setActiveId}
          />
          <SidebarInset className="bg-background">
            <main className="mx-auto flex w-full max-w-4xl flex-col gap-48px px-40px py-48px">
              {activeItem ? (
                <ComponentSection item={activeItem} categoryLabel={activeCategory?.label} />
              ) : (
                <WelcomePage onSelect={setActiveId} />
              )}
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
      <Toaster />
    </TooltipProvider>
  )
}

export default App
