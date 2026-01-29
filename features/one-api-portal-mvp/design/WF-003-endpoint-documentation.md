# WF-003: Endpoint Documentation Wireframe

**Feature:** ONE API Portal MVP
**Page:** Individual Endpoint Documentation
**User Stories:** ST-006, ST-007, ST-012
**Created:** 2025-12-21
**Status:** Draft

---

## Purpose

The Endpoint Documentation page provides comprehensive, developer-ready information for a single API endpoint. It must:
- Display all technical details needed to integrate the endpoint
- Present code examples in multiple programming languages
- Show request parameters, response schemas, and error codes clearly
- Enable developers to copy-paste working code immediately
- Support deep linking to specific sections (authentication, parameters, etc.)

---

## Target Users

- **Developers implementing APIs** - Need exact parameter names, types, and examples
- **Junior developers learning** - Require clear explanations and working code samples
- **QA engineers testing** - Need to understand expected responses and error cases
- **Technical writers** - Reference for documentation updates

---

## Layout Structure

### Desktop View (≥1024px)

```
┌────────────────────────────────────────────────────────────────────────────────┐
│  [ONE LINE Logo]        [API Reference] [Getting Started] [Changelog] [🔍]     │
└────────────────────────────────────────────────────────────────────────────────┘
┌──────────────────┬─────────────────────────────────────────────────────────────┐
│  SIDEBAR (280px) │  MAIN CONTENT AREA (Article)                                │
│                  │                                                             │
│  📦 Tracking ▼   │  Home > API Reference > Tracking > GET /shipments           │
│    GET /shipments│                                                             │
│    GET /containers│ ┌─────────────────────────────────────────────────────────┐│
│    GET /bl-status│  │ TABLE OF CONTENTS (sticky, top right)                  ││
│                  │  │ • Overview                                             ││
│  🗓️ Schedules ▶  │  │ • Authentication                                       ││
│  📝 Booking ▶    │  │ • Request Parameters                                   ││
│  🗺️ Routes ▶     │  │ • Response Schema                                      ││
│  📚 Resources ▶  │  │ • Code Examples                                        ││
│                  │  │ • Error Codes                                          ││
│  ─────────────   │  └─────────────────────────────────────────────────────────┘│
│  Getting Started │                                                             │
│  Authentication  │  # GET /shipments                                           │
│  Rate Limits     │  [GET badge] https://api.one-line.com/v1/shipments         │
│  Error Codes     │                                                             │
│  Changelog       │  Retrieve shipment tracking information including current   │
│                  │  status, location, estimated arrival time, and events.      │
│                  │                                                             │
│                  │  ## Authentication                                          │
│                  │  This endpoint requires API key authentication. Include     │
│                  │  your API key in the Authorization header:                  │
│                  │                                                             │
│                  │  ┌──────────────────────────────────────────────────────┐  │
│                  │  │ Authorization: Bearer YOUR_API_KEY          [Copy] │  │
│                  │  └──────────────────────────────────────────────────────┘  │
│                  │                                                             │
│                  │  **Rate Limit:** 100 requests/minute                       │
│                  │  See [Authentication Guide](/docs/auth) for more details.   │
│                  │                                                             │
│                  │  ## Request Parameters                                     │
│                  │                                                             │
│                  │  ### Query Parameters                                      │
│                  │  ┌────────────────────────────────────────────────────────┐│
│                  │  │ Name         Type     Required  Description           ││
│                  │  ├────────────────────────────────────────────────────────┤│
│                  │  │ booking_no   string   Required  Booking number        ││
│                  │  │                                 (e.g., "BKG123456")   ││
│                  │  │                                                        ││
│                  │  │ container_no string   Optional  Filter by container   ││
│                  │  │                                 number                 ││
│                  │  │                                                        ││
│                  │  │ from_date    date     Optional  Start date (ISO 8601) ││
│                  │  │                                 Default: 30 days ago  ││
│                  │  └────────────────────────────────────────────────────────┘│
│                  │                                                             │
│                  │  ## Response Schema                                        │
│                  │                                                             │
│                  │  ┌──────────────────────────────────────────────────────┐  │
│                  │  │ {                                                    │  │
│                  │  │   "success": true,                  // boolean       │  │
│                  │  │   "data": {                         // object        │  │
│                  │  │     "booking_no": "BKG123456",      // string        │  │
│                  │  │     "status": "IN_TRANSIT",         // string        │  │
│                  │  │     "origin": {                     // object        │  │
│                  │  │       "port_code": "USNYC",         // string        │  │
│                  │  │       "port_name": "New York"       // string        │  │
│                  │  │     },                                               │  │
│                  │  │     "destination": {...},           // object        │  │
│                  │  │     "containers": [...],            // array         │  │
│                  │  │     "events": [...]                 // array         │  │
│                  │  │   }                                                  │  │
│                  │  │ }                                                    │  │
│                  │  │                                               [Copy] │  │
│                  │  └──────────────────────────────────────────────────────┘  │
│                  │                                                             │
│  [Scroll]        │  ## Code Examples                                           │
│                  │                                                             │
│                  │  [curl] [JavaScript] [Python] [Java]                       │
│                  │                                                             │
│                  │  ┌──────────────────────────────────────────────────────┐  │
│                  │  │ curl -X GET \                                        │  │
│                  │  │   "https://api.one-line.com/v1/shipments?booking_no=\ │  │
│                  │  │   BKG123456" \                                       │  │
│                  │  │   -H "Authorization: Bearer YOUR_API_KEY"            │  │
│                  │  │                                               [Copy] │  │
│                  │  └──────────────────────────────────────────────────────┘  │
│                  │                                                             │
│                  │  ## Error Codes                                            │
│                  │                                                             │
│                  │  ┌────────────────────────────────────────────────────────┐│
│                  │  │ Code  Description              Solution               ││
│                  │  ├────────────────────────────────────────────────────────┤│
│                  │  │ 400   Missing booking_no       Provide booking_no... ││
│                  │  │ 401   Unauthorized             Check API key...      ││
│                  │  │ 404   Shipment not found       Verify booking...     ││
│                  │  │ 429   Rate limit exceeded      Wait 60 seconds...    ││
│                  │  └────────────────────────────────────────────────────────┘│
│                  │                                                             │
│                  │  See [Error Documentation](/docs/errors) for full details.  │
│                  │                                                             │
│                  │  ┌─────────────────────────────────────────────────────┐   │
│                  │  │ Was this page helpful?  ⭐⭐⭐⭐⭐  [Submit]         │   │
│                  │  └─────────────────────────────────────────────────────┘   │
│                  │                                                             │
│                  │  [Scroll]                                                   │
└──────────────────┴─────────────────────────────────────────────────────────────┘
```

