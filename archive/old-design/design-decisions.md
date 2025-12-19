# Design Decisions

This document records key design decisions for the product, providing context and rationale for future reference.

## How to Use This Document

When making a significant design decision:
1. Add a new entry using the template below
2. Include context, the decision, alternatives, and consequences
3. Link to relevant PRDs, mockups, or prototypes
4. Update status as decisions evolve

---

## Template

```markdown
## [Feature Name] - [Decision Topic]
**Date:** YYYY-MM-DD
**Status:** Proposed | Accepted | Deprecated
**Decider:** [Name]

### Context
[What problem are we solving? What constraints exist?]

### Decision
[What did we decide to do?]

### Alternatives Considered
1. **[Alternative 1]**
   - Pros: [Benefit]
   - Cons: [Drawback]
   - Why rejected: [Reason]

2. **[Alternative 2]**
   - Pros: [Benefit]
   - Cons: [Drawback]
   - Why rejected: [Reason]

### Consequences
**Pros:**
- [Positive outcome]

**Cons / Trade-offs:**
- [Negative impact or trade-off]

### Implementation Notes
- [Specific guidance for developers]

### References
- PRD: [Link to /specs/{feature}/prd.md]
- Design: [Link to Figma or /design/hi-fi/]
- Discussion: [Link to meeting notes or Slack thread]
```

---

## Decisions

### Example Decision (Delete this when you add real decisions)

## Shipment Overview - Table vs. Card Layout
**Date:** 2025-01-15
**Status:** Accepted
**Decider:** Design Team

### Context
Users need to scan many shipments quickly. We need to decide between a table layout and a card-based layout for the shipment list.

### Decision
Use a **table layout** for the shipment overview on desktop, with a card layout for mobile.

### Alternatives Considered
1. **Card Layout Only**
   - Pros: More flexible, works well on all screen sizes
   - Cons: Less information density, requires more scrolling
   - Why rejected: Users need to scan 50+ shipments; cards are too slow

2. **Table Only (Non-Responsive)**
   - Pros: Maximum information density
   - Cons: Doesn't work on mobile
   - Why rejected: Mobile users are a growing segment

### Consequences
**Pros:**
- Optimal UX for each device type
- Meets user need for quick scanning on desktop
- Maintains usability on mobile

**Cons / Trade-offs:**
- Requires maintaining two layouts
- Slightly more complex implementation

### Implementation Notes
- Desktop breakpoint: >= 1024px uses table
- Mobile/Tablet: < 1024px uses cards
- Both layouts should show same data, just different presentation

### References
- PRD: /specs/shipment-overview/prd.md (Use Case 1)
- Design: /design/hi-fi/shipment-overview/
- User Testing: /discovery/market-research/insights.md (85% prefer dense view)

---

*Add your design decisions below. Remove the example above when you have real decisions.*
