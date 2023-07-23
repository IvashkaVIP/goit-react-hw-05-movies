import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './Layout';

const Home = lazy(() => import('../pages/home'));
const Movies = lazy(() => import('../pages/movies'));
const MovieDetails = lazy(() => import('../pages/movieDetails'));
const Reviews = lazy(() => import('../components/Reviews'));
const Cast = lazy(() => import('../components/Cast'));
// import Home from 'pages/home';
// import Movies from 'pages/movies';
// import MovieDetails from 'pages/movieDetails';
// import Reviews from './Reviews';
// import Cast from './Cast';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
