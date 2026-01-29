# INT-001: Search and Navigation Flow

**Feature:** ONE API Portal MVP
**Interaction Type:** Primary User Flow
**User Stories:** ST-004, ST-005, ST-008
**Wireframes:** WF-001, WF-002, WF-003
**Components:** COMP-001 (Navigation Bar)
**Created:** 2025-12-21
**Status:** Draft

---

## Purpose

This interaction diagram defines the complete user journey for searching and navigating through API documentation, including:
- Global search with autocomplete
- Category and endpoint browsing
- Sidebar navigation
- Deep linking and URL management

---

## User Flow Diagram (ASCII)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    SEARCH AND NAVIGATION FLOW                           │
└─────────────────────────────────────────────────────────────────────────┘

                              START
                                │
                                ▼
                    ┌───────────────────────┐
                    │  User on any page     │
                    │  (Homepage, Docs, etc)│
                    └───────────────────────┘
                                │
                ┌───────────────┼───────────────┐
                │                               │
                ▼                               ▼
    ┌──────────────────────┐       ┌──────────────────────┐
    │  User clicks         │       │  User presses        │
    │  Search icon/button  │       │  Cmd+K / Ctrl+K      │
    └──────────────────────┘       └──────────────────────┘
                │                               │
                └───────────────┬───────────────┘
                                ▼
                    ┌───────────────────────────┐
                    │  Search modal opens       │
                    │  (full-screen overlay)    │
                    │  Focus auto-set to input  │
                    └───────────────────────────┘
                                │
                                ▼
                    ┌───────────────────────────┐
                    │  User types query         │
                    │  (min 3 characters)       │
                    └───────────────────────────┘
                                │
                ┌───────────────┼───────────────┐
                │               │               │
                ▼               ▼               ▼
    ┌─────────────┐  ┌─────────────┐  ┌─────────────┐
    │  < 3 chars  │  │  ≥ 3 chars  │  │  Escape key │
    │  No results │  │  Show       │  │  pressed    │
    │  displayed  │  │  autocomplete│  │  Close modal│
    └─────────────┘  └─────────────┘  └─────────────┘
                                │                │
                                ▼                │
                    ┌───────────────────────────┐│
                    │  Autocomplete dropdown    ││
                    │  shows results (max 10)   ││
                    │  - Endpoint matches       ││
                    │  - Category matches       ││
                    │  - Content matches        ││
                    │  Debounced 300ms          ││
                    └───────────────────────────┘│
                                │                │
                ┌───────────────┼────────────────┤
                │               │                │
                ▼               ▼                ▼
    ┌─────────────┐  ┌─────────────┐  ┌─────────────┐
    │  User clicks│  │  User presses│  │  User clicks│
    │  result     │  │  Enter       │  │  outside    │
    │             │  │  (first      │  │  modal      │
    │             │  │  result)     │  │  Close modal│
    └─────────────┘  └─────────────┘  └─────────────┘
            │                │                │
            └────────────────┼────────────────┘
                             ▼
                 ┌───────────────────────────┐
                 │  Navigate to selected     │
                 │  endpoint/page            │
                 │  Close search modal       │
                 │  URL updated              │
                 └───────────────────────────┘
                             │
                             ▼
        ┌────────────────────────────────────────────┐
        │  Is result an endpoint documentation page? │
        └────────────────────────────────────────────┘
                     │                    │
                    Yes                   No
                     │                    │
                     ▼                    ▼
        ┌─────────────────────┐  ┌─────────────────────┐
        │  Load endpoint page │  │  Load category/     │
        │  with sidebar       │  │  other page         │
        └─────────────────────┘  └─────────────────────┘
                     │                    │
                     ▼                    │
        ┌─────────────────────┐           │
        │  Sidebar shows      │           │
        │  relevant category  │           │
        │  expanded           │           │
        └─────────────────────┘           │
                     │                    │
                     ▼                    │
        ┌─────────────────────┐           │
        │  Active endpoint    │           │
        │  highlighted in     │           │
        │  sidebar            │           │
        └─────────────────────┘           │
                     │                    │
                     └────────────┬───────┘
                                  ▼
                              ┌───────┐
                              │  END  │
                              └───────┘
