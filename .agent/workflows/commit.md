---
description: Generates an appropriate commit message based on the code changes
---

Analyze the code staged diff/changes. Generate a commit message based on the
following rules:

1. Format: Strictly follow the 'Conventional Commits' convention. Choose the
   most relevant prefix:

- feat: A new feature.
- fix: A bug fix.
- docs: Documentation only changes.
- style: Changes that do not affect the meaning of the code (white-space,
  formatting, etc.).
- refactor: A code change that neither fixes a bug nor adds a feature.
- test: Adding missing tests or correcting existing tests.
- chore: Changes to the build process or auxiliary tools/libraries.

2. Body: Provide a concise and clear description of the change.

Example: `feat: add user login page integration`

Output the final commit message inside a code block for easy copying.
