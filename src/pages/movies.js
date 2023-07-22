import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Movies = () => {
    let firstRender = useRef(true); 
    console.log('Movies >>> useRef >>> ', firstRender);
    useEffect(() => {
        if (!firstRender.current) return; 
        console.log('Movies >>> useEffect >>>   firstRender  ', Date.now());
        firstRender.current = false;
    //  HTTP
  }, []);
  const movies = [
    'movieId-1',
    'movieId-2',
    'movieId-3',
    'movieId-4',
    'movieId-5',
    'movieId-6',
  ];

  return (
    <div>
      <h2>компонент Movies, страница поиска фильмов по ключевому слову</h2>
      {movies.map(movie => {
        return (
          <Link key={movie} to={`${movie}`}>
            {movie}
          </Link>
        );
      })}
    </div>
  );
};

export default Movies;
