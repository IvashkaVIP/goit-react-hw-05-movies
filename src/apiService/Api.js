import axios from 'axios';

export const API_KEY = '9d709850c7590845ffb60644b29d6f51';
const BASE_URL = 'https://api.themoviedb.org/3/';
const TRENDING_END_POINT = 'trending/all/';
const SEARCH_END_POINT = 'search/movie';

// https://api.themoviedb.org/3/trending/all/{time_window}
 export async function getMoviesTrending() {
  return await axios(`${BASE_URL}${TRENDING_END_POINT}day?api_key=${API_KEY}`);
}

// https://api.themoviedb.org/3/search/movie
 export async function getMoviesByQuery(query) {
  return await axios(
    `${BASE_URL}${SEARCH_END_POINT}?api_key=${API_KEY}&query=${query}`
  );
}

// https://api.themoviedb.org/3/movie/{movie_id}
export async function getMoviesDetails (id) {
  return await axios(
    `${BASE_URL}movie/${id}?api_key=${API_KEY}`
  );
}

//https://api.themoviedb.org/3/movie/{movie_id}/credits
export async function getMoviesCast(id) {
  return await axios(`${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`);
}

//https://api.themoviedb.org/3/movie/{movie_id}/reviews
export async function getMoviesReviews(id) {
  return await axios(`${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`);
}