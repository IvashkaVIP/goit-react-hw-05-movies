import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from 'api/Api';
import SearchForm from 'components/SearchForm/SearchForm';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get('search') ?? '';
  useEffect(() => {
    !searchValue && setSearchParams({});
  }, [searchValue, setSearchParams]);

  // useEffect(() = {
  //   return(1);
  // },[])

  // const location = useLocation();
  // const [searchParams, setSearchParams] = useSearchParams();
  // let movieId = searchParams.get('movieId') ?? '';
  // console.log('Movies >>> movieId  ', movieId);

  const handleSearch = () => {};

  return (
    <div>
      <h2>Movies, find for Query</h2>
      <SearchForm
        handleSearch={handleSearch}
        searchValue={searchValue}
        setSearchParams={setSearchParams}
      ></SearchForm>
    </div>
  );
};

// const filteredMovies = movies.filter(movie => movie.includes(movieId));

//   return (
//     <div>
//       <h2>Movies, find for Query</h2>

//       <input
//         type="text"
//         value={movieId}
//         onChange={evt => setSearchParams({ movieId: evt.target.value })}
//       />
//       <ul>
//         {filteredMovies.map(movie => {
//           return (
//             <li key={movie}>
//               <Link to={`${movie}`} state={{from: location}}>{movie}</Link>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

export default Movies;
