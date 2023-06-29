import React from "react";
import PageTemplate from '../components/templateMovieListPage';
import { MoviesContext } from "../contexts/moviesContext";
import { getUpcoming } from "../api/tmdb-api";
import { useQuery} from "react-query";
import Spinner from "../components/spinner";

const UpcomingMoviesPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('upcoming', getUpcoming)

  //using the home page code here
  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  const favourites = movies.filter((m) => m.favourite);
  localStorage.setItem("favourites", JSON.stringify(favourites));
  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => {
      }}
    />
  );
};

export default UpcomingMoviesPage;