```

---

## Alternative Flow: Sidebar Navigation

```
                              START
                                │
                                ▼
                    ┌───────────────────────────┐
                    │  User on API Reference    │
                    │  page with sidebar        │
                    └───────────────────────────┘
                                │
                ┌───────────────┼───────────────┐
                │                               │
                ▼                               ▼
    ┌──────────────────────┐       ┌──────────────────────┐
    │  User clicks         │       │  User scrolls main   │
    │  category in sidebar │       │  content area        │
    │  (e.g., "Tracking ▶")│       │                      │
    └──────────────────────┘       └──────────────────────┘
                │                               │
                ▼                               ▼
    ┌──────────────────────┐       ┌──────────────────────┐
    │  Category expands    │       │  Scroll Spy detects  │
    │  Shows endpoints     │       │  which endpoint is   │
    │  - /shipments        │       │  in viewport         │
    │  - /containers       │       │                      │
    │  - /bl-status        │       └──────────────────────┘
    │  Arrow changes to ▼  │                   │
    └──────────────────────┘                   ▼
                │                   ┌──────────────────────┐
                ▼                   │  Update sidebar      │
    ┌──────────────────────┐        │  highlight to match  │
    │  User clicks endpoint│        │  visible endpoint    │
    │  (e.g., /shipments)  │        │  Update URL hash     │
    └──────────────────────┘        │  (#get-shipments)    │
                │                   └──────────────────────┘
                ▼                               │
    ┌──────────────────────┐                   │
    │  Smooth scroll to    │                   │
    │  endpoint section    │                   │
    │  in main content     │                   │
    │  (500ms duration)    │                   │
    └──────────────────────┘                   │
                │                               │
                ▼                               │
    ┌──────────────────────┐                   │
    │  Update URL hash:    │                   │
    │  #get-shipments      │                   │
    └──────────────────────┘                   │
                │                               │
                ▼                               │
    ┌──────────────────────┐                   │
    │  Highlight endpoint  │                   │
    │  in sidebar:         │                   │
    │  - Bold blue text    │                   │
    │  - Blue left border  │                   │
    └──────────────────────┘                   │
                │                               │
                └───────────────┬───────────────┘
                                ▼
                            ┌───────┐
                            │  END  │
                            └───────┘
```

---

## State Diagrams

### Search Modal States

```
                    ┌─────────────┐
                    │   CLOSED    │
                    └─────────────┘
                          │
                          │ [Click search icon OR Cmd+K]
                          ▼
                    ┌─────────────┐
                    │    OPEN     │◄───────────────┐
                    │  (empty)    │                │
                    └─────────────┘                │
                          │                        │
                          │ [Type < 3 chars]       │
                          ▼                        │
                    ┌─────────────┐                │
                    │    OPEN     │                │
                    │ (no results)│────────────────┘
                    └─────────────┘      [Clear input]
                          │
                          │ [Type ≥ 3 chars]
                          ▼
                    ┌─────────────┐
                    │   LOADING   │
                    │  (300ms)    │
                    └─────────────┘
                          │
                          ▼
                    ┌─────────────┐
                    │  SHOWING    │
                    │  RESULTS    │
                    └─────────────┘
                          │
                ┌─────────┼─────────┐
                │         │         │
      [Escape]  │   [Click result]  │  [Click outside]
                │         │         │
                ▼         ▼         ▼
            ┌─────────────────────────┐
            │       CLOSED            │
            │  (navigate if result    │
            │   was selected)         │
            └─────────────────────────┘
```

### Sidebar Category States

```
       ┌─────────────────┐
       │   COLLAPSED ▶   │
       └─────────────────┘
              │
              │ [Click category]
              ▼
       ┌─────────────────┐
       │   EXPANDING     │
       │  (200ms slide)  │
       └─────────────────┘
              │
              ▼
       ┌─────────────────┐
       │   EXPANDED ▼    │◄────────┐
       │  Shows endpoints│         │
       └─────────────────┘         │
              │                    │
              │ [Click category]   │ [Click endpoint]
              ▼                    │
       ┌─────────────────┐         │
       │   COLLAPSING    │         │
       │  (200ms slide)  │         │
       └─────────────────┘         │
              │                    │
              ▼                    │
       ┌─────────────────┐         │
       │   COLLAPSED ▶   │         │
       └─────────────────┘         │
                                   │
                    ┌──────────────┘
                    │
                    ▼
            ┌─────────────────┐
            │   EXPANDED ▼    │
            │  (stays open,   │
            │   navigates to  │
            │   endpoint)     │
            └─────────────────┘
```

### Endpoint Highlight States

```
       ┌─────────────────┐
       │    DEFAULT      │
       │  (gray text)    │
       └─────────────────┘
              │
              │ [Hover OR Scroll into view OR Click]
              ▼
       ┌─────────────────┐
       │    HOVERED      │
       │  (light blue bg)│
       └─────────────────┘
              │
              │ [Click OR Detected in viewport]
              ▼
       ┌─────────────────┐
       │     ACTIVE      │
       │  (bold blue     │
       │   text, blue    │
       │   left border)  │
       └─────────────────┘
              │
              │ [Navigate away OR Scroll to different endpoint]
              ▼
       ┌─────────────────┐
       │    DEFAULT      │
       └─────────────────┘
```

---

## Detailed Interaction Specifications

### 1. Search Modal Open/Close

**Trigger Events:**
- Click search icon in navigation bar
- Press `Cmd+K` (Mac) or `Ctrl+K` (Windows/Linux)
- Press `/` key (optional, GitHub-style)

**Open Behavior:**
```typescript
const openSearchModal = () => {
  // 1. Set modal open state
  setSearchModalOpen(true);

  // 2. Disable body scroll
  document.body.style.overflow = 'hidden';

  // 3. Focus search input (auto-focus)
  setTimeout(() => {
    searchInputRef.current?.focus();
  }, 100);

  // 4. Track analytics
  trackEvent('search_opened', { trigger: 'keyboard' | 'click' });
};
```

**Close Behavior:**
```typescript
const closeSearchModal = () => {
  // 1. Set modal closed state
  setSearchModalOpen(false);

  // 2. Re-enable body scroll
  document.body.style.overflow = '';

  // 3. Clear search query
  setSearchQuery('');
  setSearchResults([]);

  // 4. Return focus to trigger element (search button or last focused)
  searchTriggerRef.current?.focus();
};
```

**Close Triggers:**
- Press `Escape` key
- Click outside modal (backdrop click)
- Click on a search result (after navigation)
- Press `Cmd+K` / `Ctrl+K` again (toggle)

---

### 2. Search Autocomplete

**Typing Behavior:**
```typescript
const [searchQuery, setSearchQuery] = useState('');
const [searchResults, setSearchResults] = useState([]);
const [isSearching, setIsSearching] = useState(false);

// Debounced search function
const debouncedSearch = useMemo(
  () =>
    debounce(async (query: string) => {
      if (query.length < 3) {
        setSearchResults([]);
        return;
      }

      setIsSearching(true);

      try {
        // Search endpoints, categories, and content
        const results = await searchAPI(query);

        // Limit to 10 results
        setSearchResults(results.slice(0, 10));
      } catch (error) {
        console.error('Search failed:', error);
        setSearchResults([]);
      } finally {
        setIsSearching(false);
      }
    }, 300), // 300ms debounce
  []
);

const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  const query = e.target.value;
  setSearchQuery(query);
  debouncedSearch(query);
};
```

**Result Ranking (LIKE Search / Partial Text Matching):**

The search uses **substring matching** (LIKE search) - users do NOT need to type complete words:

1. **Exact match** on endpoint name (e.g., "/shipments")
2. **Prefix match** on endpoint name (query starts the name, e.g., "ship" → "shipments")
3. **Infix/substring match** on endpoint name (query found anywhere, e.g., "ment" → "shipments")
4. **Path match** (query found in URL path, e.g., "{id}" → "/shipments/{id}")
5. **Category match** (e.g., "Track" → "Tracking")
6. **Description match** (query found in description)

**Matching Rules:**
- **Case-insensitive:** "TRACK" matches "track", "Tracking", "tracker"
- **Multi-word AND logic:** "book cont" requires BOTH "book" AND "cont" to match
- **Substring search:** Uses `includes()` / `indexOf()` - not regex
- **Special characters:** Characters like `{`, `}`, `.`, `*` are escaped to prevent regex errors

**Result Display:**
```typescript
interface SearchResult {
  type: 'endpoint' | 'category' | 'guide' | 'error';
  title: string;           // e.g., "GET /shipments"
  description: string;     // Brief description
  url: string;            // Target URL
  category?: string;      // Parent category (for endpoints)
  icon?: React.ReactNode; // Optional icon
  httpMethod?: 'GET' | 'POST' | 'PUT' | 'DELETE'; // For endpoints
}

