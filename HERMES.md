# Hermes Workflow Instructions

This repository is used to test Slack-triggered engineering automation with Hermes Agent, Claude Code, and GitHub Actions.

## Primary goal

When a Slack or CLI request asks for a code change in this repository, classify the request before delegating work.

Use these categories:

1. Small UI / static change
2. Backend change
3. DB / sensitive change

## Classification rules

### Small UI / static change

Examples:

- Color changes
- Copy changes
- Spacing or layout polish
- Static frontend content
- CSS-only or simple React view changes

Expected behavior:

- Delegate implementation to Claude Code.
- Claude Code must follow `CLAUDE.md`.
- Claude Code should create a branch.
- Claude Code should open a pull request targeting `main`.
- Claude Code should add the GitHub label `ai-minor-change`.
- Do not manually merge. GitHub Actions will auto-merge only if CI passes and the file guard allows the change.

### Backend change

Examples:

- API route changes
- Express server changes
- Validation or business logic changes
- Package or build configuration changes

Expected behavior:

- Delegate implementation to Claude Code only if the requester clearly wants implementation.
- Claude Code should open a normal PR targeting `main`.
- Do not add the `ai-minor-change` label unless a human explicitly approves that exact PR for auto-merge.
- Human review decides merge.

### DB / sensitive change

Examples:

- Database schema changes
- Migrations
- Production data changes
- Auth, permissions, payment, billing, contracts, secrets, infrastructure, or workflow changes

Expected behavior:

- Do not auto-implement as a merge-ready PR.
- Create a plan or draft PR only.
- Do not add the `ai-minor-change` label.
- Ask for human approval before implementation or merge.

## Delegating to Claude Code

Use the built-in Hermes `claude-code` skill for coding work.

For a small UI request, the delegated Claude Code prompt should include:

```text
Work in Sridevi17j/my-profile. Follow CLAUDE.md. Make only the requested small UI/static change. Run npm run lint, npm test, and npm run build. Open a PR targeting main. Add the GitHub label ai-minor-change. Do not merge the PR manually.
```

For backend or sensitive work, do not include the auto-merge label unless a human explicitly approves it.

## Safety notes

- If classification is uncertain, choose the safer category.
- If a request touches backend, DB, auth, payments, billing, infrastructure, GitHub Actions, package files, or environment/secrets, do not auto-merge.
- Keep Slack responses short and include the PR link when available.
