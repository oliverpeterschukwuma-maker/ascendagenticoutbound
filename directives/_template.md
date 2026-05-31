# Directive: [Name]

> **Status:** Draft | Active | Deprecated  
> **Last Updated:** YYYY-MM-DD  
> **Version:** 1.0

## Goal

One-paragraph description of what this workflow accomplishes and why it exists.

## Inputs

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `param_1` | string | Yes | Description |
| `param_2` | list | No | Description, defaults to [] |

## Tools / Scripts

Run in this order:

1. `execution/script_one.py` — Brief description of what it does
2. `execution/script_two.py` — Brief description of what it does

## Outputs

- **Primary deliverable:** Google Sheet / Slide / Doc at `[link]`
- **Intermediate files:** Stored in `.tmp/[subfolder]/` (auto-deleted after run)

## Step-by-Step

1. Gather inputs from user
2. Run `execution/script_one.py` with inputs X and Y
3. Validate output: check for [condition]
4. Run `execution/script_two.py` passing output from step 2
5. Return final deliverable link to user

## Edge Cases & Notes

- **Rate limits:** [API] allows N requests/minute. Script handles with exponential backoff.
- **Auth errors:** Ensure `credentials.json` is present and `token.json` is valid.
- **Empty results:** If [condition], skip to step N and notify user.

## Changelog

| Date | Change |
|------|--------|
| YYYY-MM-DD | Initial version |
