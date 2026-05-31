# Directives

This folder contains **SOPs (Standard Operating Procedures)** written in Markdown.

Each directive defines:
- **Goal** – What this workflow achieves
- **Inputs** – What information / parameters are required
- **Tools / Scripts** – Which `execution/` scripts to call (in order)
- **Outputs** – What gets produced (usually a cloud deliverable)
- **Edge Cases** – Known errors, rate limits, gotchas

## Rules

- Directives are **living documents** — update them when you learn something new.
- Do **not** delete or overwrite a directive without asking the user first.
- Each directive maps to one or more scripts in `execution/`.

## Template

Copy `_template.md` to create a new directive.
