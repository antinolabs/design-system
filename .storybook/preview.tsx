import type { Preview } from '@storybook/react-vite'
import { useEffect } from 'react'
import { antinoLight } from './theme'
import '../src/index.css'

const preview: Preview = {
  parameters: {
    docs: {
      theme: antinoLight,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
    options: {
      storySort: {
        order: ['Foundations', ['Overview', 'Taxonomy', 'Colors', 'Typography', 'Spacing', 'Radius'], 'UI'],
      },
    },
  },
  initialGlobals: {
    theme: 'light',
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme ?? 'light'
      useEffect(() => {
        const root = document.documentElement
        root.classList.toggle('dark', theme === 'dark')
        document.body.style.backgroundColor = 'var(--background)'
        document.body.style.color = 'var(--foreground)'
      }, [theme])
      return (
        <div className="p-6 bg-background text-foreground">
          <Story />
        </div>
      )
    },
  ],
}

export default preview
