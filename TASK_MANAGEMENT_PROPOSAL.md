# Task Management Proposal

This document proposes task tracking and management approaches for the repository. **Please review and provide feedback before implementation.**

---

## 🎯 Goals

Task management should:
1. ✅ Track feature progress through PO workflow stages (PRD → USM → USL → USD → UAT)
2. ✅ Break down features into actionable development tasks
3. ✅ Track sprints/iterations
4. ✅ Monitor bugs and issues
5. ✅ Provide visibility into overall project health
6. ✅ Be git-friendly and auditable
7. ✅ Support AI automation

---

## 🔄 Proposed Approach: Multi-Level Tracking

### Level 1: Strategic (Features & Epics)
**Where:** `/specs/index.md` (already created)
**Purpose:** Track features through PO workflow stages
**Granularity:** Feature-level

### Level 2: Tactical (Sprints & Iterations)
**Where:** `/project-management/` (new directory)
**Purpose:** Sprint planning, backlog grooming, iteration tracking
**Granularity:** Sprint-level

### Level 3: Operational (Tasks & Daily Work)
**Where:** Feature-specific task files in `/specs/features/{feature}/tasks.md`
**Purpose:** Break down stories into development tasks
**Granularity:** Task-level (hours/days)

### Level 4: Issues (Bugs & Technical Debt)
**Where:** `/qa/bug-reports/` (already created) + `/project-management/issues/`
**Purpose:** Track bugs, technical debt, blockers
**Granularity:** Issue-level

---

## 📋 Proposed Directory Structure

```
/
├── specs/
│   ├── index.md                      # EXISTING: Feature status tracking
│   └── features/
│       └── {feature-name}/
│           ├── prd.md
│           ├── usm.md
│           ├── usl.csv
│           ├── usd.csv
│           ├── uat.csv
│           └── tasks.md              # NEW: Task breakdown per feature
│
├── project-management/               # NEW: Project tracking
│   ├── README.md                     # Overview of PM approach
│   ├── roadmap.md                    # Product roadmap (quarters/months)
│   ├── backlog.md                    # Prioritized feature backlog
│   │
│   ├── sprints/                      # Sprint tracking
│   │   ├── 2025-Q1-sprint-01.md
│   │   ├── 2025-Q1-sprint-02.md
│   │   └── template.md
│   │
│   ├── issues/                       # Cross-cutting issues
│   │   ├── technical-debt.md
│   │   ├── blockers.md
│   │   └── dependencies.md
│   │
│   └── reports/                      # Weekly/monthly reports
│       ├── 2025-01-week-1.md
│       └── template.md
│
└── qa/
    └── bug-reports/                  # EXISTING: Bug tracking
        └── BUG-XXX-description.md
```

---

## 📊 Level 1: Strategic Tracking (Features)

**File:** `/specs/index.md` (already created)

**Current Format:**
```markdown
| Feature | PRD | USM | USL | USD | UAT | Design | Dev | QA | Status |
|---------|-----|-----|-----|-----|-----|--------|-----|-------|--------|
| shipment-overview | ✅ | ✅ | 🚧 | ⏳ | ⏳ | ⏳ | ⏳ | ⏳ | Planning |
```

**Proposed Enhancement:**
```markdown
| Feature | PRD | USM | USL | USD | UAT | Design | Dev | QA | Priority | Status | Owner | Target Sprint |
|---------|-----|-----|-----|-----|-----|--------|-----|-------|----------|--------|-------|---------------|
| shipment-overview | ✅ | ✅ | 🚧 | ⏳ | ⏳ | ⏳ | ⏳ | ⏳ | P0 | Planning | Alice | 2025-Q1-S01 |
| booking-flow | ✅ | ⏳ | ⏳ | ⏳ | ⏳ | ⏳ | ⏳ | ⏳ | P1 | Discovery | Bob | 2025-Q1-S02 |
```

