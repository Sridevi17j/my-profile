# Agent Instructions

This repository is a safe test project for Slack/Linear/GitHub engineering automation.

These instructions apply to Codex and other coding agents.

## Very Important: Definition of Done

For every requested code change, the task is not complete until a GitHub pull request is opened.

Do not stop after only committing locally, preparing a diff, or pushing a branch. Unless the user explicitly asks for a plan only, always finish by opening a pull request targeting `main`.

If you cannot open a pull request, stop and report the exact blocker. Do not claim the task is complete without a PR URL.

## Project Shape

- Frontend: React with Vite in `src/`
- Backend: Express API in `server/`
- Tests: Vitest and Supertest in `tests/`
- No database is required

## Core Rules

- Keep changes focused on the requested task.
- Follow the existing file structure before adding abstractions.
- Do not delete or modify automation/agent files unless the task explicitly asks for automation changes.
- Do not push directly to `main`.
- Do not commit secrets, local environment files, dependency folders, or build output.

Protected automation files:

- `AGENTS.md`
- `CLAUDE.md`
- `HERMES.md`
- `.github/workflows/ci.yml`
- `.github/workflows/auto-merge.yml`

## Work Classification

Classify every request before making code changes.

### Small UI / Static Change

Examples:

- Text/copy changes
- Color changes
- CSS-only styling
- Static content updates
- Simple React view changes

Required workflow:

- Make only the requested frontend/static change.
- Run `npm run lint`.
- Run `npm test`.
- Run `npm run build`.
- Create a branch.
- Open a pull request targeting `main`.
- Add the GitHub label `ai-minor-change`.
- Do not merge the pull request manually. GitHub Actions will merge eligible PRs after CI passes.

### Backend Change

Examples:

- API route changes
- Express server changes
- Validation logic
- Business logic
- Package or config changes

Required workflow:

- Open a normal pull request targeting `main`.
- Run the required checks.
- Do not add `ai-minor-change` unless a human explicitly approves auto-merge for that exact PR.
- Human review decides merge.

### DB / Sensitive Change

Examples:

- Database schema changes
- Migrations
- Production data changes
- Auth, permissions, payments, billing, contracts, infrastructure, secrets, or GitHub workflow changes

Required workflow:

- Do not create a merge-ready implementation unless explicitly approved.
- Prefer a plan or draft PR.
- Do not add `ai-minor-change`.
- Ask for human approval before implementation or merge.

## Required Validation

Always run these commands before creating or updating a PR:

```bash
npm run lint
npm test
npm run build
```

If any command fails, fix the issue and rerun the failed command.

## PR Requirements

For every code change, open a pull request targeting `main`.

Open a PR to `main` with:

- Summary of the change
- Tests run
- Screenshots or notes for UI changes
- Known limitations

For small UI/static changes, add the GitHub label:

```text
ai-minor-change
```
