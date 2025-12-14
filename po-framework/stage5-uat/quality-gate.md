# UAT Quality Gate

Use this checklist to ensure that the UAT file is ready for execution by QA or automated test runners.

## Coverage

* [ ] Every Must‑have story has at least one happy‑path scenario.
* [ ] Key edge or error cases are covered where the USD defines them.

## Clarity

* [ ] Each scenario’s `scenario` field is a concise summary of the behaviour being tested.
* [ ] Given/When/Then clauses use business language and describe one flow without chaining unrelated actions.
* [ ] Precondition is used only for context that cannot be easily expressed in Given.

## Traceability

* [ ] `story_id` values match the USL and USD.
* [ ] `ac_refs` list one or more AC labels from the USD; there is no mismatch.

## Execution readiness

* [ ] `test_result` is initialised to `Not Testable` for all rows.
* [ ] Priorities (`P0`, `P1`, `P2`) reflect the importance of each scenario.

When all boxes are checked, the UAT file can be used by QA to perform manual or automated testing.  Update `test_result` as tests are executed.