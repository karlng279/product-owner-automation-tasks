# ST-001: Acceptance Criteria

**Story:** Open Shipment Overview page
**USL Reference:** [ST-001 in usl.md](../usl.md#st-001-open-shipment-overview-page)
**Last Updated:** 2025-01-21

---

## UI Elements

- **AC-001:** Shipment Overview page is accessible from the main navigation menu.
- **AC-002:** Page title shows "Shipment Overview".
- **AC-003:** Default view shows a table listing shipments with columns:
  - Booking No
  - Customer Reference
  - POL (Port of Loading)
  - POD (Port of Discharge)
  - ETD (Estimated Time of Departure)
  - ETA (Estimated Time of Arrival)
  - Service
  - Status
  - Container Count

---

## UI Behavior

- **AC-004:** When the user clicks "Shipment Overview" in the navigation, the page loads without full browser reload (SPA navigation).
- **AC-005:** When the page loads and the user has no active shipments, an empty state message is shown instead of a blank table.

---

## Logic

- **AC-006:** Only shipments belonging to the logged-in user's company are displayed.
- **AC-007:** By default, only shipments with status in [Active, Loaded, In Transit] appear in the overview.

---

## Special Notes

- **AC-008:** Empty state message follows UX copy spec EMP-OV-001.
- **AC-009:** If the shipment API returns an error, a generic error banner with support guidance is shown.

---

## Non-Functional Requirements

- **NFR-001:** Initial page render completes within 2 seconds for 95% of users.
- **NFR-002:** API errors are logged with a correlation ID for debugging.

---

## Dependencies

| Type | ID | Description |
|------|-----|-------------|
| Story | ST-010 | User authentication and session management |
| Technical | TECH-API-01 | Shipment API endpoint available |

---

## Estimate

**Story Points:** 3

---

## Traceability

| AC ID | UAT Reference | Design Reference |
|-------|---------------|------------------|
| AC-001 | TC-001 | WF-001 |
| AC-002 | TC-001 | WF-001 |
| AC-003 | TC-001, TC-002 | WF-001, COMP-001 |
| AC-004 | TC-001 | INT-001 |
| AC-005 | TC-003 | WF-001 |
