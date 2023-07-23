import { useEffect, useState } from 'react';
import { getMoviesTrending } from 'apiService/Api';
import MoviesList from '../components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const resp = await getMoviesTrending();
        setMovies(resp.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, []);
  return (
    <div>
      <h1>Trending today:</h1>
      <MoviesList movies={movies} />
      {/* {movies.length && <MoviesList movies={movies} />} */}
    </div>
  );
};

export default Home;
