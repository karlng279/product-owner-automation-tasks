# Stage 5 – UAT Creation & Maintenance Rules

The User Acceptance Testing (UAT) file lists BDD scenarios that verify the behaviour defined in the USD.  Each row represents one test scenario and can be executed manually or automated.

## 1. Purpose

* Provide a human‑readable set of tests that confirm the system meets user stories’ acceptance criteria.
* Maintain a clear traceability chain from PRD → USM → USL → USD → UAT.
* Capture test results (`Pass`, `Failed`, `Not Testable`) for each scenario.

## 2. Relationship to other artefacts

* Each UAT row is linked to one `story_id` from the USL and one or more AC labels from the USD.
* UAT is the final artefact in the pipeline before implementation and QA sign‑off.
* Test execution results are stored in the `test_result` column.

## 3. CSV schema

```csv
story_id,
test_case_id,
scenario,
precondition,
given,
when,
then,
priority,
notes,
ac_refs,
test_result
```

### Column definitions

* **story_id:** ID of the story being tested (e.g. `ST‑001`).
* **test_case_id:** Unique identifier for the scenario (e.g. `TC‑001`).
* **scenario:** One‑line description of what the test validates.
* **precondition:** Optional context that must hold before the scenario starts.
* **given / when / then:** The BDD clauses describing the initial state, user action and expected outcome.
* **priority:** Importance of the scenario (`P0`, `P1`, `P2` etc.).
* **notes:** Extra information, such as test data sets or browser requirements.
* **ac_refs:** Comma‑separated list of AC labels from the USD that this scenario covers (e.g. `AC‑001, AC‑002`).
* **test_result:** Outcome of test execution.  Allowed values: `Pass`, `Failed`, `Not Testable` (initially set to `Not Testable`).

## 4. Mapping rules: USD → UAT

1. **Group ACs:**  Collect AC bullets for each story from the USD.  Group them into logical clusters (e.g. happy path, edge case, error case).
2. **Create scenarios:**  For each cluster, write a test scenario:
   * `scenario`: summarises the cluster’s intent.
   * `precondition`: context not captured in the Given clause (optional).
   * `given`: user state or system state at the start.
   * `when`: user action being tested.
   * `then`: expected outcomes, referencing relevant ACs.
   * `ac_refs`: list the AC labels that the scenario validates.
   * `priority`: assign P0 for must‑have stories’ happy paths; P1 or P2 for other cases.
   * `test_result`: set to `Not Testable` until execution.

3. **FIRST principles:**  Ensure each scenario is Fast, Independent, Repeatable, Self‑validating and Timely.

## 5. Quality gate

A UAT file is **execution‑ready** when:

* Every must‑have story has at least one happy‑path and one key edge‑case scenario.
* `given`, `when` and `then` clauses are clear, business‑readable and free of implementation details.
* `ac_refs` map back to actual AC labels in the USD.
* `test_result` is initialised to `Not Testable` for all scenarios.
* Priorities reflect the relative importance of the scenarios.

If these conditions are not met, refine the scenarios before execution begins.