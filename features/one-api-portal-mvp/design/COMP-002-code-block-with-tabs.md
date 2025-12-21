# COMP-002: Code Block with Language Tabs Component Specification

**Feature:** ONE API Portal MVP
**Component Type:** Shared Component
**Wireframes:** WF-003 (Endpoint Documentation)
**User Story:** ST-007
**ShadCN Components:** `Tabs`, `Button`
**Created:** 2025-12-21
**Status:** Draft

---

## Purpose

The Code Block with Language Tabs component displays code examples in multiple programming languages. It enables developers to:
- View code examples in their preferred language (curl, JavaScript, Python, Java)
- Copy code to clipboard with one click
- Switch between languages instantly
- See syntax-highlighted, properly formatted code

---

## ShadCN UI Mapping

**Primary Components:**
- **`Tabs`** - For language selection (curl, JavaScript, Python, Java)
  - Installation: `npx shadcn-ui@latest add tabs`
  - Docs: https://ui.shadcn.com/docs/components/tabs

- **`Button`** - For copy-to-clipboard action
  - Installation: `npx shadcn-ui@latest add button`
  - Docs: https://ui.shadcn.com/docs/components/button

**Additional Libraries:**
- **`react-syntax-highlighter`** - For code syntax highlighting
  - Installation: `npm install react-syntax-highlighter @types/react-syntax-highlighter`
- **`clipboard-copy`** - For clipboard functionality
  - Installation: `npm install clipboard-copy`

---

## Component Structure

```tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Check, Copy } from 'lucide-react';
import copy from 'clipboard-copy';
import { useState, useEffect } from 'react';

interface CodeExample {
  language: 'curl' | 'javascript' | 'python' | 'java';
  label: string;
  code: string;
  highlightLanguage: string; // For syntax highlighter
}

interface CodeBlockWithTabsProps {
  examples: CodeExample[];
  defaultLanguage?: string;
  title?: string;
  showResponse?: boolean;
  responseCode?: string;
}

export function CodeBlockWithTabs({
  examples,
  defaultLanguage = 'curl',
  title,
  showResponse = false,
  responseCode
}: CodeBlockWithTabsProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [selectedTab, setSelectedTab] = useState(defaultLanguage);

  // Persist language preference
  useEffect(() => {
    const saved = localStorage.getItem('preferredLanguage');
    if (saved && examples.some(ex => ex.language === saved)) {
      setSelectedTab(saved);
    }
  }, [examples]);

  const handleCopy = async (code: string, index: number) => {
    await copy(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleTabChange = (value: string) => {
    setSelectedTab(value);
    localStorage.setItem('preferredLanguage', value);
  };

  return (
    <div className="code-block-container">
      {title && <h3 className="text-lg font-semibold mb-3">{title}</h3>}

      <Tabs value={selectedTab} onValueChange={handleTabChange}>
        <div className="flex items-center justify-between mb-2">
          <TabsList>
            {examples.map((example) => (
              <TabsTrigger
                key={example.language}
                value={example.language}
                className="min-w-[80px]"
              >
                {example.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {examples.map((example, index) => (
          <TabsContent
            key={example.language}
            value={example.language}
            className="relative mt-0"
          >
            <div className="relative group">
              {/* Copy Button */}
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100
                           transition-opacity bg-gray-800/80 hover:bg-gray-700
                           text-white"
                onClick={() => handleCopy(example.code, index)}
              >
                {copiedIndex === index ? (
                  <>
                    <Check className="w-4 h-4 mr-1" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-1" />
                    Copy
                  </>
                )}
              </Button>

              {/* Code Block */}
              <SyntaxHighlighter
                language={example.highlightLanguage}
                style={vs2015}
                customStyle={{
                  borderRadius: '8px',
                  padding: '16px',
                  fontSize: '14px',
                  lineHeight: '1.5',
                  margin: 0,
                }}
                showLineNumbers={false}
                wrapLines={true}
              >
                {example.code}
              </SyntaxHighlighter>
            </div>

            {/* Expected Response (Optional) */}
            {showResponse && responseCode && selectedTab === example.language && (
              <div className="mt-4">
                <p className="text-sm font-medium text-gray-700 mb-2">
                  Expected Response:
                </p>
                <SyntaxHighlighter
                  language="json"
                  style={vs2015}
                  customStyle={{
                    borderRadius: '8px',
                    padding: '16px',
                    fontSize: '14px',
                    lineHeight: '1.5',
                  }}
                >
                  {responseCode}
                </SyntaxHighlighter>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
```

