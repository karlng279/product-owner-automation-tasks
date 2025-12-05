# Feature Index

This document tracks all features in the product and their status across the PO automation workflow.

## Feature Status Overview

| Feature | PRD | USM | USL | USD | UAT | Design | Dev | QA | Priority | Status |
|---------|-----|-----|-----|-----|-----|--------|-----|-------|----------|--------|
| *No features yet* | - | - | - | - | - | - | - | - | - | - |

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
| PRD-001 | *Reserved* | First feature | TBD | TBD |

## Story ID Allocation

Track story ID ranges to prevent conflicts:

| Story IDs | Feature | Count | Status |
|-----------|---------|-------|--------|
| ST-001 to ST-XXX | *Reserved for first feature* | TBD | ⏳ Not Allocated |

## Quick Links

*No features yet. Use the generator to create your first feature:*

```bash
cd tooling/generators
./new-feature.sh your-feature-name
```

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

**Example:**
```
Feature: shipment-overview
  PRD-001, USM-001, USL-001, USD-001, UAT-001
  Stories: ST-001 to ST-008

Feature: booking-flow
  PRD-002, USM-002, USL-002, USD-002, UAT-002
  Stories: ST-009 to ST-020 (continues from previous feature)
```

---

*Last updated: 2025-12-05*
