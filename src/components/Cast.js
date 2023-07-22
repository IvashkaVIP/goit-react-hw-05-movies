import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const Cast = () => {
    const { movieId } = useParams();
    console.log('MovieDetails >>> Cast >>> ', movieId);
    useEffect(() => {
      // HTTP
    }, []);

  return (<div>Cast {movieId}</div>);
};

export default Cast;
