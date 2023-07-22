import { useEffect } from "react";
import { useParams, Link, Outlet } from "react-router-dom";


const MovieDetails = () => {
    const {movieId} = useParams();
    console.log('MovieDetails >>> params >>> ', movieId);
    useEffect(() => {
        
        // HTTP
    },[])

    return (
      <div>
       <h2> Movie Details {movieId}</h2>
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
            <Outlet/>
      </div>
    );
}

export default MovieDetails;
