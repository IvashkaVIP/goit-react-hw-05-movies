const SearchForm = ({handleSearch, searchValue, setSearchParams}) => {
    const handleSubmit = evt => {
        evt.preventDefault();
        handleSearch(searchValue);
    };
      const handleChange = ({ target: { value } }) => {
        setSearchParams({ search: value });
      };
     
    return <form onSubmit={handleSubmit}>
        <input type="text" value={searchValue} onChange={handleChange} />
        <button type='submit'>Search</button>
      </form>;

}

export default SearchForm;