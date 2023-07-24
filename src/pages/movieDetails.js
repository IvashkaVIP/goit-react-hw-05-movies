import { getMoviesDetails } from "apiService/Api";
import { useEffect, useRef, Suspense,useState } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";


const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
    const {movieId} = useParams();
    console.log('MovieDetails >>> params >>> ', movieId);
    
  // useEffect(() => {
  //     try {
  //       const getMovies = async () => {
  //         const resp = await getMoviesDetails(movieId);
  //         console.log(resp);
  //       };
  //     }
  //     catch (er) {
  //       console.log(er);
  //     }
  
  //     getMovies ();

  //   },[])

  
  
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
