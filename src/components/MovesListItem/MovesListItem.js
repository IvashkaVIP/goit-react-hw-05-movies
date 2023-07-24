import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const MoviesListItem = ({ title, name, id }) => {
    const location = useLocation();
    const currentPage =
      location.pathname === '/' ? 'movies' : location.pathname;
  return (
    <li>
      <Link to={`${currentPage}/${id}`} state={{ from: location }}>
        {title ?? name}
      </Link>
    </li>
  );
    
}

export default MoviesListItem;

MoviesListItem.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number.isRequired,
};