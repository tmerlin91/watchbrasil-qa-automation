import 'dotenv/config';

export async function searchMovie(movie) {
  try {
    const url = `${process.env.TMDB_BASE_URL}/search/movie?query=${movie}&api_key=${process.env.TMDB_API_KEY}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Erro na API: ${response.status}`);
    }

    const data = await response.json();

    return data.results || [];
  } catch (error) {
    console.error('Erro ao buscar filme:', error);

    return [];
  }
}