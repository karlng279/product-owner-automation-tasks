# INT-002: Code Example Interaction

**Feature:** ONE API Portal MVP
**Interaction Type:** Component Interaction
**User Stories:** ST-007
**Wireframes:** WF-003 (Endpoint Documentation)
**Components:** COMP-002 (Code Block with Language Tabs)
**Created:** 2025-12-21
**Status:** Draft

---

## Purpose

This interaction diagram defines how developers interact with multi-language code examples, including:
- Language tab switching
- Copy-to-clipboard functionality
- Language preference persistence
- Syntax highlighting
- Error handling

This ensures a smooth developer experience when integrating ONE LINE APIs.

---

## User Flow Diagram (ASCII)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    CODE EXAMPLE INTERACTION FLOW                        │
└─────────────────────────────────────────────────────────────────────────┘

                              START
                                │
                                ▼
                ┌─────────────────────────────────┐
                │  User views endpoint docs       │
                │  (WF-003)                       │
                └─────────────────────────────────┘
                                │
                                ▼
                ┌─────────────────────────────────┐
                │  Scroll to Code Examples section│
                │  Default language shown: curl   │
                └─────────────────────────────────┘
                                │
                ┌───────────────┴────────────────┐
                │                                │
                ▼                                ▼
    ┌───────────────────────┐       ┌──────────────────────────┐
    │  Check localStorage   │       │  User sees code tabs:    │
    │  for saved preference │       │  [curl] [JS] [Py] [Java] │
    └───────────────────────┘       └──────────────────────────┘
                │                                │
                ▼                                │
    ┌───────────────────────┐                   │
    │  Preference exists?   │───No──────────────┘
    └───────────────────────┘
                │ Yes
                ▼
    ┌───────────────────────┐
    │  Load saved language  │
    │  (e.g., "javascript") │
    └───────────────────────┘
                │
                ▼
    ┌───────────────────────────┐
    │  Switch to saved language │
    │  tab automatically        │
    └───────────────────────────┘
                │
                └──────────────┬────────────────────┐
                               │                    │
                               ▼                    ▼
            ┌──────────────────────────┐    ┌─────────────────┐
            │  User clicks different   │    │  User clicks    │
            │  language tab (e.g., JS) │    │  [Copy] button  │
            └──────────────────────────┘    └─────────────────┘
                       │                             │
                       ▼                             ▼
            ┌──────────────────────────┐    ┌─────────────────────────┐
            │  Tab Switch Flow         │    │  Copy-to-Clipboard Flow │
            │  (see below)             │    │  (see below)            │
            └──────────────────────────┘    └─────────────────────────┘
                       │                             │
                       └─────────────┬───────────────┘
                                     ▼
                        ┌───────────────────────────┐
                        │  User continues reading   │
                        │  or integrates code       │
                        └───────────────────────────┘
                                     │
                                     ▼
                                    END
```

---

## Sub-Flow 1: Language Tab Switching

```
┌─────────────────────────────────────────────────────────────────────────┐
│                       TAB SWITCHING INTERACTION                         │
└─────────────────────────────────────────────────────────────────────────┘

                              START
                                │
                                ▼
                ┌────────────────────────────────┐
                │  User clicks "JavaScript" tab  │
                └────────────────────────────────┘
                                │
                                ▼
                ┌────────────────────────────────┐
                │  Check if already active tab   │
                └────────────────────────────────┘
                                │
                    ┌───────────┴───────────┐
                    │                       │
                    ▼                       ▼
        ┌────────────────────┐    ┌─────────────────┐
        │  Already active?   │    │  Different tab? │
        └────────────────────┘    └─────────────────┘
                    │                       │
                    │ Yes                   │ No
                    ▼                       ▼
        ┌────────────────────┐    ┌─────────────────────────┐
        │  Do nothing        │    │  Execute tab switch:    │
        │  (ignore click)    │    │                         │
        └────────────────────┘    │  1. Remove "active"     │
                    │              │     class from curl tab │
                    │              │  2. Add "active" class  │
                    │              │     to JavaScript tab   │
                    │              │  3. Hide curl code block│
                    │              │  4. Show JS code block  │
                    │              │  5. Update tab styles   │
                    │              └─────────────────────────┘
                    │                       │
                    │                       ▼
                    │              ┌─────────────────────────┐
                    │              │  Save to localStorage:  │
                    │              │  {                      │
                    │              │   "preferredLanguage":  │
                    │              │   "javascript"          │
                    │              │  }                      │
                    │              └─────────────────────────┘
                    │                       │
                    │                       ▼
                    │              ┌─────────────────────────┐
                    │              │  Apply to other code    │
                    │              │  examples on same page  │
                    │              │  (if multiple endpoints)│
                    │              └─────────────────────────┘
                    │                       │
                    └───────────────────────┘
                                │
                                ▼
                ┌────────────────────────────────┐
                │  Tab switch complete           │
                │  Time elapsed: <50ms (NFR-014) │
                └────────────────────────────────┘
                                │
                                ▼
                               END