### Mobile View (<768px)

```
┌────────────────────────────────┐
│  [Logo]         [☰] [🔍]       │
└────────────────────────────────┘
┌────────────────────────────────┐
│  [<] API Reference > Tracking  │
├────────────────────────────────┤
│  # GET /shipments              │
│  [GET] api.one-line.com/v1/... │
│                                │
│  Retrieve shipment tracking    │
│  information including status, │
│  location, and events.         │
│                                │
│  ▼ Table of Contents           │
│                                │
│  ## Authentication             │
│                                │
│  This endpoint requires API    │
│  key authentication:           │
│                                │
│  ┌──────────────────────────┐ │
│  │ Authorization: Bearer    │ │
│  │ YOUR_API_KEY             │ │
│  │                  [Copy] │ │
│  └──────────────────────────┘ │
│                                │
│  ## Request Parameters         │
│                                │
│  ### Query Parameters          │
│                                │
│  ┌──────────────────────────┐ │
│  │ booking_no                │ │
│  │ Type: string              │ │
│  │ Required: Yes             │ │
│  │ Description: Booking...   │ │
│  └──────────────────────────┘ │
│                                │
│  ┌──────────────────────────┐ │
│  │ container_no              │ │
│  │ Type: string              │ │
│  │ Required: No              │ │
│  └──────────────────────────┘ │
│                                │
│  ## Response Schema            │
│                                │
│  ┌──────────────────────────┐ │
│  │ {                        │ │
│  │   "success": true,       │ │
│  │   "data": {              │ │
│  │     "booking_no": "...", │ │
│  │     "status": "...",     │ │
│  │     ...                  │ │
│  │   }                      │ │
│  │ }              [Copy]   │ │
│  └──────────────────────────┘ │
│                                │
│  ## Code Examples              │
│                                │
│  [curl][JS][Python][Java]      │
│                                │
│  ┌──────────────────────────┐ │
│  │ curl -X GET \            │ │
│  │   "https://api..."  \    │ │
│  │   -H "Authorization..."  │ │
│  │                  [Copy] │ │
│  └──────────────────────────┘ │
│                                │
│  ## Error Codes                │
│                                │
│  ┌──────────────────────────┐ │
│  │ 400 - Missing param      │ │
│  │ Solution: Provide...     │ │
│  └──────────────────────────┘ │
│                                │
│  [More errors...]              │
│                                │
│  ┌──────────────────────────┐ │
│  │ Was this helpful?        │ │
│  │ ⭐⭐⭐⭐⭐  [Submit]       │ │
│  └──────────────────────────┘ │
│                                │
│  [Scroll]                      │
└────────────────────────────────┘
```

