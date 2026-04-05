# DocBit

English | [简体中文](./README.md)

DocBit is a personal technical notes site built with Docusaurus. It is where I organize tool configuration notes, terminal workflows, troubleshooting write-ups, and ongoing technical observations from day-to-day development work.

- Live site: <https://longwaybai.github.io>
- Tagline: developer notes, terminal habits, and toolsmith workflows
- Repository role: this repo contains the site source, documentation content, and deployment setup

## What You Will Find Here

The site currently focuses on a few core topics:

- `OpenCode`: notes on using AI coding agents, configuration choices, and workflow experiments
- `LazyVim`: installation notes, keymaps, and plugin explanations based on my personal setup
- `Tmux`: practical notes covering core concepts, configuration, theming, and everyday usage
- `Working-note style documentation`: content that keeps the process, trade-offs, and failed attempts visible instead of only showing final conclusions

If you also like turning development environments, command-line tools, and daily workflows into reusable long-term documentation, this repository will probably feel familiar.

## Tech Stack

- [Docusaurus 3.9.2](https://docusaurus.io/)
- React 19
- TypeScript 5
- `@easyops-cn/docusaurus-search-local` for local search
- GitHub Pages for deployment

## Quick Start

### Requirements

- Node.js `>= 20.0`
- Yarn or npm

### Install Dependencies

```bash
yarn install
```

Or:

```bash
npm install
```

### Local Development

```bash
yarn start
```

This starts the local development server and is the easiest way to preview documentation and page updates as you work.

### Preview the Production Build

```bash
yarn preview
```

This command builds the site first and then serves the generated output locally.

## Common Commands

```bash
yarn start        # Start the development server
yarn preview      # Build and preview locally
yarn build        # Generate the static site into build/
yarn serve        # Serve the production build locally
yarn typecheck    # Run TypeScript checks
yarn clear        # Clear the Docusaurus cache
yarn deploy       # Deploy to GitHub Pages
```

## Project Structure

```text
.
├── blog/                  # Blog content
├── docs/                  # Documentation content
│   ├── intro.md
│   ├── lazyvim/
│   ├── opencode/
│   └── tmux/
├── src/                   # Custom pages, components, and styles
├── static/                # Static assets
├── docusaurus.config.ts   # Site configuration
├── sidebars.ts            # Documentation sidebar configuration
├── package.json
├── README.md
└── README.en.md
```

## Deployment

This repository is set up for GitHub Pages deployment, with the site URL configured in `docusaurus.config.ts`.

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Without SSH:

```bash
GIT_USER=<your-github-username> yarn deploy
```

Pushing to `main` also triggers the GitHub Actions workflow that builds and publishes the site.

## Maintenance Notes

- Most documentation content is written in Chinese
- The writing style is closer to working notes than polished tutorials, with an emphasis on reasoning, process, and reusable experience
- Most site behavior and configuration live in `docusaurus.config.ts`, `sidebars.ts`, and `src/`

If you only want to read the content, the live site is the easiest entry point. If you want to maintain the repository, start with `docs/` and `docusaurus.config.ts` to get oriented quickly.