```

---

## Sub-Flow 2: Copy-to-Clipboard Interaction

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    COPY-TO-CLIPBOARD INTERACTION                        │
└─────────────────────────────────────────────────────────────────────────┘

                              START
                                │
                                ▼
                ┌────────────────────────────────┐
                │  User clicks [Copy 📋] button  │
                │  on JavaScript code block      │
                └────────────────────────────────┘
                                │
                                ▼
                ┌────────────────────────────────┐
                │  Get code block text content   │
                │  (strip line numbers if any)   │
                └────────────────────────────────┘
                                │
                                ▼
                ┌─────────────────────────────────────┐
                │  navigator.clipboard.writeText(code)│
                └─────────────────────────────────────┘
                                │
                    ┌───────────┴───────────┐
                    │                       │
                    ▼                       ▼
        ┌────────────────────┐    ┌─────────────────┐
        │  Copy successful?  │    │  Copy failed?   │
        └────────────────────┘    └─────────────────┘
                    │                       │
                    │ Yes                   │ No
                    ▼                       ▼
        ┌────────────────────┐    ┌─────────────────────┐
        │  Update button:    │    │  Show error toast:  │
        │                    │    │  "Failed to copy to │
        │  Text: "Copied! ✓" │    │  clipboard"         │
        │  Icon: Checkmark   │    │                     │
        │  Color: Green      │    │  Log error to       │
        │  Background: #10B  │    │  console            │
        └────────────────────┘    └─────────────────────┘
                    │                       │
                    ▼                       │
        ┌────────────────────┐              │
        │  Set 2-second timer│              │
        └────────────────────┘              │
                    │                       │
                    ▼                       │
        ┌────────────────────┐              │
        │  Wait 2 seconds... │              │
        └────────────────────┘              │
                    │                       │
                    ▼                       │
        ┌────────────────────┐              │
        │  Revert button:    │              │
        │                    │              │
        │  Text: "Copy 📋"   │              │
        │  Color: Default    │              │
        │  Background: Clear │              │
        └────────────────────┘              │
                    │                       │
                    └───────────────────────┘
                                │
                                ▼
                ┌────────────────────────────────┐
                │  Copy operation complete       │
                │  Time: <100ms (NFR-012)        │
                └────────────────────────────────┘
                                │
                                ▼
                               END
```

---

## State Diagram

