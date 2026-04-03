import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';

test('Não deve retornar resultados para busca inválida', async ({ page }) => {
  const home = new HomePage(page);

  await home.goto();
  await home.search('testefilmeinvalido');

  await page.waitForLoadState('networkidle');

  // valida ausência de filmes
  await expect(page.locator('.card')).toHaveCount(0);
});