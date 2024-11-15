# Goose Fight

This is a demo of a landing page for a company named Goose-Flight.

## Task Analysis & Time Estimation
- Project Setup (**2 hrs**)
  - Scaffolding a new Nuxt project
  - Adding required packages & modules for development (ESLint, Nuxt UI, TailwindCSS, TypeScript, Nuxt I18n, Nuxt Image)
  - Structuring the project

- Homepage (**2 hrs**)
  - Header (with Side Menu in mobile)
  - Hero Section
  - Booking Form Section
  - Popular Destinations Section
  - Footer

- Locale Switcher (**0.5 hrs**)
  - A select menu in the Header
  - Translating some messages (Header & Hero Section) as POC

- Dockerfile (**0.5 hrs**)

- Documentation (**0.5 hrs**)
  - Task Analysis & Time Estimation
  - Risk Assessment
  - Local Development Guide

- Total Estimation: **5.5 Hrs (~ 1 Work day)**

## Risk Assessment

As this is just a single landing page, there are not many moving parts that can cause issues. Although there are some caveats in the provided design (The documentation mentioned not to stress on design so these points can be safely ignored)

- **Many fonts are used**: This would cause loading more fonts which affects page load, SEO, and degrades user experience
- **Many shades of the same are used**: For example, about 5 shades of gray are used. This makes specifying a standard design system for the project harder, which in turn causes maintenance problems. It also impacts UX.

The following are positive points

- **Adding more locales**: The project is i18n ready. Adding more locales would be fairly easy.
- **Different rendering modes**: Nuxt allows easy transition between rendering modes (ssr, ssg, etc..). So whatever the business requirements see fit, implementing it would take minutes.

## Local Development

Clone the repo

```bash
git clone https://github.com/MuhammadM1998/goose-flight
```

Install the latest [Node](https://nodejs.org/en) and enable corepack

```bash
corepack enable
```

Install the dependencies

```bash
pnpm install
```

Start the development server on [localhost:3000](http://localhost:3000)

```bash
pnpm run dev
```

## Production

### Without Docker

Build the application for production:

```bash
pnpm generate
```

Locally preview production build:

```bash
pnpm preview
```

### With Docker

> [!NOTE]
> Ensure you have Docker installed on your machine

Build the image

```bash
docker build -t frontend-goose-flight .
```

Run the image to start the application, The image exposes port 3000 so you need to expose it too when you run the image

```bash
# Basic
docker run -p 3000:3000 -e frontend-goose-flight

# Detached Mode
docker run -d -p 3000:3000 frontend-goose-flight
```

Verify the image is running if needed

```bash
docker ps
```

Open your browser at `localhost:3000` and the app should open
