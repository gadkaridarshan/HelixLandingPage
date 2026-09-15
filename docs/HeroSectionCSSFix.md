# Hero Section CSS Fix — Instructions

## Prerequisites

- Node.js 18+ and npm installed
- Project dependencies installed (`npm install`)
- Tailwind CSS v4 configured with `@import "tailwindcss"` in `app/globals.css`

## Problem

The CSS file `app/globals.css` was truncated, leaving the `.section-subtitle` rule incomplete (missing closing `}`, `margin`, and `max-width` properties). This prevented the hero section and subsequent sections from rendering with correct typography and spacing.

## Steps to Verify / Apply

1. **Open the CSS file**
   ```bash
   cat app/globals.css | tail -20
   ```
   Confirm the file ends with a complete `.section-subtitle` rule and closing `}`.

2. **Install dependencies if not already done**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Verify the hero section in the browser**
   - Navigate to `http://localhost:3000`
   - Confirm the hero subtitle text ("Build, deploy, and manage intelligent AI agent pipelines...") is visible with proper max-width (640px), color (#9ca3af), and line-height (1.75)
   - Confirm hero badge, title gradient, and action buttons are styled correctly
   - Confirm the section-common styles (`.section`, `.section-title`, `.section-subtitle`) are applied to subsequent sections

5. **Type-check the project**
   ```bash
   npx tsc --noEmit
   ```
   Expected: zero errors.

6. **Build for production**
   ```bash
   npm run build
   ```
   Expected: build completes successfully with no errors.

## Expected Success Checks

- `app/globals.css` contains all CSS rules with properly closed blocks
- Hero section renders with correct typography, spacing, and gradient text
- Subtitle text matches the description: "Build, deploy, and manage intelligent AI agent pipelines. Helix gives you the tools to automate complex workflows, analyze real-time data, and scale your operations effortlessly."
- No VS Code error-severity diagnostics on `app/globals.css`
- `npx tsc --noEmit` reports zero errors
- `npm run build` completes without errors

## Summary

The fix completes the previously truncated `.section-subtitle` CSS rule in `app/globals.css`, ensuring the hero section (the first section containing the description text) and all subsequent sections render with correct typography, color, spacing, and max-width constraints. The file now ends with valid, complete CSS declarations.
</arg_value>Source></arg_value>/Users/darshan/Documents/Dream/code/HelixLandingPage/app/globals.css</Source></arg_value>/Users/darshan/Documents/Dream/code/HelixLandingPage/docs/HeroSectionCSSFix.md</Source>