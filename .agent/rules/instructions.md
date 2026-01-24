---
trigger: always_on
---

# AI Agent Instructions

This document guides AI agents on the architecture, conventions, and workflows
for this codebase.

## Architecture

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/) with React 19.
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) with atomic classes.
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) (Radix UI primitives).
- **Language**: TypeScript throughout.

## Key Conventions

### File Structure & Aliases

- **Root**: `~/*` maps to `./src/*`. Always use this alias for imports.
- **View Components**: `~/view/*` contains view-specific features and
  components.
- **UI Components**:
  - `~/components/ui`: **Enhanced** components (Use these by default).
  - `~/components/ui/core`: **Base** primitives (Shadcn/Radix). Only use when
    building enhanced components.
- **Utils**: `~/lib/utils.ts` contains the `cn` utility for class merging.
- **Styles**: Global styles in `src/styles/globals.css` (Tailwind 4 `@theme`
  configuration).

### Coding Patterns

- **Styling**: Use `className` with `cn()` for conditional styles.
  ```tsx
  import { cn } from '~/lib/utils';
  <div className={cn('bg-primary', isSpecial && 'text-white')} />;
  ```
- **Icons**: Use `lucide-react` for icons.
  ```tsx
  import { Loader2 } from 'lucide-react';
  ```
- **Color Variables**: Use semantic CSS variables (e.g., `bg-background`,
  `text-foreground`). Do not hardcode hex colors unless necessary.

## Developer Workflows

- **Dev Server**: `npm run dev` (starts Next.js dev server).
- **Linting**: `npm run lint` (ESLint 9).
- **Formatting**: `npm run format` (Prettier).
- **Dependencies**: Manage via `npm`. `package.json` contains dependencies like
  Next.js 16.1.4, `next-themes`, `class-variance-authority`, `clsx`.

## Configuration

- **Tailwind**: Configured via CSS variables in `globals.css` (Tailwind 4
  native). No `tailwind.config.js`.
- **Next.js**: `next.config.ts`.
- **Components**: `components.json` defines shadcn paths.
