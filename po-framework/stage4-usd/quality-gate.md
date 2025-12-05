# USD Quality Gate

The User Story Details must meet these conditions before UAT scenarios can be generated:

## Completeness

* [ ] Every story in the USL has a matching row in the USD.
* [ ] Each column is filled in with meaningful content or clearly marked as `TBD` where not yet known.
* [ ] Estimates are numeric or explicitly left blank if not estimated.

## Acceptance criteria quality

* [ ] All AC columns use bullet lists with `AC‑NNN` labels.
* [ ] Each bullet describes a single, testable condition.
* [ ] Bullets are observable and free of vague adjectives (e.g. “fast”, “nice”, “intuitive”).

## Coverage

* [ ] UI, behaviour and logic columns together cover the core functional requirements of the story.
* [ ] Special notes include edge cases, localisation or accessibility considerations.
* [ ] NFRs are specified for any story where performance, security or reliability may be an issue.

## Consistency and dependencies

* [ ] `story_id` values match those in the USL.
* [ ] Dependencies list other story IDs or technical tasks where appropriate.
* [ ] AC labels are unique within each story row.

Once all boxes are checked, the USD is considered ready for Stage 5 UAT generation.