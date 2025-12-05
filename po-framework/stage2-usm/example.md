# Example USM – Shipment Overview – Basic Dashboard

This example User Story Map corresponds to the example PRD in Stage 1.  It follows the USM rules and uses story IDs that will later appear in the User Story List.

```
# USM: Shipment Overview – Basic Dashboard
id: USM‑001
prd_id: PRD‑001
owner: Karl
status: draft
last_updated: 2025‑12‑04

## User Activities

  - activity_id: ACT‑001
    name: "Monitor active shipments"
    description: "User scans and monitors all active shipments to stay on top of operations."
    steps:
      - step_id: STEP‑001
        name: "Open Shipment Overview"
        description: "User logs in and navigates to the Shipment Overview page."
        stories: [ST‑001]
      - step_id: STEP‑002
        name: "Scan upcoming departures"
        description: "User reviews shipments departing in the next few days to understand workload and priorities."
        stories: [ST‑002, ST‑003]
      - step_id: STEP‑003
        name: "Check shipment details"
        description: "User opens a single shipment to confirm ETD/ETA, service and container count."
        stories: [ST‑004]

  - activity_id: ACT‑002
    name: "Look up a specific shipment"
    description: "User searches for a specific shipment when responding to a customer or internal inquiry."
    steps:
      - step_id: STEP‑004
        name: "Search by reference"
        description: "User searches by booking number or customer reference."
        stories: [ST‑005]
      - step_id: STEP‑005
        name: "Open shipment from search results"
        description: "User selects the correct shipment from the results and opens its detail view."
        stories: [ST‑006]

  - activity_id: ACT‑003
    name: "Review delayed shipments"
    description: "User focuses on shipments with schedule changes to plan communication."
    steps:
      - step_id: STEP‑006
        name: "Filter by delayed status"
        description: "User applies a status filter to show only delayed shipments."
        stories: [ST‑007]
      - step_id: STEP‑007
        name: "Review impact of delays"
        description: "User reviews delayed shipments and notes which customers need to be informed."
        stories: [ST‑008]

## Notes
  - Story IDs (ST‑001 to ST‑008) will be defined in the USL for PRD‑001.
  - Activities align with the three main use cases described in the PRD: daily check, customer inquiry and exception monitoring.
  - Release slicing (MVP vs post‑MVP) will be handled via MoSCoW priorities in the USL.
```