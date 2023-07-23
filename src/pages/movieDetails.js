import { useEffect, useRef } from "react";
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
        <Link to={backLinkLocationRef.current}>назад к списку фильмов</Link>
        <ul>
          <li>
            <Link to="cast">
              компонент Cast, информация о актерском составе. Рендерится на
              странице MovieDetails
            </Link>
          </li>
          <li>
            <Link to="reviews">
              компонент Reviews, информация об обзорах. Рендерится на странице
              MovieDetails
            </Link>
          </li>
        </ul>
        <Outlet />
      </div>
    );
}

export default MovieDetails;
