# Example PRD – Shipment Overview – Basic Dashboard

Below is a sample PRD written according to the Stage 1 rules.  It describes a basic shipment overview dashboard for small and mid‑size shippers.

```
# PRD: Shipment Overview – Basic Dashboard
id: PRD‑001
version: 0.1
owner: Karl
status: draft
last_updated: 2025‑12‑04

## 1. Summary
We are building a basic Shipment Overview dashboard for small and mid‑size shippers.  It will display a consolidated list of active shipments with key information such as origin, destination, ETD/ETA, status and container count.  The MVP focuses on giving users a single place to track shipments without digging through emails or PDFs.

## 2. Problem Statement
### 2.1 Pain Points
  - Shippers currently track shipments across emails, spreadsheets and carrier portals, leading to missed updates and duplicated work.
  - Users have no single, trusted view of “what is moving where,” making it hard to answer customer questions quickly.
  - Existing carrier portals are often too complex for SME users and hide key data behind multiple clicks.

### 2.2 Opportunities
  - Provide a simplified “single pane of glass” that aggregates shipment data in one view.
  - Become the default entry point for future value‑added features such as alerts and compliance checks.

## 3. Goals & Non‑Goals
### 3.1 Business Goals
  - Achieve at least 60 % weekly active usage among onboarded customers within three months of launch.
  - Reduce average time to answer “Where is my shipment?” queries by 30 % for pilot customers.
  - Increase retention for digital users by providing a sticky, daily‑use surface.

### 3.2 User Goals
  - Quickly see all active shipments and their current status in one place.
  - Filter and search shipments by key attributes (booking number, POL/POD).
  - Drill into a single shipment to see essential details.

### 3.3 Non‑Goals
  - No advanced analytics or historical dashboards in MVP.
  - No multi‑org permissions model (single company account only).
  - No integration with external TMS/ERP systems in MVP.

## 4. Narrative / Use Cases
**Use Case 1 – Daily operations check**
Lan logs in each morning, opens the Shipment Overview and scans shipments departing in the next seven days to prepare resources.

**Use Case 2 – Customer inquiry**
A customer calls asking about a shipment.  Lan searches by the customer’s reference number, opens the shipment and confirms the latest ETD/ETA within seconds.

**Use Case 3 – Exception monitoring**
Lan filters the overview by delayed status to see which shipments have schedule changes and notes which customers need to be informed.

## 5. Scope & Constraints
### 5.1 In Scope
  - Web‑based Shipment Overview page listing active shipments.
  - Columns: Booking No, Customer Ref, POL, POD, ETD, ETA, Service, Status, Container Count.
  - Filters: POL, POD, ETD range, ETA range, Status.
  - Text search on Booking No and Customer Reference.
  - Link from each row to a simple shipment detail view.

### 5.2 Out of Scope
  - Email or in‑app notifications for status changes.
  - Role‑based access control for multiple user types.
  - Mobile app beyond standard responsive design.

### 5.3 Constraints & Assumptions
  - Shipment data comes from the existing core system API (read‑only).
  - Only 100 rows are loaded by default with pagination.
  - Initial version supports one timezone (system default).

## 6. Success Metrics
  - metric_id: MET‑001
    description: At least 60 % of onboarded users view the overview page at least once per week.
    target: ≥ 60 % WAU among onboarded users by month 3.
  - metric_id: MET‑002
    description: Average time spent to find a shipment is reduced compared with baseline.
    target: ≥ 30 % reduction vs pre‑MVP baseline.
  - metric_id: MET‑003
    description: Number of support tickets tagged “Where is my shipment?” from pilot customers.
    target: 20 % reduction within three months of launch.

## 7. Links
  - design_figma: N/A
  - wireframe_text: ./wireframes/PRD‑001‑shipment‑overview‑wireframe.md
  - special_notes: ./notes/PRD‑001‑shipment‑overview‑notes.md

## 8. Technical Considerations
  - Frontend: Next.js using existing design system components.
  - Backend: Read‑only integration with the shipment API for listing and detail views.
  - Authentication: Reuse existing login and session management; only authenticated users can access the overview.
  - Infrastructure: Deploy on the existing web stack; no new environment required.
  - Logging & Monitoring: Basic page‑view tracking and error logging through existing APM tools.

## 9. Risks & Open Questions
### 9.1 Risks
  - id: RISK‑001
    description: Shipment API may have performance or data quality issues impacting accuracy.
    mitigation: Pilot with a small cohort; log anomalies and work with the core system team.
  - id: RISK‑002
    description: Users may expect more advanced features and be disappointed by a simple MVP.
    mitigation: Manage expectations during onboarding and communicate the roadmap.

### 9.2 Open Questions
  - id: Q‑001
    description: Should we support multiple customer reference types from day one?
    owner: Karl
  - id: Q‑002
    description: Should cancelled shipments appear in the same view or be excluded?
    owner: Product + Ops
```