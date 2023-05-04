// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  projects: [
    {
        name: 'no-deps-project',
        testMatch: 'tests/no-deps.spec.ts',
    },
    {
        name: 'setup',
        testMatch: 'tests/setup.spec.ts',
    },
    {
        name: 'with-deps',
        testMatch: 'tests/with-deps.spec.ts',
        dependencies: ['setup'],
    },
  ],
});
