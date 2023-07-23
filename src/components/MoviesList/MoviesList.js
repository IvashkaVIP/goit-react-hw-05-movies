import PropTypes from 'prop-types';
import MoviesListItem from 'components/MovesListItem/MovesListItem';

const MoviesList = ({ movies }) => (
    <ul>
        {movies.map(movie => (
            <MoviesListItem
                key={movie.id}
                title={movie.title}
                name={movie.name}
                id={movie.id} />
        ))}
    </ul>
);

// const MoviesList = ({ movies }) => {
//   return (
//     <ul>
//       {movies.map(movie => {
//         <MoviesListItem title={movie.title} name={movie.name} id={movie.id} />;
//       })}
//     </ul>
//   );
// };

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.array,
};
