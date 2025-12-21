# Product Owner Automation Framework

> A structured end-to-end workflow system for managing product development from discovery to deployment

**Purpose:** Complete product lifecycle management with a 3-framework approach: PO → Design → Code

---

## 🎯 Framework Overview

### What This Framework Provides

A complete product lifecycle management system with:
1. **PO Framework** - 5-stage specification workflow (PRD → USM → USL → USD → UAT)
2. **Design Framework** - 3-stage design system (Wireframes → Components → Interactions)
3. **Codebase Framework** - Implementation guides for Next.js applications
4. **Task Management** - Solo PM workflow for prioritizing and tracking work

### Who This Is For
- **Solo Product Managers** - Managing entire product lifecycles independently
- **Technical PMs** - Bridging product strategy and technical implementation
- **Startup Teams** - Small teams needing efficient product processes
- **Product Engineers** - Engineers taking on PM responsibilities

---

## 🏗️ Repository Structure

This repository contains the complete product lifecycle workflow - from discovery to deployment.

```
/
├── task-management/            # Solo PM workflow tracking
│   ├── NOW.md                  # Current work focus
│   ├── BACKLOG.md              # Prioritized feature backlog
│   └── TASK_MANAGEMENT_SOLO.md # Task management methodology
│
├── po-framework/               # PO automation templates (PRD→USM→USL→USD→UAT) + PM playbooks
├── design-framework/           # Complete text-based design system (Wireframes → Components → Interactions)
├── codebase-framework/         # Development framework templates (architecture, coding standards, testing)
├── features/                   # Feature specifications (PRD → UAT → Design → Code)
└── archive/                    # Backup files
```

**Sample Project:** The [features/one-api-portal-mvp](features/one-api-portal-mvp) folder contains a complete example of the framework in action - from PRD to working code.

---

## 📋 Complete Product Development Workflow

The framework uses a structured end-to-end workflow for feature development:

```
PRD → USM → USL → USD → UAT → Wireframes → Components → Interactions → Code → Test → Deploy
├─────── PO Framework ──────┤   └──── Design Framework ────┘   └─── Codebase Framework ───┘
```

### PO Framework - The 5 Stages

| Stage | Artifact | Purpose | Format |
|-------|----------|---------|--------|
| 1 | **PRD** | Product Requirements Document - the *why* and *what* | Markdown |
| 2 | **USM** | User Story Map - Activities, Steps, Stories | Markdown |
| 3 | **USL** | User Story List - Prioritized backlog (MoSCoW) | CSV |
| 4 | **USD** | User Story Details - Acceptance criteria | CSV |
| 5 | **UAT** | User Acceptance Tests - BDD scenarios (Given/When/Then) | CSV |

**Templates & Rules:** [po-framework/](po-framework/)

### Design Framework - The 3 Stages

| Stage | Artifact | Purpose | Format |
|-------|----------|---------|--------|
| 1 | **Wireframes (WF-XXX)** | Text descriptions + ASCII wireframes for layout | Markdown |
| 2 | **Component Specs (COMP-XXX)** | ShadCN components + Tanstack Table configurations | Markdown |
| 3 | **Interactions (INT-XXX)** | ASCII state diagrams showing behavior and flows | Markdown |

**Design System:** [design-framework/](design-framework/)

### Codebase Framework - Implementation

The codebase framework provides complete implementation guides for building working Next.js applications from your specs:

**Core Documentation:**
- **Framework Integration Guide** - How PO/Design specs map to code ([FRAMEWORK_INTEGRATION.md](codebase-framework/FRAMEWORK_INTEGRATION.md))
- **Quick Start Tutorial** - 45-60 min from zero to deployed app ([QUICK_START.md](codebase-framework/QUICK_START.md))

**Implementation Guides:**
- **Project Structure** - Next.js 14 App Router organization ([project-structure/](codebase-framework/project-structure/))
- **Component Patterns** - ShadCN UI, forms, tables, layouts ([component-patterns/](codebase-framework/component-patterns/))
- **State Management** - React Context + useState patterns ([state-management/](codebase-framework/state-management/))
- **API Patterns** - Next.js routes + dummy JSON data ([api-patterns/](codebase-framework/api-patterns/))

**Philosophy:** Build working frontends with dummy data first, validate UX with stakeholders, then invest in backend infrastructure.

**See:** [codebase-framework/README.md](codebase-framework/README.md) for complete overview

---

## 🛠️ Development Workflow

### 1. Define Feature (PRD)
- Create PRD following framework templates
- Store in `features/{feature-name}/po/prd.md`

### 2. Map & Detail (USM → USL → USD → UAT)
- Follow 5-stage PO workflow using templates
- All artifacts in `features/{feature-name}/po/`