// Display component
<SearchResults>
  {searchResults.map((result, index) => (
    <SearchResultItem
      key={index}
      result={result}
      isHighlighted={highlightedIndex === index}
      onClick={() => handleResultClick(result)}
    />
  ))}
</SearchResults>
```

---

### 3. Keyboard Navigation in Search

**Arrow Key Navigation:**
```typescript
const [highlightedIndex, setHighlightedIndex] = useState(0);

const handleKeyDown = (e: React.KeyboardEvent) => {
  switch (e.key) {
    case 'ArrowDown':
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev < searchResults.length - 1 ? prev + 1 : prev
      );
      break;

    case 'ArrowUp':
      e.preventDefault();
      setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : 0));
      break;

    case 'Enter':
      e.preventDefault();
      if (searchResults[highlightedIndex]) {
        handleResultClick(searchResults[highlightedIndex]);
      }
      break;

    case 'Escape':
      e.preventDefault();
      closeSearchModal();
      break;
  }
};
```

**Visual Feedback:**
- Highlighted result: Light blue background (#EFF6FF)
- Highlighted result should scroll into view if out of viewport
- Smooth scroll animation (100ms)

---

### 4. Sidebar Search Filter (LIKE Search / Partial Text Matching)

**Purpose:** Filter endpoints in the sidebar using partial text matching. Users do NOT need to type complete words.

**Implementation:**
```typescript
const [searchQuery, setSearchQuery] = useState('');

