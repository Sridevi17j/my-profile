# Claude Instructions

This repository is a safe test project for validating Slack or Claude Code web workflows.

## Project shape

- Frontend: React with Vite in `src/`
- Backend: Express API in `server/`
- Tests: Vitest and Supertest in `tests/`
- No database is required

## Development rules

- Keep changes focused on the requested feature.
- Follow the existing file structure before adding new abstractions.
- Add or update tests when API behavior changes.
- For UI changes, verify the page still builds successfully.
- Do not commit secrets, local environment files, or generated dependency folders.

## Required validation before PR

Always run these commands before creating or updating a pull request:

```bash
npm run lint
npm test
npm run build
```

If any command fails, fix the issue and rerun the failed command before opening the PR.

## PR description

Include:

- Summary of the change
- Tests run
- Screenshots or notes for UI changes
- Any known limitations

## PR labels

For small copy, styling, or static-content changes, add the GitHub label `ai-minor-change` to the pull request.
