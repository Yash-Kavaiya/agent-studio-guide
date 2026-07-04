# Agent Studio Guide

A Vite, React, and TypeScript learning resource for agent-building content. The app organizes courses, blog posts, videos, and tools behind a polished Tailwind CSS/shadcn-ui interface.

## Features

- Course, blog, video, and tool listing pages backed by local TypeScript data modules.
- Client-side routing with React Router.
- Reusable UI primitives from shadcn-ui/Radix UI.
- Tailwind CSS design tokens and custom Google-themed color variables.
- Vitest and Testing Library setup for unit and component tests.

## Tech Stack

- [Vite](https://vitejs.dev/) for local development and production builds.
- [React](https://react.dev/) with TypeScript.
- [Tailwind CSS](https://tailwindcss.com/) for styling.
- [shadcn-ui](https://ui.shadcn.com/) and Radix UI primitives.
- [Vitest](https://vitest.dev/) for tests.
- [ESLint](https://eslint.org/) for static analysis.

## Getting Started

### Prerequisites

- Node.js 18 or newer.
- npm, which is included with Node.js.

### Install dependencies

```sh
npm install
```

### Start the development server

```sh
npm run dev
```

Vite prints the local URL in the terminal, usually `http://localhost:5173/`.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Build the production app into `dist/`. |
| `npm run build:dev` | Build with Vite's development mode. |
| `npm run lint` | Run ESLint across the project. |
| `npm run preview` | Preview the production build locally. |
| `npm run test` | Run the Vitest test suite once. |
| `npm run test:watch` | Run Vitest in watch mode. |

## Project Structure

```text
src/
  components/      Shared layout, navigation, footer, and UI primitives.
  data/            Local content data for courses, posts, videos, and tools.
  hooks/           Shared React hooks.
  lib/             Utility helpers.
  pages/           Route-level page components.
  test/            Test setup and example tests.
```

## Code Quality

Before opening a pull request, run:

```sh
npm run lint
npm run test
npm run build
```

Keep data models typed, colocate reusable UI in `src/components`, and prefer small route components that compose shared building blocks.

## Deployment

The app builds to static assets with Vite. Any static hosting provider that can serve the generated `dist/` directory can host the project.
