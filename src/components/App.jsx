import { Route, NavLink, Routes } from "react-router-dom";
import Home from "pages/home";
import Movies from "pages/movies";
import MovieDetails from "pages/movieDetails";

export const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetails/>}></Route>
        <Route path="/movies/:movieId/cast" element={<div>Cast</div>}></Route>
        <Route
          path="/movies/:movieId/reviews"
          element={<div>Reviews</div>}
        ></Route>
      </Routes>
    </div>
  );
};
