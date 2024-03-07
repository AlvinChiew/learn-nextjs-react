# Getting Started

## Initialization

1. CMS
   1. `cd cms`
   1. `npm install`
   1. `npm run build`
   1. `npm run start`
1. Front-end
   1. run `npm install`
   1. run
      - dev: `npm run dev`
      - [OPTIONAL] prod:
        - build: `npm run build`
          - generate static html to load faster in `prod`
        - start: `npm run start`
          - optimized for speed. results will be cached and dev hot reload is disabled.

## Dependencies

1. npx - Download [Nodejs](https://nodejs.org/en/download) and install.
1. NextJS
   - Auto: `npx create-next-app@latest`
   - Manual: `npm install next@latest react@latest react-dom@latest`
1. Tailwind
   - `npm install --save-dev tailwindcss postcss autoprefixer`
   - `npm install @headlessui/react`
   - install vscode ext: tailwind, postcss language support
   - if not working, delete `.next/` folder
   - [OPTIONAL] `npx tailwindcss init --postcss`
   - [OPTIONAL] config setup ([ref](https://nextjs.org/docs/app/building-your-application/styling/tailwind-css))
1. Markdown
   - `npm install marked`
   - `npm install -D @tailwindcss/typography`, then add to `plugins` in `tailwind.config.js`
   - `npm install gray matter`
1. Icons
   - `npm install @heroicons/react`
1. Local static deployment
   - `npm install serve@latest`
1. Content Management System (CMS)
   - `npx create-strapi-app@latest <project name>`
   - `npm install qs`
1. ESLint
   - `npm install --save-dev eslint eslint-config-next`
   - `npm run lint`

## Deployment

ref: [link](https://nextjs.org/docs/app/building-your-application/deploying)

1. Host:

   - Dynamic

     - [Vercel](https://vercel.com/) : supports custom domain, auto-deployment by VCS commit for >= 1 branch, HTTPS cert

   - Static

     - [Netlify]`(<https://app.netlify.com/>)
       - run `npm run build`
       - serve content in `/out`
         - [OPTIONAL] run `npx serve@latest out`
     - [Nginx](https://github.com/) (ref: [1](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-22-04), [2](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-20-04))

## TO-DO

1. Headless CMS: [Strapi](https://strapi.io/)
   - Store page information
   - Page editor UI w/ Markdown preview
   - Admin UI
   - API to be called by WebApp
   - ref: [Jamstsack](https://jamstack.org/headless-cms)
1. Image Optimization
1. Authentication
1. Error 404 - fallback
