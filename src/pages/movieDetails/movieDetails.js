import { getMoviesDetails } from 'apiService/Api';
import { useEffect, useRef, Suspense, useState } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import MovieSelectedDetails from 'components/MovieSelectedDetails/MovieSelectedDetails';
import css from './movieDetails.module.css'

const MovieDetails = () => {
  const [movie, setMovie] = useState();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const { movieId } = useParams();
  // console.log('MovieDetails >>> params >>> movieId : ', movieId);
  useEffect(() => {
    // console.log('movieDetails >>> useEffect >>> ');
    const getDetails = async () => {
      try {
        const resp = await getMoviesDetails(movieId);
        // console.log(resp.data);
        setMovie(resp.data);
      } catch (er) {
        console.log(er);
      }
    };
    getDetails();
  }, [movieId]);

  return (
    <div className={css['container']}>
      <Link to={backLinkLocationRef.current}>
        <button className={css['btn-back']} type="button">
          Go back
        </button>
      </Link>

      {movie && <MovieSelectedDetails movie={movie} />}
      <div className={css['add-info']}>
        <p> Additional information </p>
        <ul>
          <li>
            <Link className={css['wrap-link']} to="cast">
              Cast
            </Link>
          </li>
          <li>
            <Link className={css['wrap-link']} to="reviews">
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
