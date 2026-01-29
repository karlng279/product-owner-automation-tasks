# WF-002: API Reference Layout Wireframe

**Feature:** ONE API Portal MVP
**Page:** API Reference Layout (Sidebar + Content Area)
**User Stories:** ST-005, ST-008
**Created:** 2025-12-21
**Status:** Draft

---

## Purpose

The API Reference Layout provides the core browsing experience for developers exploring ONE LINE APIs. It must:
- Present a clear, navigable sidebar organized by API categories
- Display endpoint documentation in a clean, readable main content area
- Support quick navigation between endpoints without page reloads
- Maintain context as users scroll through long documentation
- Work seamlessly on desktop, tablet, and mobile devices

---

## Target Users

- **Developers integrating APIs** - Need to quickly find specific endpoints
- **Technical architects** - Reviewing API capabilities and structure
- **Junior developers** - Learning the API structure and available endpoints
- **Support engineers** - Looking up API details to help customers

---

## Layout Structure

### Desktop View (≥1024px)

```
┌────────────────────────────────────────────────────────────────────────────────┐
│  [ONE LINE Logo]        [API Reference] [Getting Started] [Changelog] [🔍]     │
└────────────────────────────────────────────────────────────────────────────────┘
┌──────────────────┬─────────────────────────────────────────────────────────────┐
│  SIDEBAR (280px) │  MAIN CONTENT AREA                                          │
│                  │                                                             │
│  ┌────────────┐  │  ┌────────────────────────────────────────────────────────┐│
│  │   Search   │  │  │  Breadcrumb: Home > API Reference > Tracking           ││
│  └────────────┘  │  └────────────────────────────────────────────────────────┘│
│                  │                                                             │
│  📦 Tracking ▼   │  # Tracking APIs                                            │
│    GET /shipments│                                                             │
│    GET /containers│  Track shipments in real-time and retrieve status updates.│
│    GET /bl-status│  Get container locations, booking confirmations, and more. │
│                  │                                                             │
│  🗓️ Schedules ▶  │  ## Available Endpoints                                    │
│                  │                                                             │
│  📝 Booking ▶    │  ┌──────────────────────────────────────────────────────┐  │
│                  │  │  GET /shipments                                       │  │
│  🗺️ Routes ▶     │  │  Retrieve shipment tracking information              │  │
│                  │  │  [View Details →]                                    │  │
│  📚 Resources ▶  │  └──────────────────────────────────────────────────────┘  │
│                  │                                                             │
│  ─────────────   │  ┌──────────────────────────────────────────────────────┐  │
│                  │  │  GET /containers                                      │  │
│  Getting Started │  │  Get container tracking and location details          │  │
│  Authentication  │  │  [View Details →]                                    │  │
│  Rate Limits     │  └──────────────────────────────────────────────────────┘  │
│  Error Codes     │                                                             │
│  Changelog       │  ┌──────────────────────────────────────────────────────┐  │
│                  │  │  GET /bl-status                                       │  │
│                  │  │  Check Bill of Lading status and documentation        │  │
│                  │  │  [View Details →]                                    │  │
│                  │  └──────────────────────────────────────────────────────┘  │
│                  │                                                             │
│  [Scroll]        │  [Scroll]                                                   │
└──────────────────┴─────────────────────────────────────────────────────────────┘
```

### Tablet View (768-1023px)

```
┌──────────────────────────────────────────────────────┐
│  [Logo]                   [☰ Menu] [🔍 Search]       │
└──────────────────────────────────────────────────────┘
┌─────────────┬────────────────────────────────────────┐
│ SIDEBAR     │  MAIN CONTENT                          │
│ (toggleable)│                                        │
│             │  Home > API Reference > Tracking       │
│ 📦 Tracking │                                        │
│   /shipments│  # Tracking APIs                       │
│   /containers                                        │
│             │  Track shipments in real-time...      │
│ 🗓️ Schedules│                                        │
│             │  ## Available Endpoints                │
│ 📝 Booking  │                                        │
│             │  ┌─────────────────────────────────┐   │
│ 🗺️ Routes   │  │ GET /shipments                 │   │
│             │  │ Retrieve shipment tracking...  │   │
│             │  └─────────────────────────────────┘   │
│             │                                        │
│             │  [More endpoints...]                   │
└─────────────┴────────────────────────────────────────┘
```

### Mobile View (<768px)

