# Design

This directory contains UX and UI artifacts for the product.

## Directory Structure

```
design/
├── wireframes/             # Low-fidelity wireframes (exported from Figma)
├── hi-fi/                  # High-fidelity mockups
├── prototypes/             # Interactive prototype links/notes
└── design-decisions.md     # Key design decisions and rationale
```

## Purpose

Design artifacts:
- **Visualize** feature concepts before development
- **Validate** UX flows with users and stakeholders
- **Guide** implementation with clear UI specifications
- **Document** design decisions for future reference

## Subdirectories

### wireframes/
Low-fidelity wireframes for early-stage exploration:
- Sketches and rough layouts
- User flow diagrams
- Information architecture

**Naming Convention:**
- `{feature-name}-{screen-name}.png`
- Example: `shipment-overview-list-view.png`

**Organization:**
```
wireframes/
├── shipment-overview/
│   ├── list-view.png
│   ├── detail-view.png
│   └── filters-expanded.png
└── booking-flow/
    ├── step1-origin.png
    └── step2-destination.png
```

### hi-fi/
High-fidelity mockups ready for development:
- Polished UI with final colors, typography, spacing
- Interactive states (hover, active, disabled)
- Responsive breakpoints

**Naming Convention:**
- `{feature-name}-{screen-name}-{variant}.png`
- Example: `shipment-overview-list-view-desktop.png`

**Organization:**
```
hi-fi/
├── shipment-overview/
│   ├── list-view-desktop.png
│   ├── list-view-mobile.png
│   ├── detail-view-desktop.png
│   └── empty-state.png
└── design-specs.md  # Spacing, colors, typography for devs
```

### prototypes/
Links and notes about interactive prototypes:
- Figma prototype URLs
- User testing sessions
- Feedback summaries

**Example file:** `prototypes.md`
```markdown
# Prototypes

## Shipment Overview
- **Figma URL:** https://figma.com/proto/...
- **Last Updated:** 2025-01-15
- **Testing Status:** Tested with 5 users on 2025-01-20
- **Key Feedback:**
  - Users struggled with filter placement
  - Search feature needs more prominence

## Booking Flow
- **Figma URL:** https://figma.com/proto/...
- **Status:** Ready for testing
```

### design-decisions.md
Document key design choices:
- Why certain UI patterns were chosen
- Alternatives considered
- Trade-offs made
- Design principles

**Template:**
```markdown
# Design Decisions

## [Feature Name] - [Decision Topic]
**Date:** YYYY-MM-DD
**Status:** Proposed | Accepted | Deprecated

### Context
[What problem are we solving?]

### Decision
[What did we decide?]

### Alternatives Considered
1. [Alternative 1] - Rejected because...
2. [Alternative 2] - Rejected because...

### Consequences
**Pros:**
- [Benefit]

**Cons:**
- [Trade-off]

### References
- Related PRD: [Link]
- Design file: [Link]
```

## Workflow

### Design → PRD Integration

When creating or updating designs:

1. **Link in PRD**
   ```markdown
   ## 7. Links
   - design_figma: https://figma.com/file/...
   - wireframe_text: /design/wireframes/shipment-overview/
   ```

2. **Update Design Decisions**
   - Document major UX choices in `design-decisions.md`

3. **Export for Development**
   - Export final hi-fi mockups to `/design/hi-fi/`
   - Include design specs (spacing, colors, etc.)

### PRD → Design Flow

```
1. PRD Created
   └─> Define user goals and use cases

2. Wireframes
   └─> Sketch UI to support use cases

3. User Testing
   └─> Validate with prototypes

4. Hi-Fi Mockups
   └─> Polish for development

5. Design Specs
   └─> Provide implementation details
```

## File Formats

### Acceptable Formats
- **Images:** PNG (preferred), JPG, SVG
- **Prototypes:** Figma links, Sketch Cloud links
- **Specs:** Markdown, PDF

### Export Settings
- **Wireframes:** PNG, 72 DPI, grayscale OK
- **Hi-Fi:** PNG, 144 DPI (2x), full color
- **Icons:** SVG when possible

## Best Practices

### Do:
- ✅ Reference designs in PRDs
- ✅ Export final mockups before dev starts
- ✅ Document design decisions
- ✅ Keep Figma as source of truth, exports as snapshots
- ✅ Organize by feature
- ✅ Test prototypes with real users

### Don't:
- ❌ Start design without reading PRD
- ❌ Design in isolation (involve devs and POs)
- ❌ Forget to update designs when PRD changes
- ❌ Export low-quality images for hi-fi
- ❌ Mix wireframes and hi-fi in same folder

## Design System Reference

For component patterns, tokens, and standards:
- See `/resources/design-system/`

## Tools

- **Primary:** Figma
- **Alternative:** Sketch, Adobe XD
- **Prototyping:** Figma prototypes, InVision
- **User Testing:** UserTesting.com, Maze

## Related Directories

- `/resources/design-system/` - Component library and tokens
- `/specs/` - Feature requirements that drive design
- `/discovery/` - User research that informs design
