import { test, expect } from '../fixtures/test.fixture';
import { movies } from '../data/movies.data';

test('Buscar filme via API e validar na UI', async ({ home, api }) => {
  const movie = movies.valid;

  let movieName;

  await test.step('Buscar filme via API', async () => {
    const moviesList = await api.searchMovie(movie);

    console.log('Resposta da API:', moviesList);

    if (!moviesList || moviesList.length === 0) {
      throw new Error(`Nenhum resultado encontrado para o filme: ${movie}`);
    }

    movieName = moviesList[0].title;
  });

  await test.step('Buscar filme na UI', async () => {
    await home.goto();
    await home.search(movieName);

    await expect(home.getFirstResult()).toBeVisible();
    await expect(home.getFirstResult()).toContainText(movieName);
  });
});