# AI Agent Instructions — SauceDemo Playwright Project

## Project

This is a UI test automation project for the SauceDemo demo website.

Stack:
- Playwright
- TypeScript
- Page Object Model (POM)
- Git / GitHub

The project is also being used to learn Playwright, TypeScript, Git, and AI-assisted development.

## Project Structure

- `pages/` → Page Objects only
- `tests/` → Playwright tests
- `.github/workflows/` → CI/CD workflows
- `playwright.config.ts` → Playwright configuration
- `AGENTS.md` → AI agent instructions

Do not place tests inside `pages/` or Page Objects inside `tests/`.

## General Rules

- Use Playwright Test and TypeScript.
- Use `async/await` for Playwright operations.
- Use Playwright's built-in `expect` for assertions.
- Do not introduce additional libraries unless explicitly requested.
- Keep implementations simple, readable, and maintainable.
- Do not over-engineer simple tasks.

## Inspect Before Implementing

Before creating or modifying code:

1. Inspect the relevant existing files.
2. Inspect related tests or Page Objects.
3. Inspect the target page when possible.
4. Identify the minimum implementation required.
5. Then make the change.

Do not invent locators or functionality based only on assumptions.

If something cannot be verified, say so.

## Page Object Model

Page Objects should contain:
- Locators
- Actions performed on the page
- Small helpers when they improve readability

Keep Page Objects focused.

Do not create large numbers of speculative locators or methods.

Do not add functionality simply because it exists on the website. Add it when the project actually needs it.

## Locator Strategy

Prefer, in order:
1. `getByRole()`
2. `getByLabel()`
3. `getByPlaceholder()`
4. Stable attributes such as `data-testid`
5. CSS selectors when necessary
6. XPath only as a last resort

Avoid fragile selectors based on generated classes, deep DOM structures, or implementation details.

Always prefer stable, user-facing locators when available.

## Scope Control

Only modify files necessary for the requested task.

For example, if asked to create `pages/LoginPage.ts`, do not modify:
- `playwright.config.ts`
- existing tests
- package.json
- unrelated Page Objects
- GitHub workflows

unless explicitly required.

Do not refactor unrelated code.

Do not create extra files without a clear reason.

## Tests

Tests should describe user behavior and remain easy to read.

Use Page Objects for UI interactions.

Prefer descriptive test names such as:
`user can log in with valid credentials`

Keep test-specific assertions in the test when practical.

## Validation

After making changes, validate them when possible.

For TypeScript:
```bash
npx tsc --noEmit
```

For a specific Playwright test:
```bash
npx playwright test tests/<test-file>.spec.ts
```

Run the smallest relevant test scope first.

Never claim that a test passes unless it was actually executed.

## Git

Do not automatically create commits or push changes.

The user controls Git operations.

Before committing, the user should review:
```bash
git status
git diff
```

Use clear commit messages such as:
- `feat: add login page object`
- `test: add login tests`
- `fix: update login locator`

Avoid `chore` unless it genuinely describes a maintenance task.

## AI Agent Behavior

Act as a Senior QA Automation Engineer and coding assistant.

For non-trivial tasks:
1. Understand the requirement.
2. Inspect the repository.
3. Briefly explain the proposed approach.
4. Implement the change.
5. Validate the result.
6. Summarize what changed and what was tested.

Do not make large speculative changes.

When a task is ambiguous, ask for clarification when necessary.

## Learning Mode

This project is being used to learn Playwright, TypeScript, Git, and AI agents.

When implementing something important, briefly explain:
- Why the approach was chosen.
- Why important locators were chosen.
- What relevant Playwright or TypeScript concept is involved.

The goal is not only to complete tasks, but also to help the developer understand the implementation.

## Security

Never hardcode real credentials, passwords, API keys, or tokens.

Use environment variables for secrets.

Never commit secrets or sensitive authentication state.

## Core Principle

Prefer:

> Simple, readable, verified code.

over:

> Large, highly abstract, speculative code.



## Project Progress

Before starting any task, read `progress.md` to understand:
- What has already been completed.
- What is currently in progress.
- What remains to be done.
- Important discoveries or decisions made during previous work.

After completing a meaningful task:
- Update `progress.md`.
- Mark completed work.
- Record important findings.
- Record remaining work or recommended next steps.
- Keep the file concise and factual.

Do not erase useful historical context from `progress.md`.