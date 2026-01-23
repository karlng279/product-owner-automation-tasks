# ST-001: Test Cases

**Story:** Open Shipment Overview page
**USD Reference:** [ST-001 in usd/](../usd/ST-001.md)
**Last Updated:** 2025-01-21

---

## TC-001: Open Shipment Overview with active shipments (P0)

**Scenario:** Open Shipment Overview with active shipments
**Precondition:** User account has at least one active shipment

| Step | Description |
|------|-------------|
| **Given** | I am a logged-in operations user |
| **When** | I open the Shipment Overview page from the main navigation |
| **Then** | I see a table listing my active shipments with columns: Booking No, Customer Reference, POL, POD, ETD, ETA, Service, Status, Container Count |

- **AC References:** AC-001, AC-002, AC-003, AC-006, AC-007
- **Test Result:** Not Tested
- **Notes:** Covers base happy path for Shipment Overview.

---

## TC-002: Open Shipment Overview with no active shipments (P1)

**Scenario:** Open Shipment Overview with no active shipments
**Precondition:** User account has no active shipments

| Step | Description |
|------|-------------|
| **Given** | I am a logged-in operations user |
| **When** | I open the Shipment Overview page from the main navigation |
| **Then** | I see an empty state message explaining that there are no active shipments instead of a blank table |

- **AC References:** AC-003, AC-005, AC-008
- **Test Result:** Not Tested
- **Notes:** Verifies messaging and no-table behaviour.

---

## TC-003: Handle Shipment Overview API error (P1)

**Scenario:** Handle Shipment Overview API error
**Precondition:** Shipment API is temporarily unavailable

| Step | Description |
|------|-------------|
| **Given** | I am a logged-in operations user |
| **When** | I open the Shipment Overview page |
| **Then** | I see a generic error banner with guidance to contact support, and no outdated shipment data is displayed |

- **AC References:** AC-009
- **Test Result:** Not Tested
- **Notes:** Negative scenario for API failure.

---

## Summary

| Test Case | Priority | AC Coverage | Result |
|-----------|----------|-------------|--------|
| TC-001 | P0 | AC-001, AC-002, AC-003, AC-006, AC-007 | Not Tested |
| TC-002 | P1 | AC-003, AC-005, AC-008 | Not Tested |
| TC-003 | P1 | AC-009 | Not Tested |

---

## AC Coverage Matrix

| AC ID | Test Cases |
|-------|------------|
| AC-001 | TC-001 |
| AC-002 | TC-001 |
| AC-003 | TC-001, TC-002 |
| AC-005 | TC-002 |
| AC-006 | TC-001 |
| AC-007 | TC-001 |
| AC-008 | TC-002 |
| AC-009 | TC-003 |
