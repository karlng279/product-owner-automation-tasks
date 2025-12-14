# Validators

Scripts to validate specs and artifacts against quality gates and structural rules.

## Available Validators

### validate-prd.js
Validates PRD structure and content.

**Usage:**
```bash
./validate-prd.js <path-to-prd.md>
```

**Example:**
```bash
./validate-prd.js ../../specs/features/shipment-overview/prd.md
```

**Checks:**
- ✅ All 9 mandatory sections present
- ✅ ID format correct (PRD-XXX)
- ✅ Status valid (draft | approved | deprecated)
- ✅ Version format correct (X.Y)
- ✅ Problem statement is specific
- ✅ Goals are measurable
- ✅ Non-goals ≥ 2 items
- ✅ Success metrics have metric_id, description, target
- ✅ Risks have mitigations
- ✅ Questions have owners

---

### validate-usm.js
Validates USM structure.

**Usage:**
```bash
./validate-usm.js <path-to-usm.md>
```

**Checks:**
- ✅ References valid PRD ID
- ✅ Has 3-7 Activities
- ✅ Each Activity has 2-6 Steps
- ✅ Each Step has 1-3 story IDs
- ✅ Story IDs follow format (ST-XXX)

---

### validate-usl.js
Validates USL CSV format and content.

**Usage:**
```bash
./validate-usl.js <path-to-usl.csv>
```

**Checks:**
- ✅ CSV has all required columns
- ✅ Story IDs match those in USM
- ✅ MoSCoW priority is valid
- ✅ User story follows format: "As a... I want... so that..."
- ✅ At least one Must-have story exists
- ✅ Stories are INVEST-compliant

---

### validate-usd.js
Validates USD CSV format and content.

**Usage:**
```bash
./validate-usd.js <path-to-usd.csv>
```

**Checks:**
- ✅ CSV has all required columns
- ✅ Every story in USL has a USD row
- ✅ Acceptance criteria formatted as "- AC-XXX: <condition>"
- ✅ ACs are atomic (one behavior per AC)
- ✅ NFRs are present where applicable

---

### validate-uat.js
Validates UAT CSV format and content.

**Usage:**
```bash
./validate-uat.js <path-to-uat.csv>
```

**Checks:**
- ✅ CSV has all required columns
- ✅ Every Must-have story has ≥1 test case
- ✅ Given/When/Then are present
- ✅ AC references exist in USD
- ✅ Test result is valid (Pass | Failed | Not Testable)
- ✅ Tests are FIRST-aligned

---

### validate-quality-gate.js
Runs all validators for a feature.

**Usage:**
```bash
./validate-quality-gate.js <path-to-feature-directory>
```

**Example:**
```bash
./validate-quality-gate.js ../../specs/features/shipment-overview/
```

**What it does:**
1. Validates prd.md
2. Validates usm.md
3. Validates usl.csv
4. Validates usd.csv
5. Validates uat.csv
6. Reports overall PASS/FAIL

---

## Implementation Status

- [ ] `validate-prd.js` - TODO: Implement
- [ ] `validate-usm.js` - TODO: Implement
- [ ] `validate-usl.js` - TODO: Implement
- [ ] `validate-usd.js` - TODO: Implement
- [ ] `validate-uat.js` - TODO: Implement
- [ ] `validate-quality-gate.js` - TODO: Implement

## How to Create a Validator

### 1. Choose Your Language
- **Node.js** - Good for parsing Markdown and CSV
- **Python** - Good for data validation
- **Bash** - Good for simple checks

### 2. Basic Template (Node.js)

```javascript
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const filePath = process.argv[2];

if (!filePath) {
  console.error('Usage: ./validate-thing.js <file-path>');
  process.exit(1);
}

console.log(`Validating: ${filePath}\n`);

const content = fs.readFileSync(filePath, 'utf-8');
let passed = true;

// Validation logic
if (content.includes('id: PRD-')) {
  console.log('✓ ID format correct');
} else {
  console.log('✗ ID format incorrect');
  passed = false;
}

console.log(`\nResult: ${passed ? 'PASSED' : 'FAILED'}`);
process.exit(passed ? 0 : 1);
```

### 3. Exit Codes
- `0` = All checks passed
- `1` = Validation failed

### 4. Output Format
```
Validating: /path/to/file.md

✓ Check 1 passed
✓ Check 2 passed
✗ Check 3 failed (details)

Result: FAILED (1 issue)
```

## CI/CD Integration

Validators can be integrated into CI/CD pipelines:

**Example: GitHub Actions**
```yaml
name: Validate Specs

on:
  pull_request:
    paths:
      - 'specs/features/**'

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Validate PRD
        run: |
          cd tooling/validators
          ./validate-prd.js ../../specs/features/*/prd.md
```

**Example: Pre-commit Hook**
```bash
#!/bin/bash
for file in $(git diff --cached --name-only | grep "specs/features/.*\.md"); do
  ./tooling/validators/validate-prd.js "$file" || exit 1
done
```

## Quality Gate Reference

### PRD Quality Gate
See: `/po-framework/product-po-automation-spec/stage1-prd/quality-gate.md`

### USL Quality Gate (INVEST)
- **I**ndependent
- **N**egotiable
- **V**aluable
- **E**stimable
- **S**mall
- **T**estable

### UAT Quality Gate (FIRST)
- **F**ast
- **I**ndependent
- **R**epeatable
- **S**elf-validating
- **T**imely

## Related

- **Framework Rules:** `/po-framework/product-po-automation-spec/`
- **Generators:** `/tooling/generators/` (create artifacts to validate)
- **Specs:** `/specs/features/` (artifacts being validated)