**Added Fields:**
- Priority: P0 (Critical), P1 (High), P2 (Medium), P3 (Low)
- Owner: Who's responsible
- Target Sprint: When it's planned

---

## 🎯 Level 2: Tactical Tracking (Sprints)

**File:** `/project-management/sprints/2025-Q1-sprint-01.md`

**Proposed Format:**

```markdown
# Sprint 2025-Q1-S01

**Dates:** 2025-01-06 to 2025-01-19 (2 weeks)
**Team:** Alice (Dev), Bob (Dev), Carol (QA), Dave (PO), Eve (Design)

## Sprint Goal
Deliver Shipment Overview MVP with basic list, filters, and search functionality.

## Committed Stories (from USL)

| Story ID | Feature | Summary | Points | Status | Owner |
|----------|---------|---------|--------|--------|-------|
| ST-001 | shipment-overview | Open Shipment Overview page | 3 | ✅ Done | Alice |
| ST-002 | shipment-overview | See list of upcoming departures | 5 | 🚧 In Progress | Alice |
| ST-003 | shipment-overview | Sort and filter shipments | 5 | ⏳ Todo | Bob |
| ST-005 | shipment-overview | Search shipment by reference | 3 | ⏳ Todo | Bob |

**Total Committed:** 16 points
**Total Completed:** 3 points
**Completion Rate:** 19%

## Daily Standup Notes

### 2025-01-06 (Monday)
- Alice: Completed ST-001, starting ST-002
- Bob: Reviewing USD for ST-003
- Carol: Prepared UAT for ST-001
- Blockers: None

### 2025-01-07 (Tuesday)
- Alice: ST-002 50% complete, API integration pending
- Bob: Started ST-003, working on filter UI
- Carol: Executed UAT TC-001 (Pass)
- Blockers: API rate limit issue (escalated)

## Sprint Retrospective (End of Sprint)

### What Went Well
- [ ] [To be filled at end of sprint]

### What Didn't Go Well
- [ ] [To be filled at end of sprint]

### Action Items
- [ ] [To be filled at end of sprint]

## Sprint Metrics

- **Planned Points:** 16
- **Completed Points:** [TBD]
- **Velocity:** [TBD]
- **Carry Over:** [TBD]
```

---

## 🔨 Level 3: Operational Tracking (Tasks)

**File:** `/specs/features/shipment-overview/tasks.md`

**Proposed Format:**

```markdown
# Tasks: Shipment Overview

This file breaks down user stories into actionable development tasks.

## Story: ST-001 - Open Shipment Overview Page

**Status:** ✅ Done
**Owner:** Alice
**Sprint:** 2025-Q1-S01

### Tasks
- [x] Create ShipmentOverview component (2h) - Alice
- [x] Add route /shipments in Next.js (1h) - Alice
- [x] Add navigation menu item (1h) - Alice
- [x] Write unit tests for component (2h) - Alice
- [x] QA: Execute UAT TC-001 (1h) - Carol

**Total Effort:** 7 hours
**Actual Effort:** 8 hours

---

## Story: ST-002 - See List of Upcoming Departures

**Status:** 🚧 In Progress (60%)
**Owner:** Alice
**Sprint:** 2025-Q1-S01

### Tasks
- [x] Design table component structure (2h) - Alice
- [x] Implement ShipmentTable component (4h) - Alice
- [x] Create API endpoint GET /api/shipments (3h) - Alice
- [ ] Integrate table with API (2h) - Alice
- [ ] Add pagination logic (3h) - Alice
- [ ] Add loading states (1h) - Alice
- [ ] Write unit tests (3h) - Alice
- [ ] QA: Execute UAT TC-004 (1h) - Carol

**Total Effort:** 19 hours
**Actual Effort So Far:** 12 hours
**Remaining:** 7 hours

**Blockers:**
- API rate limiting in dev environment (Issue #42)

---

## Story: ST-003 - Sort and Filter Shipments

**Status:** ⏳ Todo
**Owner:** Bob
**Sprint:** 2025-Q1-S01

### Tasks
- [ ] Design filter UI component (2h) - Eve (Design)
- [ ] Implement filter dropdown (POL/POD/Status) (4h) - Bob
- [ ] Add date range picker (ETD/ETA) (3h) - Bob
- [ ] Wire filters to API (2h) - Bob
- [ ] Update API to support filtering (3h) - Bob
- [ ] Add sort by column headers (2h) - Bob
- [ ] Persist filter state in URL params (2h) - Bob
- [ ] Write unit tests (3h) - Bob
- [ ] QA: Execute UAT (1h) - Carol

**Total Effort:** 22 hours
**Estimated Start:** 2025-01-08

---

## Technical Debt / Improvements

- [ ] Refactor table to use virtualization for >100 rows (P2)
- [ ] Add analytics tracking for filter usage (P3)
- [ ] Optimize API query performance (P1)
```