```
┌─────────────────────────────────┐
│  [Logo]          [☰] [🔍]       │
└─────────────────────────────────┘
┌─────────────────────────────────┐
│  [<] Home > API Reference       │
│                                 │
│  # Tracking APIs                │
│                                 │
│  Track shipments in real-time   │
│  and retrieve status updates.   │
│                                 │
│  ## Endpoints                   │
│                                 │
│  ┌───────────────────────────┐ │
│  │ GET /shipments            │ │
│  │                           │ │
│  │ Retrieve shipment         │ │
│  │ tracking information      │ │
│  │                           │ │
│  │ [View Details →]          │ │
│  └───────────────────────────┘ │
│                                 │
│  ┌───────────────────────────┐ │
│  │ GET /containers           │ │
│  │ [View Details →]          │ │
│  └───────────────────────────┘ │
│                                 │
│  [Scroll]                       │
└─────────────────────────────────┘

When hamburger (☰) clicked:
┌─────────────────────────────────┐
│  OVERLAY MENU           [✕]     │
│                                 │
│  ┌─ 📦 Tracking ▼              │
│  │    GET /shipments           │
│  │    GET /containers          │
│  │    GET /bl-status           │
│  │                              │
│  ├─ 🗓️ Schedules ▶             │
│  ├─ 📝 Booking ▶                │
│  ├─ 🗺️ Routes ▶                 │
│  └─ 📚 Resources ▶              │
│                                 │
│  ─────────────────────          │
│  Getting Started                │
│  Authentication                 │
│  Rate Limits                    │
│  Error Codes                    │
│  Changelog                      │
└─────────────────────────────────┘
```

---

## Component Breakdown

### 1. Fixed Header Navigation
- **Same as homepage** (consistency across site)
- **Active state:** "API Reference" link highlighted
- **Search icon:** Always visible, opens search overlay
- **Mobile:** Hamburger menu + Search icon

### 2. Sidebar Navigator (Left Panel - Desktop/Tablet)

