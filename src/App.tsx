import { Fragment } from 'react'
import { ArrowRightIcon } from 'lucide-react'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Toaster } from '@/components/ui/sonner'
import { Button } from '@/components/ui/button'
import { SiteHeader, STORYBOOK_URL, GithubMark, StorybookMark } from '@/showcase/site-header'
import { CategorySection } from '@/showcase/component-preview'
import { GridBackground, Crosshair } from '@/showcase/grid'
import { categories, totalComponentCount } from '@/showcase/registry'

/**
 * The double rule between top-level sections — two full-bleed horizontal
 * strokes ~16px apart that connect to the column rails, with a crosshair at
 * each rail intersection.
 */
function SectionDivider() {
  return (
    <div aria-hidden className="relative h-[18px] border-y border-border">
      <Crosshair className="top-1/2 -left-[6px] -translate-y-1/2" />
      <Crosshair className="top-1/2 -right-[6px] -translate-y-1/2" />
    </div>
  )
}

function Hero() {
  return (
    <section className="relative px-[2.5rem] pt-[6rem] pb-[5rem]">
      <div className="flex flex-col gap-20px">
        <span className="font-mono text-caption tracking-[0.12em] text-primary uppercase">
          Antino · Design System
        </span>
        <h1 className="max-w-4xl text-display">
          One warm, editorial language. Borderless, and alive on interaction.
        </h1>
        <p className="max-w-2xl text-body-lg text-muted-foreground">
          A sand-and-ink palette, a Fraunces display serif, and surfaces that read through fill and
          soft elevation — never a border. Every reusable component lives here, then ships across the
          product. Scroll to explore the whole system on one page.
        </p>
        <div className="flex flex-wrap items-center gap-12px pt-8px">
          <Button asChild>
            <a href={STORYBOOK_URL} target="_blank" rel="noreferrer">
              <StorybookMark className="size-4" />
              Open Storybook
              <ArrowRightIcon data-icon="inline-end" />
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://github.com/antinolabs/design-system" target="_blank" rel="noreferrer">
              <GithubMark className="size-4" />
              View on GitHub
            </a>
          </Button>
        </div>
        <div className="pt-8px">
          <span className="font-mono text-caption tracking-[0.12em] text-muted-foreground uppercase">
            {totalComponentCount} components · shadcn/ui · Tailwind v4 · Storybook 10
          </span>
        </div>
      </div>
      <Crosshair className="-left-[6px] -top-[6px]" />
      <Crosshair className="-right-[6px] -top-[6px]" />
    </section>
  )
}

function SiteFooter() {
  return (
    <footer className="relative px-[2.5rem] pt-[2.5rem] pb-[3rem]">
      <div className="flex flex-col items-start justify-between gap-16px sm:flex-row sm:items-center">
        <p className="text-body-sm text-muted-foreground">
          Antino Design System — built with shadcn/ui, Tailwind v4 & Storybook.
        </p>
        <div className="flex items-center gap-16px text-body-sm">
          <a
            href={STORYBOOK_URL}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Storybook
          </a>
          <a
            href="https://github.com/antinolabs/design-system"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            GitHub
          </a>
        </div>
      </div>
      <Crosshair className="-left-[6px] -bottom-[6px]" />
      <Crosshair className="-right-[6px] -bottom-[6px]" />
    </footer>
  )
}

function App() {
  return (
    <TooltipProvider delayDuration={200}>
      <div className="relative min-h-screen bg-background text-foreground">
        <GridBackground />
        <SiteHeader />
        <div className="relative mx-auto w-full max-w-5xl border-x border-b border-border">
          <main id="top">
            <Hero />
            <SectionDivider />
            {categories.map((category, index) => (
              <Fragment key={category.id}>
                <CategorySection category={category} index={index} />
                <SectionDivider />
              </Fragment>
            ))}
            <SiteFooter />
          </main>
        </div>
      </div>
      <Toaster />
    </TooltipProvider>
  )
}

export default App
