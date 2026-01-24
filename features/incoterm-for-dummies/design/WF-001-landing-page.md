# Wireframe: Landing Page

**Wireframe ID:** WF-001
**Feature:** Incoterm for Dummies (PRD-001)
**Story:** ST-001 - View landing page
**Addresses:** AC-001, AC-002, AC-003, AC-004, AC-005, AC-006, AC-011
**Screen Type:** Landing Page

---

## Purpose

The landing page introduces users to the Incoterm for Dummies platform, communicates the value proposition, and provides clear navigation to all major features.

---

## ASCII Wireframe

### Desktop (> 1024px)

```
+--------------------------------------------------------------------------------+
| {Logo} Incoterm for Dummies    [Learn]  [Quiz]  [Reference]  [Compare]  [Find] |
+--------------------------------------------------------------------------------+
|                                                                                |
|                                                                                |
|                    Learn Incoterms the Easy Way                                |
|                                                                                |
|            Master international trade terms with interactive                   |
|            lessons, visual guides, and practical tools.                        |
|                                                                                |
|                        [Start Learning]                                        |
|                                                                                |
|  +------------------------+  +------------------------+  +------------------+  |
|  |  📚 Educational        |  |  🔍 Quick Reference    |  |  ⚖️ Compare      |  |
|  |  Content               |  |                        |  |                  |  |
|  |  Plain-language        |  |  Look up any of the    |  |  Side-by-side    |  |
|  |  explanations of all   |  |  11 Incoterms with     |  |  comparison of   |  |
|  |  11 Incoterms 2020     |  |  instant search        |  |  2-3 Incoterms   |  |
|  +------------------------+  +------------------------+  +------------------+  |
|                                                                                |
|  +------------------------+  +------------------------+                        |
|  |  ✅ Interactive Quiz   |  |  🧭 Find Right Term    |                        |
|  |                        |  |                        |                        |
|  |  Test your knowledge   |  |  Answer simple         |                        |
|  |  with fun quizzes      |  |  questions to find     |                        |
|  |  and learn from        |  |  the best Incoterm     |                        |
|  |  mistakes              |  |  for your situation    |                        |
|  +------------------------+  +------------------------+                        |
|                                                                                |
|                                                                                |
|  What are Incoterms?                                                           |
|  ----------------------------------------------------------------              |
|  Incoterms (International Commercial Terms) are a set of 11                    |
|  internationally recognized rules that define the responsibilities             |
|  of sellers and buyers in international trade transactions.                    |
|                                                                                |
|                        [Explore All Incoterms]                                 |
|                                                                                |
+--------------------------------------------------------------------------------+
|  © 2026 Incoterm for Dummies | Educational purposes only - not legal advice    |
|  This content is for learning. Consult professionals for actual transactions. |
+--------------------------------------------------------------------------------+
```

### Mobile (< 640px)

```
+----------------------------------+
| ≡  Incoterm for Dummies          |
+----------------------------------+
|                                  |
|   Learn Incoterms                |
|   the Easy Way                   |
|                                  |
|   Master international trade     |
|   terms with interactive         |
|   lessons and tools.             |
|                                  |
|   [Start Learning]               |
|                                  |
|  +----------------------------+  |
|  | 📚 Educational Content     |  |
|  | Plain-language             |  |
|  | explanations of all 11     |  |
|  | Incoterms 2020             |  |
|  +----------------------------+  |
|                                  |
|  +----------------------------+  |
|  | 🔍 Quick Reference         |  |
|  | Look up any Incoterm       |  |
|  | with instant search        |  |
|  +----------------------------+  |
|                                  |
|  +----------------------------+  |
|  | ⚖️ Compare                  |  |
|  | Side-by-side comparison    |  |
|  +----------------------------+  |
|                                  |
|  +----------------------------+  |
|  | ✅ Interactive Quiz        |  |
|  | Test your knowledge        |  |
|  +----------------------------+  |
|                                  |
|  +----------------------------+  |
|  | 🧭 Find Right Term         |  |
|  | Answer questions to find   |  |
|  | the best Incoterm          |  |
|  +----------------------------+  |
|                                  |
+----------------------------------+
| Educational purposes only        |
| Not legal advice                 |
+----------------------------------+
```

---

## Layout Structure

### Desktop (> 1024px)

**Page Structure:**
- Header: Fixed at top, full-width, with navigation
- Main Content: Centered container, max-width 1280px
- Footer: Full-width with disclaimer

