# ONE API Portal MVP - Code Implementation

**Feature:** ONE API Portal MVP
**PRD:** [../po/prd.md](../po/prd.md)
**Design Specs:** [../design/](../design/)
**Status:** Phase 2 Complete

## Overview

This is the Next.js 16 implementation of the ONE API Portal MVP, built following the design specifications and user stories defined in the PO and Design frameworks.

## Tech Stack

- **Framework:** Next.js 16.1.0 with App Router
- **Language:** TypeScript 5.x
- **Styling:** TailwindCSS v4 + ShadCN UI components
- **UI Components:** ShadCN UI (Button, Card, NavigationMenu, Sheet, Tabs)
- **State Management:** React Context API + useState
- **API:** Next.js API Routes with dummy JSON data

## Project Structure

```
code/
├── app/                        # Next.js App Router pages
│   ├── api-reference/          # API reference section
│   │   ├── booking/           # Booking category page
│   │   ├── resources/         # Resources category page
│   │   ├── routes/            # Routes category page
│   │   ├── schedules/         # Schedules category page
│   │   ├── tracking/          # Tracking category page
│   │   ├── layout.tsx         # Two-column layout with sidebar
│   │   └── page.tsx           # API reference index
│   ├── changelog/              # Changelog page
│   ├── getting-started/        # Getting started page
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout with navigation
│   └── page.tsx                # Homepage
├── components/                 # React components
│   ├── api-reference/          # API reference components
│   │   ├── breadcrumb.tsx     # Breadcrumb navigation
│   │   ├── category-header.tsx # Category page header
│   │   ├── endpoint-card.tsx  # Endpoint display card
│   │   ├── sidebar-category.tsx # Expandable sidebar category
│   │   ├── sidebar-navigator.tsx # Main sidebar component
│   │   └── sidebar-search.tsx # Sidebar search input
│   ├── homepage/               # Homepage components
│   │   ├── api-categories-grid.tsx # Category cards grid
│   │   ├── api-category-card.tsx   # Individual category card
│   │   ├── cta-section.tsx    # Call-to-action section
│   │   ├── hero-section.tsx   # Hero with title and CTAs
│   │   └── social-proof-section.tsx # Testimonials section
│   ├── layout/                 # Layout components
│   │   ├── footer.tsx         # Site footer
│   │   ├── layout-wrapper.tsx # Client wrapper for navigation
│   │   ├── mobile-menu.tsx    # Mobile menu (Sheet)
│   │   └── navigation-bar.tsx # Fixed header navigation
│   └── ui/                     # ShadCN UI components
│       ├── button.tsx
│       ├── card.tsx
│       ├── navigation-menu.tsx
│       ├── sheet.tsx
│       └── tabs.tsx
├── data/                       # Static data
│   ├── api-categories.ts      # API categories and endpoints
│   ├── homepage-content.ts    # Homepage content
│   └── navigation-links.ts    # Navigation links
├── hooks/                      # Custom React hooks
│   ├── use-keyboard-shortcut.ts # Global keyboard shortcuts
│   └── use-mobile-menu.ts     # Mobile menu state
├── types/                      # TypeScript type definitions
│   ├── api.ts                 # API category and endpoint types
│   ├── index.ts               # Type re-exports
│   └── navigation.ts          # Navigation types
├── lib/                        # Utility functions
│   └── utils.ts
└── public/                     # Static assets
```

## Design Specifications Implemented

### Stage 1: Wireframes
- [x] [WF-001: Homepage](../design/WF-001-homepage.md) - Hero section, API category cards, social proof, CTA
- [x] [WF-002: API Reference Layout](../design/WF-002-api-reference-layout.md) - Sidebar navigation, category pages
- [ ] [WF-003: Endpoint Documentation](../design/WF-003-endpoint-documentation.md) - Full endpoint docs (Phase 3)

### Stage 2: Component Specs
- [x] [COMP-001: Navigation Bar](../design/COMP-001-navigation-bar.md) - Fixed header navigation, mobile menu
- [ ] [COMP-002: Code Block with Tabs](../design/COMP-002-code-block-with-tabs.md) - Multi-language code examples (Phase 3)

