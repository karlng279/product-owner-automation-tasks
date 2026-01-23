# Feature Index

This document tracks all features in the product and their status across the PO automation workflow.

## Feature Status Overview

| Feature | PRD | USM | USL | USD | UAT | Design | Dev | QA | Priority | Status |
|---------|-----|-----|-----|-----|-----|--------|-----|-------|----------|--------|
| ONE API Portal MVP | ✅ | ✅ | ✅ | ✅ | ⏳ | ⏳ | ⏳ | ⏳ | P0 | USD Complete |

**Legend:**
- ✅ Complete
- 🚧 In Progress
- ⏳ Not Started
- ❌ Blocked
- 🔄 Needs Update (upstream change)

**Priorities:**
- **P0:** Working on now
- **P1:** Next up
- **P2:** Soon
- **P3:** Someday/Maybe

## Features by ID

| ID Range | Feature | Description | Owner | Priority |
|----------|---------|-------------|-------|----------|
| PRD-001 | ONE API Portal MVP | Developer portal redesign with modern UI/UX | Technical PM | P0 |

## Story ID Allocation

Track story ID ranges to prevent conflicts:

| Story IDs | Feature | Count | Status |
|-----------|---------|-------|--------|
| ST-001 to ST-017 | ONE API Portal MVP | 17 | ✅ Allocated (USM-001) |

## Quick Links

### ONE API Portal MVP (PRD-001)
- **PRD:** [specs/one-api-portal-mvp/prd.md](./one-api-portal-mvp/prd.md) (v0.2)
- **USM:** [specs/one-api-portal-mvp/usm.md](./one-api-portal-mvp/usm.md) (6 activities, 17 stories)
- **USL:** [specs/one-api-portal-mvp/usl.md](./one-api-portal-mvp/po/usl.md) (14 Must-have, 3 Should-have)
- **USD:** [specs/one-api-portal-mvp/usd/](./one-api-portal-mvp/po/usd/) (per-story acceptance criteria files)
- **Status:** USD Complete (2025-12-08)
- **Next:** Create UAT (User Acceptance Tests)

---

## Maintenance Notes

### How to Update This Index

1. **When creating a new feature:**
   - Add row to Feature Status Overview
   - Add row to Features by ID
   - Allocate story ID range
   - Update Quick Links

2. **When completing a stage:**
   - Update status icon (⏳ → 🚧 → ✅)
   - Update last modified date

3. **When upstream changes:**
   - Mark affected stages with 🔄
   - Update downstream artifacts
   - Change back to ✅ when synced

### ID Assignment Rules

- **PRD/USM/USL/USD/UAT:** Sequential per feature (PRD-001, PRD-002, ...)
- **Story IDs (ST-XXX):** Global sequence across all features
- **Activities (ACT-XXX):** Per-USM sequence
- **Steps (STEP-XXX):** Per-USM sequence
- **ACs (AC-XXX):** Per-USD sequence
- **Test Cases (TC-XXX):** Per-UAT sequence

---
*Last updated: 2025-12-30*