**Content Zones:**

1. **Zone A (Header):**
   - Elements: Logo, Navigation links (Learn, Quiz, Reference, Compare, Find)
   - Purpose: Site-wide navigation
   - Height: 64px

2. **Zone B (Hero Section):**
   - Elements: Headline, Subheadline, Primary CTA button
   - Purpose: Communicate value proposition and direct to action
   - Height: 400px

3. **Zone C (Feature Cards):**
   - Elements: 5 feature cards in grid layout
   - Purpose: Highlight key platform capabilities
   - Layout: 3 + 2 grid on desktop

4. **Zone D (Intro Section):**
   - Elements: Brief intro to Incoterms, secondary CTA
   - Purpose: Provide context for new users

5. **Zone E (Footer):**
   - Elements: Copyright, Disclaimer
   - Purpose: Legal compliance

---

## UI Elements Detail

### Header

**Elements:**
- Logo: Left-aligned, clickable (returns to home)
- Navigation Menu: 5 links - Learn, Quiz, Reference, Compare, Find
- No user authentication needed

**Behavior:**
- Sticky: Yes (remains visible on scroll)
- Mobile: Collapses to hamburger menu

### Hero Section

**Elements:**
- Headline: "Learn Incoterms the Easy Way" (h1, text-4xl, font-bold)
- Subheadline: Supporting text (text-lg, text-muted-foreground)
- CTA Button: "Start Learning" (Button, size: lg, variant: default)

### Feature Cards

**Elements:**
- 5 cards in grid layout
- Each card: Icon, Title, Description
- Cards are clickable, navigating to respective sections

### Footer

**Elements:**
- Copyright text
- Educational disclaimer (required by PRD)

---

## Interactions

### Primary Interactions

1. **Click "Start Learning" CTA**
   - Trigger: User clicks button
   - Response: Navigate to /learn (Incoterms overview page)
   - Feedback: Button hover state before click

2. **Click Feature Card**
   - Trigger: User clicks any feature card
   - Response: Navigate to respective section
   - Feedback: Card hover elevation

3. **Click Navigation Link**
   - Trigger: User clicks nav link
   - Response: Navigate to respective page
   - Feedback: Link highlight on active state

---

## Components Required

### ShadCN Components

- [ ] Button (variant: default, size: lg) - Primary CTA
- [ ] Button (variant: ghost) - Navigation links
- [ ] Card (with CardHeader, CardContent) - Feature cards
- [ ] Sheet (for mobile navigation drawer)

### Custom Components

- [ ] Logo: Site logo component
- [ ] FeatureCard: Card with icon, title, description
- [ ] Footer: Site footer with disclaimer

---

## Responsive Behavior Summary

| Breakpoint | Layout | Navigation | Features | Hero |
|------------|--------|------------|----------|------|
| Mobile (< 640px) | Single column | Hamburger menu | Stacked cards | Compact |
| Tablet (640-1024px) | 2 columns | Partial visible | 2x2 grid | Medium |
| Desktop (> 1024px) | Full layout | Full visible | 3+2 grid | Full |

---

## Acceptance Criteria Mapping

- **AC-001:** Landing page displays a clear headline
  - **Addressed by:** Hero section headline
  - **How:** h1 element with "Learn Incoterms the Easy Way"

- **AC-002:** Landing page shows value proposition section
  - **Addressed by:** Feature cards section
  - **How:** 5 cards highlighting key features

- **AC-003:** Hero section with CTA button
  - **Addressed by:** Hero section
  - **How:** "Start Learning" button prominently displayed

- **AC-004:** Main navigation menu visible
  - **Addressed by:** Header navigation
  - **How:** 5 navigation links clearly visible

- **AC-005:** Footer displays disclaimer
  - **Addressed by:** Footer zone
  - **How:** Educational disclaimer text in footer

- **AC-006:** CTA navigates to overview
  - **Addressed by:** Button onClick handler
  - **How:** Routes to /learn page

- **AC-011:** Responsive design
  - **Addressed by:** Responsive layout structure
  - **How:** Breakpoint-specific layouts defined

---

## Notes / Open Questions

- Consider adding animated illustrations to hero section for visual appeal
- Feature card icons should be consistent style (outline or filled)
- Mobile hamburger menu should include all navigation options

---

**Created:** 2026-01-23
**Last Updated:** 2026-01-23
**Designer:** AI
**Status:** Draft
