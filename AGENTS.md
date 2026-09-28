# AI Agent Instructions — SauceDemo Playwright Project

## Project

This is a UI test automation project for the SauceDemo demo website.

Stack:
- Playwright
- TypeScript
- Page Object Model (POM)
- Git / GitHub

The project is also used to learn Playwright, TypeScript, Git, and AI-assisted development.

## Project Structure

- `pages/` → Page Objects only
- `tests/` → Playwright tests
- `.github/workflows/` → CI/CD workflows
- `playwright.config.ts` → Playwright configuration
- `AGENTS.md` → AI agent instructions
- `progress.md` → project context and progress

Do not place tests inside `pages/` or Page Objects inside `tests/`.

## General Rules

- Use Playwright Test and TypeScript.
- Use `async/await` for Playwright operations.
- Use Playwright's built-in `expect` for assertions.
- Do not introduce additional libraries unless explicitly requested.
- Keep code simple, readable, and maintainable.
- Do not over-engineer simple tasks.

## Workflow

For every meaningful task:

1. Read `AGENTS.md` and `progress.md`.
2. Inspect the relevant code, tests, and Page Objects.
3. Inspect the target page when possible.
4. Identify the smallest required change.
5. Briefly explain the approach for non-trivial tasks.
6. Implement the change.
7. Validate the result.
8. Update `feature_list.json` when a tracked feature is successfully verified.
9. Update `progress.md` with meaningful results, findings, or blockers from the task.
10. Summarize what changed and what was verified.

Do not invent functionality or locators based only on assumptions. If something cannot be verified, say so.

Do not modify unrelated files or create speculative work.

## Page Object Model

Page Objects should contain:
- Locators
- Page actions
- Small helpers when they improve readability

Keep Page Objects focused.

Do not create speculative locators or methods simply because functionality exists on the website.

## Locator Strategy

Prefer, in order:

1. `getByRole()`
2. `getByLabel()`
3. `getByPlaceholder()`
4. Stable attributes such as `data-testid`
5. CSS selectors when necessary
6. XPath as a last resort

Avoid fragile selectors based on generated classes, deep DOM structures, or implementation details.

## Scope Control

Only modify files necessary for the requested task.

Do not modify configuration, tests, Page Objects, package files, or workflows unless required.

Do not refactor unrelated code.

## Tests

Tests should describe user behavior and remain easy to read.

Use Page Objects for UI interactions.

Prefer descriptive test names such as:

`user can log in with valid credentials`

Keep test-specific assertions in the test when practical.

## Validation

After making changes, validate them when possible.

TypeScript:

```bash
npx tsc --noEmit