import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCredits } from "../../services/api";
import css from "./MovieCast.module.css";


const defaultActorImg ="https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+photo";

const MovieCast = () => {
    const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCredits(movieId).then(setCast);
  }, [movieId]);
  
  return(
        <div className={css.Cast}>
         <h2 className={css.castTitle}>Cast</h2>
         {cast.length === 0 ? (
        <p>No cast information available.</p>
      ) : (
        <ul className={css.castList}>
          {cast.map((actor) => (
            <li className={css.castItem} key={actor.id}>
              <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                  : defaultActorImg
              }
              alt={actor.name}
              className={css.actorImg}
            />
              
           
              <h3>{actor.name}</h3>
              <p className={css.characterText}>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieCast;