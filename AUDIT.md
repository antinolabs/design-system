# Design System Audit & Lint Runbook

A repeatable checklist for keeping the Antino Design System healthy. Run this **before every PR/release** and any time a batch of components changes. It combines automated commands (copy‑paste) with manual review checklists.

The single source of truth for tokens is `src/index.css`. The conventions audited here live in `.cursor/rules/` (`project-structure.mdc`, `components.mdc`, `stories.mdc`).

---

## 0. How to use this doc

1. Run the **Quick gate** (section 1). If any command fails, fix before continuing.
2. Run the **Automated token audit** (section 2). Triage every hit against the allowlist.
3. Walk the **Per‑component checklist** (section 3) for each changed component (or all 55 for a full audit).
4. Verify **Tokens & variables** (section 4), **Variant coverage** (section 5), **Folder structure** (section 6), and **Story conventions** (section 7).
5. Confirm the **Guardrails** (section 8) hold.
6. Record results in the **Report template** (section 9).

> Pass criteria: Quick gate green, **zero** Critical findings, Minor findings either fixed or explicitly accepted with a note.

---

## 1. Quick gate (must pass)

```bash
npm run build            # tsc -b + vite build (type-check + bundle)
npm run lint             # eslint .
npm run build-storybook  # every story compiles
```

- `build` and `build-storybook` **must** exit 0.
- `lint`: the only acceptable pre-existing errors are `react-refresh/only-export-components` (shadcn exports a `cva` object beside the component) and the stock `use-mobile.ts` `react-hooks/set-state-in-effect`. **No new lint errors** may be introduced. New rule violations are a Critical finding.

---

## 2. Automated token audit (copy‑paste)

Run from the repo root. Each block prints offenders; an empty result = pass.

### 2.1 No hardcoded colors in components

```bash
rg -n "#[0-9a-fA-F]{3,8}\b|rgb\(|hsl\(|oklch\(" src/components
```

**Allowlist (expected, not violations):** recharts selector targets in `chart/chart.tsx` such as `[stroke='#ccc']` / `[stroke='#fff']` — these *override* library defaults, they don't apply a color. Anything else is a **Critical** finding → move the color into `src/index.css` as a token.

### 2.2 No primitive Tailwind palette

```bash
rg -n "(bg|text|border|ring|fill|stroke|from|to|via)-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-[0-9]" src/components/ui
```

Any hit is **Critical** — use a semantic token (`bg-muted`, `text-destructive`, …) instead.

### 2.3 Arbitrary color/shadow values

```bash
rg -n "(bg|text|border|ring|fill|stroke|shadow|from|to|via|outline|decoration|divide)-\[" src/components/ui
```

**Allowed** only when token-backed or a non-color value:
- `bg-[color-mix(in_oklch,var(--primary),…)]` (button hover shades) — references tokens ✅
- `shadow-[0_0_0_1px_var(--sidebar-border)]` (sidebar rail border-substitute) — references tokens ✅
- `bg-[Canvas]` / `text-[CanvasText]` in `native-select` — intentional CSS system colors for native `<option>` lists ✅
- width/size values like `ring-[3px]`, `border-[1.5px]` — not colors ✅

A **raw** arbitrary color (e.g. `bg-[#f2674e]`, `text-[rgb(...)]`) is **Critical**.

### 2.4 Off‑scale typography

```bash
rg -n "text-\[[0-9]" src/components/ui
```

Type must come from the named scale (`text-display/h1/h2/h3/title/title-sm/lead/body-lg/body/body-sm/label/button/caption/overline`). Known **Minor** legacy hits: `toggle` (`text-[0.8rem]`) and `calendar` (`text-[0.8rem]`). New off-scale sizes are a **Minor** finding → snap to the nearest token.

### 2.5 Off‑scale radii

```bash
rg -n "rounded-\[" src/components/ui
```

Prefer `rounded-sm/md/lg/xl/2xl/3xl/4xl` (mapped from `--radius`). **Allowed:** `rounded-[inherit]`, `rounded-[calc(var(--radius)-Npx)]` (token-derived), and tiny fixed shapes (`rounded-[2px]` tooltip arrow / chart swatch, `rounded-[5px]` checkbox). Novel arbitrary radii are **Minor**.

### 2.6 Off‑scale spacing

```bash
rg -n "(p|px|py|pt|pr|pb|pl|m|mx|my|mt|mr|mb|ml|gap|space-x|space-y)-\[" src/components/ui
```

Spacing should use the pixel-named scale (`p-16px`, `gap-8px`, …). Token-derived `calc(var(--spacing-*)…)` is fine; raw arbitrary px is **Minor**.

### 2.7 Undefined / orphan color tokens

```bash
# Color utilities used in components, deduped:
rg -oN "(?:bg|text|border|ring|fill|stroke|outline|divide|from|via|to)-[a-z]+(?:-[a-z]+)*" src/components/ui \
  | sed -E 's/^.*://' | sort -u
```

Cross-check every `*-foreground`/semantic name against the `--color-*` mappings in `src/index.css` (`@theme inline`). A utility pointing at an **undefined** token silently renders no color → **Critical**. (E.g. there is intentionally no `destructive-foreground`; destructive surfaces use `text-destructive` on a tinted fill.)

