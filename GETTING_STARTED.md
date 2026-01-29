# Getting Started with the Product Owner Automation Framework

> A step-by-step guide to creating your first feature specification

---

## 🎯 What You'll Learn

By the end of this guide, you'll know how to:
- Navigate the 3-framework system (PO → Design → Code)
- Create your first Product Requirements Document (PRD)
- Understand the complete workflow from idea to deployed app
- Choose the right starting point based on your role

**Time Required:** 15-30 minutes

---

## 📋 Prerequisites

Before using this framework, you should have:
- **A text editor or IDE** (VS Code, Sublime, etc.)
- **Basic understanding of product management concepts** (user stories, acceptance criteria)
- **Markdown editor or IDE** (VS Code with Markdown preview recommended)
- **Optional for implementation:** Node.js, Git, basic React knowledge

---

## 🚀 Quick Start: Create Your First Feature Spec in 15 Minutes

Follow this step-by-step guide to spec your first feature:

### Step 1: Study the Sample Project (5 minutes)

Navigate to [features/one-api-portal-mvp](features/one-api-portal-mvp) and review:
- `prd.md` - See how product requirements are structured
- `usm.md` - Understand the user story mapping format
- `usl.md` - Review how stories are prioritized (MoSCoW)
- `usd/` folder - See detailed acceptance criteria format (one file per story)
- `uat/` folder - Understand BDD test scenarios (one file per story)

**Key Learning:** Notice how each stage builds on the previous one, adding more detail as you progress.

---

### Step 2: Review Framework Templates (3 minutes)

Open [po-framework/](po-framework/) and read:
- `README.md` - Framework overview
- `framework-structure.md` - Detailed structure explanation
- Each `stage{X}-{name}/rules.md` - Rules and validation criteria for each stage

---

### Step 3: Create Your Feature Folder (2 minutes)

```bash
# Create a new feature folder
mkdir -p features/your-feature-name

# Navigate to the folder
cd features/your-feature-name
```

---

### Step 4: Write Your PRD (5 minutes)

Create `prd.md` using this structure:

```markdown
# [Feature Name] - Product Requirements Document

## Problem Statement
[What problem are you solving? Who has this problem?]

## Goals & Success Metrics
- Goal 1: [Specific, measurable goal]
- Metric: [How will you measure success?]

## Target Users
- [Primary user persona]
- [Secondary user persona]

## User Stories (High-Level)
1. As a [user type], I want to [action], so that [benefit]
2. As a [user type], I want to [action], so that [benefit]

## Out of Scope
- [What you're NOT building in this version]

## Design Resources
- [Link to wireframes/mockups if available]
```

**Done!** You now have a PRD. Next, you'll break it down into detailed user stories.

---

### Step 5: Learn the Codebase Framework (Optional - 10 minutes)

If you want to understand how to **implement** your feature specs as working code:

1. **Read the Quick Start:** [codebase-framework/QUICK_START.md](codebase-framework/QUICK_START.md)
   - 45-60 minute tutorial from zero to deployed Next.js app
   - Covers project setup, components, dummy data, and deployment

