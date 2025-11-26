import { test, expect } from '@playwright/test';

test.describe('Calculadora E2E', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:8080');
  });

  test('faz soma na UI', async ({ page }) => {
    await page.fill('#a', '7');
    await page.fill('#b', '8');
    await page.click('#add');
    await expect(page.locator('#result')).toHaveText(/Resultado:\s*15/);
  });

  test('faz subtração na UI', async ({ page }) => {
    await page.fill('#a', '10');
    await page.fill('#b', '4');
    await page.click('#sub');
    await expect(page.locator('#result')).toHaveText(/Resultado:\s*6/);
  });

  test('faz multiplicação na UI', async ({ page }) => {
    await page.fill('#a', '3');
    await page.fill('#b', '5');
    await page.click('#mul');
    await expect(page.locator('#result')).toHaveText(/Resultado:\s*15/);
  });

  test('faz divisão na UI', async ({ page }) => {
    await page.fill('#a', '20');
    await page.fill('#b', '4');
    await page.click('#div');
    await expect(page.locator('#result')).toHaveText(/Resultado:\s*5/);
  });

  test('faz potência na UI', async ({ page }) => {
    await page.fill('#a', '2');
    await page.fill('#b', '3');
    await page.click('#pow');
    await expect(page.locator('#result')).toHaveText(/Resultado:\s*8/);
  });

  test('limpa inputs e resultado', async ({ page }) => {
    await page.fill('#a', '12');
    await page.fill('#b', '7');
    await page.click('#clear');
    await expect(page.locator('#a')).toHaveValue('');
    await expect(page.locator('#b')).toHaveValue('');
    await expect(page.locator('#result')).toHaveText('Resultado: —');
  });

  test('divisão por zero lança erro', async ({ page }) => {
    await page.fill('#a', '10');
    await page.fill('#b', '0');
    await page.click('#div');
    // Assumindo que sua UI não mostra o erro, podemos verificar se não mudou o resultado:
    await expect(page.locator('#result')).toHaveText(/Erro: divisão por zero/);
    // Se você mostrar um alert ou texto de erro, adapte este expect.
  });
});
