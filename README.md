# Product Owner Automation Framework

> A structured workflow system for managing product development from discovery to deployment

**Purpose:** Systematic approach to feature development using a 5-stage specification workflow (PRD → USM → USL → USD → UAT)

---

## 🎯 Framework Overview

### What This Framework Provides

A complete product lifecycle management system with:
1. **Structured Specification Process** - 5-stage workflow from requirements to acceptance tests
2. **Task Management System** - Solo PM workflow for prioritizing and tracking work
3. **Reusable Templates** - Standardized formats for all product artifacts
4. **Automation Tools** - Scripts and validators to streamline repetitive tasks

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
├── features/                   # Feature specifications (PRD → UAT)
└── archive/                    # Backup files
```

**Sample Project:** The [features/one-api-portal-mvp](features/one-api-portal-mvp) folder contains a complete example of the framework in action.

---

## 📋 Complete Product Development Workflow

The framework uses a structured end-to-end workflow for feature development:

```
PRD → USM → USL → USD → UAT → Wireframes → Component Specs → Interactions → Build → Test → Deploy
├─────── PO Framework ──────┤   └────────────── Design Framework ────────────┘
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
**Contributing Guide:** [CONTRIBUTING.md](CONTRIBUTING.md)

---

## 🛠️ Development Workflow

### 1. Define Feature (PRD)
- Create PRD following framework templates
- Store in `features/{feature-name}/prd.md`

### 2. Map & Detail (USM → USL → USD → UAT)
- Follow 5-stage PO workflow using templates
- All artifacts in `features/{feature-name}/`

### 3. Design Specifications (Wireframes → Components → Interactions)
- Create wireframes from acceptance criteria (USD)
- Define component specifications using ShadCN UI
- Document interactions with ASCII state diagrams
- Follow [design-framework/](design-framework/) templates

### 4. Build & Test
- Implement based on design specifications
- Execute UAT scenarios
- Track progress in task-management/

---

## 🚀 Getting Started

### Prerequisites

Before using this framework, you should have:
- A text editor or IDE (VS Code, Sublime, etc.)
- Basic understanding of product management concepts
- Familiarity with user stories and acceptance criteria
- CSV-compatible spreadsheet tool (Excel, Google Sheets, Numbers)

### Quick Start: Create Your First Feature Spec in 15 Minutes

Follow this step-by-step guide to spec your first feature:

#### Step 1: Study the Sample Project (5 minutes)

Navigate to [features/one-api-portal-mvp](features/one-api-portal-mvp) and review:
- `prd.md` - See how product requirements are structured
- `usm.md` - Understand the user story mapping format
- `usl.csv` - Review how stories are prioritized (MoSCoW)
- `usd.csv` - See detailed acceptance criteria format
- `uat.csv` - Understand BDD test scenarios (Given/When/Then)

**Key Learning:** Notice how each stage builds on the previous one, adding more detail as you progress.

#### Step 2: Review Framework Templates (3 minutes)

Open [po-framework/](po-framework/) and read:
- `README.md` - Framework overview
- `framework-structure.md` - Detailed structure explanation
- Each `stage{X}-{name}/rules.md` - Rules and validation criteria for each stage

#### Step 3: Create Your Feature Folder (2 minutes)

```bash
# Create a new feature folder
mkdir -p features/your-feature-name

# Navigate to the folder
cd features/your-feature-name
```

#### Step 4: Write Your PRD (5 minutes)

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

## 📚 Common Workflows

### Workflow 1: Spec a New Feature from Scratch

**When to use:** Starting a brand new feature with no existing documentation

```bash
# 1. Create feature folder
mkdir -p features/my-new-feature
cd features/my-new-feature

# 2. Write PRD (Stage 1)
# Create prd.md - Define the WHY and WHAT
# Time: 30-60 minutes

# 3. Create User Story Map (Stage 2)
# Create usm.md - Map activities → steps → stories
# Time: 45-90 minutes

# 4. Prioritize Stories (Stage 3)
# Create usl.csv - Apply MoSCoW prioritization
# Time: 30 minutes

# 5. Detail Stories (Stage 4)
# Create usd.csv - Write acceptance criteria
# Time: 1-2 hours

# 6. Write Test Scenarios (Stage 5)
# Create uat.csv - BDD Given/When/Then scenarios
# Time: 1-2 hours
```

**Total Time:** ~4-7 hours for a medium-sized feature

---

### Workflow 2: Add Stories to Existing Feature

**When to use:** Extending a feature that's already been spec'd