### Stage 3: Interactions
- [ ] [INT-001: Search and Navigation Flow](../design/INT-001-search-and-navigation-flow.md) - Global search (Phase 3)
- [ ] [INT-002: Code Example Interaction](../design/INT-002-code-example-interaction.md) - Tab switching, copy-to-clipboard (Phase 3)

## User Stories Covered

From [../po/usd.csv](../po/usd.csv):

**Phase 2 (Complete):**
- **ST-001:** View value proposition on homepage
- **ST-002:** Explore API categories overview
- **ST-005:** Browse API reference by category
- **ST-008:** Use sidebar navigation

**Phase 3 (Planned):**
- **ST-004:** Search with autocomplete
- **ST-006:** Read endpoint documentation
- **ST-007:** Copy code examples (curl, JS, Python, Java)
- **ST-012:** View authentication and rate limits

## Getting Started

### Prerequisites

- Node.js 20+ (recommended)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Development Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Implementation Phases

### Phase 1: Project Setup ✅
- [x] Initialize Next.js 16 project
- [x] Configure TypeScript and TailwindCSS
- [x] Install ShadCN UI components
- [x] Create folder structure

### Phase 2: Core Pages ✅
- [x] Implement Homepage (WF-001) - Hero, categories grid, social proof, CTA
- [x] Build Navigation Bar component (COMP-001) - Fixed header, mobile menu
- [x] Create API Reference layout (WF-002) - Two-column with sidebar
- [x] Build category pages for all 5 API categories
- [x] Create placeholder pages (Getting Started, Changelog)

### Phase 3: Endpoint Documentation & Search
- [ ] Build full Endpoint Documentation page (WF-003)
- [ ] Implement Code Block with tabs component (COMP-002)
- [ ] Create dummy JSON API data files
- [ ] Implement API routes
- [ ] Add search functionality (INT-001)

### Phase 4: Features & Testing
- [ ] Implement copy-to-clipboard (INT-002)
- [ ] Test responsive design (desktop/tablet/mobile)
- [ ] Verify all acceptance criteria from USD
- [ ] Add keyboard navigation enhancements

### Phase 5: Deployment
- [ ] Deploy to Vercel
- [ ] Set up environment variables
- [ ] Configure production build
- [ ] Performance optimization

## Build Status

```bash
# Last successful build: 2025-12-21
npm run build

# Output:
# ✓ Compiled successfully
# ✓ Generating static pages (12/12)
# ✓ Build completed
```

**Routes Generated:**
- `/` - Homepage
- `/api-reference` - API Reference index
- `/api-reference/tracking` - Tracking category
- `/api-reference/schedules` - Schedules category
- `/api-reference/booking` - Booking category
- `/api-reference/routes` - Routes category
- `/api-reference/resources` - Resources category
- `/getting-started` - Getting Started placeholder
- `/changelog` - Changelog placeholder

## Testing

Tests will be created based on [../po/uat.csv](../po/uat.csv) using Playwright for end-to-end testing.

## Deployment

This app is configured for deployment on Vercel:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## Performance Targets

From design specifications (NFR requirements):

- **Page Load:** <2 seconds (NFR-011)
- **Tab Switch:** <50ms (NFR-014)
- **Copy to Clipboard:** <100ms (NFR-012)
- **Search Response:** <300ms debounce
- **Lighthouse Score:** ≥90 (NFR-002)

## Accessibility

- **WCAG 2.1 AA** compliant (NFR-003)
- Keyboard navigation support
- Screen reader compatible
- Focus indicators on all interactive elements
- Color contrast 4.5:1 minimum

## Next Steps (Phase 3)

1. Implement full Endpoint Documentation page with request/response examples
2. Build Code Block component with language tabs and copy functionality
3. Create dummy JSON data for all API endpoints
4. Add global search with autocomplete
5. Deploy to Vercel for stakeholder review

## Related Documents

- **PRD:** [../po/prd.md](../po/prd.md)
- **User Stories:** [../po/usd.csv](../po/usd.csv)
- **Design Specs:** [../design/](../design/)
- **Codebase Framework:** [../../../codebase-framework/](../../../codebase-framework/)

---

**Last Updated:** 2025-12-21
**Framework Version:** 3.0 (PO + Design + Codebase)
