import { useEffect,useState } from 'react';
import { getMoviesTrending } from '../api/Api';
import  MoviesList from '../components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try
      {
        const resp = await getMoviesTrending();
        setMovies(resp.data.results);       
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, []);

  //console.log('movies >>>>> ', movies.length);
  return (
    <div>
      <h1>trending today:</h1>
      <MoviesList movies={movies}/>
      {/* {movies.length && <MoviesList movies={movies} />} */}
    </div>
  );
};

export default Home;
