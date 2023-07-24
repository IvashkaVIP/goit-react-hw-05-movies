import PropTypes from 'prop-types';
import css from './SearchForm.module.css'

const SearchForm = ({
  handleSearch,
  searchValue,
  setSearchParams,
  firstRender,
}) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    handleSearch(searchValue);
  };
  const handleChange = ({ target: { value } }) => {
    setSearchParams({ search: value });
    firstRender.current = false;
  };

  return (
    <form className={css['form']} onSubmit={handleSubmit}>
      <input
        className={css['input']}
        type="text"
        value={searchValue}
        onChange={handleChange}
      />
      <button className={css['btn-search']} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  movie: PropTypes.object,
  handleSearch: PropTypes.func,
  searchValue: PropTypes.string,
  setSearchParams: PropTypes.func,
  firstRender: PropTypes.object,
};
