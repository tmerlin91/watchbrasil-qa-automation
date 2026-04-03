import { test, expect } from '../fixtures/test.fixture';

test('Retornar múltiplos resultados para busca', async ({ home, page }) => {
  const query = 'Truque de Mestre';

  await home.goto();
  await home.search(query);

  await page.waitForSelector('.card');

  const results = await page.locator('.card').count();

  expect(results).toBeGreaterThan(1);
});