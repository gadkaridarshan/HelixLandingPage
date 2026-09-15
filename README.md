# Helix AI Orchestrator — Landing Page

A polished, performant marketing landing page for **Helix**, an AI agent orchestration platform. Built with Next.js, React, and CSS Modules, the page introduces Helix's value proposition, showcases features, explains how it works, and drives sign-ups.

---

## Project Overview

Helix empowers teams to build, deploy, and manage intelligent AI agent pipelines. This repository contains the public-facing landing page that communicates the platform's capabilities and guides visitors toward getting started.

### Tech Stack

| Layer        | Technology       |
| ------------ | ---------------- |
| Framework    | Next.js (App Router) |
| UI Library   | React            |
| Icons        | lucide-react     |
| Styling      | CSS Modules + global CSS |
| Language     | TypeScript       |

---

## Running the Site Locally

### Prerequisites

- **Node.js** 18.17 or later ([download](https://nodejs.org/))
- **npm** (comes with Node.js) or an equivalent package manager (yarn, pnpm)

### Setup Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-org/helix-landing-page.git
   cd helix-landing-page
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**

   Navigate to [http://localhost:3000](http://localhost:3000). The page will hot-reload as you make changes.

### Expected Success Checks

- The terminal prints `Local: http://localhost:3000` (or similar) from Next.js.
- The browser renders the full landing page with Navigation, Hero, Features, How It Works, Workflow, Testimonials, and CTA sections.
- No console errors appear in the browser dev tools.
- CSS Modules load correctly (styles are scoped per component, no global style collisions).

### Production Build

To create an optimized production bundle:

```bash
npm run build
```

Then preview it locally:

```bash
npm run start
```

---

## Project Structure