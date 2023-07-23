import axios from 'axios';

export const API_KEY = '9d709850c7590845ffb60644b29d6f51';
const BASE_URL = 'https://api.themoviedb.org/3/';
const TRENDING_END_POINT = 'trending/all/';

export async function getMoviesTrending() {
  return await axios(`${BASE_URL}${TRENDING_END_POINT}day?api_key=${API_KEY}`);
}