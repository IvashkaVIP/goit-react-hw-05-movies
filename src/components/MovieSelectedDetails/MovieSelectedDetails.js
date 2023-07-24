import PropTypes from 'prop-types';

const MovieSelectedDetails = ({ movie }) => {
    const { poster_path, name, title, genres, overview, vote_average } = movie;
    const poster = !poster_path
      ? `https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png`
        : `https://image.tmdb.org/t/p/w300${poster_path}`;
    
  return (
    <div>
      <img src={poster} alt={title ?? name} width="300"></img>
      <h1>{title ?? name}</h1>
      <p>User Score: {Math.round(vote_average * 10)}% </p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h2>Genres</h2>
      <p>{genres.map(genre => genre.name).join('  ')}</p>
    </div>
  );
};

export default MovieSelectedDetails;

MovieSelectedDetails.propTypes = {
  movie: PropTypes.object,
};

// https://image.tmdb.org/t/p/w300
// https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.prokerala.com%2Fmovies%2Fkusum-ka-biyaah%2F&psig=AOvVaw2PnDJRy-OizItnWXR7ti79&ust=1690300558354000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJC027Xap4ADFQAAAAAdAAAAABAI