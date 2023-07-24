import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMoviesCast } from 'apiService/Api';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  // console.log('MovieDetails >>> Cast >>> ', movieId);
  useEffect(() => {
    const getCast = async () => {
      try {
        const resp = await getMoviesCast(movieId);
        // console.log(resp.data.cast);
        setCast(resp.data.cast);
      } catch (er) {
        console.log(er);
      }
    };
    getCast();
  }, [movieId]);

  const photoPath = (path) => {
     const photo = !path
       ? `https://banffventureforum.com/wp-content/uploads/2019/08/No-Image.png`
       : `https://image.tmdb.org/t/p/w300${path}`;
    return photo;
  }
  return (
    <ul>
      {cast.map(item => (
        <li key={item.id}>
          <img
            src={photoPath(item.profile_path)}
            alt={item.name}
            width="100"
          ></img>
          <p>{item.name}</p>
          <p>Character: {item.character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