```bash
# 1. Navigate to existing feature
cd features/existing-feature

# 2. Update USM
# Add new stories to usm.md under relevant activities

# 3. Update USL
# Add new rows to usl.csv with MoSCoW priority

# 4. Update USD
# Add acceptance criteria rows to usd.csv

# 5. Update UAT
# Add test scenarios to uat.csv
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
- **Codebase Framework:** [codebase-framework/README.md](codebase-framework/README.md)
- **Features Index:** [features/](features/)
- **Contributing:** [CONTRIBUTING.md](CONTRIBUTING.md)

---

## ❓ FAQ

### Q: Do I need to complete all 5 stages for every feature?
**A:** Yes, for production features. The 5 stages ensure completeness. However, for quick experiments or spikes, you might only need a PRD.

### Q: Can I modify the templates?
**A:** Yes! The templates are guidelines. Adapt them to your team's needs, but maintain the core structure (PRD → USM → USL → USD → UAT).

### Q: How long should each stage take?
**A:**
- PRD: 30-60 minutes
- USM: 45-90 minutes
- USL: 30 minutes
- USD: 1-2 hours
- UAT: 1-2 hours

For medium-sized features, expect ~4-7 hours total.

### Q: What if my feature is too big?
**A:** Break it down! Create multiple smaller features. Aim for features that can be spec'd in one sitting.

### Q: Do I need to follow the exact CSV format?
**A:** The column headers are important for automation/tooling. You can add columns but keep the required ones from the templates.

### Q: Can I use this for non-software projects?
**A:** Yes! The framework works for any product development (hardware, services, etc.). Adapt the terminology as needed.

### Q: What's the difference between USL and USD?
**A:**
- **USL** (User Story List): High-level story titles with priority (MoSCoW)
- **USD** (User Story Details): Detailed acceptance criteria for each story

### Q: How do I know if my PRD is good enough?
**A:** A good PRD answers: Why are we building this? Who is it for? What problem does it solve? What does success look like?

### Q: Should I write UATs before or after development?
**A:** Before! UATs define "done" and guide development. They're your contract for what needs to work.

---

## 🛠️ Validation & Tooling

### Manual Validation Checklist

Before considering a feature spec complete, verify:

**PRD Checklist:**
- [ ] Problem statement clearly defined
- [ ] Target users identified
- [ ] Success metrics are measurable
- [ ] High-level user stories listed
- [ ] Out of scope items documented

**USM Checklist:**
- [ ] Activities represent major user goals
- [ ] Steps break down activities logically
- [ ] Stories are small and testable
- [ ] Story IDs follow naming convention (US-XXX)

**USL Checklist:**
- [ ] All stories from USM are included
- [ ] MoSCoW priority assigned to each story
- [ ] Story points/estimation provided
- [ ] Dependencies identified
- [ ] CSV format is valid (no missing columns)

**USD Checklist:**
- [ ] Every story has at least 2-3 acceptance criteria
- [ ] Criteria are testable (can verify true/false)
- [ ] Criteria are specific, not vague
- [ ] Acceptance Criteria IDs follow convention (AC-XXX-Y)

**UAT Checklist:**
- [ ] Given/When/Then format followed
- [ ] Scenarios cover happy path
- [ ] Scenarios cover error cases
- [ ] Test IDs follow convention (UAT-XXX)
- [ ] Each test maps to a Story ID

---

## 🗺️ Roadmap & Status

### Completed Frameworks ✅

The repository now includes complete frameworks for:

**1. Product Specification (PO Framework) ✅**
- ✅ 5-Stage Specification Workflow (PRD → USM → USL → USD → UAT)
- ✅ Task Management System
- ✅ PM Playbooks
- ✅ Templates & Quality Gates
- **Location:** [po-framework/](po-framework/)

**2. Design Specification (Design Framework) ✅**
- ✅ 3-Stage Design Workflow (Wireframes → Components → Interactions)
- ✅ Text-based design system (no visual tools required)
- ✅ ShadCN UI component catalog
- ✅ Tanstack Table reference
- ✅ Design rules (color, spacing, typography, accessibility)
- ✅ Reusable templates (forms, lists, dashboards, modals)
- ✅ Common UI patterns
- ✅ Quality gates for each stage
- **Location:** [design-framework/](design-framework/)

### In Development 🚧

**3. Codebase Framework (Placeholder)**
- [ ] Technical architecture templates
- [ ] Code structure guidelines
- [ ] Development workflow integration
- [ ] Testing standards
- **Location:** [codebase-framework/](codebase-framework/)

### Future Enhancements 📋

**4. Automation & Tooling**
- [ ] Spec validators
- [ ] Template generators
- [ ] CLI tools for workflow automation
- [ ] CI/CD integration

**5. QA & Testing**
- [ ] Test execution tracking
- [ ] Bug reporting templates
- [ ] Quality metrics dashboard

**6. Release Management**
- [ ] Release planning templates
- [ ] Deployment checklists
- [ ] Release notes generation
- [ ] Post-release retrospectives

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
**Purpose:** Structured product development workflow
**Last Updated:** 2025-12-11
