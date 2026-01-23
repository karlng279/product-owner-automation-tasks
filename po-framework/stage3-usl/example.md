# User Story List

**PRD:** PRD-001 - Shipment Overview Dashboard
**USM:** USM-001
**Last Updated:** 2025-01-21

---

## Summary

| Priority | Count | Story Points |
|----------|-------|--------------|
| Must-have | 6 | 24 |
| Should-have | 2 | 6 |
| **Total** | **8** | **30** |

---

## Stories by Module

### Shipment Overview

| ID | Summary | Priority | Status | Points |
|----|---------|----------|--------|--------|
| [ST-001](#st-001-open-shipment-overview-page) | Open Shipment Overview page | Must-have | Draft | 3 |
| [ST-002](#st-002-see-list-of-upcoming-departures) | See list of upcoming departures | Must-have | Draft | 5 |
| [ST-003](#st-003-sort-and-filter-shipments) | Sort and filter shipments | Must-have | Draft | 5 |
| [ST-004](#st-004-view-shipment-details-from-list) | View shipment details from list | Must-have | Draft | 3 |
| [ST-005](#st-005-search-shipment-by-reference) | Search shipment by reference | Must-have | Draft | 5 |
| [ST-006](#st-006-open-shipment-from-search-results) | Open shipment from search results | Must-have | Draft | 3 |
| [ST-007](#st-007-filter-shipments-by-delayed-status) | Filter shipments by delayed status | Should-have | Draft | 3 |
| [ST-008](#st-008-review-list-of-delayed-shipments) | Review list of delayed shipments | Should-have | Draft | 3 |

---

## Story Details

### ST-001: Open Shipment Overview page

- **Activity:** ACT-001 / **Step:** STEP-001
- **Module:** Shipment Overview
- **Priority:** Must-have
- **Status:** Draft
- **Story Points:** 3
- **Tags:** shipment-overview, entry-point, MVP
- **Dependencies:** —
- **Jira:** —

> As an operations user, I want to open the Shipment Overview page so that I can see all my active shipments in one place.

---

### ST-002: See list of upcoming departures

- **Activity:** ACT-001 / **Step:** STEP-002
- **Module:** Shipment Overview
- **Priority:** Must-have
- **Status:** Draft
- **Story Points:** 5
- **Tags:** shipment-overview, list, upcoming, MVP
- **Dependencies:** ST-001
- **Jira:** —

> As an operations user, I want to see a list of upcoming shipment departures so that I can prepare resources and plan my workload.

---

### ST-003: Sort and filter shipments

- **Activity:** ACT-001 / **Step:** STEP-002
- **Module:** Shipment Overview
- **Priority:** Must-have
- **Status:** Draft
- **Story Points:** 5
- **Tags:** filters, sorting, MVP
- **Dependencies:** ST-001, ST-002
- **Jira:** —

> As an operations user, I want to sort and filter shipments by ETD, ETA, POL, POD and status so that I can quickly focus on relevant shipments.

---

### ST-004: View shipment details from list

- **Activity:** ACT-001 / **Step:** STEP-003
- **Module:** Shipment Overview
- **Priority:** Must-have
- **Status:** Draft
- **Story Points:** 3
- **Tags:** shipment-detail, drilldown, MVP
- **Dependencies:** ST-002
- **Jira:** —

> As an operations user, I want to open a shipment detail view from the overview list so that I can confirm ETD/ETA, service and container count.

---

### ST-005: Search shipment by reference

- **Activity:** ACT-002 / **Step:** STEP-004
- **Module:** Shipment Overview
- **Priority:** Must-have
- **Status:** Draft
- **Story Points:** 5
- **Tags:** search, booking, customer-ref, MVP
- **Dependencies:** ST-001
- **Jira:** —

> As an operations user, I want to search shipments by booking number or customer reference so that I can quickly answer customer inquiries.

---

### ST-006: Open shipment from search results

- **Activity:** ACT-002 / **Step:** STEP-005
- **Module:** Shipment Overview
- **Priority:** Must-have
- **Status:** Draft
- **Story Points:** 3
- **Tags:** search, result-selection, MVP
- **Dependencies:** ST-005
- **Jira:** —

> As an operations user, I want to open a shipment from the search results so that I can verify its latest status and details.

---

### ST-007: Filter shipments by delayed status

- **Activity:** ACT-003 / **Step:** STEP-006
- **Module:** Shipment Overview
- **Priority:** Should-have
- **Status:** Draft
- **Story Points:** 3
- **Tags:** filters, delays, exceptions
- **Dependencies:** ST-003
- **Jira:** —

> As an operations user, I want to filter shipments by delayed status so that I can focus on problem shipments that need attention.

---

### ST-008: Review list of delayed shipments

- **Activity:** ACT-003 / **Step:** STEP-007
- **Module:** Shipment Overview
- **Priority:** Should-have
- **Status:** Draft
- **Story Points:** 3
- **Tags:** exceptions, communication, delays
- **Dependencies:** ST-007
- **Jira:** —

> As an operations user, I want to review a list of delayed shipments so that I can decide which customers or internal teams need to be informed.
