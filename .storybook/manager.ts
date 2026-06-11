import { addons } from 'storybook/manager-api'
import { antinoLight } from './theme'

addons.setConfig({
  theme: antinoLight,
  sidebar: {
    showRoots: true,
  },
})
