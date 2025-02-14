import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../services/api";
import css from "./MovieReviews.module.css";

const MovieReviews = () => {
  const {movieId} = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId).then((data) => {
      if (data) {
        setReviews(data);
      }
    });
  }, [movieId]);
    return (
        <div className={css.review}>
         <h2 className={css.reviewTitle}>Reviews</h2>
         {reviews.length === 0 ? (
        <p>No reviews available.</p>
      ) : (
        <ul>
          {reviews.map((review) => (
            <li className={css.reviewItem} key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieReviews;