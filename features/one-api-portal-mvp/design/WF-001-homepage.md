# WF-001: Homepage Wireframe

**Feature:** ONE API Portal MVP
**Page:** Homepage
**User Stories:** ST-001, ST-002
**Created:** 2025-12-21
**Status:** Draft

---

## Purpose

The homepage is the entry point for developers visiting the ONE API Portal. It must:
- Communicate the value proposition clearly (what ONE LINE APIs offer)
- Provide quick access to the 4 main API categories (Tracking, Schedules, Booking, Routes)
- Guide users to Getting Started or API Reference documentation
- Load quickly (<2 seconds) and be accessible on all devices

---

## Target Users

- **Freight forwarders** - Looking for tracking and booking APIs
- **Logistics platform engineers** - Integrating multiple shipping APIs
- **Third-party developers** - Building applications on ONE LINE data
- **Shippers** - Understanding API capabilities before requesting access

---

## Layout Structure

### Desktop View (≥1024px)

```
┌─────────────────────────────────────────────────────────────────────┐
│  [ONE LINE Logo]              [API Reference] [Getting Started]     │
│                                [Changelog] [Search 🔍]              │
└─────────────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────────────┐
│                          HERO SECTION                                │
│                                                                      │
│              Integrate with ONE LINE Shipping APIs                  │
│                                                                      │
│    Build powerful logistics applications with our comprehensive     │
│         APIs for tracking, schedules, booking, and routes          │
│                                                                      │
│         [Get Started →]          [View Documentation]              │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────────────┐
│                      EXPLORE OUR API CATEGORIES                      │
│                                                                      │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐ │
│  │   📦 TRACKING    │  │   🗓️ SCHEDULES   │  │   📝 BOOKING     │ │
│  │                  │  │                  │  │                  │ │
│  │ Track shipments  │  │ Search vessel    │  │ Create and       │ │
│  │ in real-time and │  │ schedules and    │  │ manage booking   │ │
│  │ get status       │  │ port rotations   │  │ requests         │ │
│  │ updates          │  │ worldwide        │  │                  │ │
│  │                  │  │                  │  │                  │ │
│  │ [Learn more →]   │  │ [Learn more →]   │  │ [Learn more →]   │ │
│  └──────────────────┘  └──────────────────┘  └──────────────────┘ │
│                                                                      │
│  ┌──────────────────┐  ┌──────────────────┐                        │
│  │   🗺️ ROUTES      │  │   📚 RESOURCES   │                        │
│  │                  │  │                  │                        │
│  │ Find optimal     │  │ Sample code,     │                        │
│  │ shipping routes  │  │ SDKs, and        │                        │
│  │ and calculate    │  │ migration guides │                        │
│  │ transit times    │  │                  │                        │
│  │                  │  │                  │                        │
│  │ [Learn more →]   │  │ [Learn more →]   │                        │
│  └──────────────────┘  └──────────────────┘                        │
└─────────────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────────────┐
│                       TRUSTED BY DEVELOPERS                          │
│                                                                      │
│    "ONE LINE's API documentation is clear and comprehensive..."     │
│                        - Developer Testimonial                       │
│                                                                      │
│     [Company Logo 1]  [Company Logo 2]  [Company Logo 3]           │
└─────────────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────────────┐
│  Ready to get started?                                              │
│                                                                      │
│  Contact us at api-support@one-line.com to request API credentials │
│                                                                      │
│               [Contact Support →]                                   │
└─────────────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────────────┐
│  Footer                                                              │
│  © 2025 ONE LINE | Privacy Policy | Terms of Service               │
│  API Reference | Getting Started | Changelog | Support              │
└─────────────────────────────────────────────────────────────────────┘
```

### Tablet View (768-1023px)

```
┌──────────────────────────────────────────────┐
│  [ONE LINE Logo]         [☰ Menu] [Search]  │
└──────────────────────────────────────────────┘
┌──────────────────────────────────────────────┐
│           HERO SECTION                       │
│                                              │
│    Integrate with ONE LINE Shipping APIs    │
│                                              │
│  Build powerful logistics applications...   │
│                                              │
│     [Get Started →] [View Documentation]    │
└──────────────────────────────────────────────┘
┌──────────────────────────────────────────────┐
│       EXPLORE OUR API CATEGORIES             │
│                                              │
│  ┌────────────────┐  ┌────────────────┐    │
│  │  📦 TRACKING   │  │  🗓️ SCHEDULES  │    │
│  │                │  │                │    │
│  │ Track shipments│  │ Search vessel  │    │
│  │ in real-time   │  │ schedules...   │    │
│  │                │  │                │    │
│  │ [Learn more →] │  │ [Learn more →] │    │
│  └────────────────┘  └────────────────┘    │
│                                              │
│  ┌────────────────┐  ┌────────────────┐    │
│  │  📝 BOOKING    │  │  🗺️ ROUTES     │    │
│  │                │  │                │    │
│  │ Create and     │  │ Find optimal   │    │
│  │ manage...      │  │ shipping...    │    │
│  │                │  │                │    │
│  │ [Learn more →] │  │ [Learn more →] │    │
│  └────────────────┘  └────────────────┘    │
└──────────────────────────────────────────────┘
┌──────────────────────────────────────────────┐
│  Footer (same as desktop, stacked)           │
└──────────────────────────────────────────────┘
```

### Mobile View (<768px)

```
┌────────────────────────────┐
│ [Logo]     [☰] [🔍]       │
└────────────────────────────┘
┌────────────────────────────┐
│      HERO SECTION          │
│                            │
│  Integrate with ONE LINE   │
│       Shipping APIs        │
│                            │
│  Build powerful logistics  │
│     applications...        │
│                            │
│    [Get Started →]         │
│  [View Documentation]      │
└────────────────────────────┘
┌────────────────────────────┐
│  EXPLORE API CATEGORIES    │
│                            │
│  ┌──────────────────────┐ │
│  │   📦 TRACKING        │ │
│  │                      │ │
│  │ Track shipments in   │ │
│  │ real-time and get    │ │
│  │ status updates       │ │
│  │                      │ │
│  │   [Learn more →]     │ │
│  └──────────────────────┘ │
│                            │
│  ┌──────────────────────┐ │
│  │   🗓️ SCHEDULES       │ │
│  │                      │ │
│  │ Search vessel        │ │
│  │ schedules and port   │ │
│  │ rotations worldwide  │ │
│  │                      │ │
│  │   [Learn more →]     │ │
│  └──────────────────────┘ │
│                            │
│  ┌──────────────────────┐ │
│  │   📝 BOOKING         │ │
│  │   [Learn more →]     │ │
│  └──────────────────────┘ │
│                            │
│  ┌──────────────────────┐ │
│  │   🗺️ ROUTES          │ │
│  │   [Learn more →]     │ │
│  └──────────────────────┘ │
└────────────────────────────┘
┌────────────────────────────┐
│  Ready to get started?     │
│                            │
│  Contact us to request     │
│  API credentials           │
│                            │
│  [Contact Support →]       │
└────────────────────────────┘
┌────────────────────────────┐
│  Footer (stacked links)    │
└────────────────────────────┘
```

---

## Component Breakdown

### 1. Navigation Bar
- **Position:** Fixed at top
- **Elements:** Logo (left), Navigation links (right), Search icon (far right)
- **Desktop:** Full horizontal menu
- **Mobile:** Hamburger menu (☰) + Search icon

### 2. Hero Section
- **Heading:** H1 - "Integrate with ONE LINE Shipping APIs"
- **Subheading:** 1-2 sentence value proposition
- **CTAs:**
  - Primary: "Get Started" → /getting-started
  - Secondary: "View Documentation" → /api-reference
- **Background:** Subtle gradient or image (shipping/logistics theme)
- **Height:** ~500px desktop, ~400px mobile

### 3. API Category Cards (Grid)
- **Layout:**
  - Desktop: 3 columns (first row), 2 columns (second row)
  - Tablet: 2 columns
  - Mobile: 1 column
- **Each Card Contains:**
  - Icon (emoji or SVG, 48px)
  - Category name (H3)
  - 2-3 sentence description
  - "Learn more →" link
- **Hover State:** Subtle elevation/shadow increase
- **Card Size:** ~300px width, ~200px height (desktop)

### 4. Social Proof Section
- **Testimonial:** 1-2 short developer quotes
- **Logos:** 3-5 company logos using the APIs
- **Layout:** Centered, horizontal logo row

### 5. CTA Footer Section
- **Heading:** "Ready to get started?"
- **Description:** How to request credentials
- **CTA Button:** "Contact Support" → mailto:api-support@one-line.com
- **Background:** Light gray or brand color

### 6. Footer
- **Links:** API Reference, Getting Started, Changelog, Support
- **Legal:** Copyright, Privacy Policy, Terms of Service
- **Layout:**
  - Desktop: Horizontal links
  - Mobile: Stacked links

---

## Acceptance Criteria Mapping

### From ST-001: Land on homepage and view value proposition
✅ **Hero section** clearly states "Integrate with ONE LINE Shipping APIs"
✅ **Subheading** explains the value (comprehensive APIs for tracking, schedules, booking, routes)
✅ **Page loads** in <2 seconds (NFR-001)
✅ **Lighthouse score** ≥90 (NFR-002)

### From ST-002: Explore API categories overview
✅ **4 API category cards** displayed (Tracking, Schedules, Booking, Routes)
✅ **Each card** shows: icon, name, description
✅ **"Learn more" link** navigates to category documentation
✅ **Responsive grid:** 2x2 desktop, 2 columns tablet, 1 column mobile
✅ **Hover states** on cards (subtle elevation)
✅ **Touch targets** ≥44x44px for mobile (NFR accessibility)

---

## Interaction Notes

1. **Page Load:**
   - Hero section renders immediately
   - Category cards load with staggered animation (optional, subtle)
   - No loading spinners needed (static content)

2. **Navigation:**
   - Clicking "Get Started" → /getting-started page
   - Clicking "View Documentation" → /api-reference page
   - Clicking category "Learn more" → /api-reference/[category] page
   - All navigation uses client-side routing (no full page reload)

3. **Hover States:**
   - Cards: increase elevation (shadow), slight scale (1.02)
   - Buttons: color darken, cursor pointer
   - Links: underline, color change

4. **Mobile Menu:**
   - Hamburger icon (☰) opens overlay menu
   - Menu slides in from right
   - Close icon (✕) or outside click closes menu
   - Menu links: API Reference, Getting Started, Changelog

5. **Search Trigger:**
   - Desktop: Search icon in header opens search bar inline
   - Mobile: Search icon opens full-screen search overlay

---

## Accessibility Requirements

- **Semantic HTML:** `<header>`, `<main>`, `<section>`, `<footer>`
- **Headings:** Proper hierarchy (H1 → H2 → H3)
- **ARIA Labels:**
  - `aria-label="Main navigation"` on nav
  - `aria-label="API category"` on cards
  - `aria-label="Search"` on search input
- **Keyboard Navigation:**
  - Tab order: Logo → Nav links → Hero CTAs → Category cards → Footer links
  - Enter key activates links/buttons
  - Escape closes mobile menu
- **Focus Indicators:** Visible outline on all interactive elements
- **Color Contrast:** WCAG AA compliant (4.5:1 for text)

---

## Performance Targets

- **Page Load:** <2 seconds for 95% of users (NFR-001)
- **Lighthouse Score:** ≥90 (NFR-002)
- **WCAG Compliance:** AA level (NFR-003)
- **Image Optimization:** WebP format, lazy loading for below-fold images
- **Font Loading:** Preload critical fonts, fallback fonts defined

---

## Design References

**Inspiration:**
- Stripe API Docs homepage (clean, card-based categories)
- Twilio Docs (clear value proposition, prominent CTAs)
- GitHub Docs (simple, developer-focused)

**Do:**
- Keep it simple and focused
- Use clear, developer-friendly language
- Make CTAs obvious and accessible
- Show real value (not marketing fluff)

**Don't:**
- Overload with information
- Use generic stock photos
- Hide navigation or search
- Require authentication to browse

---

## Next Steps

After wireframe approval:
1. Create component specifications (COMP-XXX) for each UI element
2. Define interaction flows (INT-XXX) for navigation and search
3. Hand off to development with ShadCN component mappings

---

## Related Documents

- **USD:** features/one-api-portal-mvp/po/usd.csv (ST-001, ST-002)
- **Design System:** design-framework/design-rules/
- **Component Specs:** (To be created after wireframe approval)
- **Interactions:** (To be created after wireframe approval)
