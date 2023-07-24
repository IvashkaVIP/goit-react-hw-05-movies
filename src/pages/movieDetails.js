import { getMoviesDetails } from 'apiService/Api';
import { useEffect, useRef, Suspense, useState } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import MovieSelectedDetails from 'components/MovieSelectedDetails/MovieSelectedDetails';

const MovieDetails = () => {
  const [movie, setMovie] = useState();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const { movieId } = useParams();
  // console.log(
  //   'MovieDetails >>> params >>> movieId : ',
  //   movieId,
  //   ' >>> ',
  //   Date.now()
  // );
  useEffect(() => {
    // console.log('movieDetails >>> useEffect >>> ', Date.now());
    const getMovies = async () => {
      try {
        const resp = await getMoviesDetails(movieId);
        // console.log(resp.data);
        setMovie(resp.data);
      } catch(er) {console.log(er)}
    };
    getMovies();
    
  }, [movieId]);

  console.log(movie);
  const isMovieDetails = Boolean(movie);
  console.log(isMovieDetails);
  

  return (
    <div>
      <h2> Movie Details {movieId}</h2>
      <Link to={backLinkLocationRef.current}>Comeback</Link>

      {movie && <MovieSelectedDetails movie={movie} />}

      <ul>
        <li>
          <Link to="cast">Cast MovieDetails</Link>
        </li>
        <li>
          <Link to="reviews">Reviews MovieDetails</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
