import { useEffect, useRef, Suspense } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";


const MovieDetails = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
    const {movieId} = useParams();
    console.log('MovieDetails >>> params >>> ', movieId);
    useEffect(() => {
        
        // HTTP
    },[])

    return (
      <div>
        <h2> Movie Details {movieId}</h2>
        <Link to={backLinkLocationRef.current}>Comeback</Link>
        <ul>
          <li>
            <Link to="cast">
              Cast MovieDetails
            </Link>
          </li>
          <li>
            <Link to="reviews">
              Reviews MovieDetails
            </Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    );
}

export default MovieDetails;
