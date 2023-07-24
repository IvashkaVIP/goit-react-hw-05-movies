import PropTypes from 'prop-types';
import css from './MovieSelectedDetails.module.css'

const MovieSelectedDetails = ({ movie }) => {
  const { poster_path, name, title, genres, overview, vote_average } = movie;
  const poster = !poster_path
    ? `https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png`
    : `https://image.tmdb.org/t/p/w300${poster_path}`;

  return (
    <div className={css['wrap-detail']}>
      <img src={poster} alt={title ?? name} width="300"></img>
      <div className={css['wrap-detail-text']}>
        <h1>{title ?? name}</h1>
        <p>User Score: {Math.round(vote_average * 10)}% </p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        <p>{genres.map(genre => genre.name).join('  ')}</p>
      </div>
    </div>
  );
};

export default MovieSelectedDetails;

MovieSelectedDetails.propTypes = {
  movie: PropTypes.object,
};