---

## Component Breakdown

### 1. Endpoint Header Section

**Content:**
- HTTP method badge (GET, POST, PUT, DELETE) - colored pill
- Full endpoint URL in monospace font
- Brief description (1-2 sentences)
- Metadata: Rate limit, version, last updated

**Style:**
```
┌─────────────────────────────────────────────────────┐
│  # GET /shipments                                   │
│  [GET] https://api.one-line.com/v1/shipments       │
│                                                     │
│  Retrieve shipment tracking information including   │
│  current status, location, estimated arrival, and   │
│  events history.                                    │
│                                                     │
│  Rate Limit: 100 req/min | Version: v1 | Updated: 2025-01-15 │
└─────────────────────────────────────────────────────┘
```

- **HTTP Method Badge Colors:**
  - GET: Green (#10B981 background, white text)
  - POST: Blue (#3B82F6)
  - PUT: Orange (#F59E0B)
  - DELETE: Red (#EF4444)

### 2. Table of Contents (TOC) - Sticky

**Position:** Top right corner, sticky (follows scroll)
**Desktop only:** Hidden on mobile/tablet
**Content:** Anchor links to all major sections

```
┌────────────────────────────┐
│  TABLE OF CONTENTS         │
│  • Overview                │
│  • Authentication          │
│  • Request Parameters      │
│  • Response Schema         │
│  • Code Examples           │
│  • Error Codes             │
└────────────────────────────┘
```

**Behavior:**
- Sticky position (top: 100px, right: 20px)
- Active section highlighted (bold blue)
- Updates as user scrolls (intersection observer)
- Clicking link → smooth scroll to section
- Optional: Progress indicator (percentage scrolled)

### 3. Authentication Section

**Purpose:** Explain how to authenticate requests

```
┌──────────────────────────────────────────────────────┐
│  ## Authentication                                   │
│                                                      │
│  This endpoint requires API key authentication.      │
│  Include your API key in the Authorization header:   │
│                                                      │
│  ┌─────────────────────────────────────────────┐    │
│  │ Authorization: Bearer YOUR_API_KEY  [Copy] │    │
│  └─────────────────────────────────────────────┘    │
│                                                      │
│  **Rate Limit:** 100 requests/minute                │
│  **Scope:** read:shipments                          │
│                                                      │
│  See [Authentication Guide](/docs/auth) for details. │
└──────────────────────────────────────────────────────┘
```

**Elements:**
- Header format shown in code block
- Copy button for quick paste
- Rate limit information
- Link to detailed auth documentation
- Security notes (if applicable)

### 4. Request Parameters Table

**Structure:** Comprehensive table showing all parameters

```
┌────────────────────────────────────────────────────────────┐
│  ## Request Parameters                                     │
│                                                            │
│  ### Query Parameters                                      │
│  ┌──────────────────────────────────────────────────────┐ │
│  │ Name         Type     Required  Description          │ │
│  ├──────────────────────────────────────────────────────┤ │
│  │ booking_no   string   Required  Booking reference    │ │
│  │                                  number. Format:      │ │
│  │                                  BKG + 6 digits       │ │
│  │                                  Example: "BKG123456" │ │
│  │                                                       │ │
│  │ container_no string   Optional  Container number     │ │
│  │                                  to filter results   │ │
│  │                                  Format: 11 chars    │ │
│  │                                  Example: "ABCD1234567"│ │
│  │                                                       │ │
│  │ from_date    string   Optional  Start date for       │ │
│  │              (ISO     events in ISO 8601 format      │ │
│  │              8601)    Default: 30 days ago           │ │
│  │                                  Example: "2025-01-01"│ │
│  │                                                       │ │
│  │ to_date      string   Optional  End date for events  │ │
│  │              (ISO     Default: today                  │ │
│  │              8601)    Example: "2025-01-31"          │ │
│  └──────────────────────────────────────────────────────┘ │
│                                                            │
│  ### Path Parameters                                       │
│  None                                                      │
│                                                            │
│  ### Body Parameters                                       │
│  None (GET request)                                        │
└────────────────────────────────────────────────────────────┘
```

**Table Columns:**
1. **Name:** Parameter name (monospace font)
2. **Type:** Data type with format if applicable
3. **Required:** "Required" or "Optional" (badge/pill)
4. **Description:** Explanation + format + example

**Responsive:**
- Desktop: Full table with 4 columns
- Mobile: Cards (one parameter per card, stacked vertically)

### 5. Response Schema Section

**Purpose:** Show exact response structure with types

```
┌──────────────────────────────────────────────────────┐
│  ## Response Schema                                  │
│                                                      │
│  **Status Code:** 200 OK                            │
│  **Content-Type:** application/json                 │
│                                                      │
│  ┌────────────────────────────────────────────┐     │
│  │ {                                          │     │
│  │   "success": true,           // boolean    │     │
│  │   "data": {                  // object     │     │
│  │     "booking_no": "BKG123456",  // string  │     │
│  │     "status": "IN_TRANSIT",     // string  │     │
│  │     "origin": {                 // object  │     │
│  │       "port_code": "USNYC",     // string  │     │
│  │       "port_name": "New York",  // string  │     │
│  │       "country": "US"           // string  │     │
│  │     },                                      │     │
│  │     "destination": {            // object  │     │
│  │       "port_code": "CNSHA",     // string  │     │
│  │       "port_name": "Shanghai",  // string  │     │
│  │       "country": "CN"           // string  │     │
│  │     },                                      │     │
│  │     "containers": [             // array   │     │
│  │       {                         // object  │     │
│  │         "container_no": "ABCD1234567",     │     │
│  │         "size": "40HC",         // string  │     │
│  │         "weight_kg": 12000      // number  │     │
│  │       }                                     │     │
│  │     ],                                      │     │
│  │     "events": [                 // array   │     │
│  │       {                         // object  │     │
│  │         "timestamp": "2025-01-15T10:30:00Z",│    │
│  │         "event_code": "LOAD",   // string  │     │
│  │         "location": "USNYC",    // string  │     │
│  │         "description": "Loaded on vessel"  │     │
│  │       }                                     │     │
│  │     ],                                      │     │
│  │     "eta": "2025-02-10T08:00:00Z", // string│    │
│  │     "last_updated": "2025-01-15T12:00:00Z" │    │
│  │   },                                        │     │
│  │   "metadata": {                 // object  │     │
│  │     "request_id": "req_abc123", // string  │     │
│  │     "timestamp": "2025-01-15T12:00:00Z"    │     │
│  │   }                                         │     │
│  │ }                                           │     │
│  │                                      [Copy] │     │
│  └────────────────────────────────────────────┘     │
│                                                      │
│  **Field Descriptions:**                            │
│  • success: Indicates if request was successful     │
│  • data: Main response payload                      │
│  • booking_no: Booking reference number             │
│  • status: Current shipment status (see Status Codes)│
│  • containers: Array of container details           │
│  • events: Chronological event history              │
│  • eta: Estimated time of arrival (ISO 8601)        │
│                                                      │
│  **Status Code Values:**                            │
│  BOOKED, DEPARTED, IN_TRANSIT, ARRIVED, DELIVERED   │
└──────────────────────────────────────────────────────┘
```

**Features:**
- JSON syntax highlighting (different colors for keys, strings, numbers)
- Inline type comments (// boolean, // string, etc.)
- Proper indentation (2 spaces)
- Copy button for entire response
- Field descriptions table below
- Enum values documented

### 6. Code Examples Section

**Purpose:** Provide copy-paste ready code in multiple languages

```
┌──────────────────────────────────────────────────────┐
│  ## Code Examples                                    │
│                                                      │
│  [curl] [JavaScript] [Python] [Java]                │
│  ─────                                               │
│                                                      │
│  ┌────────────────────────────────────────────┐     │
│  │ curl -X GET \                              │     │
│  │   "https://api.one-line.com/v1/shipments?\ │     │
│  │   booking_no=BKG123456&from_date=2025-01-01" \│  │
│  │   -H "Authorization: Bearer YOUR_API_KEY" \│     │
│  │   -H "Content-Type: application/json"      │     │
│  │                                      [Copy] │     │
│  └────────────────────────────────────────────┘     │
│                                                      │
│  **Expected Response:**                             │
│  ┌────────────────────────────────────────────┐     │
│  │ {                                          │     │
│  │   "success": true,                         │     │
│  │   "data": { ... }                          │     │
│  │ }                                          │     │
│  └────────────────────────────────────────────┘     │
└──────────────────────────────────────────────────────┘
```

**Tab Structure:**
- **curl** (default selected)
- **JavaScript** (fetch API or axios)
- **Python** (requests library)
- **Java** (Java 11+ HttpClient)

**JavaScript Example:**
```javascript
const response = await fetch(
  'https://api.one-line.com/v1/shipments?booking_no=BKG123456',
  {
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    }
  }
);

const data = await response.json();
console.log(data);
```

**Python Example:**
```python
import requests

headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
}

params = {'booking_no': 'BKG123456'}

response = requests.get(
    'https://api.one-line.com/v1/shipments',
    headers=headers,
    params=params
)

data = response.json()
print(data)
```

**Features:**
- Syntax highlighting for each language
- Copy button per code block
- Working, tested examples
- Shows expected response
- Uses realistic parameter values
- Includes error handling (in JavaScript/Python examples)

**Tab Behavior:**
- Click tab → switch code example instantly (<50ms)
- Selected language persists across page loads (localStorage)
- Mobile: Dropdown instead of tabs (space-saving)

### 7. Error Codes Table

**Purpose:** Document all possible error responses

```
┌────────────────────────────────────────────────────────────┐
│  ## Error Codes                                            │
│                                                            │
│  ┌──────────────────────────────────────────────────────┐ │
│  │ Code  Error              Description       Solution  │ │
│  ├──────────────────────────────────────────────────────┤ │
│  │ 400   Bad Request        Missing required  Provide  │ │
│  │                          parameter          booking_ │ │
│  │                          booking_no         no param │ │
│  │                                                       │ │
│  │ 401   Unauthorized       Invalid or         Check    │ │
│  │                          missing API key    API key  │ │
│  │                          in Authorization   is valid │ │
│  │                          header                       │ │
│  │                                                       │ │
│  │ 404   Not Found          Shipment with      Verify   │ │
│  │                          provided booking_no booking  │ │
│  │                          does not exist     number   │ │
│  │                                                       │ │
│  │ 429   Too Many Requests  Rate limit         Wait 60  │ │
│  │                          exceeded (100/min) seconds  │ │
│  │                                             and retry│ │
│  │                                                       │ │
│  │ 500   Internal Server    Unexpected error   Contact │ │
│  │       Error              on server side     support  │ │
│  └──────────────────────────────────────────────────────┘ │
│                                                            │
│  **Error Response Format:**                               │
│  ┌────────────────────────────────────────────────┐       │
│  │ {                                              │       │
│  │   "success": false,                            │       │
│  │   "error": {                                   │       │
│  │     "code": "MISSING_PARAMETER",               │       │
│  │     "message": "Missing required parameter:    │       │
│  │                 booking_no",                   │       │
│  │     "field": "booking_no"                      │       │
│  │   }                                            │       │
│  │ }                                              │       │
│  └────────────────────────────────────────────────┘       │
│                                                            │
│  See [Error Documentation](/docs/errors) for all codes.   │
└────────────────────────────────────────────────────────────┘
```

**Table Columns:**
1. **Code:** HTTP status code (colored by severity)
2. **Error:** Error name
3. **Description:** What causes this error
4. **Solution:** How to fix it

**Error Code Colors:**
- 400-level: Orange/Yellow (client errors)
- 500-level: Red (server errors)

**Additional Features:**
- Example error response JSON
- Link to comprehensive error documentation
- Common causes enumerated
- Actionable solutions

### 8. Feedback Widget (Bottom of Page)

**Purpose:** Collect page helpfulness ratings

```
┌─────────────────────────────────────────────────────┐
│  Was this page helpful?                             │
│                                                     │
│  ☆ ☆ ☆ ☆ ☆  (5 stars, clickable)                  │
│                                                     │
│  [Optional: Tell us more (500 chars max)]          │
│                                                     │
│  [Submit Feedback]                                  │
└─────────────────────────────────────────────────────┘
```

**Behavior:**
- Click star → highlights that star + all stars to the left
- Submit → "Thank you for your feedback!" confirmation
- After submit: widget collapses or shows confirmation only
- Text input expands on click (3-5 rows)
- Character counter shown (e.g., "120/500")

**Data Collected:**
- Page URL (auto)
- Star rating (1-5)
- Optional comment (0-500 chars)
- Timestamp (auto)

---

## Acceptance Criteria Mapping

### From ST-006: Read comprehensive endpoint documentation
✅ **Endpoint URL** with HTTP method badge displayed
✅ **Description** of endpoint purpose
✅ **Authentication requirements** section with header format
✅ **Request parameters table** with Name, Type, Required, Description columns
✅ **Response schema** with nested objects, proper indentation, example JSON
✅ **Error codes table** with HTTP Code, Description, Solution
✅ **All code blocks** have "Copy" button
✅ **Page loads** in <2 seconds (NFR-011)
✅ **Copy operation** completes <100ms (NFR-012)
✅ **SEO-optimized** with meta tags and proper headings (NFR-013)

### From ST-007: Copy code examples in 4+ languages
✅ **Language tabs** for curl, JavaScript, Python, Java (4+ languages)
✅ **Each example** includes authentication header, full request, expected response
✅ **Syntax highlighting** applied to all code blocks
✅ **Copy button** on each code block
✅ **Tab switching** instant <50ms (NFR-014)
✅ **Copy works** across all major browsers (NFR-015)
✅ **Examples tested** to ensure they work (NFR-016)
✅ **Selected language** persists across page navigation (localStorage)

### From ST-012: Review authentication and rate limit documentation
✅ **Authentication section** shows API key format and header
✅ **Rate limit info** displayed (e.g., "100 requests/minute")
✅ **Link to full auth guide** provided
✅ **Security best practices** noted (env vars, not hardcoded)
✅ **Highly visible** (linked from Getting Started and every endpoint) (NFR-025)
✅ **Code examples** demonstrate proper secret management (NFR-026)

---

## Interaction Details

### 1. Copy Button Behavior
```
User clicks [Copy] button
→ Copy code/text to clipboard
→ Button text changes to "Copied!" with checkmark icon
→ Button turns green (#10B981)
→ After 2 seconds: revert to "Copy" text and original color
→ Keyboard shortcut: Ctrl+C (or Cmd+C) when code block focused
```

### 2. Table of Contents Auto-Highlight
```
User scrolls down page
→ Intersection Observer detects which section is in viewport (top 20%)
→ Update TOC highlight to match current section (bold blue text)
→ Debounce updates (100ms) to avoid flicker
→ URL hash updates to match section (#authentication, #parameters, etc.)
```

### 3. Language Tab Switching
```
User clicks "JavaScript" tab
→ Switch code example to JavaScript instantly (<50ms)
→ Update tab underline/highlight
→ Save selection to localStorage ("preferredLanguage": "javascript")
→ On next page load: auto-select JavaScript tab if available
```

### 4. Parameter Type Tooltip (Optional Enhancement)
```
User hovers over "string (ISO 8601)" type
→ Show tooltip: "Date format: YYYY-MM-DD (e.g., 2025-01-31)"
→ Tooltip appears after 200ms hover (prevent accidental triggers)
→ Mobile: Tap to show tooltip (tap outside to dismiss)
```

### 5. Anchor Link Navigation
```
User clicks TOC link "Request Parameters"
→ Smooth scroll to #request-parameters section (500ms)
→ Update URL hash
→ Highlight section header briefly (fade-in yellow background, fade out 2s)
→ Keyboard: pressing Enter on focused TOC link triggers navigation
```

---

## Responsive Behavior

### Desktop (≥1024px)
- Full width content area (max 1000px)
- Table of Contents sticky on right side
- Parameter table: full 4-column layout
- Code examples: full width with horizontal scroll if needed
- Sidebar always visible

### Tablet (768-1023px)
- TOC hidden or moved to expandable section
- Parameter table: may stack columns (Name/Type on one row, Req/Desc on next)
- Code examples: full width
- Sidebar toggleable

### Mobile (<768px)
- No TOC (all sections expanded by default)
- Parameter table → Card layout (one parameter per card)
- Code examples: Language dropdown instead of tabs
- Error table: Card layout (one error per card)
- Sidebar: Overlay menu via hamburger
- Copy buttons: Larger touch targets (48x48px)

---

## Accessibility Requirements

- **Keyboard Navigation:**
  - Tab through all interactive elements (links, buttons, tabs)
  - Arrow keys to navigate between language tabs
  - Enter/Space to copy code
  - All sections accessible via keyboard
- **Screen Readers:**
  - `role="article"` on main content
  - `role="navigation"` on TOC
  - `aria-label="Code example in [language]"` on code blocks
  - `aria-live="polite"` on copy button status ("Copied!")
  - `role="table"` with proper `th` and `td` for tables
  - Heading hierarchy: H1 (endpoint) → H2 (sections) → H3 (subsections)
- **Focus Management:**
  - Visible focus indicators (2px blue outline)
  - Skip to main content link
  - Focus trap not needed (no modals in this page)
- **Color Contrast:**
  - All text: 4.5:1 contrast ratio minimum (WCAG AA)
  - Code syntax highlighting: Tested for sufficient contrast
  - HTTP method badges: White text on colored backgrounds

---

## Performance Targets

- **Page Load:** <2 seconds (NFR-011)
- **Copy Operation:** <100ms (NFR-012)
- **Tab Switching:** <50ms (NFR-014)
- **TOC Highlight Update:** <100ms
- **Smooth Scroll:** Complete in 500ms
- **Syntax Highlighting:** Render on initial load (no lazy load delay)
- **SEO:** All endpoint pages indexable with proper meta tags (NFR-013)

---

## Design Notes

**Do:**
- Use monospace font for all code (Consolas, Monaco, 'Courier New')
- Keep parameter descriptions concise but complete
- Show realistic example values (not "string" or "value123")
- Include units in descriptions (kg, USD, ISO 8601, etc.)
- Make copy buttons obvious and large enough to click
- Test all code examples to ensure they work

**Don't:**
- Hide critical information in collapsed sections
- Use technical jargon without explanation
- Show incomplete or broken code examples
- Make users scroll horizontally unnecessarily
- Use tiny fonts for code (minimum 14px)
- Forget to document optional vs required parameters

---

## Next Steps

After wireframe approval:
1. Create component spec for Code Block with Language Tabs (COMP-004)
2. Create component spec for Parameter Table (COMP-005)
3. Create component spec for Response Schema Viewer (COMP-006)
4. Create component spec for Error Code Card (COMP-007)
5. Create component spec for Feedback Widget (COMP-008)
6. Define interaction flow for Code Example Interaction (INT-002)

---

## Related Documents

- **USD:** features/one-api-portal-mvp/po/usd.csv (ST-006, ST-007, ST-012)
- **Wireframes:** WF-001 (Homepage), WF-002 (API Reference Layout)
- **Design System:** design-framework/design-rules/
- **Component Specs:** (To be created)
- **Interactions:** (To be created)