---

## 🐛 Level 4: Issue Tracking

### Bugs
**Where:** `/qa/bug-reports/BUG-XXX-description.md` (already exists)

**Proposed Enhancement:** Add quick reference file

**File:** `/project-management/issues/bugs-active.md`

```markdown
# Active Bugs

Quick reference for all open bugs. Detailed reports in `/qa/bug-reports/`.

| Bug ID | Title | Severity | Feature | Status | Owner | Sprint |
|--------|-------|----------|---------|--------|-------|--------|
| BUG-001 | Filter date range broken | P1 | shipment-overview | 🚧 In Progress | Alice | 2025-Q1-S01 |
| BUG-002 | Export CSV returns 500 | P2 | shipment-overview | ⏳ Todo | Bob | 2025-Q1-S02 |

**P0 (Critical):** 0
**P1 (High):** 1
**P2 (Medium):** 1
**P3 (Low):** 0
```

### Technical Debt
**File:** `/project-management/issues/technical-debt.md`

```markdown
# Technical Debt

| ID | Description | Impact | Effort | Priority | Created | Owner |
|----|-------------|--------|--------|----------|---------|-------|
| TD-001 | Refactor auth middleware | High | 2 days | P1 | 2025-01-05 | Alice |
| TD-002 | Update deprecated API endpoints | Medium | 3 days | P2 | 2025-01-10 | Bob |
```

### Blockers
**File:** `/project-management/issues/blockers.md`

```markdown
# Active Blockers

| ID | Description | Blocked Stories | Status | Owner | Resolution Target |
|----|-------------|----------------|--------|-------|------------------|
| BLK-001 | API rate limiting in dev | ST-002 | 🚧 In Progress | DevOps | 2025-01-08 |
```

---

## 📈 Level 5: Reporting & Metrics

**File:** `/project-management/reports/2025-01-week-1.md`

```markdown
# Weekly Report - Week of Jan 1-7, 2025

## Summary
- **Sprints Active:** 2025-Q1-S01
- **Stories Completed:** 1/4 (25%)
- **Bugs Fixed:** 0
- **Velocity:** 3 points (target: 16)

## Feature Progress

| Feature | Stage | Progress | Target | Status |
|---------|-------|----------|--------|--------|
| shipment-overview | Development | 25% | Sprint S01 | 🟡 At Risk |
| booking-flow | Planning | 100% | Sprint S02 | 🟢 On Track |

## Risks & Issues
- 🔴 **High:** API rate limiting blocking ST-002
- 🟡 **Medium:** Design for ST-003 not finalized

## Next Week Focus
- [ ] Unblock ST-002 (API issue)
- [ ] Complete ST-002 and ST-003
- [ ] Start ST-005
```

---

## 🔗 Proposed Integrations

### Option A: Pure Markdown (Recommended to Start)
- ✅ All tracking in markdown files
- ✅ Git-friendly, auditable
- ✅ No external dependencies
- ✅ AI-friendly for automation
- ❌ Manual updates required
- ❌ No fancy dashboards

