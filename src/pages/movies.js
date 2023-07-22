import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Movies = () => {
    let render = useRef(false); 
    console.log('Movies >>> useRef >>> ', render);
    useEffect(() => {
        if (render.current) return; 
        console.log(' Movies >>> useEffect >>>   ', Date.now());
        render.current = true;
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
