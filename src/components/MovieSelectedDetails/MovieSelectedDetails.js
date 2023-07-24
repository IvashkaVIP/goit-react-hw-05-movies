import PropTypes from 'prop-types';

const MovieSelectedDetails = ({ movie }) => {
    const { poster_path, name, title, genres, overview, vote_average } = movie;
    
    return (
      <div>
        <p>{poster_path}</p>
        <p>{name}</p>
        <p>{title}</p>
        <p>{genres.length}</p>
        <p>{overview}</p>
        <p>{vote_average}</p> 
      </div>
    );
};

export default MovieSelectedDetails;

MovieSelectedDetails.propTypes = {
  movie: PropTypes.object,
};
