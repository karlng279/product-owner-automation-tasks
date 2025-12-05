# Resources

This directory contains product-specific references, knowledge, and standards that provide context for feature development.

## Directory Structure

```
resources/
├── business-models/        # Business model artifacts
├── domain-knowledge/       # Industry & domain expertise
├── tech-stack/             # Technical architecture & decisions
├── pm-playbooks/           # Product management processes
└── design-system/          # UI/UX standards
```

## Purpose

Resources provide:
- **Context** for AI to generate better specs
- **Standards** for consistency across features
- **Knowledge** that doesn't fit in individual feature specs
- **Decisions** that affect multiple features

## Subdirectories

### business-models/
Business strategy and monetization:
- Business Model Canvas
- Pricing strategies
- Revenue models
- Customer segments

**Example files:**
- `business-model-canvas.md`
- `pricing-strategy.md`
- `customer-segments.md`

### domain-knowledge/
Industry-specific knowledge:
- Shipping & logistics glossary
- Compliance requirements
- Industry standards
- Common workflows

**Example files:**
- `shipping-glossary.md`
- `compliance-requirements.md`
- `incoterms-guide.md`

### tech-stack/
Technical decisions for THIS product:
- Frontend framework & libraries
- Backend stack
- Infrastructure choices
- APIs & integrations

**Example files:**
- `frontend-stack.md` (Next.js, React, etc.)
- `backend-stack.md` (Node.js, databases, etc.)
- `infrastructure.md` (AWS, Docker, k8s)
- `integrations.md` (Third-party APIs)

### pm-playbooks/
Product management processes:
- Backlog management rules
- User interview guides
- Prioritization frameworks
- Sprint planning templates

**Example files:**
- `backlog-management.md`
- `interview-guide.md`
- `prioritization-framework.md`

### design-system/
UI/UX standards:
- Design tokens (colors, spacing, typography)
- Component patterns
- Accessibility guidelines
- Brand guidelines

**Example files:**
- `design-tokens.json`
- `component-library.md`
- `accessibility-standards.md`

## Usage

### For AI Generation
When generating PRDs or specs, AI should reference:
- Domain knowledge for accurate terminology
- Tech stack for technical constraints
- Design system for UI patterns

### For Team Members
- Consult before making decisions that affect multiple features
- Update when new patterns or standards emerge
- Reference in PRDs and design docs

## Maintenance

- **Update regularly** as decisions evolve
- **Version control** major changes
- **Link from specs** when relevant
- **Keep concise** - detailed implementation belongs in codebase docs
