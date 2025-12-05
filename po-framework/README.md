# Product Owner Automation Specification Repository

This repository contains the end‑to‑end specification for automating the product owner (PO) workflow within the ONE Tech Stop project.  The materials here are organized by stage and further broken down into rules, examples, prompts and quality gates for each stage.

The five stages of the PO workflow are:

1. **PRD (Product Requirements Document)** – defines what problem we are solving and why.
2. **USM (User Story Map)** – describes the high‑level user activities, steps and the stories that support them.
3. **USL (User Story List)** – a CSV backlog index of stories with metadata like priorities and status.
4. **USD (User Story Details)** – per‑story acceptance criteria, non‑functional requirements and dependencies.
5. **UAT (User Acceptance Testing)** – BDD test cases that verify the behaviour defined in each story.

Each stage has its own folder containing:

- `rules.md` – detailed guidelines for creating and maintaining that artefact, including naming conventions, required fields and mapping rules from previous stages.
- `example.[md|csv]` – a concrete example showing how to apply the rules to a realistic feature.
- `prompts.md` – prompt templates for generating, reviewing and updating the artefact via AI.
- `quality-gate.md` – checklist of conditions that must be met for an artefact to be considered ready for downstream automation.

Refer to `project-structure.md` in the root for a description of the folder layout and relationships between files.