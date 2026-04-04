# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Deployment is handled automatically by GitHub Actions when you push to the `main` branch.

The build and deploy workflow is defined in `.github/workflows/deploy-pages.yml`. It performs the following steps:
1. Installs dependencies
2. Runs `npm run build`
3. Uploads the `build` directory as an artifact
4. Deploys the artifact to GitHub Pages

