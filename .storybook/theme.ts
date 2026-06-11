import { create } from 'storybook/theming'

/**
 * Storybook chrome + docs theme, mapped from the Antino design tokens in
 * `src/index.css`. The manager runs in its own document and cannot read the
 * app's `:root` CSS variables, so the brand hex values are mirrored here.
 * Keep these in sync with `src/index.css` if the palette changes.
 */

// Palette (mirrors src/index.css)
const paper = '#ffffff'
const sand = '#eeece6'
const ink = '#041222'
const inkFaint = '#5a5a5a'
const line = '#d8d1c2'
const clay = '#f2674e'

const sans = '"Inter", "Inter Variable", system-ui, sans-serif'
const mono = 'ui-monospace, "SF Mono", Menlo, monospace'

const brandTitle = `
  <span style="display:inline-flex;align-items:center;gap:8px;font-family:${sans}">
    <span style="display:inline-flex;width:24px;height:24px;align-items:center;justify-content:center;background:${clay};color:${paper};border-radius:8px;font-weight:600;font-size:13px;line-height:1">A</span>
    <span style="font-weight:600;color:${ink}">Antino</span>
  </span>`

export const antinoLight = create({
  base: 'light',
  brandTitle,
  brandUrl: './',
  brandTarget: '_self',

  // Accent — clay drives the active nav item, links and selection.
  colorPrimary: clay,
  colorSecondary: clay,

  // Surfaces — paper panels on a sand work area.
  appBg: paper,
  appContentBg: paper,
  appPreviewBg: paper,
  appBorderColor: line,
  appBorderRadius: 12,

  // Text
  textColor: ink,
  textInverseColor: paper,
  textMutedColor: inkFaint,

  // Toolbar / addon bar
  barBg: paper,
  barTextColor: inkFaint,
  barSelectedColor: clay,
  barHoverColor: clay,

  // Form inputs (search, controls)
  inputBg: paper,
  inputBorder: line,
  inputTextColor: ink,
  inputBorderRadius: 10,

  fontBase: sans,
  fontCode: mono,
})

export const antinoDark = create({
  base: 'dark',
  brandTitle,
  brandUrl: './',
  brandTarget: '_self',
  colorPrimary: clay,
  colorSecondary: clay,
  appBg: '#041222',
  appContentBg: '#041222',
  appPreviewBg: '#041222',
  appBorderColor: '#5a5a5a',
  appBorderRadius: 12,
  textColor: sand,
  textInverseColor: ink,
  textMutedColor: '#ded8c9',
  barBg: '#041222',
  barTextColor: '#ded8c9',
  barSelectedColor: clay,
  barHoverColor: clay,
  inputBg: '#2e2e2e',
  inputBorder: '#5a5a5a',
  inputTextColor: sand,
  inputBorderRadius: 10,
  fontBase: sans,
  fontCode: mono,
})
