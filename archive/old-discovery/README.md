# Discovery

This directory contains problem space exploration and market understanding that informs product direction.

## Directory Structure

```
discovery/
├── business-model/         # Business model & monetization
├── market-research/        # User research & market analysis
├── competitor-analysis/    # Competitive landscape
├── domain-knowledge/       # Industry expertise & domain knowledge
└── notes.md                # General discovery notes
```

## Purpose

Discovery is where you:
- **Understand the problem** before defining solutions
- **Validate assumptions** about users and market
- **Explore opportunities** and constraints
- **Document insights** that inform PRDs

## Subdirectories

### business-model/
Business strategy foundations:
- Business Model Canvas
- Value proposition
- Revenue streams
- Cost structure

**Example files:**
- `business-model-canvas.md`
- `value-proposition.md`
- `monetization-strategy.md`
- `unit-economics.md`

### market-research/
User and market insights:
- User interviews
- Surveys and questionnaires
- Usage data analysis
- Pain point summaries

**Example files:**
- `user-interviews/`
  - `2025-01-15-interview-shipper-sme.md`
  - `2025-01-20-interview-freight-forwarder.md`
- `surveys/`
  - `2025-02-shipment-tracking-survey.md`
- `insights.md` (synthesized findings)

### competitor-analysis/
Competitive landscape:
- Competitor feature matrices
- Pricing comparisons
- UX/UI teardowns
- Market positioning

**Example files:**
- `competitor-matrix.md`
- `pricing-comparison.md`
- `ux-teardowns/`
  - `competitor-a-shipment-tracking.md`
  - `competitor-b-dashboard.md`

### domain-knowledge/
Industry-specific knowledge and expertise:
- Industry glossaries and terminology
- Compliance and regulatory requirements
- Industry standards and best practices
- Common workflows and processes

**Example files:**
- `shipping-glossary.md`
- `compliance-requirements.md`
- `industry-standards.md`
- `incoterms-guide.md`

### notes.md
Catch-all for discovery notes:
- Observations
- Open questions
- Hypotheses
- Links to external resources

## Workflow

### Discovery → PRD Flow

```
1. Conduct Research
   └─> Document in discovery/

2. Synthesize Insights
   └─> Create summary documents

3. Identify Opportunities
   └─> List potential features

4. Prioritize Features
   └─> Decide what to build first

5. Create PRD
   └─> Move to specs/ with discovery links
```

### Using Discovery in PRDs

When creating a PRD, reference discovery artifacts:

```markdown
## 2. Problem Statement
Based on user interviews in `/discovery/market-research/insights.md`,
we identified that 85% of SME shippers struggle with...
```

## Best Practices

### Do:
- ✅ Document raw data (interview notes, survey results)
- ✅ Synthesize insights separate from raw data
- ✅ Link discovery docs from PRDs
- ✅ Update as you learn more

### Don't:
- ❌ Jump to solutions without understanding problems
- ❌ Let discovery become a blocker (timebox it)
- ❌ Forget to validate assumptions with real users
- ❌ Mix discovery with specs (keep them separate)

## Templates

### User Interview Template
```markdown
# User Interview - [Participant Name/Code]
Date: YYYY-MM-DD
Interviewer: [Name]
Duration: XX minutes

## Participant Profile
- Role:
- Company Size:
- Industry:
- Current Tools:

## Key Pain Points
1. [Pain point]
2. [Pain point]

## Opportunities
1. [Opportunity]

## Quotes
> "[Notable quote]"

## Next Steps
- [ ] Follow-up question
```

### Competitor Analysis Template
```markdown
# Competitor Analysis - [Competitor Name]
Date: YYYY-MM-DD

## Overview
- Product: [Name]
- URL: [URL]
- Target Market: [Description]
- Pricing: [Pricing model]

## Features
| Feature | Available | Notes |
|---------|-----------|-------|
| Shipment tracking | ✅ | Real-time, but UI is complex |
| ...

## Strengths
1. [Strength]

## Weaknesses
1. [Weakness]

## Opportunities for Us
1. [What we can do better]
```

## Maintenance

- **Keep current** - Archive outdated research
- **Tag insights** - Make them searchable
- **Review regularly** - Re-validate assumptions
- **Share learnings** - Discovery informs everyone

## Related Directories

- [/specs/](../specs/) - Where discovery insights become features
- [/design/](../design/) - UX research often feeds discovery
- [/codebase/tech-stack/](../codebase/tech-stack/) - Technical architecture decisions
- [/po-framework/pm-playbooks/](../po-framework/pm-playbooks/) - Product management processes
