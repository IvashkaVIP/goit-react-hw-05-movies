import { useEffect, useState, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from 'apiService/Api';
import SearchForm from 'components/SearchForm/SearchForm';
import MoviesList from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get('search') ?? '';
  const firstRender = useRef(true);
  
  useEffect(() => {
    firstRender.current && searchValue && handleSearch(searchValue);
  }, [searchValue])
  
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
      <h2>Movies, find for Query</h2>
      <SearchForm
        handleSearch={handleSearch}
        searchValue={searchValue}
        setSearchParams={setSearchParams}
        firstRender={firstRender}
      />
      {movies && <MoviesList movies={movies} />}
      {!movies.length && searchValue && <h3>nothing was found for your request</h3>}
    </div>
  );
};

export default Movies;
