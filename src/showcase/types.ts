import type { ReactNode } from 'react'

export type Example = {
  title: string
  description?: string
  node: ReactNode
}

export type ComponentDoc = {
  /** URL-friendly slug, also used as the sidebar key and hash. */
  id: string
  name: string
  description: string
  examples: Example[]
}

export type Category = {
  id: string
  label: string
  /** Short editorial headline shown under the section number. */
  tagline?: string
  items: ComponentDoc[]
}
