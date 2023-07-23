const SearchForm = ({handleSearch, searchValue, setSearchParams}) => {
    const handleSubmit = evt => {
      evt.preventDefault();
    };
      const handleChange = ({ target: { value } }) => {
        setSearchParams({ search: value });
      };
     
    return <form onSubmit={handleSearch}>
        <input type="text" value={searchValue} onChange={handleChange} />
        <button onSubmit={handleSubmit}>Search</button>
      </form>;

}

export default SearchForm;