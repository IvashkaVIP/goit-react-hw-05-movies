import axios from 'axios';

export const API_KEY = '9d709850c7590845ffb60644b29d6f51';
const BASE_URL = 'https://api.themoviedb.org/3/';
const TRENDING_END_POINT = 'trending/all/';
const SEARCH_END_POINT = 'search/movie';

export async function getMoviesTrending() {
  return await axios(`${BASE_URL}${TRENDING_END_POINT}day?api_key=${API_KEY}`);
}

export async function getMoviesByQuery(query) {
    return await axios(
      `${BASE_URL}${SEARCH_END_POINT}?api_key=${API_KEY}&query=${query}`
    );
}

