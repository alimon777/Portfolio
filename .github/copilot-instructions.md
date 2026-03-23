# Project Structure
This is a Next.js 14 App Router project using TypeScript and Tailwind CSS.

## Folder Conventions
- `app/` — All pages and layouts (App Router only, no `pages/`)
- `components/ui/` — Reusable primitives (Button, Card, Input)
- `components/sections/` — Page sections (Hero, About, Projects)
- `lib/` — Utility functions and helpers
- `types/` — Shared TypeScript interfaces

## File Naming
- Components: PascalCase → `HeroSection.tsx`
- Utilities: camelCase → `formatDate.ts`
- Always use named exports for components

## Code Style
- Use TypeScript for all files
- Prefer `const` arrow functions for components
- Use Tailwind for all styling — no inline styles or CSS modules
- Always define prop types with an interface above the component