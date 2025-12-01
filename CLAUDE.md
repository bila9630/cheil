# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Lovable-generated learning platform called "Cheil" built with Vite, React, TypeScript, and shadcn/ui. The application features two distinct modes: a user-facing learning interface and an admin analytics dashboard.

## Development Commands

```bash
# Install dependencies
npm i

# Start development server (runs on port 8080)
npm run dev

# Build for production
npm build

# Build for development environment
npm run build:dev

# Run linter
npm run lint

# Preview production build
npm preview
```

## Project Structure

```
src/
├── App.tsx              # Root component with routing and layout
├── main.tsx             # Application entry point
├── components/          # React components
│   ├── AppSidebar.tsx   # Collapsible sidebar with navigation
│   ├── Header.tsx       # Top header with search and user menu
│   ├── CourseCard.tsx   # Course display cards
│   ├── RankCard.tsx     # User ranking component
│   ├── StreakCard.tsx   # Learning streak tracker
│   └── ui/              # shadcn/ui components (50+ components)
├── pages/               # Route-based page components
│   ├── Homepage.tsx     # Main course listing
│   ├── CourseLessons.tsx # Individual course lessons
│   ├── Duell.tsx        # Competitive learning page
│   ├── Profile.tsx      # User profile
│   ├── Analytics.tsx    # Admin analytics (admin mode)
│   ├── Insights.tsx     # Admin insights (admin mode)
│   └── Performance.tsx  # Admin performance (admin mode)
├── contexts/
│   └── AdminModeContext.tsx  # Admin/user mode state management
├── hooks/               # Custom React hooks
│   ├── use-mobile.tsx   # Mobile detection hook
│   └── use-toast.ts     # Toast notification hook
└── lib/
    └── utils.ts         # Utility functions (cn for classNames)
```

## Architecture

### Routing & Layout
- Uses `react-router-dom` with a shared `Layout` component wrapper
- All routes except NotFound (404) use the same layout: `AppSidebar` + `Header` + page content
- Routes are defined in `src/App.tsx`
- **Important**: New routes must be added ABOVE the catch-all `*` route to prevent 404s

### Admin Mode System
The application has two distinct modes controlled by `AdminModeContext`:
- **User Mode**: Standard learning interface with courses, duels, profile, etc.
- **Admin Mode**: Analytics and reporting interface (Analytics, Insights, Performance pages)

The mode is determined by the current route:
- Admin routes: `/analytics`, `/insights`, `/performance`
- Toggle via user menu dropdown in header (Shield icon)
- Sidebar navigation changes based on current mode

### State Management
- **React Query** (`@tanstack/react-query`): Data fetching and caching
- **React Context**: AdminModeContext for mode switching
- **URL-based state**: Admin mode determined by route path

### Styling System
- **Tailwind CSS** with custom design tokens defined in `tailwind.config.ts`
- Custom colors: streak, rank, success, sidebar variants
- Custom fonts: Inter (sans), Outfit (heading)
- shadcn/ui components styled with CSS variables in `src/index.css`
- Use `cn()` utility from `src/lib/utils.ts` for conditional classNames

### UI Components
- **shadcn/ui**: 50+ pre-built components in `src/components/ui/`
- All components use Radix UI primitives
- Custom components: AppSidebar, Header, CourseCard, RankCard, StreakCard
- Sidebar is collapsible with icon-only mode

## TypeScript Configuration

The project uses relaxed TypeScript settings for rapid development:
- `noImplicitAny: false`
- `noUnusedParameters: false`
- `noUnusedLocals: false`
- `strictNullChecks: false`
- Path alias: `@/*` maps to `./src/*`

## ESLint Configuration

- Unused variables warning is disabled (`@typescript-eslint/no-unused-vars: "off"`)
- React Hooks rules are enforced
- React Refresh rules warn on non-component exports

## Key Development Notes

- **Port**: Dev server runs on port 8080 (not the default 5173)
- **Import Alias**: Always use `@/` for src imports (e.g., `@/components/ui/button`)
- **Lovable Integration**: Changes pushed to repo sync with Lovable platform
- **Component Tagger**: Lovable-tagger plugin runs in development mode
- **Route Management**: When adding routes, always place them before the `*` catch-all route
- **Sidebar State**: Uses shadcn's SidebarProvider with collapsible behavior
- **Mobile Responsive**: Header shows SidebarTrigger on mobile (lg breakpoint)

## Common Patterns

### Adding a New Page
1. Create component in `src/pages/YourPage.tsx`
2. Add route in `src/App.tsx` ABOVE the `*` route
3. Wrap with `<Layout>` component
4. Add navigation item to `AppSidebar.tsx` (userNavItems or adminNavItems)

### Using shadcn/ui Components
```tsx
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
```

### Conditional Styling
```tsx
import { cn } from "@/lib/utils";

<div className={cn("base-class", condition && "conditional-class")} />
```

### Admin Mode Check
```tsx
import { useAdminMode } from "@/contexts/AdminModeContext";

const { isAdminMode, toggleAdminMode } = useAdminMode();
```
