import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";


const MovieList = ({ movies }) =>{
  const location = useLocation();

  const defaultImgPoster ="https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";

return(
    <div className={css.movieList}>
    {movies.length === 0 ? (
        <p className={css.listText}> Find your movie. </p>
      ) : (
        <ul className={css.movieGrid}>
          {movies.map(movie => (
            <li key={movie.id} className={css.movieItem}>
               <Link className={css.link} to={`/movies/${movie.id}`}state={location}>
              <img
              src = {movie.poster_path 
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : defaultImgPoster}
              width={250}
              alt={movie.title}
              className={css.movieImg}
              />
              <h3 className={css.movieTitle}>{movie.title}</h3>
              </Link>
              </li>
          ))}
        </ul>
      )}

    </div>
    )
}
export default MovieList;