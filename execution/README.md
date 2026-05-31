# Execution Scripts

This folder contains **deterministic Python scripts** — the workhorses of the system.

## Conventions

- Every script is **self-contained**: loads its own `.env`, handles its own errors.
- Scripts accept **CLI arguments** or read from `.tmp/` input files.
- Scripts write outputs to `.tmp/` or directly to cloud services.
- All scripts are **commented** — a mid-level engineer should understand them cold.
- Scripts **never ask for user input** mid-run (all params up front).

## Running a script

```bash
python execution/script_name.py --help
python execution/script_name.py --arg1 value1 --arg2 value2
```

## Adding a new script

1. Copy `_template.py` to `execution/your_script_name.py`
2. Fill in the TODO sections
3. Test it end-to-end
4. Reference it in the appropriate directive in `directives/`

## Dependencies

Install all dependencies with:

```bash
pip install -r requirements.txt
```
