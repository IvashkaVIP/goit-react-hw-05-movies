import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMoviesReviews } from 'apiService/Api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  // console.log('MovieDetails >>> Reviews >>> ', movieId);
  useEffect(() => {
    try {
      const getReviews = async () => {
        const resp = await getMoviesReviews(movieId);
        //  console.log(resp.data.results);
        setReviews(resp.data.results);
      };
      getReviews();
    } catch (er) {
      console.log(er);
    }
  }, [movieId]);

  return (
    <div>
      {!reviews.length && <p>We don't have any reviews for this movie</p>}
      <ul>
        {reviews.map(rev => (
          <li key={rev.author}>
            <h4>Author: {rev.author}</h4>
            <p>{rev.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
