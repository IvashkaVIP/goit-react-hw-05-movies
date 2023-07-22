import { useParams } from "react-router-dom";
import { useEffect} from 'react';

const Reviews = () => {
    const { movieId } = useParams();
    console.log('MovieDetails >>> Reviews >>> ', movieId);
    useEffect(() => {
      // HTTP
    }, []);
    return (
      <div>
        Reviews {movieId}
      </div>
    );
}

export default Reviews;