// Escape special regex characters to prevent errors
const escapeRegex = (str: string) =>
  str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// Filter function with LIKE search behavior
const filterEndpoints = (endpoints: Endpoint[], query: string) => {
  if (query.length < 2) return endpoints;

  // Normalize: trim, collapse spaces, lowercase
  const normalizedQuery = query.trim().replace(/\s+/g, ' ').toLowerCase();

  // Split into words for AND logic
  const queryWords = normalizedQuery.split(' ').filter(w => w.length > 0);

  return endpoints.filter(endpoint => {
    // Combine all searchable fields
    const searchableText = [
      endpoint.title,
      endpoint.path,
      endpoint.description,
      endpoint.category
    ].join(' ').toLowerCase();

    // AND logic: ALL words must match somewhere
    return queryWords.every(word => searchableText.includes(word));
  });
};

// Rank results by match quality
const rankResults = (results: Endpoint[], query: string) => {
  const q = query.toLowerCase();

  return results.sort((a, b) => {
    const aName = a.title.toLowerCase();
    const bName = b.title.toLowerCase();

    // 1. Exact match on name
    if (aName === q) return -1;
    if (bName === q) return 1;

    // 2. Prefix match (starts with)
    if (aName.startsWith(q) && !bName.startsWith(q)) return -1;
    if (bName.startsWith(q) && !aName.startsWith(q)) return 1;

    // 3. Contains in name
    if (aName.includes(q) && !bName.includes(q)) return -1;
    if (bName.includes(q) && !aName.includes(q)) return 1;

    // 4. Contains in path
    if (a.path.toLowerCase().includes(q)) return -1;
    if (b.path.toLowerCase().includes(q)) return 1;

    // 5. Alphabetical fallback
    return aName.localeCompare(bName);
  });
};
```

**Examples:**
| User Types | Matches | Why |
|------------|---------|-----|
| `ship` | shipment, shipping, /shipments/{id} | Substring match |
| `TRACK` | track, Tracking, tracker | Case-insensitive |
| `book cont` | POST /bookings/containers | AND logic: both words match |
| `{id}` | GET /shipments/{id} | Special chars escaped |
| `ment` | shipment, document, payment | Infix/substring match |

**Behavior:**
- Type ≥2 characters → filter begins (debounced 300ms)
- Categories with matches auto-expand
- Non-matching categories collapse/hide
- Shows count: "5 results" or "No endpoints found"

---

### 5. Sidebar Category Expand/Collapse (unchanged)

**Click Behavior:**
```typescript
const [expandedCategories, setExpandedCategories] = useState<string[]>(['tracking']);

const toggleCategory = (categoryId: string) => {
  setExpandedCategories((prev) => {
    if (prev.includes(categoryId)) {
      // Collapse: remove from array
      return prev.filter((id) => id !== categoryId);
    } else {
      // Expand: add to array
      return [...prev, categoryId];
    }
  });

  // Save to localStorage
  localStorage.setItem('expandedCategories', JSON.stringify(expandedCategories));
};
```

**Animation:**
```css
@keyframes slideDown {
  from {
    opacity: 0;
    max-height: 0;
  }
  to {
    opacity: 1;
    max-height: 500px; /* Enough for all endpoints */
  }
}

