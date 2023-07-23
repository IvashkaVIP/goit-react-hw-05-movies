import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([
    'movieId-1',
    'movieId-2',
    'movieId-3',
    'movieId-4',
    'movieId-5',
    'movieId-6',
  ]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  let movieId = searchParams.get('movieId') ?? ''; 
  
  console.log('Movies >>> movieId  ', movieId);

  // let firstRender = useRef(true);
  // console.log('Movies >>> useRef >>> ', firstRender);
  // useEffect(() => {
  //   if (!firstRender.current) return;
  //   console.log('Movies >>> useEffect >>>   firstRender  ', Date.now());
  //   firstRender.current = false;
  //   //  HTTP
  // }, []);
  // const movies = [
  //   'movieId-1',
  //   'movieId-2',
  //   'movieId-3',
  //   'movieId-4',
  //   'movieId-5',
  //   'movieId-6',
  // ];
  const filteredMovies = movies.filter(movie => movie.includes(movieId));

  return (
    <div>
      <h2>компонент Movies, страница поиска фильмов по ключевому слову</h2>

      <input
        type="text"
        value={movieId}
        onChange={evt => setSearchParams({ movieId: evt.target.value })}
      />
      <ul>
        {filteredMovies.map(movie => {
          return (
            <li key={movie}>
              <Link to={`${movie}`} state={{from: location}}>{movie}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Movies;
