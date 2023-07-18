# Getting Started

## Installation

1. `npx` - Download [Nodejs](https://nodejs.org/en/download) and install.
1. `NextJS`
    - Auto: `npx create-next-app@latest`
    - Manual: `npm install next@latest react@latest react-dom@latest`
1. `Tailwind`
    - `npm install --save-dev tailwindcss postcss autoprefixer`
    - install vscode ext: tailwind, postcss language support
    - if not working, delete `.next/` folder
    - [OPTIONAL] `npx tailwindcss init --postcss`
    - [OPTIONAL] config setup ([ref](https://nextjs.org/docs/app/building-your-application/styling/tailwind-css))
1. `Markdown`
    - `npm install marked`
    - `npm install -D @tailwindcss/typography`, then add to `plugins` in `tailwind.config.js`
    - `npm install gray matter`

## Initialization

1. run `npm install`
1. run
    - dev: `npm run dev`
    - [OPTIONAL] prod:
        - build: `npm run build`
            - generate static html to load faster in `prod`
        - start: `npm run start`
            - optimized for speed. results will be cached and dev hot reload is disabled.

## Deployment

1. ref: [link](https://nextjs.org/docs/app/building-your-application/deploying)
