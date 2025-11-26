import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: "tests/e2e",
  timeout: 30000,
  use: { headless: true },
  webServer: {
    command: "npm run start",
    port: 8080,
    reuseExistingServer: false
  }
});
