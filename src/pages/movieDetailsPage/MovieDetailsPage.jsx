import { useEffect, useRef, useState } from "react";
import { fetchMovieDetails,  } from "../../services/api";
import { Link, NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import css from "./MovieDetailsPage.module.css";


const defaultImg = "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";




const MovieDetailsPage = () => {

    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const location = useLocation();
    const backLink = useRef(location.state ?? '/movies');
    

    useEffect(() => {
        fetchMovieDetails(movieId).then(setMovie);
    }, [movieId]);

    if (!movie) return <Loader/>;
    
return (
        <div className={css.detailPage}>
          <Link className={css.goBack}  to={backLink.current}>Go back</Link>
          <h1 className={css.title}>{movie.title}</h1>
          <img
            src={movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : defaultImg
          }
          width={250}
          alt={movie.title}
          className={css.poster}
          />
          <p className={css.text}>{movie.overview}</p>
          <nav>
            <ul className={css.navList}>

          <li> <NavLink className={css.detailLink} to={`cast`}>Cast</NavLink> </li>
          <li> <NavLink className={css.detailLink} to={`reviews`}>Reviews</NavLink> </li>

          </ul>
         </nav>
         <div>
            <Outlet />
         </div>

        </div>
      )}


       
    


export default MovieDetailsPage;