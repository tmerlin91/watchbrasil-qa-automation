import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { searchMovie } from '../services/tmdb.service';

test('Validar consistência entre API e UI', async ({ page }) => {
  const query = 'fast x';

  const results = await searchMovie(query);

  expect(results.length).toBeGreaterThan(0);

  const firstMovie = results[0].title;

  const home = new HomePage(page);

  await home.goto();
  await home.search(query);

  await expect(home.getFirstResult()).toBeVisible();
  await expect(home.getFirstResult()).toContainText(firstMovie);
});