**Dimensions:**
- Width: 280px (desktop), 240px (tablet)
- Position: Fixed/sticky (stays visible on scroll)
- Background: Light gray (#F9FAFB)
- Border: 1px solid #E5E7EB (right side)

**Structure:**
```
┌────────────────────────┐
│  [Search bar]          │  ← Inline search (filters sidebar)
├────────────────────────┤
│  📦 Tracking ▼         │  ← Category (expanded)
│    GET /shipments      │  ← Endpoint (clickable)
│    GET /containers     │
│    GET /bl-status      │
├────────────────────────┤
│  🗓️ Schedules ▶        │  ← Category (collapsed)
├────────────────────────┤
│  📝 Booking ▶          │
├────────────────────────┤
│  🗺️ Routes ▶           │
├────────────────────────┤
│  📚 Resources ▶        │
├────────────────────────┤
│  ─────────────         │
│  Getting Started       │  ← Utility links
│  Authentication        │
│  Rate Limits           │
│  Error Codes           │
│  Changelog             │
└────────────────────────┘
```

**Category States:**
- **Collapsed (▶):** Shows category name only
- **Expanded (▼):** Shows category + all child endpoints
- **Active:** Current category highlighted (bold, blue text)

**Endpoint States:**
- **Default:** Gray text, no background
- **Hover:** Background light blue (#EFF6FF), cursor pointer
- **Active:** Bold blue text (#2563EB), blue left border (3px)

**Search Bar (LIKE Search / Partial Text Matching):**
- Placeholder: "Filter endpoints..."
- Type ≥2 characters → filters visible endpoints using partial text matching
- Shows matching count: "5 results" or "No matches"

**Partial Text Matching Behavior:**
- **Substring match:** "ship" matches "shipment", "shipping", "/shipments/{id}"
- **Case-insensitive:** "TRACK" matches "track", "Tracking", "tracker"
- **Multi-word AND logic:** "book cont" matches endpoints with BOTH "book" AND "cont"
- **Searches across:** endpoint name, URL path, description, category name
- **Special characters:** "{id}" safely matches endpoints with path parameters

**Behavior:**
- Click category → expands/collapses
- Click endpoint → scrolls to that endpoint in main content (or loads if not visible)
- Active endpoint auto-highlighted as user scrolls main content
- Sidebar scroll position independent from main content scroll

### 3. Main Content Area (Right Panel)

**Dimensions:**
- Width: calc(100% - 280px) on desktop
- Padding: 40px horizontal, 24px vertical
- Max-width: 1000px (for readability)
- Background: White

**Structure:**
```
┌─────────────────────────────────────────────┐
│  Breadcrumb: Home > API Reference > [Category] │
├─────────────────────────────────────────────┤
│  # Category Name (H1)                       │
│                                             │
│  Category description (1-2 paragraphs)      │
│                                             │
│  ## Available Endpoints (H2)                │
│                                             │
│  ┌──────────────────────────────────────┐  │
│  │  [GET] /endpoint-path                │  │ ← Endpoint Card
│  │                                      │  │
│  │  Brief description of what this      │  │
│  │  endpoint does (1-2 sentences).      │  │
│  │                                      │  │
│  │  [View Details →]                   │  │
│  └──────────────────────────────────────┘  │
│                                             │
│  ┌──────────────────────────────────────┐  │
│  │  [GET] /another-endpoint             │  │
│  │  ...                                 │  │
│  └──────────────────────────────────────┘  │
│                                             │
│  [More endpoint cards...]                   │
└─────────────────────────────────────────────┘
```

### 4. Breadcrumb Navigation
- **Format:** Home > API Reference > [Category]
- **Separator:** " > " or chevron (›)
- **Links:** All clickable except current page
- **Style:** Small text (14px), gray (#6B7280)
- **Responsive:** Mobile may wrap or show "< Back" instead

### 5. Endpoint Summary Cards
- **Layout:** Vertical stack, full width
- **Spacing:** 16px between cards
- **Card Style:**
  - Border: 1px solid #E5E7EB
  - Border-radius: 8px
  - Padding: 20px
  - Hover: Shadow elevation increase

**Card Content:**
- **HTTP Method Badge:** Colored pill (GET=green, POST=blue, PUT=orange, DELETE=red)
- **Endpoint Path:** Monospace font, 16px, bold
- **Description:** Regular text, 14px, 2-3 lines max
- **CTA Link:** "View Details →" in brand blue

---

## Acceptance Criteria Mapping

### From ST-005: Browse API reference organized by category
✅ **Sidebar shows 4 categories:** Tracking, Schedules, Booking, Routes
✅ **Each category** is expandable/collapsible
✅ **Endpoints listed** under each category
✅ **Main content** shows category overview + endpoint cards
✅ **Clicking endpoint card** navigates to full documentation (WF-003)

### From ST-008: Use sidebar navigation for API reference
✅ **Sidebar fixed/sticky** on desktop (stays visible during scroll)
✅ **Clicking category** expands/collapses endpoint list
✅ **Clicking endpoint** navigates to that endpoint's docs
✅ **Active endpoint** auto-highlighted as user scrolls
✅ **Smooth scroll** when navigating
✅ **Mobile (<768px):** Sidebar hidden by default, accessible via hamburger menu
✅ **Sidebar scroll position** persists on page reload (localStorage)
✅ **Highlight updates** in <100ms (NFR-019)

---

## Interaction Details

### 1. Sidebar Category Expand/Collapse
```
User clicks "Schedules ▶"
→ Expand animation (slide down, 200ms ease-out)
→ Arrow changes to "▼"
→ Show child endpoints
→ Save state to localStorage

User clicks "Schedules ▼" again
→ Collapse animation (slide up, 200ms ease-in)
→ Arrow changes to "▶"
→ Hide child endpoints
```

### 2. Endpoint Navigation (Sidebar → Main Content)
```
User clicks "GET /shipments" in sidebar
→ Smooth scroll to endpoint section in main content (500ms)
→ Update URL hash: /api-reference/tracking#get-shipments
→ Highlight "GET /shipments" in sidebar (bold blue, left border)
→ Focus endpoint heading for screen readers
```

### 3. Active Endpoint Detection (Scroll Spy)
```
User scrolls main content manually
→ Intersection Observer detects which endpoint is in viewport
→ Update sidebar highlight to match visible endpoint
→ Update URL hash if endpoint changes
→ Debounce updates (100ms) to avoid flicker
```

### 4. Mobile Menu Toggle
```
User clicks hamburger (☰) on mobile
→ Overlay menu slides in from left (300ms ease-out)
→ Body scroll disabled (prevent background scroll)
→ Close icon (✕) appears

User clicks close (✕) or taps outside menu
→ Menu slides out (300ms ease-in)
→ Body scroll re-enabled
→ Focus returns to hamburger button
```

### 5. Search Filter (Sidebar) - LIKE Search / Partial Text Matching
```
User types "ship" (partial text) in sidebar search
→ Filter endpoints using substring matching (debounce 300ms)
→ Show endpoints containing "ship": "shipment", "shipping", "/shipments/{id}"
→ Match is case-insensitive: "SHIP" = "ship" = "Ship"
→ Auto-expand categories with matches
→ Show count: "3 results in Tracking, Booking"

User types "book cont" (multiple words)
→ Apply AND logic: must match BOTH "book" AND "cont"
→ Show only endpoints matching all words
→ Example: "POST /bookings/containers" matches (has both)

User types "{id}" (special characters)
→ Special regex characters escaped automatically
→ Match endpoints with "{id}" in path: "GET /shipments/{id}"
→ No JavaScript errors from regex special chars

User types "xyz123" (no matches)
→ Show: "No endpoints found. Try different keywords."
→ All categories collapsed or hidden

User clears search
→ Reset to previous expand/collapse state
→ Show all endpoints
```

---

## Responsive Behavior

### Desktop (≥1024px)
- Sidebar: Fixed width 280px, sticky position
- Main content: Fluid width, max-width 1000px
- Both scrollable independently
- Sidebar always visible

### Tablet (768-1023px)
- Sidebar: Reduced width 240px OR toggleable panel
- Main content: Fluid width
- Option A: Sidebar always visible (reduced width)
- Option B: Sidebar toggleable via button

### Mobile (<768px)
- Sidebar: Hidden by default
- Hamburger menu (☰) opens full-screen overlay
- Main content: Full width
- No split layout
- Breadcrumb simplified to "< Back" button

---

## Accessibility Requirements

- **Keyboard Navigation:**
  - Tab through sidebar categories and endpoints
  - Enter/Space to expand/collapse categories
  - Arrow keys to navigate within sidebar
  - Escape to close mobile menu
- **Screen Readers:**
  - `aria-expanded="true/false"` on categories
  - `aria-current="page"` on active endpoint
  - `role="navigation"` on sidebar
  - `aria-label="API category navigation"` on sidebar
  - `aria-live="polite"` on search results count
- **Focus Management:**
  - Visible focus indicators (blue outline)
  - Focus trap in mobile menu (can't tab outside)
  - Focus returns to hamburger when menu closes
- **Semantic HTML:**
  - `<nav>` for sidebar
  - `<main>` for content area
  - `<ul>` for endpoint lists
  - Proper heading hierarchy (H1 → H2 → H3)

---

## Performance Targets

- **Initial Load:** <2 seconds (NFR-011)
- **Sidebar Interactions:** <50ms response time
- **Scroll Spy Updates:** <100ms (NFR-019)
- **Smooth Scroll:** Complete in 500ms
- **Search Filter:** Update in <300ms
- **Mobile Menu Animation:** 300ms smooth transition
- **SEO:** Each category page indexable with meta tags (NFR-013)

---

## Scroll Position Persistence

**localStorage Strategy:**
```json
{
  "sidebarState": {
    "expandedCategories": ["tracking", "booking"],
    "scrollPosition": 450,
    "activeEndpoint": "/shipments"
  }
}
```

**Behavior:**
- Save expanded categories when user expands/collapses
- Save scroll position every 500ms (debounced)
- Restore on page load (if returning within 24 hours)
- Clear on explicit navigation away from API Reference

---

## Design Notes

**Do:**
- Keep sidebar simple and scannable
- Use consistent icons for categories
- Provide visual feedback for all interactions
- Ensure active state is always clear
- Make touch targets large enough (44x44px minimum)

**Don't:**
- Overwhelm with too many nested levels (max 2: category → endpoint)
- Auto-expand all categories (too much visual noise)
- Use tiny fonts or low contrast
- Hide critical navigation on mobile
- Delay interactions (everything should feel instant)

---

## Next Steps

After wireframe approval:
1. Create component specifications for Sidebar Navigator (COMP-001)
2. Create component specifications for Endpoint Summary Card (COMP-002)
3. Create component specifications for Breadcrumb Navigation (COMP-003)
4. Define interaction flows for Search and Navigate (INT-001)

---

## Related Documents

- **USD:** features/one-api-portal-mvp/po/usd.csv (ST-005, ST-008)
- **Wireframe:** WF-003 (Endpoint Documentation - next level of detail)
- **Design System:** design-framework/design-rules/
- **Component Specs:** (To be created)
- **Interactions:** (To be created)
