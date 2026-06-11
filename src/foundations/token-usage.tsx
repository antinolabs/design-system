import type { ReactNode } from 'react'

export type TokenRow = {
  /** the variant / state / part this row documents, e.g. 'default', 'outline',
   *  'base (all variants)', 'aria-invalid' */
  name: string
  /** token-based utility classes this variant applies */
  tokens: string[]
  /** optional clarifying note */
  note?: ReactNode
}

/**
 * Documents which design tokens a component applies, per variant/state.
 * Used as a `Tokens` story inside each component's *.stories.tsx so the
 * token contract is visible alongside the rendered examples.
 */
export function TokenUsage({ rows, intro }: { rows: TokenRow[]; intro?: ReactNode }) {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-12px p-16px text-foreground">
      {intro ? (
        <p className="max-w-2xl text-body-sm leading-relaxed text-muted-foreground">{intro}</p>
      ) : null}
      <div className="overflow-hidden rounded-lg border border-border">
        <table className="w-full border-collapse text-body-sm">
          <thead className="bg-muted/50 text-left">
            <tr>
              <th className="w-44 px-12px py-10px font-medium">Variant / state</th>
              <th className="px-12px py-10px font-medium">Tokens used</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.name} className="border-t border-border align-top">
                <td className="px-12px py-10px font-mono text-caption text-muted-foreground">
                  {row.name}
                </td>
                <td className="px-12px py-10px">
                  <div className="flex flex-wrap gap-6px">
                    {row.tokens.map((token) => (
                      <span
                        key={token}
                        className="rounded-md border border-border bg-card px-8px py-2px font-mono text-caption text-foreground"
                      >
                        {token}
                      </span>
                    ))}
                  </div>
                  {row.note ? (
                    <p className="mt-6px text-caption text-muted-foreground">{row.note}</p>
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
