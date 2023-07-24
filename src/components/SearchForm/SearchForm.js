const SearchForm = ({handleSearch, searchValue, setSearchParams, firstRender}) => {
    const handleSubmit = evt => {
        evt.preventDefault();
        handleSearch(searchValue);
    };
      const handleChange = ({ target: { value } }) => {
        setSearchParams({ search: value });
        firstRender.current = false;
      };
     
    return <form onSubmit={handleSubmit}>
        <input type="text" value={searchValue} onChange={handleChange} />
        <button type='submit'>Search</button>
      </form>;

}

export default SearchForm;