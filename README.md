# My Profile

A small full-stack portfolio app for testing Claude Code web and Slack-driven engineering workflows.

## Stack

- React + Vite frontend
- Express API backend
- Vitest + Supertest tests
- GitHub Actions CI

## API

- `GET /api/health`
- `GET /api/profile`
- `GET /api/projects`

## Local setup

```bash
npm install
npm run dev
```

Frontend: `http://localhost:5173`

API: `http://localhost:3001/api/health`

## Validation

```bash
npm run lint
npm test
npm run build
```

## Claude workflow test

This repo includes `CLAUDE.md`, which tells Claude Code what checks to run before opening a PR.