### 3. Design Specifications (Wireframes → Components → Interactions)
- Create wireframes from acceptance criteria (USD)
- Define component specifications using ShadCN UI
- Document interactions with ASCII state diagrams
- Store in `features/{feature-name}/design/`
- Follow [design-framework/](design-framework/) templates

### 4. Code Implementation
- Set up Next.js project with ShadCN UI components
- Create dummy JSON data for rapid prototyping
- Build pages and components from design specs
- Store in `features/{feature-name}/code/`
- See [codebase-framework/](codebase-framework/) for complete guides

### 5. Test & Deploy
- Convert UAT scenarios to Playwright tests
- Execute acceptance tests
- Deploy to Vercel
- Track progress in task-management/

---

## 🚀 Getting Started

**New to the framework?** Start here:

📖 **[Complete Getting Started Guide →](GETTING_STARTED.md)**

The guide includes:
- **Quick Start Tutorial** - Create your first feature spec in 15 minutes
- **Role-Based Paths** - Tailored guides for PMs, Designers, Developers, Solo Founders
- **Learning Paths** - Choose between complete end-to-end or quick implementation
- **Prerequisites & Setup** - Everything you need to get started

**Quick Links:**
- 👔 Product Managers: Start with [po-framework/](po-framework/)
- 🎨 Designers: Start with [design-framework/](design-framework/)
- 👨‍💻 Developers: Start with [codebase-framework/QUICK_START.md](codebase-framework/QUICK_START.md)
- 📚 Sample Project: [features/one-api-portal-mvp](features/one-api-portal-mvp)

---

## 📚 Common Workflows

### Workflow 1: Spec a New Feature from Scratch

**When to use:** Starting a brand new feature with no existing documentation

```bash
# 1. Create feature folder structure
mkdir -p features/my-new-feature/{po,design,code}
cd features/my-new-feature

# 2. Write PRD (Stage 1)
# Create po/prd.md - Define the WHY and WHAT

# 3. Create User Story Map (Stage 2)
# Create po/usm.md - Map activities → steps → stories

# 4. Prioritize Stories (Stage 3)
# Create po/usl.csv - Apply MoSCoW prioritization

# 5. Detail Stories (Stage 4)
# Create po/usd.csv - Write acceptance criteria

# 6. Write Test Scenarios (Stage 5)
# Create po/uat.csv - BDD Given/When/Then scenarios

# 7. Create Design Specs
# Create design/WF-001-*.md, COMP-001-*.md, INT-001-*.md

# 8. Implement Code
# Set up Next.js project in code/
```

**Total Time:** ~4-7 hours for a medium-sized feature (PO specs only)

---

### Workflow 2: Add Stories to Existing Feature

**When to use:** Extending a feature that's already been spec'd

```bash
# 1. Navigate to existing feature
cd features/existing-feature/po

# 2. Update USM, USL, USD, UAT with new stories
# 3. Update design specs if UI changes needed
# 4. Update code implementation
```

**Time:** ~1-2 hours depending on complexity

---

### Workflow 3: Manage Your Product Backlog

**When to use:** Daily/weekly task management as a solo PM

```bash
# 1. Update NOW.md with current focus
vim task-management/NOW.md

# 2. Review and reprioritize BACKLOG.md
vim task-management/BACKLOG.md

# 3. Move completed items from NOW to DONE
# Move next priority items from BACKLOG to NOW
```

**Frequency:** Daily for NOW.md, Weekly for BACKLOG.md

---

## 📖 Documentation

### For Product Management
- **Current Focus:** [task-management/NOW.md](task-management/NOW.md)
- **Backlog:** [task-management/BACKLOG.md](task-management/BACKLOG.md)
- **Task Management Guide:** [task-management/TASK_MANAGEMENT_SOLO.md](task-management/TASK_MANAGEMENT_SOLO.md)
- **PO Framework:** [po-framework/README.md](po-framework/README.md)
- **PM Playbooks:** [po-framework/pm-playbooks/](po-framework/pm-playbooks/)

### For Design
- **Design Framework:** [design-framework/README.md](design-framework/README.md)
- **Design Workflow:** [design-framework/design-workflow.md](design-framework/design-workflow.md)
- **Design Rules:** [design-framework/design-rules/](design-framework/design-rules/)
- **Wireframes:** [design-framework/stage1-wireframes/](design-framework/stage1-wireframes/)
- **Component Specs:** [design-framework/stage2-component-specs/](design-framework/stage2-component-specs/)
- **Interactions:** [design-framework/stage3-interactions/](design-framework/stage3-interactions/)

