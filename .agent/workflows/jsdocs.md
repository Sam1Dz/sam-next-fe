---
description:
  Automatically generates JSDoc for functions within a target file while
  preserving original logic and structure
---

Generate JSDoc comments for all functions within `{{file}}`. Guidelines:

1. Include a concise description, typed `@param` tags, and `@returns` tags.

2. Strictly preserve the existing logic and code structure.

3. Scope is limited to the requested file only. Do not modify other files in the
   workspace without explicit instruction.

4. Upon completion, list the functions that were documented.
