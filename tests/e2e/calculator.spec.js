import { test, expect } from '@playwright/test';

test.describe('Calculadora E2E', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:8080');
  });

  test('faz soma na UI', async ({ page }) => {
    await page.fill('#a', '7');
    await page.fill('#b', '8');
    await page.click('#add');
    await expect(page.locator('#result')).toHaveText(/Resultado:\\s*15/);
  });
});