### Option B: Markdown + GitHub Issues/Projects
- Use markdown as source of truth
- Sync key items to GitHub Issues for visibility
- Use GitHub Projects for kanban boards
- Script to export markdown → GitHub Issues

### Option C: Markdown + External Tool (Jira/Linear)
- Markdown tracks feature-level (strategic)
- External tool tracks tasks (operational)
- Sync via scripts in `/tooling/`
- Reference external IDs in markdown

---

## 🛠️ Proposed Tooling Enhancements

### 1. Status Update Script
**File:** `/tooling/project-management/update-status.sh`

```bash
# Update feature status across all tracking files
./update-status.sh shipment-overview --stage="Development" --progress="60%"
```

### 2. Sprint Report Generator
**File:** `/tooling/project-management/generate-sprint-report.sh`

```bash
# Generate sprint summary from tasks and stories
./generate-sprint-report.sh 2025-Q1-S01
```

### 3. Metrics Dashboard (Simple)
**File:** `/tooling/project-management/dashboard.sh`

```bash
# Print current project status to terminal
./dashboard.sh

# Output:
# ====================================
# PROJECT DASHBOARD
# ====================================
# Active Sprint: 2025-Q1-S01
# Features: 2 (1 in dev, 1 in planning)
# Stories: 4 committed, 1 done, 2 in progress
# Bugs: 2 open (1 P1, 1 P2)
# Velocity: 3/16 points (19%)
# ====================================
```

---

## 📋 Implementation Checklist

If you approve this approach, I will:

### Phase 1: Core Structure (1-2 hours)
- [ ] Create `/project-management/` directory structure
- [ ] Create README and templates
- [ ] Enhance `/specs/index.md` with new columns
- [ ] Create first sprint file (2025-Q1-S01)
- [ ] Create roadmap.md and backlog.md
- [ ] Create issue tracking files

### Phase 2: Examples (30 min)
- [ ] Add example sprint with sample stories
- [ ] Add example tasks for one feature
- [ ] Add example weekly report

### Phase 3: Tooling (Future - as needed)
- [ ] Create status update scripts
- [ ] Create report generators
- [ ] Create dashboard script
- [ ] Create sync scripts (if external tool needed)

---

## ❓ Questions for You

Please provide feedback on:

1. **Tracking Levels:** Do you want all 5 levels (Strategic, Tactical, Operational, Issues, Reporting)?
   - Or just some of them?

2. **Sprint Structure:** Are you using 1-week, 2-week, or other sprint lengths?
   - Or not using sprints at all (continuous flow)?

3. **External Tools:** Do you already use Jira, Linear, GitHub Projects, or similar?
   - Should we plan for integration?

4. **Team Size:** How many people will be using this?
   - Solo PO? Small team (2-5)? Larger team?

5. **Reporting:** What reports do you need?
   - Weekly? Daily standups? Monthly?
   - For whom? (Team, stakeholders, leadership?)

6. **Automation Priority:** What should be automated first?
   - Status updates?
   - Report generation?
   - Sprint metrics?

---

## 💡 My Recommendation

**Start Simple, Scale Later:**

1. ✅ **Implement Phase 1** - Core structure with templates
2. ✅ **Use manually** for 1-2 sprints to see what works
3. ✅ **Add automation** where you feel the most pain
4. ✅ **Integrate external tools** only if needed

**Rationale:**
- Markdown is flexible and git-friendly
- Easy to change structure if needs evolve
- Can always add automation later
- Can always sync to external tools later

---

## 🚀 Quick Start (If Approved)

Once you approve, I'll create:
1. `/project-management/` with full structure
2. Templates for sprints, reports, etc.
3. Enhanced `/specs/index.md`
4. Example sprint and tasks for demo purposes
5. README explaining how to use it all

**Estimated Time:** 1-2 hours to set up, 30 min for examples.

---

**What do you think? Should I proceed with this approach, or would you like modifications?**
