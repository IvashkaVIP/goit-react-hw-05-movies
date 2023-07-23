import PropTypes from 'prop-types';

const MoviesListItem = ({ title, name, id }) => {
    // console.log(title)
    return <li>{title || name}</li>
}

export default MoviesListItem;

MoviesListItem.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number.isRequired,
};