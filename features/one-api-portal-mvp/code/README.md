# ONE API Portal MVP - Code Implementation

**Feature:** ONE API Portal MVP
**PRD:** [../po/prd.md](../po/prd.md)
**Design Specs:** [../design/](../design/)
**Status:** In Development

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
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes (dummy data)
│   │   ├── shipments/    # Tracking API endpoints
│   │   ├── containers/   # Container API endpoints
│   │   ├── schedules/    # Schedule API endpoints
│   │   └── routes/       # Route API endpoints
│   ├── api-reference/    # API reference pages
│   ├── getting-started/  # Getting started page
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Homepage
│   └── globals.css       # Global styles
├── components/            # React components
│   └── ui/               # ShadCN UI components
│       ├── button.tsx
│       ├── card.tsx
│       ├── navigation-menu.tsx
│       ├── sheet.tsx
│       └── tabs.tsx
├── contexts/             # React Context providers
├── hooks/                # Custom React hooks
├── types/                # TypeScript type definitions
├── data/                 # Dummy JSON data
├── lib/                  # Utility functions
│   └── utils.ts
└── public/               # Static assets
```

## Design Specifications Implemented

### Stage 1: Wireframes
- [ ] [WF-001: Homepage](../design/WF-001-homepage.md) - Hero section, API category cards
- [ ] [WF-002: API Reference Layout](../design/WF-002-api-reference-layout.md) - Sidebar navigation
- [ ] [WF-003: Endpoint Documentation](../design/WF-003-endpoint-documentation.md) - Full endpoint docs

### Stage 2: Component Specs
- [ ] [COMP-001: Navigation Bar](../design/COMP-001-navigation-bar.md) - Fixed header navigation
- [ ] [COMP-002: Code Block with Tabs](../design/COMP-002-code-block-with-tabs.md) - Multi-language code examples

### Stage 3: Interactions
- [ ] [INT-001: Search and Navigation Flow](../design/INT-001-search-and-navigation-flow.md) - Global search, sidebar navigation
- [ ] [INT-002: Code Example Interaction](../design/INT-002-code-example-interaction.md) - Tab switching, copy-to-clipboard

## User Stories Covered

From [../po/usd.csv](../po/usd.csv):

- **ST-001:** View value proposition on homepage
- **ST-002:** Explore API categories overview
- **ST-004:** Search with autocomplete
- **ST-005:** Browse API reference by category
- **ST-006:** Read endpoint documentation
- **ST-007:** Copy code examples (curl, JS, Python, Java)
- **ST-008:** Use sidebar navigation
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

### Phase 2: Core Pages (In Progress)
- [ ] Implement Homepage (WF-001)
- [ ] Build Navigation Bar component (COMP-001)
- [ ] Create API Reference layout (WF-002)
- [ ] Develop Endpoint Documentation page (WF-003)

### Phase 3: Components & Data
- [ ] Build Code Block with tabs component (COMP-002)
- [ ] Create dummy JSON API data
- [ ] Implement API routes

### Phase 4: Features & Testing
- [ ] Implement search functionality (INT-001)
- [ ] Test responsive design (desktop/tablet/mobile)
- [ ] Verify all acceptance criteria from USD

### Phase 5: Deployment
- [ ] Deploy to Vercel
- [ ] Set up environment variables
- [ ] Configure production build

## Dummy Data Strategy

Following the codebase-framework philosophy, this project uses **dummy JSON files** instead of a real database for rapid prototyping:

1. **Create data files** in `data/` folder (e.g., `shipments.json`, `containers.json`)
2. **API routes** in `app/api/` read from these JSON files
3. **Components** fetch from API routes using native fetch
4. **Easy to swap** for real backend later (just change API endpoints)

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

## Next Steps

1. Implement Homepage with hero section and API category cards
2. Create Navigation Bar component with mobile menu
3. Build API Reference layout with sidebar
4. Develop Endpoint Documentation page with code examples
5. Add search functionality
6. Deploy to Vercel

## Related Documents

- **PRD:** [../po/prd.md](../po/prd.md)
- **User Stories:** [../po/usd.csv](../po/usd.csv)
- **Design Specs:** [../design/](../design/)
- **Codebase Framework:** [../../codebase-framework/](../../codebase-framework/)

---

**Last Updated:** 2025-12-21
**Framework Version:** 3.0 (PO + Design + Codebase)