```
┌─────────────────────────────────────────────────────────────────────────┐
│                CODE EXAMPLE COMPONENT STATE MACHINE                     │
└─────────────────────────────────────────────────────────────────────────┘

States:
  [Idle] → Default state, showing selected language
  [Switching] → Transitioning between language tabs
  [Copying] → Copy-to-clipboard in progress
  [Success] → Copy succeeded, showing "Copied!" feedback
  [Error] → Copy failed, showing error message


                    ┌──────────────┐
                    │     Idle     │ ◄──────────────────┐
                    │              │                    │
                    │ Active tab:  │                    │
                    │ JavaScript   │                    │
                    └──────────────┘                    │
                         │    ▲                         │
          User clicks    │    │ Tab switch             │
          different tab  │    │ complete               │
                         ▼    │                         │
                    ┌──────────────┐                    │
                    │  Switching   │                    │
                    │              │                    │
                    │ (<50ms)      │                    │
                    └──────────────┘                    │
                                                        │
          ┌─────────────────────────────────────────────┘
          │
          │ User clicks
          │ [Copy] button
          │
          ▼
     ┌──────────────┐
     │   Copying    │
     │              │
     │ (clipboard   │
     │  operation)  │
     └──────────────┘
          │    │
Success   │    │ Failure
          ▼    ▼
     ┌──────────────┐         ┌──────────────┐
     │   Success    │         │    Error     │
     │              │         │              │
     │ "Copied! ✓"  │         │ Show toast   │
     │ (2 seconds)  │         │ "Failed..."  │
     └──────────────┘         └──────────────┘
          │                         │
          │ After 2s                │ User dismisses
          │ timeout                 │ or auto-dismiss
          │                         │
          └─────────┬───────────────┘
                    │
                    ▼
               Back to Idle
```

---

## Component States and Properties

### Code Block Component State

```javascript
interface CodeBlockState {
  // Active language tab
  activeLanguage: 'curl' | 'javascript' | 'python' | 'java';

  // Copy button state
  copyStatus: 'idle' | 'copying' | 'success' | 'error';

  // Code content for each language
  codeSnippets: {
    curl: string;
    javascript: string;
    python: string;
    java: string;
  };

  // Syntax highlighting loaded?
  syntaxHighlighted: boolean;

  // User preference (from localStorage)
  savedPreference: string | null;
}
```

### Visual States

**Tab States:**
```
Active Tab:
  Background: #3B82F6 (blue)
  Text: White (#FFFFFF)
  Border-bottom: None (seamless with code block)

Inactive Tab:
  Background: #E5E7EB (light gray)
  Text: #1F2937 (dark gray)
  Border-bottom: 1px solid #D1D5DB

Hover (Inactive):
  Background: #DBEAFE (light blue)
  Cursor: Pointer
```

**Copy Button States:**
```
Idle:
  Text: "Copy 📋"
  Background: Transparent
  Border: 1px solid #D1D5DB
  Hover Background: #F3F4F6

Copying (brief):
  Text: "Copying..."
  Background: #F3F4F6
  Disabled: true

Success (2 seconds):
  Text: "Copied! ✓"
  Background: #10B981 (green)
  Text Color: White

Error:
  Text: "Copy 📋"
  Background: Transparent
  (Error shown via toast notification)
```

---

## Interactions and Behaviors

### 1. Initial Load

```
When page loads:
  1. Check localStorage for 'preferredLanguage'
  2. If exists && valid → set as activeLanguage
  3. If not exists → default to 'curl'
  4. Show code block for activeLanguage
  5. Hide other code blocks (display: none)
  6. Apply syntax highlighting to visible code
```

### 2. Tab Click Event

```
onClick(newLanguage):
  // Ignore if already active
  if (newLanguage === activeLanguage) return;

  // Visual feedback (instant)
  setActiveLanguage(newLanguage); // <50ms

  // Update UI
  hideAllCodeBlocks();
  showCodeBlock(newLanguage);
  updateTabStyles(newLanguage);

  // Persist preference
  localStorage.setItem('preferredLanguage', newLanguage);

  // Apply to other code blocks on page (if any)
  syncOtherCodeBlocks(newLanguage);
```

### 3. Copy Button Click Event

```
async onClick():
  // Prevent double-click
  if (copyStatus !== 'idle') return;

  // Update state
  setCopyStatus('copying');

  // Get code text
  const codeText = getCodeBlockText(activeLanguage);

  // Attempt copy
  try {
    await navigator.clipboard.writeText(codeText);

    // Success
    setCopyStatus('success');

    // Revert after 2 seconds
    setTimeout(() => {
      setCopyStatus('idle');
    }, 2000);

  } catch (error) {
    // Failure
    setCopyStatus('error');
    showToast('Failed to copy to clipboard', 'error');
    console.error('Copy failed:', error);

    // Revert immediately
    setTimeout(() => {
      setCopyStatus('idle');
    }, 1000);
  }
```