### 2.8 Tokens defined but mapped? (drift check)

```bash
# Every :root token should have a matching --color-* (or be a non-color token):
rg -n "^\s*--[a-z]" src/index.css
```

Confirm each color variable in `:root` is exposed via `@theme inline` as `--color-*` and is present in **both** `:root` and `.dark`. A color defined in `:root` but missing in `.dark` (or vice versa) is a **Critical** theming gap.

---

## 3. Per‑component checklist

Run this for **every** changed component (and all 55 for a full audit — see section 5 for the list).

For `src/components/ui/<name>/`:

- [ ] **Tokens only.** No hardcoded/primitive/arbitrary raw colors (sections 2.1–2.3). Colors, radius, shadow, type, spacing all read from tokens.
- [ ] **Elevation tokens.** Uses `shadow-soft` / `shadow-card` / `shadow-lift` (not raw `shadow-sm/md/lg`) where elevation is intended.
- [ ] **Motion tokens.** Transitions use `ease-entrance` / `ease-exit` and a `duration-*`; no ad-hoc cubic-beziers.
- [ ] **`cn()` used** from `@/lib/utils` for all conditional/merged classes.
- [ ] **`cva` variants** mirror the `button.tsx` pattern with `defaultVariants` set.
- [ ] **`data-slot`** (and `data-variant`/`data-size` where relevant) present for styling hooks.
- [ ] **Dark mode** verified — render in `.dark`; foreground/background pairs stay legible.
- [ ] **Focus state** uses `focus-visible:ring-ring/50` (+ `border-ring`), consistent with siblings.
- [ ] **Invalid state** (form controls) uses `aria-invalid:*` destructive tokens.
- [ ] **Icon slots** (where applicable) support `data-icon="inline-start"`/`"inline-end"` padding and `[&_svg]` sizing.
- [ ] **Story exists & updated** — colocated `<name>.stories.tsx` reflects the current API.

---

## 4. Tokens & variables coverage

- [ ] Every new visual value lives in `src/index.css` (no inline literals).
- [ ] New color token added in **three** places: `:root`, `.dark`, and the `@theme inline` `--color-*` mapping.
- [ ] Token name is **semantic** (role-based: `--surface-strong`), not literal (`--sand-deep`) at the component layer.
- [ ] Components consume **semantic aliases** (`bg-primary`), never primitives.
- [ ] Type scale, spacing scale, radius scale, shadow set, and easing are referenced by name — never re-derived inline.
- [ ] `Colors.stories.tsx`, `Typography.stories.tsx`, `Spacing.stories.tsx`, `Radius.stories.tsx`, and `Taxonomy.stories.tsx` descriptions still match reality after token edits.

---

## 5. Variant & state coverage

For each component, confirm **every** `cva` variant/size and each interaction state is represented in a story (so autodocs documents the full surface).

- [ ] Each `variant` value has a swatch in a `Variants` story.
- [ ] Each `size` value has a swatch in a `Sizes` story (if sizes exist).
- [ ] States covered where meaningful: default, hover, focus-visible, active/pressed, disabled, invalid, loading, checked/selected, open/expanded.
- [ ] Icon-left / icon-right shown where the component supports icon slots (e.g. `Button`, `Badge`).
- [ ] A `Tokens` story (via `TokenUsage`) documents which tokens each variant applies, where that pattern is used.

**Component inventory (55) — tick when audited:**

`accordion` `alert` `alert-dialog` `aspect-ratio` `avatar` `badge` `breadcrumb` `button` `button-group` `calendar` `card` `carousel` `chart` `checkbox` `collapsible` `combobox` `command` `context-menu` `dialog` `direction` `drawer` `dropdown-menu` `empty` `field` `hover-card` `input` `input-group` `input-otp` `item` `kbd` `label` `menubar` `native-select` `navigation-menu` `pagination` `popover` `progress` `radio-group` `resizable` `scroll-area` `select` `separator` `sheet` `sidebar` `skeleton` `slider` `sonner` `spinner` `switch` `table` `tabs` `textarea` `toggle` `toggle-group` `tooltip`

> Refresh the list any time: `ls -1 src/components/ui`

---

## 6. Folder‑structure integrity

```bash
# Every component folder must contain <name>.tsx, <name>.stories.tsx, and index.ts
for d in src/components/ui/*/; do
  n=$(basename "$d")
  for f in "$n.tsx" "$n.stories.tsx" "index.ts"; do
    [ -f "$d$f" ] || echo "MISSING: $d$f"
  done
done
```

```bash
# index.ts should re-export the component
rg -L "export \* from './" src/components/ui/*/index.ts

# No deep relative imports — always use the @/ alias
rg -n "\.\./\.\." src/components src/foundations

# Stories must import from @storybook/react-vite (not @storybook/react)
rg -n "from '@storybook/react'" src
```

