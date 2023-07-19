import { Route, NavLink, Routes } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<div>Home</div>}></Route>
        <Route path="/movies" element={<div>Movies</div>}></Route>
        <Route
          path="/movies/:movieId"
          element={<div>MoviesDetail</div>}
        ></Route>
        <Route path="/movies/:movieId/cast" element={<div>Cast</div>}></Route>
        <Route
          path="/movies/:movieId/reviews"
          element={<div>Reviews</div>}
        ></Route>
      </Routes>
    </div>
  );
};
