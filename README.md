# CX Agent Studio Guide

[![Live Demo](https://img.shields.io/badge/Live-cxagentstudio.lovable.app-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white)](https://cxagentstudio.lovable.app)
[![GitHub](https://img.shields.io/badge/GitHub-Yash--Kavaiya-181717?style=for-the-badge&logo=github)](https://github.com/Yash-Kavaiya/agent-studio-guide)
[![Awesome List](https://img.shields.io/badge/Awesome-CX%20Agent%20Studio-34A853?style=for-the-badge&logo=github)](https://github.com/Yash-Kavaiya/awesome-cx-agent-studio)
[![YouTube](https://img.shields.io/badge/YouTube-Playlist-EA4335?style=for-the-badge&logo=youtube&logoColor=white)](https://youtube.com/playlist?list=PLOAciEalMV3GGRZD2RJ7mjOEcI4DXQs0j)
[![Medium](https://img.shields.io/badge/Medium-Zero%20to%20Prod-000000?style=for-the-badge&logo=medium)](https://medium.com/@yashkavaiya/list/cx-agent-studio-zero-to-prod-blog-series-fab5fd825601)

> The learning hub for **Google CX Agent Studio** — courses, blogs, videos, and open-source tools in one Google-themed React app.

**Live site:** [cxagentstudio.lovable.app](https://cxagentstudio.lovable.app)

---

## Table of Contents

- [Overview](#overview)
- [Content at a Glance](#content-at-a-glance)
- [Architecture](#architecture)
- [Learning Path](#learning-path)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Related Resources](#related-resources)
- [Contributing](#contributing)

---

## Overview

CX Agent Studio Guide is a Vite + React + TypeScript site that organizes everything you need to go from **zero → production** with Google’s multimodal customer-experience agents:

| Area | What you get |
| --- | --- |
| **Courses** | Udemy course + multi-week roadmap + Google Partner Skills |
| **Blog** | Zero to Prod series (Medium) + Substack extras |
| **Videos** | Full YouTube playlist (labs, demos, 30-day series, SCRAPI) |
| **Tools** | Curated open-source repos (CLI, MCP, channels, evals, templates) |

```mermaid
flowchart LR
  A[Discover] --> Content[Courses · Blog · Videos]
  B[Learn] --> Path[Roadmap · Partner Skills]
  C[Build] --> Stack[Tools · SCRAPI · MCP]
  D[Ship] --> Prod[Channels · Evals · Prod]

  A -.-> B
  B -.-> C
  C -.-> D

  style A fill:#4285F4,color:#fff,stroke:none
  style B fill:#EA4335,color:#fff,stroke:none
  style C fill:#FBBC04,color:#202124,stroke:none
  style D fill:#34A853,color:#fff,stroke:none
```

---

## Content at a Glance

Snapshot of curated content currently shipped in the app:

| Resource | Count |
| --- | ---: |
| Blog posts | **12** |
| YouTube videos | **40** |
| Open-source tools | **14** |
| Course / roadmap topics | **40+** |

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'pie1': '#4285F4', 'pie2': '#EA4335', 'pie3': '#FBBC04', 'pie4': '#34A853'}}}%%
pie showData
    title Content inventory
    "Videos" : 40
    "Tools" : 14
    "Blog posts" : 12
    "Course modules / topics" : 40
```

### Tool categories

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#e8f0fe', 'primaryTextColor': '#202124', 'primaryBorderColor': '#4285F4', 'lineColor': '#5f6368'}}}%%
xychart-beta
    title "Open-source tools by category"
    x-axis [resources, templates, integrations, api, cli]
    y-axis "Repos" 0 --> 6
    bar [1, 1, 5, 4, 3]
```

### How learners use the site

```mermaid
flowchart TD
  Home["🏠 Home"] --> Courses["📚 Courses"]
  Home --> Blog["✍️ Blog"]
  Home --> Videos["▶️ Videos"]
  Home --> Tools["🧰 Tools"]

  Courses --> Udemy["Udemy course"]
  Courses --> Roadmap["Weekly roadmap"]
  Courses --> Skills["Google Partner Skills"]

  Blog --> Medium["Zero to Prod series"]
  Blog --> Substack["Deploy & business extras"]

  Videos --> Playlist["YouTube playlist"]
  Tools --> Awesome["awesome-cx-agent-studio"]
  Tools --> Scrapi["cxas-scrapi"]
  Tools --> MCP["MCP / CLI / Channels"]

  style Home fill:#4285F4,color:#fff,stroke:none
  style Courses fill:#4285F4,color:#fff,stroke:none
  style Blog fill:#FBBC04,color:#202124,stroke:none
  style Videos fill:#34A853,color:#fff,stroke:none
  style Tools fill:#EA4335,color:#fff,stroke:none
```

---

## Architecture

High-level app architecture:

```mermaid
flowchart TB
  subgraph Client["Browser"]
    UI["React Pages<br/>Index · Courses · Blog · Videos · Tools"]
    Router["React Router"]
    Data["Typed data modules<br/>src/data/*.ts"]
    UIComp["shadcn/ui + Tailwind<br/>Google theme tokens"]
  end

  subgraph External["External content"]
    Medium["Medium / Substack"]
    YT["YouTube playlist"]
    GH["GitHub repos"]
    Udemy["Udemy + Partner Skills"]
  end

  Router --> UI
  UI --> Data
  UI --> UIComp
  Data -.->|links| Medium
  Data -.->|embeds / links| YT
  Data -.->|repo cards| GH
  Data -.->|course CTAs| Udemy

  style Client fill:#f8f9fa,stroke:#dadce0
  style External fill:#e8f0fe,stroke:#4285F4
```

### Data → page flow

```mermaid
sequenceDiagram
  participant User
  participant Router as React Router
  participant Page as Page Component
  participant Data as src/data/*
  participant Ext as External URL

  User->>Router: Navigate /blog, /videos, ...
  Router->>Page: Render route
  Page->>Data: Import typed arrays
  Data-->>Page: Posts / videos / tools / courses
  Page-->>User: Google-themed cards & lists
  User->>Ext: Open Medium / YouTube / GitHub
```

---

## Learning Path

Suggested path from first agent to production:

```mermaid
flowchart LR
  W1["Week 1–2<br/>Fundamentals"] --> W2["Week 3–4<br/>Architecture"]
  W2 --> W3["Week 5–6<br/>Tools & Sub-agents"]
  W3 --> W4["Week 7–8<br/>Channels & Deploy"]
  W4 --> W5["Ongoing<br/>Evals & Ops"]

  W1 -.-> B1["Blog: What is CXAS"]
  W2 -.-> B2["Blog: Architecture"]
  W3 -.-> T1["SCRAPI · MCP · CLI"]
  W4 -.-> T2["Channels · Templates"]
  W5 -.-> T3["Evaluations · Automation"]

  style W1 fill:#4285F4,color:#fff,stroke:none
  style W2 fill:#EA4335,color:#fff,stroke:none
  style W3 fill:#FBBC04,color:#202124,stroke:none
  style W4 fill:#34A853,color:#fff,stroke:none
  style W5 fill:#5f6368,color:#fff,stroke:none
```

---

## Features

- **Google-themed UI** — Roboto typography, Material-style cards, four-color brand bar
- **Courses & roadmap** — Udemy deep dive plus a structured weekly learning path
- **Blog hub** — Zero to Prod Medium series + Substack articles
- **Video library** — Playlist-backed tutorials, labs, shorts, and SCRAPI deep dives
- **Tools catalog** — Templates, APIs, MCP servers, CLI, and channel connectors
- **Client-side routing** — Fast SPA navigation with React Router
- **Accessible UI kit** — shadcn/ui + Radix primitives
- **Motion** — Framer Motion for intentional section reveals
- **Tests** — Vitest + Testing Library

---

## Tech Stack

```mermaid
mindmap
  root((CX Agent Studio Guide))
    Build
      Vite
      TypeScript
      SWC
    UI
      React 18
      Tailwind CSS
      shadcn/ui
      Framer Motion
    Data
      Local TS modules
      React Query
    Quality
      ESLint
      Vitest
      Testing Library
```

| Layer | Choice |
| --- | --- |
| Bundler | [Vite](https://vitejs.dev/) |
| UI | [React](https://react.dev/) + TypeScript |
| Styling | [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) |
| Routing | [React Router](https://reactrouter.com/) |
| Charts / motion | [Recharts](https://recharts.org/) · [Framer Motion](https://www.framer.com/motion/) |
| Tests | [Vitest](https://vitest.dev/) · Testing Library |

---

## Project Structure

```text
agent-studio-guide/
├── public/                 Static assets
├── scripts/                Maintenance / sync helpers
├── src/
│   ├── components/         Layout, Navbar, Footer, GoogleColorBar
│   │   └── ui/             shadcn/ui primitives
│   ├── data/               Content sources
│   │   ├── blog.ts
│   │   ├── courses.ts
│   │   ├── tools.ts
│   │   └── videos.ts
│   ├── hooks/              Shared React hooks
│   ├── lib/                Utilities (cn, etc.)
│   ├── pages/              Route pages
│   │   ├── Index.tsx
│   │   ├── Courses.tsx
│   │   ├── Blog.tsx
│   │   ├── BlogPost.tsx
│   │   ├── Videos.tsx
│   │   ├── Tools.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx             Router + providers
│   ├── index.css           Design tokens (Google theme)
│   └── main.tsx
├── index.html
├── package.json
├── tailwind.config.ts
├── vite.config.ts
└── vitest.config.ts
```

```mermaid
flowchart LR
  subgraph src
    pages --> components
    pages --> data
    components --> ui[components/ui]
    App --> pages
  end
  data --> blog.ts
  data --> courses.ts
  data --> videos.ts
  data --> tools.ts
```

---

## Getting Started

### Prerequisites

- **Node.js 18+**
- npm (bundled with Node)

### Install & run

```sh
git clone https://github.com/Yash-Kavaiya/agent-studio-guide.git
cd agent-studio-guide
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173/`).

### Production build

```sh
npm run build
npm run preview
```

Static output lands in `dist/` — deploy to any static host (Lovable, GitHub Pages, Cloudflare Pages, Netlify, etc.).

---

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start Vite dev server |
| `npm run build` | Production build → `dist/` |
| `npm run build:dev` | Build in Vite development mode |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
| `npm run test` | Run Vitest once |
| `npm run test:watch` | Vitest watch mode |

### Pre-PR checklist

```sh
npm run lint
npm run test
npm run build
```

---

## Related Resources

| Resource | Link |
| --- | --- |
| Live guide | [cxagentstudio.lovable.app](https://cxagentstudio.lovable.app) |
| Awesome list | [awesome-cx-agent-studio](https://github.com/Yash-Kavaiya/awesome-cx-agent-studio) |
| Zero to Prod blogs | [Medium series](https://medium.com/@yashkavaiya/list/cx-agent-studio-zero-to-prod-blog-series-fab5fd825601) |
| YouTube playlist | [CX Agent Studio videos](https://youtube.com/playlist?list=PLOAciEalMV3GGRZD2RJ7mjOEcI4DXQs0j) |
| Official docs | [Google Cloud CX Agent Studio](https://docs.cloud.google.com/customer-engagement-ai/conversational-agents/ps) |
| Console | [ces.cloud.google.com](https://ces.cloud.google.com) |
| SCRAPI | [GoogleCloudPlatform/cxas-scrapi](https://github.com/GoogleCloudPlatform/cxas-scrapi) |
| Community | [r/CXAgentStudio](https://www.reddit.com/r/CXAgentStudio/) |
| Mentorship | [topmate.io/yash_kavaiya](https://topmate.io/yash_kavaiya) |

```mermaid
flowchart TB
  Guide["agent-studio-guide<br/>This site"]
  Awesome["awesome-cx-agent-studio"]
  Medium["Zero to Prod blogs"]
  YT["YouTube playlist"]
  Scrapi["cxas-scrapi"]
  MCP["cx-agent-studio-mcp"]
  CLI["cx-agent-studio-cli"]
  Channels["cx-agent-studio-channels"]

  Guide --> Awesome
  Guide --> Medium
  Guide --> YT
  Awesome --> Scrapi
  Awesome --> MCP
  Awesome --> CLI
  Awesome --> Channels

  style Guide fill:#4285F4,color:#fff,stroke:none
  style Awesome fill:#34A853,color:#fff,stroke:none
```

---

## Contributing

1. Fork the repo and create a feature branch.
2. Keep content typed in `src/data/*` — prefer data updates over hard-coded page markup.
3. Match the Google theme tokens in `src/index.css` / Tailwind config.
4. Run lint, tests, and build before opening a PR.

---

## License

Private / educational resource. Content and linked courses remain the property of their respective owners.

---

<p align="center">
  <strong>Built for builders of multimodal CX agents</strong><br/>
  <a href="https://cxagentstudio.lovable.app">Live Demo</a> ·
  <a href="https://github.com/Yash-Kavaiya/awesome-cx-agent-studio">Awesome List</a> ·
  <a href="https://youtube.com/playlist?list=PLOAciEalMV3GGRZD2RJ7mjOEcI4DXQs0j">YouTube</a>
</p>