### For Development
- **Codebase Framework Overview:** [codebase-framework/README.md](codebase-framework/README.md)
- **Quick Start (45-60 min):** [codebase-framework/QUICK_START.md](codebase-framework/QUICK_START.md)
- **Framework Integration:** [codebase-framework/FRAMEWORK_INTEGRATION.md](codebase-framework/FRAMEWORK_INTEGRATION.md)
- **Project Structure:** [codebase-framework/project-structure/](codebase-framework/project-structure/)
- **Component Patterns:** [codebase-framework/component-patterns/](codebase-framework/component-patterns/)
- **State Management:** [codebase-framework/state-management/](codebase-framework/state-management/)
- **API Patterns:** [codebase-framework/api-patterns/](codebase-framework/api-patterns/)
- **Features Index:** [features/](features/)

---

## ❓ FAQ

### General

**Q: Do I need to complete all stages for every feature?**
Yes, for production features. The stages ensure completeness. For quick experiments, you might only need a PRD.

**Q: Can I modify the templates?**
Yes! The templates are guidelines. Adapt them to your team's needs, but maintain the core structure.

**Q: What if my feature is too big?**
Break it down! Create multiple smaller features. Aim for features that can be spec'd in one sitting.

### PO Framework

**Q: What's the difference between USL and USD?**
- **USL** (User Story List): High-level story titles with priority (MoSCoW)
- **USD** (User Story Details): Detailed acceptance criteria for each story

**Q: Should I write UATs before or after development?**
Before! UATs define "done" and guide development. They're your contract for what needs to work.

### Design Framework

**Q: Do I need visual design tools like Figma?**
No! The design framework is text-based. ASCII wireframes and markdown specs are sufficient for developer handoff.

### Codebase Framework

**Q: Do I need a backend/database to build working prototypes?**
No! The codebase framework uses **dummy JSON files** instead of a real database. Build and deploy working UIs without backend setup.

**Q: Can I use a different tech stack?**
Yes, but you'll need to adapt the codebase-framework docs. The current stack (Next.js + ShadCN) is optimized for fast deployment and professional UI.

---

## 🗺️ Roadmap & Status

### Completed Frameworks ✅

**1. Product Specification (PO Framework) ✅**
- 5-Stage Specification Workflow (PRD → USM → USL → USD → UAT)
- Task Management System
- PM Playbooks & Templates
- **Location:** [po-framework/](po-framework/)

**2. Design Specification (Design Framework) ✅**
- 3-Stage Design Workflow (Wireframes → Components → Interactions)
- Text-based design system (no visual tools required)
- ShadCN UI component catalog
- Design rules (color, spacing, typography, accessibility)
- **Location:** [design-framework/](design-framework/)

**3. Code Implementation (Codebase Framework) ✅**
- Complete Next.js 14 project structure guidelines
- ShadCN UI component patterns
- State management patterns
- API patterns (Next.js routes + dummy JSON data)
- Framework integration guide (specs → code mapping)
- **Location:** [codebase-framework/](codebase-framework/)

### Sample Implementation ✅

**ONE API Portal MVP** - Complete end-to-end example:
- ✅ PO specs (PRD, USM, USL, USD, UAT)
- ✅ Design specs (3 wireframes, 2 component specs, 2 interaction diagrams)
- ✅ Working Next.js implementation (Phase 1 & 2 complete)
- **Location:** [features/one-api-portal-mvp/](features/one-api-portal-mvp/)

### Future Enhancements 📋

- [ ] Automation & Tooling (spec validators, template generators, CLI tools)
- [ ] QA & Testing (test execution tracking, bug reporting templates)
- [ ] Release Management (release planning, deployment checklists)

---

## 🛠️ Tech Stack (Codebase Framework)

The codebase framework uses a modern stack designed for rapid MVP development:

| Layer | Technology |
|-------|------------|
| **Framework** | Next.js 16 with App Router |
| **Language** | TypeScript |
| **Styling** | TailwindCSS v4 + ShadCN UI |
| **Tables** | TanStack Table |
| **Forms** | React Hook Form + Zod |
| **State** | React Context + useState |
| **Backend** | Next.js API Routes + dummy JSON |
| **Deployment** | Vercel or Netlify |

**Why This Stack?**
- Fast to deploy (< 1 hour from code to production)
- Free hosting tier on Vercel
- Professional UI with ShadCN components
- No backend infrastructure needed initially
- Easy to swap dummy data for real backend later

**See:** [codebase-framework/](codebase-framework/) for complete implementation guides

---

## 📝 License

**Proprietary License - All Rights Reserved**

```
Copyright © 2025 Karl Nguyen
All Rights Reserved.

This Product Owner Automation Framework and its contents are proprietary and confidential.
Unauthorized copying, distribution, modification, or use is strictly prohibited
without explicit written permission from the copyright holder.
```

---

**Framework:** Product Owner Automation
**Purpose:** Structured product development workflow (PO → Design → Code)
**Last Updated:** 2025-12-21
