import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { searchMovie } from '../services/tmdb.service';

test('Buscar filme via API e validar na UI', async ({ page }) => {
  const movie = 'Fast X';

  let movieName;

  await test.step('Buscar filme via API', async () => {
    const response = await searchMovie(movie);
    movieName = response.results[0].title;

    console.log('Filme vindo da API:', movieName);
  });

  await test.step('Buscar filme na UI', async () => {
    const home = new HomePage(page);
    await home.goto();
    await home.search(movieName);

    await expect(home.getFirstResult()).toBeVisible();
  });
});