### 4. Keyboard Navigation

```
Keyboard shortcuts:
  Tab → Focus next tab button
  Shift+Tab → Focus previous tab button
  Enter/Space → Activate focused tab
  Arrow Left/Right → Navigate between tabs (when focused)

Accessibility:
  - role="tablist" on tab container
  - role="tab" on each tab button
  - aria-selected="true" on active tab
  - aria-controls="code-panel-{lang}" linking tab to content
  - role="tabpanel" on code block
  - tabindex="-1" on inactive tabs
  - tabindex="0" on active tab
```

---

## Performance Requirements

### Tab Switching Performance (NFR-014)

```
Target: <50ms from click to visible change

Optimization strategies:
  1. Use CSS display: none/block (no re-render)
  2. Pre-load all code blocks on page load
  3. Syntax highlighting cached (not re-applied on switch)
  4. No API calls or async operations
  5. Direct DOM manipulation (if needed)

Measurement:
  performance.mark('tab-click-start');
  // ... tab switch logic ...
  performance.mark('tab-click-end');
  performance.measure('tab-switch', 'tab-click-start', 'tab-click-end');

  // Should be <50ms
```

### Copy Performance (NFR-012)

```
Target: <100ms for copy operation

Optimization strategies:
  1. Use modern Clipboard API (navigator.clipboard)
  2. Fallback to document.execCommand (if needed)
  3. Pre-process code text (no on-demand processing)
  4. Avoid blocking UI during copy

Measurement:
  Track time from button click to clipboard write complete
```

---

## Error Handling

### Copy Failures

**Possible Errors:**
1. **Browser doesn't support Clipboard API**
   - Fallback: Use `document.execCommand('copy')`
   - If both fail: Show "Copy not supported" message

2. **User denied clipboard permission**
   - Show toast: "Clipboard access denied. Please copy manually."
   - Keep code visible for manual selection

3. **Code text is empty/null**
   - Log error: "Code content missing for {language}"
   - Disable copy button
   - Show: "Code example not available"

4. **Network error (if code loaded async)**
   - Retry once
   - If still fails: Show "Unable to load code example"

### Tab Switching Failures

**Edge Cases:**
1. **Invalid language selected**
   - Default to 'curl'
   - Log warning

2. **Code snippet missing for selected language**
   - Show placeholder: "Code example coming soon"
   - Disable copy button
   - Auto-switch to next available language

3. **localStorage unavailable (private browsing)**
   - Tab switching still works
   - Preference not persisted
   - No error shown to user

---

## Accessibility Requirements (WCAG AA)

### Screen Reader Support

```
Tab List:
  <div role="tablist" aria-label="Code example languages">
    <button role="tab"
            aria-selected="true"
            aria-controls="code-javascript"
            id="tab-javascript">
      JavaScript
    </button>
    <button role="tab"
            aria-selected="false"
            aria-controls="code-python"
            id="tab-python">
      Python
    </button>
  </div>

Code Panel:
  <div role="tabpanel"
       id="code-javascript"
       aria-labelledby="tab-javascript"
       tabindex="0">
    <pre><code>// JavaScript code here</code></pre>
  </div>
```

### Copy Button Accessibility

```
<button aria-label="Copy JavaScript code to clipboard"
        aria-live="polite">
  <span aria-hidden="true">Copy 📋</span>
  <span class="sr-only">Copy code</span>
</button>

On success:
<button aria-label="Code copied to clipboard">
  <span aria-hidden="true">Copied! ✓</span>
  <span class="sr-only" role="status">Copied!</span>
</button>
```

### Keyboard Navigation

- **Tab key:** Move focus between tabs and copy button
- **Arrow keys:** Navigate between tabs when focused
- **Enter/Space:** Activate focused tab or copy button
- **Escape:** Close error toast (if shown)

### Focus Management

