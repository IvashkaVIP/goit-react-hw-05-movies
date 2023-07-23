import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from 'apiService/Api';
import SearchForm from 'components/SearchForm/SearchForm';
import MoviesList from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [imgNotFound, setImgNotFound] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get('search') ?? '';
  useEffect(() => {
    !searchValue && setSearchParams({});
  }, [searchValue, setSearchParams]);

  const handleSearch = async query => {
    try {
      const resp = await getMoviesByQuery(query);
      setMovies(resp.data.results);
      if (!movies.length) setImgNotFound(false);
      else setImgNotFound(true);
    } catch (er) {
      console.log(er);
    }
  };
  return (
    <div>
      <h2>Movies, find for Query</h2>
      <SearchForm
        handleSearch={handleSearch}
        searchValue={searchValue}
        setSearchParams={setSearchParams}
      />
      {movies && <MoviesList movies={movies} />}
      {imgNotFound && (
        <h2>nothing was found for your request</h2>
      )}
    </div>
  );
};

export default Movies;