.endpoint-list {
  animation: slideDown 200ms ease-out;
  overflow: hidden;
}
```

---

### 6. Sidebar Endpoint Click → Smooth Scroll

**Click Behavior:**
```typescript
const handleEndpointClick = (endpointId: string) => {
  // 1. Find target element
  const target = document.getElementById(endpointId);
  if (!target) return;

  // 2. Smooth scroll to element
  target.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest',
  });

  // 3. Update URL hash (without page jump)
  window.history.pushState(null, '', `#${endpointId}`);

  // 4. Update active endpoint state
  setActiveEndpoint(endpointId);

  // 5. Optional: Flash highlight on target (fade-in yellow bg, fade out 2s)
  target.classList.add('highlight-flash');
  setTimeout(() => {
    target.classList.remove('highlight-flash');
  }, 2000);
};
```

**Highlight Flash Animation:**
```css
@keyframes highlightFlash {
  0% {
    background-color: #FEF3C7; /* yellow-100 */
  }
  100% {
    background-color: transparent;
  }
}

.highlight-flash {
  animation: highlightFlash 2s ease-out;
}
```

---

### 7. Scroll Spy (Auto-highlight on scroll)

**Intersection Observer Implementation:**
```typescript
useEffect(() => {
  const observerOptions = {
    root: null, // viewport
    rootMargin: '-20% 0px -70% 0px', // Trigger when in top 20-30% of viewport
    threshold: 0,
  };

  const observerCallback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const endpointId = entry.target.id;

        // Update active endpoint
        setActiveEndpoint(endpointId);

        // Update URL hash
        window.history.replaceState(null, '', `#${endpointId}`);

        // Optional: Track analytics
        trackEvent('endpoint_viewed', { endpoint: endpointId });
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Observe all endpoint sections
  document.querySelectorAll('[data-endpoint-section]').forEach((section) => {
    observer.observe(section);
  });

  return () => observer.disconnect();
}, []);
```

---

### 8. URL Hash Deep Linking

**On Page Load:**
```typescript
useEffect(() => {
  // Check if URL has hash (#get-shipments)
  const hash = window.location.hash.slice(1); // Remove '#'

  if (hash) {
    // Wait for page to render
    setTimeout(() => {
      const target = document.getElementById(hash);
      if (target) {
        // Scroll to element
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Set as active
        setActiveEndpoint(hash);

        // Expand parent category in sidebar
        const category = getCategoryForEndpoint(hash);
        if (category && !expandedCategories.includes(category)) {
          setExpandedCategories((prev) => [...prev, category]);
        }
      }
    }, 500);
  }
}, []);
```

---

## Edge Cases & Error Handling

### Search No Results
```tsx
{searchQuery.length >= 3 && searchResults.length === 0 && !isSearching && (
  <div className="p-4 text-center text-gray-500">
    <p>No results found for "{searchQuery}"</p>
    <p className="text-sm mt-2">Try different keywords or check the spelling.</p>
  </div>
)}
```

### Search Error
```tsx
{searchError && (
  <div className="p-4 text-center text-red-600">
    <p>Search failed. Please try again.</p>
  </div>
)}
```

### Sidebar Scroll Position Overflow
```typescript
// If active endpoint is outside visible sidebar viewport
useEffect(() => {
  const activeElement = sidebarRef.current?.querySelector('[data-active="true"]');
  if (activeElement) {
    activeElement.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }
}, [activeEndpoint]);
```

### Multiple Rapid Category Clicks
```typescript
// Prevent animation jank from rapid clicks
const toggleCategory = debounce((categoryId: string) => {
  // ... toggle logic
}, 100);
```

---

## Performance Requirements

- **Search Results:** < 500ms (NFR-007)
- **Smooth Scroll:** Complete in 500ms
- **Sidebar Highlight Update:** < 100ms (NFR-019)
- **Category Expand/Collapse:** 200ms animation
- **Search Debounce:** 300ms (balance between responsiveness and API calls)

---

## Analytics Tracking

```typescript
// Track search usage
trackEvent('search_query', {
  query: searchQuery,
  results_count: searchResults.length,
  selected_result: selectedResult?.title,
});

// Track navigation patterns
trackEvent('sidebar_navigation', {
  from_endpoint: previousEndpoint,
  to_endpoint: currentEndpoint,
  category: category,
});

// Track scroll depth
trackEvent('endpoint_viewed', {
  endpoint: endpointId,
  time_spent: timeSpent,
});
```

---

## Related Documents

- **Wireframes:** WF-001, WF-002, WF-003
- **User Stories:** ST-004 (Search), ST-005 (Browse), ST-008 (Sidebar)
- **Components:** COMP-001 (Navigation Bar)
- **USD:** features/one-api-portal-mvp/po/usd.csv
