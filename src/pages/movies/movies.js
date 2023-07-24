import { useEffect, useState, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from 'apiService/Api';
import SearchForm from 'components/SearchForm/SearchForm';
import MoviesList from 'components/MoviesList/MoviesList';
import css from './movies.module.css'

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get('search') ?? '';
  const firstRender = useRef(true);

  useEffect(() => {
    firstRender.current && searchValue && handleSearch(searchValue);
  }, [searchValue]);

  useEffect(() => {
    !searchValue && setSearchParams({});
  }, [searchValue, setSearchParams]);

  const handleSearch = async query => {
    try {
      const resp = await getMoviesByQuery(query);
      setMovies(resp.data.results);
    } catch (er) {
      console.log(er);
    }
  };
  return (
    <div>
      <SearchForm
        handleSearch={handleSearch}
        searchValue={searchValue}
        setSearchParams={setSearchParams}
        firstRender={firstRender}
      />
      {movies && <MoviesList movies={movies} />}
    </div>
  );
};

export default Movies;
