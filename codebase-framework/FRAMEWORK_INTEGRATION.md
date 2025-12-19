# Framework Integration Guide

> How to translate PO and Design specifications into working code

## Overview

This guide shows you exactly how to go from product specifications and design specs to implemented code. Each section includes concrete examples showing the transformation from documentation to working Next.js components.

**Complete Flow:**
```
PRD → USD → UAT → Wireframes → Components → Interactions → Code
```

---

## Table of Contents

1. [From PO Framework to Code](#from-po-framework-to-code)
   - [PRD → Code Understanding](#prd--code-understanding)
   - [USD → Component Features](#usd--component-features)
   - [UAT → Playwright Tests](#uat--playwright-tests)

2. [From Design Framework to Code](#from-design-framework-to-code)
   - [Wireframes → JSX Structure](#wireframes--jsx-structure)
   - [Component Specs → ShadCN Usage](#component-specs--shadcn-usage)
   - [Interactions → State + Handlers](#interactions--state--handlers)

3. [Complete Example](#complete-example-end-to-end)

---

## From PO Framework to Code

### PRD → Code Understanding

The PRD provides the business context and requirements that inform your technical decisions.

**PRD Section** | **Code Impact** | **Example**
---|---|---
Problem Statement | Feature scope | "Users can't track API usage" → Build usage dashboard
Target Users | UX decisions | "Technical PMs" → Show detailed metrics, not simplified
Success Metrics | Logging/analytics | "Track API calls" → Add analytics events
User Stories | Features to build | "View usage by endpoint" → Build endpoint filter

**Example PRD Excerpt:**
```markdown
## Problem Statement
API consumers cannot track their usage across different endpoints, making it
difficult to optimize costs and identify performance issues.

## Target Users
- Technical Product Managers who need detailed analytics
- Developers debugging API integration issues
```

**Code Impact:**
```typescript
// This tells us to build:
// 1. A detailed analytics dashboard (not simplified)
// 2. Endpoint-level filtering
// 3. Cost tracking features
// 4. Performance metrics display
```

---

### USD → Component Features

User Story Details (USD) acceptance criteria map directly to component features.

**USD Format:**
```csv
Story ID,Acceptance Criteria ID,Acceptance Criteria
US-001,AC-001-1,"User can view total API calls for the current month"
US-001,AC-001-2,"User can filter API calls by endpoint"
US-001,AC-001-3,"System displays response time percentiles (p50, p95, p99)"
```

**Code Translation:**

```typescript
// app/dashboard/page.tsx
export default function DashboardPage() {
  const [period, setPeriod] = useState('month')  // AC-001-1
  const [endpoint, setEndpoint] = useState('all') // AC-001-2

  return (
    <div>
      {/* AC-001-1: Total API calls */}
      <Card>
        <h3>Total API Calls</h3>
        <p>{totalCalls}</p>
      </Card>

      {/* AC-001-2: Endpoint filter */}
      <Select value={endpoint} onChange={setEndpoint}>
        <option value="all">All Endpoints</option>
        <option value="/users">/users</option>
        <option value="/products">/products</option>
      </Select>

      {/* AC-001-3: Response time percentiles */}
      <Card>
        <h3>Response Times</h3>
        <dl>
          <dt>p50</dt>
          <dd>{metrics.p50}ms</dd>
          <dt>p95</dt>
          <dd>{metrics.p95}ms</dd>
          <dt>p99</dt>
          <dd>{metrics.p99}ms</dd>
        </dl>
      </Card>
    </div>
  )
}
```

**Mapping Rules:**

Acceptance Criteria | Code Implementation
---|---
"User can view X" | Display component showing X
"User can filter by Y" | Dropdown/input for Y + filtering logic
"User can click Z" | Button/link with onClick handler
"System displays A" | Auto-updating display of A
"System validates B" | Validation logic with error display
"User receives confirmation" | Toast/modal after action

---

### UAT → Playwright Tests

User Acceptance Tests (UAT) in Given/When/Then format convert directly to Playwright tests.

**UAT Format:**
```csv
Test ID,Story ID,Test Scenario,Given,When,Then
UAT-001,US-001,"View monthly API usage","I am on the dashboard page","I view the metrics","I see total API calls for current month"
UAT-002,US-001,"Filter by endpoint","I am on the dashboard page","I select '/users' from endpoint filter","I see only /users API calls"
```

**Playwright Test:**

```typescript
// tests/dashboard.spec.ts
import { test, expect } from '@playwright/test'

// UAT-001
test('View monthly API usage', async ({ page }) => {
  // Given: I am on the dashboard page
  await page.goto('/dashboard')

  // When: I view the metrics
  const metricsCard = page.locator('[data-testid="total-calls"]')

  // Then: I see total API calls for current month
  await expect(metricsCard).toBeVisible()
  await expect(metricsCard).toContainText(/\d+ calls/)
})

// UAT-002
test('Filter by endpoint', async ({ page }) => {
  // Given: I am on the dashboard page
  await page.goto('/dashboard')

  // When: I select '/users' from endpoint filter
  await page.selectOption('[data-testid="endpoint-filter"]', '/users')

  // Then: I see only /users API calls
  const table = page.locator('[data-testid="api-calls-table"]')
  const rows = table.locator('tbody tr')
  await expect(rows.first()).toContainText('/users')
  // Verify no other endpoints are shown
  await expect(rows.first()).not.toContainText('/products')
})
```

**Conversion Pattern:**

UAT Component | Playwright Code
---|---
Given | `await page.goto()` or initial state setup
When | `await page.click()` or `await page.fill()`
Then | `await expect().toBeVisible()` or similar assertion

---

## From Design Framework to Code

### Wireframes → JSX Structure

Wireframes (WF-XXX) define page layout. ASCII diagrams map to HTML/JSX structure.

**Wireframe Example:**
```
WF-001: Dashboard Page

┌─────────────────────────────────────┐
│ Header: "API Usage Dashboard"       │
├─────────────────────────────────────┤
│ ┌─────────┐ ┌─────────┐ ┌─────────┐│
│ │ Card 1  │ │ Card 2  │ │ Card 3  ││
│ │ Total   │ │ Avg     │ │ Errors  ││
│ │ 12,450  │ │ 145ms   │ │ 23      ││
│ └─────────┘ └─────────┘ └─────────┘│
├─────────────────────────────────────┤
│ ┌─────────────────────────────────┐ │
│ │ Table: Recent API Calls         │ │
│ │ [Endpoint] [Time] [Status]      │ │
│ │ /users     10ms    200          │ │
│ │ /products  25ms    200          │ │
│ └─────────────────────────────────┘ │
└─────────────────────────────────────┘
```

**JSX Implementation:**

```typescript
// app/dashboard/page.tsx
export default function DashboardPage() {
  return (
    <div className="container mx-auto p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-6">
        API Usage Dashboard
      </h1>

      {/* Cards Row */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {/* Card 1: Total */}
        <Card>
          <CardHeader>
            <CardTitle>Total</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">12,450</p>
          </CardContent>
        </Card>

        {/* Card 2: Avg */}
        <Card>
          <CardHeader>
            <CardTitle>Avg Response</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">145ms</p>
          </CardContent>
        </Card>

        {/* Card 3: Errors */}
        <Card>
          <CardHeader>
            <CardTitle>Errors</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-red-600">23</p>
          </CardContent>
        </Card>
      </div>

      {/* Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent API Calls</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={columns}
            data={recentCalls}
          />
        </CardContent>
      </Card>
    </div>
  )
}
```

**Mapping Rules:**

Wireframe Element | JSX/Component
---|---
Box/Rectangle | `<Card>` or `<div>`
Header text | `<h1>`, `<h2>`, etc.
List of items | `<ul>` or `<DataTable>`
Button | `<Button>`
Input field | `<Input>` or `<Select>`
Grid layout | `grid grid-cols-X`
Stacked layout | `flex flex-col`

---

### Component Specs → ShadCN Usage

Component specifications (COMP-XXX) map directly to ShadCN component usage.

**Component Spec Example:**
```markdown
## COMP-001: Total Calls Card

**Component:** Card
**Variant:** Default
**Props:**
- className: "border-2"

**Children:**
- CardHeader with CardTitle "Total Calls"
- CardContent with:
  - Text (4xl, bold): Total count
  - Text (sm, muted): "This month"

**Actions:** None (display only)
```

**Code Implementation:**

```typescript
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

function TotalCallsCard({ total }: { total: number }) {
  return (
    <Card className="border-2">
      <CardHeader>
        <CardTitle>Total Calls</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-4xl font-bold">{total.toLocaleString()}</p>
        <p className="text-sm text-muted-foreground">This month</p>
      </CardContent>
    </Card>
  )
}
```

**Common Component Mappings:**

Spec Says | Use This ShadCN Component
---|---
"Button (primary)" | `<Button variant="default">`
"Button (secondary)" | `<Button variant="secondary">`
"Input field (text)" | `<Input type="text">`
"Dropdown select" | `<Select>`
"Card container" | `<Card>`
"Table with sorting" | `<DataTable>` (TanStack Table)
"Modal dialog" | `<Dialog>`
"Toast notification" | `toast()` from `use-toast`
"Loading spinner" | `<Spinner>` or skeleton

---

### Interactions → State + Handlers

Interaction diagrams (INT-XXX) define state transitions and event handlers.

**Interaction Example:**
```markdown
## INT-001: Endpoint Filter Interaction

**States:**
1. Initial: All endpoints shown
2. Filtering: Selected endpoint shown
3. Empty: No results for filter

**Transitions:**
- User selects endpoint → Go to Filtering state
- User selects "All" → Go to Initial state
- Filter returns 0 results → Go to Empty state

**Events:**
- onFilterChange(endpoint)

**State Diagram:**
[Initial] --select endpoint--> [Filtering]
[Filtering] --select "all"--> [Initial]
[Filtering] --no results--> [Empty]
[Empty] --select different--> [Filtering]
```

**Code Implementation:**

```typescript
'use client'

import { useState, useMemo } from 'react'
import { Select } from '@/components/ui/select'
import { DataTable } from '@/components/shared/data-table'

export default function ApiCallsTable({ calls }) {
  // State management
  const [selectedEndpoint, setSelectedEndpoint] = useState('all')

  // Filtering logic (Transition: Initial → Filtering)
  const filteredCalls = useMemo(() => {
    if (selectedEndpoint === 'all') {
      return calls // Initial state
    }
    return calls.filter(call => call.endpoint === selectedEndpoint)
  }, [calls, selectedEndpoint])

  // Event handler
  const handleFilterChange = (endpoint: string) => {
    setSelectedEndpoint(endpoint)
  }

  // Empty state check
  const isEmpty = filteredCalls.length === 0

  return (
    <div>
      {/* Filter Control */}
      <Select
        value={selectedEndpoint}
        onValueChange={handleFilterChange}
      >
        <option value="all">All Endpoints</option>
        <option value="/users">/users</option>
        <option value="/products">/products</option>
      </Select>

      {/* State: Filtering or Initial */}
      {!isEmpty && (
        <DataTable data={filteredCalls} columns={columns} />
      )}

      {/* State: Empty */}
      {isEmpty && (
        <div className="text-center py-8 text-muted-foreground">
          No results for {selectedEndpoint}
        </div>
      )}
    </div>
  )
}
```

**Mapping Rules:**

Interaction Element | React Code
---|---
States | useState variables
Transitions | State setters
Events | Event handlers (onClick, onChange)
Conditions | Conditional rendering
Async actions | useEffect or async handlers

---

## Complete Example: End-to-End

Let's trace a complete feature from PO specs → Design specs → Code.

### 1. PRD Excerpt

```markdown
## User Story
As a product manager, I want to view API usage by endpoint, so that I can
identify which endpoints are most popular and optimize accordingly.
```

### 2. USD (Acceptance Criteria)

```csv
Story ID,AC ID,Acceptance Criteria
US-005,AC-005-1,"User can see a list of all endpoints"
US-005,AC-005-2,"User can see call count for each endpoint"
US-005,AC-005-3,"User can sort endpoints by call count"
US-005,AC-005-4,"User can click an endpoint to see details"
```

### 3. UAT (Test Scenario)

```csv
Test ID,Given,When,Then
UAT-005,"Dashboard loaded","I click on endpoint column header","Endpoints are sorted by call count"
```

### 4. Wireframe (WF-005)

```
┌──────────────────────────────────┐
│ Endpoints Usage                   │
├──────────────────────────────────┤
│ [Sort] Endpoint    | Calls   | % │
│  ▼     /users      | 5,230   | 42│
│        /products   | 3,100   | 25│
│        /orders     | 2,890   | 23│
└──────────────────────────────────┘
```

### 5. Component Spec (COMP-005)

```markdown
**Component:** DataTable (TanStack Table)
**Columns:**
- Endpoint (string, sortable)
- Calls (number, sortable)
- Percentage (number, calculated)

**Features:**
- Click column header to sort
- Click row to navigate to endpoint details
```

### 6. Interaction (INT-005)

```markdown
**Events:**
- onSort(column) → Update sort state
- onRowClick(endpoint) → Navigate to /endpoints/[id]

**States:**
- Unsorted (initial)
- Sorted ascending
- Sorted descending
```

### 7. Final Code

```typescript
// app/endpoints/page.tsx
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { DataTable } from '@/components/shared/data-table'
import { ColumnDef } from '@tanstack/react-table'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

// Type from USD requirements
interface EndpointUsage {
  endpoint: string      // AC-005-1
  calls: number        // AC-005-2
  percentage: number   // Calculated
}

export default function EndpointsPage() {
  const router = useRouter()
  const [data, setData] = useState<EndpointUsage[]>([])

  // Load data (dummy for now)
  useEffect(() => {
    fetch('/api/endpoints/usage')
      .then(res => res.json())
      .then(setData)
  }, [])

  // AC-005-3: Sortable columns
  const columns: ColumnDef<EndpointUsage>[] = [
    {
      accessorKey: 'endpoint',
      header: 'Endpoint',
      enableSorting: true,
    },
    {
      accessorKey: 'calls',
      header: 'Calls',
      enableSorting: true, // AC-005-3
      cell: ({ row }) => row.original.calls.toLocaleString(),
    },
    {
      accessorKey: 'percentage',
      header: '%',
      cell: ({ row }) => `${row.original.percentage}%`,
    },
  ]

  // AC-005-4: Click to see details
  const handleRowClick = (endpoint: EndpointUsage) => {
    router.push(`/endpoints/${encodeURIComponent(endpoint.endpoint)}`)
  }

  return (
    <div className="container mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Endpoints Usage</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={columns}
            data={data}
            onRowClick={handleRowClick}
          />
        </CardContent>
      </Card>
    </div>
  )
}
```

### 8. Playwright Test (from UAT-005)

```typescript
// tests/endpoints.spec.ts
import { test, expect } from '@playwright/test'

test('Sort endpoints by call count', async ({ page }) => {
  // Given: Dashboard loaded
  await page.goto('/endpoints')
  await page.waitForSelector('[data-testid="endpoints-table"]')

  // When: I click on endpoint column header
  await page.click('th:has-text("Calls")')

  // Then: Endpoints are sorted by call count
  const firstRow = page.locator('tbody tr').first()
  const firstValue = await firstRow.locator('td').nth(1).textContent()

  // Should show highest call count first
  expect(firstValue).toContain('5,230')
})
```

---

## Quick Reference

### From PO Framework

PO Artifact | Code Action
---|---
PRD | Understand requirements, inform architecture
USD | Implement acceptance criteria as features
UAT | Convert to Playwright tests

### From Design Framework

Design Artifact | Code Action
---|---
Wireframe | Create JSX structure matching layout
Component Spec | Use specified ShadCN components with props
Interaction | Implement state + event handlers

### Traceability

Always maintain links between specs and code:

```typescript
// AC-005-2: User can see call count for each endpoint
<DataTable columns={columns} data={endpoints} />

// INT-005: Sort interaction
const [sortBy, setSortBy] = useState<SortColumn>('calls')
```

This helps with:
- Code reviews
- Debugging
- Future maintenance
- Verification during UAT

---

## Best Practices

### 1. Use Data Test IDs

Link tests to acceptance criteria:

```typescript
<Button data-testid="filter-button-ac-005-2">
  Filter
</Button>
```

### 2. Comment with Spec References

```typescript
// USD AC-005-3: Sort endpoints by call count
const sortedEndpoints = endpoints.sort((a, b) => b.calls - a.calls)
```

### 3. Match Naming Conventions

If design spec says "Primary CTA Button", name your component:

```typescript
<Button variant="default" id="primary-cta">
  Get Started
</Button>
```

### 4. Validate Against Specs

Before marking complete, check:
- ✅ All acceptance criteria implemented
- ✅ All UAT scenarios pass
- ✅ Wireframe layout matches
- ✅ Component specs followed
- ✅ Interactions work as specified

---

## Next Steps

1. **Review Specs:** Start with PRD, USD, UAT for your feature
2. **Review Designs:** Check wireframes, component specs, interactions
3. **Follow Examples:** Use patterns from this guide
4. **Write Tests First:** Convert UAT to Playwright tests before coding
5. **Implement Features:** Build following acceptance criteria
6. **Verify:** Run tests, check against specs

---

**Related Documentation:**
- [Quick Start Guide](QUICK_START.md)
- [Component Patterns](component-patterns/)
- [State Management](state-management/)
- [Testing Patterns](testing-patterns/)

**Last Updated:** 2025-12-19