2. **Review the Tech Stack:** See the [Tech Stack section](README.md#-tech-stack)
   - Next.js 14, ShadCN UI, TanStack Table
   - React Context for state, dummy JSON for data

3. **Check the Integration Guide:** [codebase-framework/FRAMEWORK_INTEGRATION.md](codebase-framework/FRAMEWORK_INTEGRATION.md)
   - Shows how USD specs → code features
   - Shows how wireframes → JSX structure
   - Shows how component specs → ShadCN usage
   - Complete end-to-end example

**When to Use:**
- After completing your USD and design specs
- When you're ready to build a working prototype
- When you want to validate UX with stakeholders before backend investment

**Output:** A deployed Next.js application on Vercel with dummy data (no backend needed)

---

## 🎭 Choose Your Path: Based on Your Role

### 👔 I'm a Product Manager
**Your Focus:** Define requirements and manage the product lifecycle

**Start Here:**
1. Read [po-framework/README.md](po-framework/README.md)
2. Review the [sample feature](features/one-api-portal-mvp)
3. Follow the 5-stage workflow: PRD → USM → USL → USD → UAT

**Next Steps:**
- Work with designers using [design-framework/](design-framework/)
- Review [po-knowledge-hub/](po-framework/po-knowledge-hub/) for business context and domain knowledge

---

### 🎨 I'm a Designer
**Your Focus:** Create wireframes, component specs, and interaction flows

**Start Here:**
1. Get the USD (User Story Details) from the PM
2. Read [design-framework/README.md](design-framework/README.md)
3. Follow the 3-stage workflow: Wireframes → Components → Interactions
4. Use text-based ASCII diagrams (no Figma/Sketch needed)

**Tools You'll Use:**
- Markdown files for wireframes
- [ShadCN UI component catalog](design-framework/stage2-component-specs/shadcn-ui-components.md)
- ASCII state diagrams for interactions

**Next Steps:**
- Hand off specs to developers for implementation
- Review [design-rules/](design-framework/design-rules/) for standards

---

### 👨‍💻 I'm a Developer
**Your Focus:** Implement features from PO/Design specs

**Start Here:**
1. Get the USD + Design specs from PM/Designer
2. Read [codebase-framework/QUICK_START.md](codebase-framework/QUICK_START.md)
3. Set up Next.js project with ShadCN UI
4. Build with dummy data (no backend needed)
5. Deploy to Vercel

**What You'll Build:**
- Next.js 14 (App Router) with TypeScript
- ShadCN UI components
- TanStack Table for data tables
- React Hook Form + Zod for forms
- React Context for state management
- Dummy JSON API (swap for real backend later)

**Key Resources:**
- [Framework Integration Guide](codebase-framework/FRAMEWORK_INTEGRATION.md) - See how specs map to code
- [Component Patterns](codebase-framework/component-patterns/) - Copy-paste examples
- [API Patterns](codebase-framework/api-patterns/) - Dummy data strategy

---

### 🦄 I'm a Solo Founder / Full-Stack
**Your Focus:** Do everything yourself efficiently

**Start Here:**
1. Write quick PRDs for each feature
2. Skip detailed USM/USL, go straight to USD for core features
3. Create simple wireframes (ASCII is fine)
4. Jump straight to code with [codebase-framework/QUICK_START.md](codebase-framework/QUICK_START.md)

**Time-Saving Tips:**
- Use the [Integration Guide](codebase-framework/FRAMEWORK_INTEGRATION.md) to see USD → Code directly
- Start with dummy data, validate with users, then add backend
- Focus on MoSCoW "Must Have" features first
- Deploy early and often (Vercel is free)

**Recommended Workflow:**
```
Write PRD (30 min) → Write USD (1 hour) → Sketch Wireframe (30 min)
→ Code Implementation (4-6 hours) → Deploy (15 min) → Get Feedback
```

---

## 📖 Complete Workflow Overview

### The 3-Framework System

```
┌─────────────────────────────────────────────────────────────────┐
│  PO FRAMEWORK → DESIGN FRAMEWORK → CODEBASE FRAMEWORK → MVP     │
└─────────────────────────────────────────────────────────────────┘

PO Framework (What to build):
  PRD → USM → USL → USD → UAT
  └─ Defines requirements, user stories, acceptance tests

Design Framework (How it looks/behaves):
  Wireframes → Component Specs → Interactions
  └─ Defines layout, UI components, user flows

Codebase Framework (Implementation):
  Project Setup → Components → APIs → Deploy
  └─ Builds working Next.js app with dummy data
```

### Detailed Stage Breakdown

**Stage 1-5: PO Framework** (4-7 hours for medium feature)
1. PRD (30-60 min) - Define the problem and goals
2. USM (45-90 min) - Map user activities and stories
3. USL (30 min) - Prioritize with MoSCoW
4. USD (1-2 hours) - Write acceptance criteria
5. UAT (1-2 hours) - Write test scenarios

**Stage 6-8: Design Framework** (3-5 hours for medium feature)
6. Wireframes (1-2 hours) - ASCII layout diagrams
7. Component Specs (1-2 hours) - ShadCN component selections
8. Interactions (1-2 hours) - State diagram flows

**Stage 9-10: Codebase Framework** (1-2 weeks for MVP)
9. Implementation (1-2 weeks) - Build Next.js app with dummy data
10. Deploy (15 min) - Push to Vercel

---

## 🎓 Learning Paths

### Path 1: Complete End-to-End (Recommended for First Time)
**Time:** 1-2 days for a small feature

1. Study the [sample feature](features/one-api-portal-mvp) (30 min)
2. Read all 3 framework READMEs (30 min)
3. Create a simple feature following all stages (6-8 hours)
4. Deploy to Vercel (15 min)

**You'll Learn:** The complete workflow, why each stage matters, how specs connect to code

---

### Path 2: Quick Implementation (For Experienced Developers)
**Time:** 1-2 hours

1. Skim [codebase-framework/QUICK_START.md](codebase-framework/QUICK_START.md) (10 min)
2. Clone the starter template (5 min)
3. Build a simple page with ShadCN components (30 min)
4. Add dummy data API (20 min)
5. Deploy to Vercel (15 min)

**You'll Learn:** The tech stack, dummy data pattern, deployment process

---

### Path 3: PM/Spec Writing Focus (For Product Managers)
**Time:** 4-6 hours

1. Read [po-framework/README.md](po-framework/README.md) (15 min)
2. Review [sample feature specs](features/one-api-portal-mvp) (30 min)
3. Complete the 5-stage workflow for your feature (4-6 hours)
4. Learn handoff to design/dev teams (30 min)

**You'll Learn:** How to write complete, unambiguous specs that developers can implement

---

## ❓ Common Questions

### Q: Do I need to complete all stages?
**A:** For production features, yes. But for experiments or spikes, a PRD might be enough. The stages ensure completeness.

### Q: Can I modify the templates?
**A:** Absolutely! Adapt to your team's needs, but keep the core structure (PRD → USM → USL → USD → UAT).

### Q: What if my feature is too big?
**A:** Break it down! Create multiple smaller features. Aim for features you can spec in one sitting.

### Q: Do I need to know React to use this framework?
**A:** Not for PO/Design frameworks. For implementation, the codebase framework includes tutorials for learning.

### Q: Can I skip the Design Framework and go straight to code?
**A:** You can, but you'll likely waste time. Quick wireframes (even ASCII) save hours of rework during implementation.

---

## 🎯 Next Steps

**Ready to start?** Choose your path:

1. **I want to spec a feature** → Follow the [Quick Start](#-quick-start-create-your-first-feature-spec-in-15-minutes) above
2. **I want to implement code** → Go to [codebase-framework/QUICK_START.md](codebase-framework/QUICK_START.md)
3. **I want to understand the system** → Read [README.md](README.md) and explore the [sample feature](features/one-api-portal-mvp)
4. **I need help** → Check the [FAQ](README.md#-faq) or review the [documentation links](README.md#-documentation)

---

**Framework:** Product Owner Automation
**Version:** 3.0 (Complete: PO + Design + Codebase)
**Last Updated:** 2025-12-20