- [ ] No flat `src/components/ui/<name>.tsx` files (CLI output must be moved into a folder).
- [ ] `src/components/ui/` is never relocated/renamed.
- [ ] Shared helpers stay in `src/lib/` and hooks in `src/hooks/` — not inside component folders.
- [ ] Theme tokens live **only** in `src/index.css`.
- [ ] Package manager is **npm** — `package-lock.json` present; no `pnpm-lock.yaml` / `yarn.lock`.

---

## 7. Story conventions

- [ ] `title: 'UI/<ComponentName>'` so it groups under the UI section.
- [ ] `tags: ['autodocs']` and `satisfies Meta<typeof X>` present.
- [ ] Imports use the `@/components/ui/<name>` alias, not `./` paths.
- [ ] Required props set in `meta.args` (e.g. Accordion `type`/`collapsible`).
- [ ] `Default` story + variant/state stories; key props exposed via `argTypes` controls.

---

## 8. Enhanced guardrails

Treat a failure of any of these as a finding (severity noted):

- **G1 — Single source of truth (Critical).** All design values originate in `src/index.css`. A literal in a component is a bug, even if it "looks right".
- **G2 — Semantic over literal (Critical).** Components reference role tokens (`primary`, `muted`, `surface-strong`), never primitives or raw palette.
- **G3 — Light/dark parity (Critical).** Any color token must be defined in both `:root` and `.dark`. New components must be visually checked in both themes.
- **G4 — Borderless aesthetic (Minor).** Prefer fill + inset `ring-1 ring-inset ring-border` + elevation tokens over hard `border`. Flag stray `border`/`shadow-sm/md/lg` that bypass the system.
- **G5 — Pill & radius geometry (Minor).** Interactive pills use `rounded-full`; containers use `rounded-xl/2xl`. No novel arbitrary radii.
- **G6 — Motion consistency (Minor).** Use `ease-entrance`/`ease-exit` + a standard `duration-*`. No bespoke timing functions.
- **G7 — A11y (Critical for new work).** Visible `focus-visible` ring on every interactive element; `aria-invalid` styling on form controls; contrast checked (note any sub-AA pairs, e.g. `primary-foreground` on `primary` is documented at ~2.5:1).
- **G8 — Story parity (Minor).** Any component change ships with a story update; every variant/size is documented.
- **G9 — No new lint errors (Critical).** `npm run lint` introduces zero new violations beyond the documented pre-existing set.
- **G10 — Build & Storybook green (Critical).** `npm run build` and `npm run build-storybook` both pass.
- **G11 — Add via CLI (Minor).** New shadcn components come from `npx shadcn@latest add <name>`, then are moved into the folder layout — never hand-authored from scratch.
- **G12 — Alias imports (Minor).** Use `@/components/ui/<name>`, `@/lib/utils`, `@/hooks` — never `../../` chains.

---

## 9. Audit report template

Copy into the PR description or an issue:

```md
## Design System Audit — <date> — <scope: all components / changed: x, y, z>

### Quick gate
- build: pass/fail
- lint: pass (N pre-existing) / fail (new: …)
- build-storybook: pass/fail

### Automated token audit
- 2.1 hardcoded colors: clean / findings: …
- 2.2 primitive palette: clean / …
- 2.3 arbitrary color values: clean (allowlisted: …) / …
- 2.4 off-scale type: clean / Minor: …
- 2.5 off-scale radii: clean / Minor: …
- 2.6 off-scale spacing: clean / …
- 2.7 undefined tokens: clean / …
- 2.8 light/dark parity: clean / …

### Component checklist
- Audited: <count> / 55
- Critical findings: …
- Minor findings: …

### Folder structure & stories
- structure script: clean / MISSING: …
- alias imports: clean / …
- story conventions: clean / …

### Guardrails (G1–G12)
- Failures: none / …

### Verdict
- [ ] Ship  [ ] Fix required
```

---

### One‑shot automated sweep

Run all the grep checks in one pass (review each section's output against the allowlists above):

```bash
echo "== 2.1 hardcoded colors =="; rg -n "#[0-9a-fA-F]{3,8}\b|rgb\(|hsl\(|oklch\(" src/components
echo "== 2.2 primitive palette =="; rg -n "(bg|text|border|ring|fill|stroke|from|to|via)-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-[0-9]" src/components/ui
echo "== 2.3 arbitrary color/shadow =="; rg -n "(bg|text|border|ring|fill|stroke|shadow|from|to|via|outline|decoration|divide)-\[" src/components/ui
echo "== 2.4 off-scale type =="; rg -n "text-\[[0-9]" src/components/ui
echo "== 2.5 off-scale radii =="; rg -n "rounded-\[" src/components/ui
echo "== 2.6 off-scale spacing =="; rg -n "(p|px|py|pt|pr|pb|pl|m|mx|my|mt|mr|mb|ml|gap|space-x|space-y)-\[" src/components/ui
echo "== 6 structure =="; for d in src/components/ui/*/; do n=$(basename "$d"); for f in "$n.tsx" "$n.stories.tsx" "index.ts"; do [ -f "$d$f" ] || echo "MISSING: $d$f"; done; done
echo "== 6 deep relative imports =="; rg -n "\.\./\.\." src/components src/foundations
echo "== 7 wrong storybook import =="; rg -n "from '@storybook/react'" src
```
