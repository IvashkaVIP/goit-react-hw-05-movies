import { useEffect, useState } from 'react';
import { getMoviesTrending } from 'apiService/Api';
import MoviesList from '../../components/MoviesList/MoviesList';
import css from './home.module.css'


const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getTrending = async () => {
      try {
        const resp = await getMoviesTrending();
        setMovies(resp.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    getTrending();
  }, []);

  return (
    <div className={css['container']}>
      <h1>Trending today:</h1>
      <MoviesList movies={movies} />
    </div>
  );
};

export default Home;
