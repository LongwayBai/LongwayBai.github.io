# Visitor Counter Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add lightweight visitor stats to the homepage and doc pages in the Docusaurus site using a shared Busuanzi-backed component.

**Architecture:** Build one client-side `VisitorCounter` component that injects the Busuanzi script once, refreshes counts on route changes, and renders either site-wide totals or per-page views based on props. Mount it in the homepage hero for site-level stats and in the custom `DocItem` wrapper for page-level stats so the feature follows the same integration pattern as the existing comments component.

**Tech Stack:** Docusaurus 3, React 19, TypeScript, CSS modules, Node built-in test runner, TypeScript compiler.

---

### File Structure

**Create:**
- `src/components/VisitorCounter/index.tsx` - shared client-side counter component and Busuanzi integration logic
- `src/components/VisitorCounter/styles.module.css` - counter presentation for homepage and doc-page variants
- `src/components/VisitorCounter/helpers.ts` - small pure helpers for counter mode configuration and DOM id selection
- `tests/visitor-counter/helpers.test.mjs` - Node-based test covering helper behavior
- `tests/visitor-counter/tsconfig.json` - isolated compile config for the test target

**Modify:**
- `src/pages/index.tsx` - render site-wide stats on the homepage
- `src/pages/index.module.css` - homepage placement and spacing for the new stat block
- `src/theme/DocItem/index.tsx` - render per-page view count beneath doc content and above comments or alongside that area

### Task 1: Define and test the counter configuration helpers

**Files:**
- Create: `src/components/VisitorCounter/helpers.ts`
- Create: `tests/visitor-counter/helpers.test.mjs`
- Create: `tests/visitor-counter/tsconfig.json`

- [ ] **Step 1: Write the failing test**

```javascript
import test from 'node:test';
import assert from 'node:assert/strict';
import {getCounterConfig} from '../../.tmp-tests/visitor-counter/helpers.js';

test('site mode maps to Busuanzi site pv and uv ids', () => {
  assert.deepEqual(getCounterConfig('site'), {
    items: [
      {containerId: 'busuanzi_container_site_pv', valueId: 'busuanzi_value_site_pv'},
      {containerId: 'busuanzi_container_site_uv', valueId: 'busuanzi_value_site_uv'},
    ],
  });
});
```

- [ ] **Step 2: Run the test compile to verify it fails**

Run: `npx tsc -p tests/visitor-counter/tsconfig.json`
Expected: FAIL because `src/components/VisitorCounter/helpers.ts` does not exist yet.

- [ ] **Step 3: Write the minimal helper implementation**

```typescript
export function getCounterConfig(mode: 'site' | 'page') {
  return mode === 'site'
    ? {
        items: [
          {containerId: 'busuanzi_container_site_pv', valueId: 'busuanzi_value_site_pv'},
          {containerId: 'busuanzi_container_site_uv', valueId: 'busuanzi_value_site_uv'},
        ],
      }
    : {
        items: [
          {containerId: 'busuanzi_container_page_pv', valueId: 'busuanzi_value_page_pv'},
        ],
      };
}
```

- [ ] **Step 4: Compile and run the test to verify it passes**

Run: `npx tsc -p tests/visitor-counter/tsconfig.json && node --test tests/visitor-counter/helpers.test.mjs`
Expected: PASS.

### Task 2: Build the shared visitor counter component

**Files:**
- Create: `src/components/VisitorCounter/index.tsx`
- Create: `src/components/VisitorCounter/styles.module.css`
- Modify: `src/components/VisitorCounter/helpers.ts`

- [ ] **Step 1: Add the next failing helper assertion for labels or item metadata**

```javascript
test('page mode exposes one page-view counter item', () => {
  const config = getCounterConfig('page');
  assert.equal(config.items.length, 1);
  assert.equal(config.items[0].valueId, 'busuanzi_value_page_pv');
});
```

- [ ] **Step 2: Run the test to verify it fails for the expected reason**

Run: `npx tsc -p tests/visitor-counter/tsconfig.json && node --test tests/visitor-counter/helpers.test.mjs`
Expected: FAIL until the helper covers the full shape used by the component.

- [ ] **Step 3: Implement the component minimally**

```tsx
export default function VisitorCounter({mode}: {mode: 'site' | 'page'}): ReactNode {
  // load the Busuanzi script once, refresh on pathname changes,
  // and render spans with the exact Busuanzi ids from helper output
}
```

- [ ] **Step 4: Re-run the helper test and then run `yarn typecheck`**

Run: `npx tsc -p tests/visitor-counter/tsconfig.json && node --test tests/visitor-counter/helpers.test.mjs && yarn typecheck`
Expected: PASS.

### Task 3: Mount the component on the homepage

**Files:**
- Modify: `src/pages/index.tsx`
- Modify: `src/pages/index.module.css`

- [ ] **Step 1: Add a homepage render check through an existing marker strategy**

Use a deterministic `data-testid` such as `home-visitor-counter` so the render target is inspectable in markup and easy to verify manually.

- [ ] **Step 2: Run `yarn typecheck` to verify the homepage changes are not in place yet or fail until wired correctly**

Expected: If JSX references are added before imports are wired, fail with a missing import/type error.

- [ ] **Step 3: Render `VisitorCounter mode="site"` in the homepage hero metadata area and style it to match the existing blue/dark aesthetic**

- [ ] **Step 4: Run `yarn typecheck` again**

Expected: PASS.

### Task 4: Mount the component on doc pages

**Files:**
- Modify: `src/theme/DocItem/index.tsx`

- [ ] **Step 1: Add the doc-page mount point directly in the wrapper**

Render `VisitorCounter mode="page"` near the existing `UtterancesComments` component.

- [ ] **Step 2: Run `yarn typecheck` to verify the wrapper compiles**

Expected: PASS.

### Task 5: Verify end-to-end behavior

**Files:**
- No new files expected unless verification uncovers a bug

- [ ] **Step 1: Run focused diagnostics**

Run: `lsp_diagnostics` on `src/components/VisitorCounter`, `src/pages/index.tsx`, and `src/theme/DocItem/index.tsx`
Expected: zero errors.

- [ ] **Step 2: Run typecheck**

Run: `yarn typecheck`
Expected: PASS.

- [ ] **Step 3: Run a production build**

Run: `yarn build`
Expected: PASS.

- [ ] **Step 4: Review the rendered output manually**

Run the local site and check that homepage totals and doc-page views render without layout regressions, and that missing Busuanzi responses fail silently.