---

## Props / Configuration

```typescript
interface CodeExample {
  language: 'curl' | 'javascript' | 'python' | 'java';
  label: string;              // Display name (e.g., "cURL", "JavaScript")
  code: string;               // Actual code content
  highlightLanguage: string;  // Language for syntax highlighter
}

interface CodeBlockWithTabsProps {
  examples: CodeExample[];            // Array of code examples
  defaultLanguage?: string;            // Default selected language
  title?: string;                      // Optional title above tabs
  showResponse?: boolean;              // Show expected response section
  responseCode?: string;               // Expected response JSON
}
```

---

## Usage Example

```tsx
import { CodeBlockWithTabs } from '@/components/shared/code-block-with-tabs';

const ShipmentEndpointDocs = () => {
  const codeExamples = [
    {
      language: 'curl',
      label: 'cURL',
      highlightLanguage: 'bash',
      code: `curl -X GET \\
  "https://api.one-line.com/v1/shipments?booking_no=BKG123456" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`,
    },
    {
      language: 'javascript',
      label: 'JavaScript',
      highlightLanguage: 'javascript',
      code: `const response = await fetch(
  'https://api.one-line.com/v1/shipments?booking_no=BKG123456',
  {
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    }
  }
);

const data = await response.json();
console.log(data);`,
    },
    {
      language: 'python',
      label: 'Python',
      highlightLanguage: 'python',
      code: `import requests

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
print(data)`,
    },
    {
      language: 'java',
      label: 'Java',
      highlightLanguage: 'java',
      code: `HttpClient client = HttpClient.newHttpClient();

HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api.one-line.com/v1/shipments?booking_no=BKG123456"))
    .header("Authorization", "Bearer YOUR_API_KEY")
    .header("Content-Type", "application/json")
    .GET()
    .build();

HttpResponse<String> response = client.send(request,
    HttpResponse.BodyHandlers.ofString());

System.out.println(response.body());`,
    },
  ];

  const expectedResponse = `{
  "success": true,
  "data": {
    "booking_no": "BKG123456",
    "status": "IN_TRANSIT",
    "origin": {
      "port_code": "USNYC",
      "port_name": "New York"
    },
    "destination": {
      "port_code": "CNSHA",
      "port_name": "Shanghai"
    }
  }
}`;

  return (
    <div>
      <h2>Code Examples</h2>
      <CodeBlockWithTabs
        examples={codeExamples}
        defaultLanguage="curl"
        showResponse={true}
        responseCode={expectedResponse}
      />
    </div>
  );
};
```

---

## Styling Specifications

### Tabs (Language Selector)

**TabsList Styling:**
```css
.tabs-list {
  background-color: #F3F4F6; /* gray-100 */
  border-radius: 8px;
  padding: 4px;
  display: inline-flex;
  gap: 4px;
}
```

**TabsTrigger Styling:**
```css
.tabs-trigger {
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  color: #6B7280; /* gray-500 */
  transition: all 150ms;
}

.tabs-trigger:hover {
  color: #111827; /* gray-900 */
  background-color: #FFFFFF;
}

.tabs-trigger[data-state="active"] {
  background-color: #FFFFFF;
  color: #2563EB; /* blue-600 */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
```

### Code Block Styling

**Container:**
```css
.code-block {
  background-color: #1E1E1E; /* vs2015 theme dark bg */
  border-radius: 8px;
  padding: 16px;
  font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.5;
  overflow-x: auto;
}
```