- Visible focus indicators (2px blue outline)
- Focus remains on clicked tab after switch
- Copy button receives focus after keyboard activation
- No focus traps

---

## Mobile Considerations

### Touch Interactions

```
Tab Switching:
  - Tabs horizontally scrollable if too many
  - Minimum touch target: 44x44px
  - Haptic feedback on tap (iOS/Android)
  - Prevent text selection on double-tap

Copy Button:
  - Larger button on mobile (48x48px)
  - Success feedback visible (toast + button change)
  - Long-press: Show tooltip "Copy code"
```

### Mobile Specific Behaviors

```
1. Horizontal scroll for tabs if needed
   - Show scroll indicator (gradient fade)
   - Snap to tab centers

2. Code block horizontal scroll
   - Lock vertical scroll while scrolling code
   - Copy button sticky on right

3. Reduced motion (user preference)
   - Disable tab switch animations
   - Instant state changes
```

---

## Analytics and Tracking

### Events to Track

```javascript
// Tab switch event
trackEvent('code_example_tab_switch', {
  from_language: 'curl',
  to_language: 'javascript',
  endpoint: '/shipments',
  time_to_switch_ms: 45
});

// Copy event
trackEvent('code_example_copy', {
  language: 'javascript',
  endpoint: '/shipments',
  success: true
});

// Copy failure
trackEvent('code_example_copy_failed', {
  language: 'python',
  endpoint: '/containers',
  error: 'clipboard_denied'
});

// Language preference saved
trackEvent('code_language_preference_saved', {
  language: 'python',
  is_returning_user: true
});
```

### Metrics to Monitor

- Most popular code language (by tab switches)
- Copy success rate by language
- Average time spent on code examples
- Devices/browsers with copy failures
- Tab switch performance (p50, p95, p99)

---

## Testing Scenarios

### Functional Tests

1. **Tab Switching**
   - ✅ Click each tab → shows correct code
   - ✅ Active tab styled correctly
   - ✅ Inactive tabs styled correctly
   - ✅ Only one code block visible at a time

2. **Copy to Clipboard**
   - ✅ Click copy → code copied
   - ✅ Button shows "Copied!" for 2 seconds
   - ✅ Button reverts to "Copy 📋"
   - ✅ Copied text matches displayed code
   - ✅ Copy works for all languages

3. **Persistence**
   - ✅ Select Python → reload page → Python still selected
   - ✅ Navigate to different endpoint → Python tab active
   - ✅ Clear localStorage → defaults to curl

4. **Error Handling**
   - ✅ Clipboard denied → shows error toast
   - ✅ Code missing → shows placeholder
   - ✅ Invalid language → defaults to curl

### Performance Tests

1. **Tab Switch Timing**
   ```
   Test: Click 10 different tabs in sequence
   Expected: All switches <50ms
   Measure: performance.measure()
   ```

2. **Copy Timing**
   ```
   Test: Click copy button 10 times
   Expected: All copies <100ms
   Measure: Time from click to clipboard write
   ```

### Accessibility Tests

1. **Keyboard Navigation**
   - Tab to tabs → Focus visible
   - Arrow keys → Navigate tabs
   - Enter → Activate tab
   - Tab to copy button → Focus visible

2. **Screen Reader**
   - Read tab list → Announces "4 tabs"
   - Read active tab → Announces "JavaScript, selected"
   - Activate tab → Announces "JavaScript panel"
   - Click copy → Announces "Copied!"

### Cross-Browser Tests

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS)
- Chrome Mobile (Android)

---

## Next Steps

After interaction diagram approval:
1. Implement code example component in Next.js
2. Integrate with WF-003 endpoint documentation page
3. Test on real endpoint examples
4. Validate performance metrics (NFR-014, NFR-015, NFR-016)
5. Conduct accessibility audit

---

## Related Documents

- **USD:** features/one-api-portal-mvp/po/usd.csv (ST-007)
- **Wireframe:** WF-003 (Endpoint Documentation)
- **Component Spec:** COMP-002 (Code Block with Language Tabs)
- **Other Interactions:** INT-001 (Search and Navigation Flow)
