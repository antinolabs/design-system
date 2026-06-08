import { useEffect, useRef, useState, type ReactNode } from 'react'

/**
 * Reads the live computed value of a CSS custom property from :root and keeps
 * it in sync when the theme (`.dark` class) toggles.
 */
export function useComputedVar(cssVar: string) {
  const [value, setValue] = useState('')
  useEffect(() => {
    const read = () =>
      setValue(getComputedStyle(document.documentElement).getPropertyValue(cssVar).trim())
    read()
    const observer = new MutationObserver(read)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })
    return () => observer.disconnect()
  }, [cssVar])
  return value
}

export function Page({
  title,
  intro,
  children,
}: {
  title: string
  intro: ReactNode
  children: ReactNode
}) {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-10 p-8 text-foreground">
      <header className="flex flex-col gap-3 border-b border-border pb-6">
        <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
        <div className="max-w-2xl text-sm leading-relaxed text-muted-foreground">{intro}</div>
      </header>
      {children}
    </div>
  )
}

export function Section({
  title,
  description,
  children,
}: {
  title: string
  description?: ReactNode
  children: ReactNode
}) {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-semibold">{title}</h2>
        {description ? (
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">{description}</p>
        ) : null}
      </div>
      {children}
    </section>
  )
}

export type ColorToken = {
  name: string
  cssVar: string
  /** token used for legible text rendered on top of the swatch */
  fg?: string
  usage: string
}

export function ColorRow({ token }: { token: ColorToken }) {
  const value = useComputedVar(token.cssVar)
  return (
    <div className="flex items-center gap-4 rounded-lg border border-border bg-card p-3">
      <div
        className="size-12 shrink-0 rounded-md border border-border"
        style={{
          backgroundColor: `var(${token.cssVar})`,
          color: token.fg ? `var(${token.fg})` : undefined,
        }}
      />
      <div className="flex min-w-0 flex-col">
        <span className="text-sm font-medium text-card-foreground">{token.name}</span>
        <span className="truncate font-mono text-xs text-muted-foreground">
          {token.cssVar}
          {value ? ` -> ${value}` : ''}
        </span>
        <span className="mt-0.5 text-xs text-muted-foreground">{token.usage}</span>
      </div>
    </div>
  )
}

export function ColorGrid({ tokens }: { tokens: ColorToken[] }) {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
      {tokens.map((token) => (
        <ColorRow key={token.name} token={token} />
      ))}
    </div>
  )
}

export type TypeStyle = {
  name: string
  className: string
  usage: string
  sample?: string
}

export function TypeRow({ style }: { style: TypeStyle }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [spec, setSpec] = useState({ size: '', lineHeight: '', weight: '' })
  useEffect(() => {
    if (!ref.current) return
    const cs = getComputedStyle(ref.current)
    setSpec({ size: cs.fontSize, lineHeight: cs.lineHeight, weight: cs.fontWeight })
  }, [style.className])

  return (
    <div className="flex flex-col gap-2 border-b border-border py-4 last:border-b-0 md:flex-row md:items-baseline md:gap-6">
      <div className="flex w-48 shrink-0 flex-col">
        <span className="text-sm font-medium">{style.name}</span>
        <span className="font-mono text-[11px] text-muted-foreground">{style.className}</span>
        <span className="font-mono text-[11px] text-muted-foreground">
          {spec.size} / {spec.lineHeight} / {spec.weight}
        </span>
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <span ref={ref} className={style.className}>
          {style.sample ?? 'The quick brown fox jumps over the lazy dog'}
        </span>
        <span className="text-xs text-muted-foreground">{style.usage}</span>
      </div>
    </div>
  )
}

export type RadiusToken = {
  name: string
  className: string
  cssVar?: string
  usage: string
}

export function RadiusCard({ token }: { token: RadiusToken }) {
  const ref = useRef<HTMLDivElement>(null)
  const [px, setPx] = useState('')
  useEffect(() => {
    if (!ref.current) return
    setPx(getComputedStyle(ref.current).borderRadius)
  }, [token.className])

  return (
    <div className="flex flex-col items-start gap-3 rounded-lg border border-border bg-card p-4">
      <div ref={ref} className={`size-16 border-2 border-primary bg-primary/10 ${token.className}`} />
      <div className="flex flex-col">
        <span className="text-sm font-medium text-card-foreground">{token.name}</span>
        <span className="font-mono text-[11px] text-muted-foreground">
          {token.className}
          {px ? ` (${px})` : ''}
        </span>
        <span className="mt-0.5 text-xs text-muted-foreground">{token.usage}</span>
      </div>
    </div>
  )
}
