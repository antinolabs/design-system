import { MoonIcon, SunIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { useTheme } from '@/showcase/use-theme'

const REPO_URL = 'https://github.com/antinolabs/design-system'

function GithubMark() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-5">
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.32.47-2.39 1.24-3.23-.13-.31-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.18.77.84 1.23 1.91 1.23 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.29 0 .32.21.7.82.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z" />
    </svg>
  )
}

export function SiteHeader({ onHome }: { onHome?: () => void }) {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-16px border-b border-border bg-background/80 px-16px backdrop-blur-md sm:px-24px">
      <div className="flex items-center gap-12px">
        <SidebarTrigger />
        <button
          type="button"
          onClick={onHome}
          className="flex items-center gap-12px"
          aria-label="Antino Design System home"
        >
          <img
            src={`${import.meta.env.BASE_URL}antino-logo.png`}
            alt="Antino"
            className="h-7 w-auto dark:invert"
          />
          <span className="hidden text-caption font-mono tracking-[0.08em] text-muted-foreground uppercase sm:inline">
            Design System
          </span>
        </button>
      </div>

      <div className="flex items-center gap-4px">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button asChild variant="ghost" size="icon">
              <a href={REPO_URL} target="_blank" rel="noreferrer" aria-label="View on GitHub">
                <GithubMark />
              </a>
            </Button>
          </TooltipTrigger>
          <TooltipContent>GitHub repository</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </Button>
          </TooltipTrigger>
          <TooltipContent>{theme === 'dark' ? 'Light mode' : 'Dark mode'}</TooltipContent>
        </Tooltip>
      </div>
    </header>
  )
}
