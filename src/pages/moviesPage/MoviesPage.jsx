import { useState } from "react";
import MovieList from "../../components/movieList/MovieList";
import { searchMovies } from "../../services/api";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../../components/searchBar/SearchBar";
import css from "./MoviesPage.module.css";

const MoviesPage = () => {
const [movies, setMovies] = useState([]);
const [searchParams, setSearchParams] = useSearchParams();

const query = searchParams.get('query') || '';
  

  const handleSearch = async (value) => {
  setSearchParams({ query: value });
    if (query) {  
      const results = await searchMovies(value);
      setMovies(results);
    }
        ;
      
  };


    return (
        <div className={css.moviesPage}>
          <h1 className={css.searchMoviesTitle}>Search Movies</h1>
          <SearchBar onSubmit={handleSearch} />
          <MovieList movies={movies} />

        </div>
    )
}

export default MoviesPage;