**Syntax Highlighting Theme:**
- Use `vs2015` theme from react-syntax-highlighter
- Dark background: #1E1E1E
- Code text: #DCDCDC
- Keywords: #569CD6 (blue)
- Strings: #CE9178 (orange)
- Numbers: #B5CEA8 (green)
- Comments: #6A9955 (dark green)

### Copy Button

**Default State:**
```css
.copy-button {
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 6px 12px;
  background-color: rgba(55, 65, 81, 0.8); /* gray-700 with opacity */
  color: white;
  border-radius: 6px;
  font-size: 13px;
  opacity: 0;
  transition: opacity 200ms, background-color 150ms;
}

.code-block:hover .copy-button {
  opacity: 1;
}

.copy-button:hover {
  background-color: rgba(55, 65, 81, 1); /* gray-700 full opacity */
}
```

**Copied State:**
```css
.copy-button[data-copied="true"] {
  background-color: #10B981; /* green-500 */
  opacity: 1;
}
```

---

## Behavior Specifications

### 1. Tab Switching
```typescript
const handleTabChange = (value: string) => {
  // Switch tab instantly (< 50ms)
  setSelectedTab(value);

  // Save preference to localStorage
  localStorage.setItem('preferredLanguage', value);

  // Optional: Track analytics
  trackEvent('code_example_language_change', { language: value });
};
```

**Performance:**
- Tab switch: < 50ms (NFR-014)
- No network request needed (all examples pre-loaded)
- Smooth transition (no flicker)

### 2. Copy to Clipboard
```typescript
const handleCopy = async (code: string, index: number) => {
  try {
    // Copy to clipboard
    await copy(code);

    // Show "Copied!" feedback
    setCopiedIndex(index);

    // Reset after 2 seconds
    setTimeout(() => setCopiedIndex(null), 2000);

    // Optional: Track analytics
    trackEvent('code_copied', {
      language: examples[index].language,
      endpoint: currentEndpoint
    });
  } catch (error) {
    console.error('Copy failed:', error);
    // Optional: Show error toast
  }
};
```

