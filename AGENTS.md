# AGENTS.md - Codebase Guidelines for Agentic AI Assistants

This file provides context and guidelines for AI agents operating in this repository.

---

## 1. Project Overview

**Project Name**: LongwayBai.github.io  
**Type**: Docusaurus 3.9.2 Static Documentation Website  
**URL**: https://longwaybai.github.io  
**Node.js**: >= 20.0 (required)

This is a personal technical blog and documentation site built with Docusaurus. It contains notes, tutorials, and configuration guides for tools like LazyVim and Tmux.

---

## 2. Build, Lint, and Test Commands

### Installation
```bash
yarn install
# or
npm install
```

### Development
```bash
yarn start        # Start dev server at http://localhost:3000
yarn preview      # Build then serve at http://127.0.0.1:3000
```

### Build & Deploy
```bash
yarn build        # Generate static site to ./build/
yarn serve        # Serve production build locally
yarn deploy       # Deploy to GitHub Pages
```

### Type Checking
```bash
yarn typecheck    # Run TypeScript compiler (tsc --noEmit)
```

### Utilities
```bash
yarn clear        # Clear Docusaurus cache
yarn swizzle      # Eject Docusaurus components
yarn write-translations    # Generate i18n files
yarn write-heading-ids      # Add heading IDs to docs
```

### CI/CD
- GitHub Actions workflow: `.github/workflows/deploy-pages.yml`
- Deploys on push to `main` branch
- Build artifact: `./build/` directory

---

## 3. TypeScript Configuration

- **Config file**: `tsconfig.json`
- **Extends**: `@docusaurus/tsconfig`
- **Compiler options**: `baseUrl: "."`
- **Excluded**: `[".docusaurus", "build"]`

TypeScript is used for:
- `docusaurus.config.ts`
- `sidebars.ts`
- `src/pages/*.tsx`
- `src/components/**/*.tsx`

---

## 4. Code Style Guidelines

### TypeScript / TSX Conventions

1. **Imports**
   ```typescript
   import type {SomeType} from 'package';        // Type-only imports
   import clsx from 'clsx';                      // Default imports for utilities
   import Layout from '@theme/Layout';          // Docusaurus theme components
   import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
   ```

2. **Type Annotations**
   - Use `type` keyword for type aliases
   - Prefer explicit return types for exported functions
   - Use `ReactNode` for React children props

   ```typescript
   type FeatureItem = {
     title: string;
     description: ReactNode;
   };

   export default function Home(): ReactNode { ... }
   ```

3. **Function Components**
   - Use function declarations for page components
   - Use default exports for page-level components
   - Named exports for reusable components

4. **Server vs Client Code**
   ```typescript
   // docusaurus.config.ts, sidebars.ts - Server-side only
   // "This runs in Node.js - Don't use client-side code here"
   ```

### CSS Modules

- Component styles use CSS modules: `*.module.css`
- Global styles in `src/css/custom.css`
- Docusaurus uses **Infima** CSS framework
- Dark mode via `[data-theme='dark']` selector

### Markdown / MDX Conventions

1. **Frontmatter**
   ```yaml
   ---
   slug: url-slug
   title: Page Title
   sidebar_position: 1
   authors: [username]
   tags: [tag1, tag2]
   ---
   ```

2. **Blog Posts**
   - Filename format: `YYYY-MM-DD-title.md`
   - Use `<!-- truncate -->` for excerpt

3. **Special Admonitions (Callouts)**
   Use the `:::` syntax for highlighted callouts. **Always include empty lines around content** to work with Prettier.

   ```markdown
   :::note
   Some **content** with _Markdown_ `syntax`.
   :::

   :::tip
   A helpful tip.
   :::

   :::info
   Additional information.
   :::

   :::warning
   Something to be careful about.
   :::

   :::danger
   Critical warning - potential data loss or security risk.
   :::
   ```

   **With custom title:**
   ```markdown
   :::note[Your Custom Title]
   Content goes here.
   :::
   ```

   **Nested admonitions:**
   ```markdown
   :::::info[Parent]
   Parent content
   ::::tip[Child]
   Child content
   :::::::
   ```

4. **Code Blocks**
   - Specify language: ` ```typescript ` for TypeScript
   - Docusaurus supports syntax highlighting via Prism

5. **Admonitions in JSX/TSX**
   Outside Markdown, use the `@theme/Admonition` component:

   ```tsx
   import Admonition from '@theme/Admonition';

   export default function MyPage() {
     return (
       <Admonition type="tip" icon="💡" title="Did you know...">
         <p>Use plugins for shorter syntax.</p>
       </Admonition>
     );
   }
   ```

   **Accepted types**: `note`, `tip`, `danger`, `info`, `warning`
   **Optional props**: `icon` (JSX element or string), `title`

---

## 5. Directory Structure

```
/
├── docs/                    # Documentation files
│   ├── intro.md
│   ├── lazyvim/
│   │   ├── index.md
│   │   ├── installation.md
│   │   ├── keymaps.md
│   │   └── plugins.md
│   └── tmux/
│       ├── index.md
│       ├── installation.md
│       └── keymaps.md
├── blog/                    # Blog posts (YYYY-MM-DD-title.md)
├── src/
│   ├── pages/               # Custom React pages
│   │   ├── index.tsx        # Homepage
│   │   └── index.module.css
│   ├── components/          # Custom React components
│   │   └── HomepageFeatures/
│   └── css/
│       └── custom.css       # Global styles
├── static/                  # Static assets (img/, etc.)
├── docusaurus.config.ts     # Site configuration
├── sidebars.ts              # Docs sidebar config
├── package.json
└── tsconfig.json
```

---

## 6. Docusaurus Configuration

Key settings in `docusaurus.config.ts`:

| Setting | Value |
|---------|-------|
| URL | https://longwaybai.github.io |
| baseUrl | / |
| onBrokenLinks | throw |
| i18n | English only |

**Important**: Do not use browser APIs (window, document) or JSX syntax in:
- `docusaurus.config.ts`
- `sidebars.ts`

---

## 7. Content Guidelines

### Documentation
- Language: Chinese (中文)
- Write like work notes - process and thinking over conclusions
- Keep experiments and iterations visible
- Focus on practical, reusable workflows

### Blog Posts
- MDX supported for interactive content
- Use `slug` in frontmatter for custom URLs
- RSS/Atom feeds enabled

### Images
- Place in `static/img/` directory
- Reference with `/img/filename.png`

---

## 8. Git Workflow

### Branch Strategy
- `main` - production branch, auto-deploys to GitHub Pages

### Commit Messages
```bash
git add -A
git commit -m "type: description"
# Types: docs, fix, feat, refactor, style
```

### Push
```bash
git push  # Triggers CI/CD automatically
```

---

## 9. Troubleshooting

### Build fails
- Verify Node.js >= 20
- Run `yarn clear` then `yarn build`

### Links 404
- Check `baseUrl` in `docusaurus.config.ts`
- Should be `/` for user pages (username.github.io)

### Type errors
- Run `yarn typecheck` to see all errors
- Docusaurus config files run in Node.js context

---

## 10. Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| @docusaurus/core | 3.9.2 | Core framework |
| @docusaurus/preset-classic | 3.9.2 | Standard features |
| react | ^19.0.0 | UI library |
| typescript | ~5.6.2 | Type checking |
| clsx | ^2.0.0 | Class name utility |
| prism-react-renderer | ^2.3.0 | Syntax highlighting |

---

*Last updated: 2026-03-23 (Admonitions expanded)*
