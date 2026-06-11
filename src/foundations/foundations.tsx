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
    <div className="mx-auto flex max-w-5xl flex-col gap-10 p-32px text-foreground">
      <header className="flex flex-col gap-12px border-b border-border pb-24px">
        <h1 className="text-h2 font-semibold tracking-tight">{title}</h1>
        <div className="max-w-2xl text-body-sm leading-relaxed text-muted-foreground">{intro}</div>
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
    <section className="flex flex-col gap-16px">
      <div className="flex flex-col gap-4px">
        <h2 className="text-body-lg font-semibold">{title}</h2>
        {description ? (
          <p className="max-w-2xl text-body-sm leading-relaxed text-muted-foreground">{description}</p>
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
    <div className="flex items-center gap-16px rounded-lg border border-border bg-card p-12px">
      <div
        className="size-12 shrink-0 rounded-md border border-border"
        style={{
          backgroundColor: `var(${token.cssVar})`,
          color: token.fg ? `var(${token.fg})` : undefined,
        }}
      />
      <div className="flex min-w-0 flex-col">
        <span className="text-body-sm font-medium text-card-foreground">{token.name}</span>
        <span className="truncate font-mono text-caption text-muted-foreground">
          {token.cssVar}
          {value ? ` -> ${value}` : ''}
        </span>
        <span className="mt-2px text-caption text-muted-foreground">{token.usage}</span>
      </div>
    </div>
  )
}

export function ColorGrid({ tokens }: { tokens: ColorToken[] }) {
  return (
    <div className="grid grid-cols-1 gap-12px md:grid-cols-2">
      {tokens.map((token) => (
        <ColorRow key={token.name} token={token} />
      ))}
    </div>
  )
}

export type PrimitiveToken = {
  name: string
  /** literal color value (oklch / hex) — primitives are absolute, not themed */
  value: string
  /** which token(s) currently consume this primitive */
  usage?: string
}

export function PrimitiveSwatch({ token }: { token: PrimitiveToken }) {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-card">
      <div
        className="h-20 w-full border-b border-border"
        style={{ backgroundColor: token.value }}
      />
      <div className="flex flex-col gap-2px p-12px">
        <span className="text-body-sm font-medium text-card-foreground">{token.name}</span>
        <span className="truncate font-mono text-caption text-muted-foreground">{token.value}</span>
        {token.usage ? (
          <span className="mt-2px text-caption text-muted-foreground">{token.usage}</span>
        ) : null}
      </div>
    </div>
  )
}

export function PrimitiveGrid({ tokens }: { tokens: PrimitiveToken[] }) {
  return (
    <div className="grid grid-cols-2 gap-12px sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {tokens.map((token) => (
        <PrimitiveSwatch key={token.name} token={token} />
      ))}
    </div>
  )
}

export type AlphaToken = {
  /** opacity percentage, e.g. 50 -> the `/50` modifier */
  value: number
  usage: string
}

// A checkerboard so the translucency of each swatch is actually visible.
const checkerStyle = {
  backgroundColor: 'var(--card)',
  backgroundImage:
    'linear-gradient(45deg, color-mix(in oklab, var(--muted-foreground) 22%, transparent) 25%, transparent 25%), linear-gradient(-45deg, color-mix(in oklab, var(--muted-foreground) 22%, transparent) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, color-mix(in oklab, var(--muted-foreground) 22%, transparent) 75%), linear-gradient(-45deg, transparent 75%, color-mix(in oklab, var(--muted-foreground) 22%, transparent) 75%)',
  backgroundSize: '14px 14px',
  backgroundPosition: '0 0, 0 7px, 7px -7px, -7px 0',
}

export function AlphaSwatch({
  token,
  cssVar = '--foreground',
}: {
  token: AlphaToken
  cssVar?: string
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-card">
      <div className="h-20 w-full" style={checkerStyle}>
        <div
          className="size-full"
          // mirrors how Tailwind renders the `/NN` opacity modifier
          style={{
            backgroundColor: `color-mix(in oklab, var(${cssVar}) ${token.value}%, transparent)`,
          }}
        />
      </div>
      <div className="flex flex-col gap-2px p-12px">
        <span className="text-body-sm font-medium text-card-foreground">{token.value}%</span>
        <span className="font-mono text-caption text-muted-foreground">/{token.value}</span>
        <span className="mt-2px text-caption text-muted-foreground">{token.usage}</span>
      </div>
    </div>
  )
}

export function AlphaGrid({
  tokens,
  cssVar,
}: {
  tokens: AlphaToken[]
  cssVar?: string
}) {
  return (
    <div className="grid grid-cols-2 gap-12px sm:grid-cols-3 lg:grid-cols-5">
      {tokens.map((token) => (
        <AlphaSwatch key={token.value} token={token} cssVar={cssVar} />
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
    <div className="flex flex-col gap-8px border-b border-border py-16px last:border-b-0 md:flex-row md:items-baseline md:gap-24px">
      <div className="flex w-48 shrink-0 flex-col">
        <span className="text-body-sm font-medium">{style.name}</span>
        <span className="font-mono text-[11px] text-muted-foreground">{style.className}</span>
        <span className="font-mono text-[11px] text-muted-foreground">
          {spec.size} / {spec.lineHeight} / {spec.weight}
        </span>
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-4px">
        <span ref={ref} className={style.className}>
          {style.sample ?? 'The quick brown fox jumps over the lazy dog'}
        </span>
        <span className="text-caption text-muted-foreground">{style.usage}</span>
      </div>
    </div>
  )
}

export type SpacingToken = {
  name: string
  /** spacing key, e.g. "8px" -> used as gap-8px / p-8px / --spacing-8px */
  step: string
  cssVar: string
  usage: string
}

export function SpaceRow({ token }: { token: SpacingToken }) {
  const ref = useRef<HTMLDivElement>(null)
  const [px, setPx] = useState('')
  useEffect(() => {
    if (!ref.current) return
    setPx(getComputedStyle(ref.current).width)
  }, [token.cssVar])

  const value = useComputedVar(token.cssVar)

  return (
    <div className="flex items-center gap-16px border-b border-border py-12px last:border-b-0">
      <div className="flex w-40 shrink-0 flex-col">
        <span className="font-mono text-body-sm font-medium text-foreground">{token.step}</span>
        <span className="font-mono text-caption text-muted-foreground">
          {token.cssVar}
          {value ? ` -> ${value}` : ''}
        </span>
      </div>
      <div className="flex w-20 shrink-0 items-center">
        <div
          ref={ref}
          className="h-6 rounded-sm bg-primary"
          style={{ width: `var(${token.cssVar})` }}
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col">
        <span className="font-mono text-caption text-muted-foreground">{px}</span>
        <span className="text-caption text-muted-foreground">{token.usage}</span>
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
    <div className="flex flex-col items-start gap-12px rounded-lg border border-border bg-card p-16px">
      <div ref={ref} className={`size-16 border-2 border-primary bg-primary/10 ${token.className}`} />
      <div className="flex flex-col">
        <span className="text-body-sm font-medium text-card-foreground">{token.name}</span>
        <span className="font-mono text-[11px] text-muted-foreground">
          {token.className}
          {px ? ` (${px})` : ''}
        </span>
        <span className="mt-2px text-caption text-muted-foreground">{token.usage}</span>
      </div>
    </div>
  )
}
