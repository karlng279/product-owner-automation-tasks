# User Story Map: Container Auction & Marketplace
id: USM-002
source_prd: PRD-002
status: draft
last_updated: 2025-12-23

## 1. User Activities (The Backbone)
The high-level activities a user performs in the system.

| Activity | Description |
| :--- | :--- |
| **Account Management** | Registration, login, and profile management for all roles. |
| **Inventory Management** | Sellers listing containers and managing their active auctions. |
| **Discovery & Bidding** | Buyers finding containers and participating in auctions. |
| **Transaction Fulfillment** | Post-auction steps: payment instructions and handover. |
| **Platform Administration** | Admin oversight of users, listings, and system health. |

## 2. User Tasks (The Skeleton)
Breaking down activities into specific tasks.

### 2.1 Account Management
- **Register Account**: Sign up as Buyer or Seller.
- **Login/Logout**: Secure access to the platform.
- **Manage Profile**: Update contact info and business details.

### 2.2 Inventory Management (Seller)
- **Create Listing**: Input container details (Type, Condition, Photos) and auction parameters (Start Price, Duration).
- **Manage Listings**: View active, scheduled, and ended listings.
- **Edit Listing**: Modify details (only if no bids placed).
- **Cancel Listing**: Remove listing (with restrictions).

### 2.3 Discovery & Bidding (Buyer)
- **Browse Listings**: View list of active auctions with filters (Location, Type, Condition).
- **View Details**: See full container specs, photos, and bid history.
- **Place Bid**: Submit a bid higher than current price + increment.
- **Watch Listing**: Add to watchlist for updates.

### 2.4 Transaction Fulfillment
- **View Auction Results**: See won/lost status.
- **Receive Payment Instructions**: Winner gets details on how to pay.
- **Confirm Handover**: (Manual/Simple) Mark transaction as complete.

### 2.5 Platform Administration (Admin)
- **User Management**: Approve/Ban users.
- **Listing Moderation**: Review and remove inappropriate listings.
- **Dashboard**: View platform metrics (Active Auctions, Total Volume).

## 3. Release Slicing (MVP vs. Later)

| Task | MVP (Phase 1) | Phase 2 (Post-MVP) |
| :--- | :--- | :--- |
| **Register** | Simple Email/Pass | OAuth (Google/Microsoft), KYC Verification |
| **Create Listing** | Basic Form, Image Upload | Bulk Upload, Templates |
| **Bidding** | Manual Bidding, Auto-refresh | Auto-bidding (Proxy), Real-time Sockets |
| **Payment** | Manual Instructions (Bank Transfer) | Integrated Payment Gateway (Stripe) |
| **Notifications** | In-app Toast | Email/SMS Notifications |
| **Admin** | Basic Table Views | Advanced Analytics, Dispute Resolution |
