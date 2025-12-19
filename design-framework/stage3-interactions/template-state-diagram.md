# State Diagram Template

## Overview

State diagrams use ASCII art to visually represent component behavior, state transitions, triggers, conditions, and actions.

---

## Notation Guide

### States (Boxes)

```
+------------------+
| State Name       |
+------------------+
```

**Guidelines:**
- Use clear, descriptive names
- Keep names concise (1-2 words)
- Use consistent width (adjust for readability)

**Examples:**
```
+------------+
| Idle       |
+------------+

+------------+
| Loading    |
+------------+

+------------+
| Success    |
+------------+

+------------+
| Error      |
+------------+
```

---

### Initial State

**Notation:** Arrow pointing to initial state

```
→ +------------+
  | Idle       |
  +------------+
```

**Rules:**
- Every diagram has exactly one initial state
- Initial state is where interaction begins
- Use → to indicate initial state

---

### Final State

**Notation:** State box with ⊗ symbol

```
+------------+
| Success    | ⊗
+------------+
```

**Rules:**
- Final states are terminal (no exits)
- Not all diagrams need final states (some loop)
- Use ⊗ to indicate final state

---

### Transitions (Arrows)

**Simple Transition:**
```
+------------+               +------------+
| State A    | ------------> | State B    |
+------------+               +------------+
```

**Transition with Label:**
```
+------------+  event name   +------------+
| State A    | ------------> | State B    |
+------------+               +------------+
```

**Vertical Transition:**
```
+------------+
| State A    |
+------------+
      |
      | event name
      v
+------------+
| State B    |
+------------+
```

**Transition Back (Loop):**
```
         +---retry---+
         |           |
         v           |
+--------+-----------+
| Loading            |
+--------------------+
```

---

### Triggers/Events

**Notation:** Label on arrow

**Format:** `[verb] [noun]` or `[description]`

**Examples:**
```
user clicks submit
API returns success
validation fails
timeout occurs
user clicks cancel
Enter key pressed
```

**Guidelines:**
- Be specific and descriptive
- Use active voice
- Keep concise (1-5 words)
- Describe what triggers the transition

---

### Conditions (Guards)

**Notation:** `[if condition]` on transition

```
              [if valid]
+------------+ ---------> +------------+
| Validating |            | Submitting |
+------------+ ---------> +------------+
              [if invalid]
                  |
                  v
              +------------+
              | Error      |
              +------------+
```

**Examples:**
- `[if valid]`
- `[if unauthorized]`
- `[if empty]`
- `[if timeout]`
- `[if error code 400]`

**Guidelines:**
- Place before or above arrow
- Use clear boolean conditions
- Use brackets [ ]

---

### Actions

**Notation:** `/action` on transition

```
                /call API
+------------+ ----------> +------------+
| Idle       |             | Loading    |
+------------+             +------------+
```

**Examples:**
- `/validate form`
- `/call API`
- `/show error message`
- `/navigate to dashboard`
- `/clear form`
- `/close modal`

**Guidelines:**
- Use forward slash /
- Describe what system does during transition
- Be specific

---

### Complete Transition with Trigger, Condition, and Action

```
              submit [if valid] /call API
+------------+ -------------------------> +------------+
| Idle       |                            | Submitting |
+------------+                            +------------+
```

**Format:** `trigger [condition] /action`

---

## Common State Diagram Patterns

### Pattern 1: Simple Linear Flow

```
→ +----------+  start     +----------+  complete  +----------+
  | Initial  | ---------> | Active   | ---------> | Done     | ⊗
  +----------+            +----------+            +----------+
```

---

### Pattern 2: Validation Flow

```
→ +----------+  input data      +------------+
  | Idle     | ---------------> | Validating |
  +----------+                  +------------+
                                      |
                        +-------------+-------------+
                        |                           |
                   [if valid]                  [if invalid]
                        |                           |
                        v                           v
                 +------------+              +------------+
                 | Valid      |              | Invalid    |
                 +------------+              +------------+
                        |                           |
                   user submits                user fixes
                        |                           |
                        v                           |
                 +------------+ <-------------------+
                 | Submitting |
                 +------------+
```

---

### Pattern 3: Loading with Success/Error

```
→ +----------+  submit         +----------+
  | Idle     | /call API ----> | Loading  |
  +----------+                 +----------+
                                    |
                      +-------------+-------------+
                      |                           |
                  API success                 API error
                  /show success              /show error
                      |                           |
                      v                           v
               +------------+              +------------+
               | Success    | ⊗            | Error      |
               +------------+              +------------+
                                                  |
                                             retry/close
                                                  |
                                                  v
                                           +------------+
                                           | Idle       |
                                           +------------+
```

---

### Pattern 4: Modal Flow

