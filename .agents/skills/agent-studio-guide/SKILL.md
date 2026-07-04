```markdown
# agent-studio-guide Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill provides guidance on the development patterns and best practices used in the `agent-studio-guide` TypeScript codebase. It covers file naming conventions, import/export styles, commit patterns, and testing approaches. The guide is intended to help contributors maintain consistency and efficiency when working on the project.

## Coding Conventions

### File Naming
- Use **camelCase** for file names.
  - Example: `userProfile.ts`, `agentManager.ts`

### Import Style
- Use **alias imports** to reference modules.
  - Example:
    ```typescript
    import agentUtils from 'utils/agentUtils';
    ```

### Export Style
- **Mixed exports** are used (both default and named exports).
  - Example:
    ```typescript
    // Default export
    export default function agentHandler() { ... }

    // Named export
    export function getAgentStatus() { ... }
    ```

### Commit Patterns
- Commit messages are **freeform** (no strict prefixing).
- Messages are concise, averaging around 31 characters.
  - Example: `update agent status logic`

## Workflows

### Adding a New Feature
**Trigger:** When you need to implement a new functionality.
**Command:** `/add-feature`

1. Create a new camelCase-named TypeScript file for your feature.
2. Use alias imports to bring in dependencies.
3. Choose appropriate export style (default or named).
4. Write concise, descriptive commit messages.
5. Add relevant tests in a `*.test.*` file.

### Refactoring Existing Code
**Trigger:** When improving or restructuring existing code.
**Command:** `/refactor`

1. Identify the code to refactor.
2. Maintain camelCase file naming if renaming files.
3. Update imports/exports to match conventions.
4. Ensure all tests still pass after changes.
5. Use a clear, freeform commit message describing the refactor.

### Writing Tests
**Trigger:** When adding or updating tests for features or bug fixes.
**Command:** `/write-test`

1. Create or update a test file matching the pattern `*.test.*`.
2. Follow the project's TypeScript and import conventions.
3. Ensure tests cover new or changed functionality.
4. Run the test suite to verify correctness.

## Testing Patterns

- Test files follow the pattern `*.test.*` (e.g., `agentManager.test.ts`).
- The specific testing framework is **unknown**; follow existing test file patterns.
- Place tests alongside or near the code they cover.
- Use TypeScript and alias imports in test files as in the main codebase.

## Commands
| Command      | Purpose                                      |
|--------------|----------------------------------------------|
| /add-feature | Steps to add a new feature                   |
| /refactor    | Steps to refactor existing code              |
| /write-test  | Steps to add or update tests                 |
```
