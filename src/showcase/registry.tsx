import type { Category, ComponentDoc } from '@/showcase/types'
import { foundations } from '@/showcase/demos/foundations'
import { actions } from '@/showcase/demos/actions'
import { inputs } from '@/showcase/demos/inputs'
import { overlays } from '@/showcase/demos/overlays'
import { navigation } from '@/showcase/demos/navigation'
import { dataDisplay } from '@/showcase/demos/data-display'

export const WELCOME_ID = 'welcome'

export const categories: Category[] = [
  foundations,
  actions,
  inputs,
  overlays,
  navigation,
  dataDisplay,
]

export const allItems: ComponentDoc[] = categories.flatMap((category) => category.items)

export function findItem(id: string): ComponentDoc | undefined {
  return allItems.find((item) => item.id === id)
}

export function findCategory(id: string): Category | undefined {
  return categories.find((category) => category.items.some((item) => item.id === id))
}

export const totalComponentCount = actions.items.length +
  inputs.items.length +
  overlays.items.length +
  navigation.items.length +
  dataDisplay.items.length
