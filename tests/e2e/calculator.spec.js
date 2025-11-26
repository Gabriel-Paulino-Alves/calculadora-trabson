const { test, expect } = require('@playwright/test');

test.describe('Calculadora E2E', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:8080');
  });

  test('soma funciona', async ({ page }) => {
    await page.fill('#a', '7');
    await page.fill('#b', '8');
    await page.click('#add');
    await expect(page.locator('#result')).toHaveText(/15/);
  });

  test('subtração funciona', async ({ page }) => {
    await page.fill('#a', '10');
    await page.fill('#b', '3');
    await page.click('#subtract');
    await expect(page.locator('#result')).toHaveText(/7/);
  });

  test('multiplicação funciona', async ({ page }) => {
    await page.fill('#a', '6');
    await page.fill('#b', '7');
    await page.click('#multiply');
    await expect(page.locator('#result')).toHaveText(/42/);
  });

  test('divisão funciona', async ({ page }) => {
    await page.fill('#a', '20');
    await page.fill('#b', '5');
    await page.click('#divide');
    await expect(page.locator('#result')).toHaveText(/4/);
  });

  test('potência funciona', async ({ page }) => {
    await page.fill('#a', '3');
    await page.fill('#b', '4');
    await page.click('#power');
    await expect(page.locator('#result')).toHaveText(/81/);
  });

});
