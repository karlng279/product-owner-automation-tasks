# Figma-Level Wireframe Plan

This plan details how to deliver Figma-quality wireframes while remaining text-first and AI-friendly.

## Objectives
- Translate acceptance criteria into high-fidelity, dev-ready wireframes approximating a Figma output.
- Preserve traceability to ACs and design rules while enabling rapid iteration without pixel pushing.

## Workflow
1. **Discovery & Inputs**
   - Gather ACs, domain glossary, user roles/personas, success metrics, and any constraints (platform, brand, accessibility).
   - Confirm responsive breakpoints (mobile, tablet, desktop) and data model hints (fields, sample data).

2. **Structure the Canvas**
   - Define layout grids per breakpoint (e.g., 12-col desktop, 8-col tablet, 4-col mobile; 4px spacing base).
   - Set spacing tokens, typography scale, and color tokens from design rules.

3. **Component Inventory**
   - List required ShadCN primitives/components with variants and states (focus, hover, disabled, error, loading).
   - Pre-map data-heavy views to TanStack Table configurations when needed.

4. **Screen-Level Wireframes**
   - For each AC, draft screen flows: entry point → primary action → confirmation/error.
   - Provide layout annotations: column widths, section hierarchy, density, and key CTAs.
   - Capture responsive adjustments per breakpoint (stacking, collapsing, hiding, inline → block shifts).

5. **Interaction Notes**
   - Document micro-interactions: validation timing, empty states, pagination/sorting defaults, skeleton/loading patterns, and error recovery.
   - State diagrams for critical flows (auth, payments, destructive actions).

6. **Accessibility Pass**
   - Contrast, focus order, skip links, ARIA roles/labels, and keyboard paths for all interactive elements.

7. **Review & Quality Gate**
   - Checklist alignment to ACs, design rules, naming conventions, and component usage.
   - Stakeholder review: PM for coverage, Eng for feasibility, QA for testability.

## Deliverables
- **Wireframe Deck (per screen):**
  - Textual description of layout and hierarchy.
  - Component list with variants and states.
  - Responsive notes per breakpoint.
  - Interaction notes (loading, errors, empty states).
  - AC mapping table linking elements to acceptance criteria.
- **Interaction Map:** ASCII or textual state diagrams for critical flows.
- **Asset Handoff:** Token references (spacing, typography, color), table schemas (if applicable), and microcopy placeholders.

## Quality Checklist (Figma-Level Fidelity)
- Uses real spacing/typography tokens and consistent grid across breakpoints.
- Every interactive element has states and accessibility notes.
- Tables define columns, alignment, sorting/pagination, inline actions, and empty/loading states.
- Error, empty, and loading states included for each flow.
- AC coverage is explicit with traceability back to requirements.

## Collaboration Cadence
- 15–20 min alignment review after discovery.
- Midpoint review once primary flows are sketched.
- Final walkthrough with AC traceability before sign-off.

## Tips for Figma Parity
- Favor precise measurements (px/rem) and token names over prose-only descriptions.
- Reference ShadCN component names directly to reduce ambiguity.
- Call out illustrative data and copy blocks to guide density and layout realism.