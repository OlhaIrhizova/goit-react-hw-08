import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Loader from "./components/loader/Loader";

const HomePage = lazy(() => import("./pages/homePage/HomePage"));
const MoviesPage = lazy(() => import("./pages/moviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() => import("./pages/movieDetailsPage/MovieDetailsPage"));
const MovieCast  = lazy(() => import("./components/movieCast/MovieCast"));
const MovieReviews = lazy(() => import("./components/movieReviews/MovieReviews"));
const NotFoundPage = lazy(() => import("./pages/notFoundPage/NotFoundPage"));
import css from "./App.module.css";



const App = () => {
  
return (
  <div className={css.container}>
    <Header/>
    <Suspense fallback={<Loader />}>
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/movies" element={<MoviesPage/>} />
    <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
      <Route path="cast" element = {<MovieCast/>} />
      <Route path="reviews" element = {<MovieReviews/>} />
    </Route>
    <Route path="*" element={<NotFoundPage />} />
    </Routes>
    </Suspense>
  </div>
  )

}




export default App;