```
→ +----------+  trigger      +----------+
  | Closed   | -----------> | Open     |
  +----------+              +----------+
      ^                          |
      |                          |
      |          +---------------+---------------+
      |          |                               |
      |     user confirms                   user cancels
      |     /execute action                /do nothing
      |          |                               |
      |          v                               |
      |    +------------+                        |
      +----| Processing | <----------------------+
           +------------+
                 |
      +----------+----------+
      |                     |
  action success       action error
  /show success        /show error
      |                     |
      v                     v
 +----------+          +----------+
 | Closed   | ⊗        | Error    |
 +----------+          +----------+
```

---

### Pattern 5: Multi-Step Form

```
→ +----------+  start      +----------+  next [if valid]  +----------+
  | Step 1   | ---------> | Step 2   | ----------------> | Step 3   |
  +----------+            +----------+                   +----------+
      |                        |                              |
      | [if invalid]           | [if invalid]                 |
      v                        v                              |
  +----------+            +----------+                        |
  | Error 1  |            | Error 2  |                        |
  +----------+            +----------+                        |
                                                              | submit
                                                              | /call API
                                                              v
                                                        +------------+
                                                        | Submitting |
                                                        +------------+
                                                              |
                                                    +---------+---------+
                                                    |                   |
                                                success             error
                                                    |                   |
                                                    v                   v
                                              +----------+        +----------+
                                              | Success  | ⊗      | Error    |
                                              +----------+        +----------+
```

---

### Pattern 6: Table Interaction

```
→ +----------+
  | Idle     | <-------------------+
  +----------+                     |
      |                            |
      +----+-----+-----+           |
      |    |     |     |           |
   filter sort page  select        |
      |    |     |     |           |
      v    v     v     v           |
  +------------------------+       |
  | Loading                |       |
  +------------------------+       |
            |                      |
      +-----+-----+                |
      |           |                |
   success      error              |
      |           |                |
      v           v                |
  +----------+ +----------+        |
  | Display  | | Error    |        |
  +----------+ +----------+        |
      |             |              |
      +-------------+--------------+
         user action
```

---

## State Diagram Template (Blank)

```
**Interaction ID:** INT-XXX
**Interaction Name:** [Name]

### State Diagram

[Insert ASCII state diagram here]

→ +------------+
  | [Initial]  |
  +------------+
        |
        | [trigger] [condition] /action
        v
  +------------+
  | [State 2]  |
  +------------+
        |
        | [trigger]
        v
  +------------+
  | [Final]    | ⊗
  +------------+
```

---

## State Diagram Template (Full Example)

```
**Interaction ID:** INT-001
**Interaction Name:** Login Form Submission

### State Diagram

→ +------------------+
  | Idle (Empty)     |
  +------------------+
         |
         | user enters data
         v
  +------------------+
  | Validating       |
  +------------------+
         |
    +----+----+
    |         |
[if valid] [if invalid]
    |         |
    |         v
    |    +------------------+
    |    | Invalid (Errors) |
    |    +------------------+
    |         |
    |         | user fixes
    |         |
    |    +----+
    |    |
    v    v
  +------------------+  submit /validate then call API
  | Valid (Ready)    | ------------------------------------+
  +------------------+                                     |
                                                           v
                                                    +------------------+
                                                    | Submitting       |
                                                    +------------------+
                                                           |
                                              +------------+------------+
                                              |                         |
                                       API success                  API error
                                       /show toast                  /show alert
                                       /navigate                    /enable retry
                                              |                         |
                                              v                         v
                                       +------------------+      +------------------+
                                       | Success          | ⊗    | Error            |
                                       | (Dashboard)      |      +------------------+
                                       +------------------+             |
                                                                        | retry
                                                                        v
                                                                 +------------------+
                                                                 | Idle             |
                                                                 +------------------+
```

---

## Drawing Tips

### Alignment
- Keep boxes aligned horizontally or vertically when possible
- Use consistent spacing between states
- Use consistent box widths for readability

### Arrows
- Use `|` for vertical arrows
- Use `-` for horizontal arrows
- Use `v` for downward arrow tips
- Use `>` for rightward arrow tips
- Use `^` for upward arrow tips
- Use `<` for leftward arrow tips

### Complex Connections
When multiple transitions converge or diverge, use connection points:

```
         +-------+-------+
         |               |
         v               v
    +--------+      +--------+
    | State  |      | State  |
    +--------+      +--------+
```

### Readability
- Add whitespace around complex sections
- Label all arrows clearly
- Keep state names visible
- Use vertical space to avoid overlapping lines

---

## Validation Checklist

Before finalizing state diagram:

- [ ] All states have descriptive names
- [ ] Initial state is marked with →
- [ ] Final states (if any) are marked with ⊗
- [ ] All transitions have labels
- [ ] Conditions are in brackets [if X]
- [ ] Actions use forward slash /action
- [ ] No orphaned states (all states have at least one entry and exit)
- [ ] Diagram is readable and well-formatted
- [ ] All possible paths are represented
- [ ] Error paths are included
- [ ] Loops (if any) are clear

---

**Related:**
- [Interaction Flow Template](template-interaction-flow.md)
- [Examples](examples.md)
- [Rules](rules.md)
