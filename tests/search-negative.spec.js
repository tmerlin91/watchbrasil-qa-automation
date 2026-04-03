import { test, expect } from '../fixtures/test.fixture';
import { movies } from '../data/movies.data';

test('Não deve retornar resultados para filme inválido', async ({ home, api, page }) => {
  const movie = movies.invalid;

  const moviesList = await api.searchMovie(movie);
  expect(moviesList.length).toBe(0);

  await home.goto();
  await home.search(movie);

  await page.waitForLoadState('networkidle');

  await expect(page.locator('.card')).toHaveCount(0);
});