**Copy Behavior:**
- Copies exact code (preserves formatting, indentation)
- Works across all modern browsers (NFR-015)
- Visual feedback: Button changes to "Copied!" with checkmark icon
- Color changes to green (#10B981)
- Reverts to "Copy" after 2 seconds

### 3. Preferred Language Persistence
```typescript
// On component mount
useEffect(() => {
  const saved = localStorage.getItem('preferredLanguage');

  // If saved language exists and is available in current examples
  if (saved && examples.some(ex => ex.language === saved)) {
    setSelectedTab(saved);
  }
}, [examples]);

// Save on every tab change
const handleTabChange = (value: string) => {
  setSelectedTab(value);
  localStorage.setItem('preferredLanguage', value);
};
```

**Behavior:**
- User selects "JavaScript" on one page
- Navigate to another endpoint page
- "JavaScript" tab automatically selected (if available)
- Persists across browser sessions
- Falls back to default if preferred language not available

### 4. Keyboard Navigation
```typescript
// Tabs component handles this automatically
// - Arrow keys: Move between tabs
// - Enter/Space: Select tab
// - Tab: Move focus to next element
```

---

## Responsive Behavior

### Desktop (≥1024px)
- Tabs display horizontally
- All language options visible
- Copy button appears on hover
- Code block: max-width 100%, horizontal scroll if needed

### Tablet (768-1023px)
- Same as desktop
- May reduce padding slightly

### Mobile (<768px)
- Tabs may wrap if too many languages
- Copy button always visible (no hover on mobile)
- Code block: Full width, horizontal scroll enabled
- Font size may reduce to 13px for readability
- Language labels may abbreviate (e.g., "JS" instead of "JavaScript")

**Mobile Optimization:**
```tsx
<TabsList className="flex-wrap md:flex-nowrap">
  {examples.map((example) => (
    <TabsTrigger
      key={example.language}
      value={example.language}
      className="text-sm md:text-base min-w-[60px] md:min-w-[80px]"
    >
      {/* Show abbreviated label on mobile */}
      <span className="md:hidden">{example.shortLabel || example.label}</span>
      <span className="hidden md:inline">{example.label}</span>
    </TabsTrigger>
  ))}
</TabsList>
```

---

## Accessibility Requirements

### Keyboard Navigation
- **Tab:** Move focus between tabs
- **Arrow Left/Right:** Navigate between tabs (handled by Tabs component)
- **Enter/Space:** Select tab
- **Tab (again):** Move focus to Copy button
- **Enter:** Copy code

### ARIA Labels
```tsx
<Tabs
  value={selectedTab}
  onValueChange={handleTabChange}
  aria-label="Code example language selection"
>
  <TabsList role="tablist">
    <TabsTrigger
      value="curl"
      role="tab"
      aria-selected={selectedTab === 'curl'}
      aria-controls="code-panel-curl"
    >
      cURL
    </TabsTrigger>
  </TabsList>

  <TabsContent
    value="curl"
    role="tabpanel"
    id="code-panel-curl"
    aria-labelledby="tab-curl"
  >
    <Button
      aria-label="Copy cURL code to clipboard"
      onClick={() => handleCopy(code, index)}
    >
      {copiedIndex === index ? 'Copied!' : 'Copy'}
    </Button>

    <SyntaxHighlighter {...props} />
  </TabsContent>
</Tabs>
```

### Screen Reader Announcements
```tsx
{copiedIndex === index && (
  <span className="sr-only" role="status" aria-live="polite">
    Code copied to clipboard
  </span>
)}
```

### Focus Management
- Visible focus indicators on tabs and copy button
- Focus doesn't get trapped
- After copying, focus remains on copy button (don't steal focus)

---

## Performance Targets

- **Tab Switch:** < 50ms (NFR-014)
- **Copy Operation:** < 100ms (NFR-012, NFR-015)
- **Initial Render:** < 200ms
- **Syntax Highlighting:** Render on mount (no lazy load)
- **Memory:** Efficient (use `Light` build of react-syntax-highlighter, register only needed languages)

**Optimization:**
```tsx
// Import only Light build
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';

// Register only needed languages
import bash from 'react-syntax-highlighter/dist/esm/languages/hljs/bash';
import javascript from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import python from 'react-syntax-highlighter/dist/esm/languages/hljs/python';
import java from 'react-syntax-highlighter/dist/esm/languages/hljs/java';

SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('python', python);
SyntaxHighlighter.registerLanguage('java', java);
```

---

## Testing Checklist

- [ ] All 4 language tabs display correctly
- [ ] Clicking tab switches code example instantly (<50ms)
- [ ] Default language loads first
- [ ] Copy button appears on hover (desktop)
- [ ] Copy button always visible (mobile)
- [ ] Clicking copy copies code to clipboard
- [ ] Copy button shows "Copied!" feedback for 2 seconds
- [ ] Copied state reverts to "Copy" after timeout
- [ ] Selected language persists across page navigation
- [ ] Keyboard navigation works (Tab, Arrow keys, Enter)
- [ ] ARIA labels correct for screen readers
- [ ] Syntax highlighting renders correctly for all languages
- [ ] Code blocks scroll horizontally if content too wide
- [ ] Works on Chrome, Firefox, Safari, Edge
- [ ] Works on iOS Safari, Android Chrome
- [ ] No console errors

---

## Related Documents

- **Wireframe:** WF-003 (Endpoint Documentation)
- **User Story:** ST-007 (Copy code examples in 4+ languages)
- **shadcn Tabs:** https://ui.shadcn.com/docs/components/tabs
- **shadcn Button:** https://ui.shadcn.com/docs/components/button
- **react-syntax-highlighter:** https://github.com/react-syntax-highlighter/react-syntax-highlighter
