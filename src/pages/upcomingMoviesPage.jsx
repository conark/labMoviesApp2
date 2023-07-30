import React from "react";
import PageTemplate from '../components/templateMovieListPage/index';
import { getUpcoming } from "../api/tmdb-api";
import { useQuery} from "react-query";
import Spinner from "../components/spinner";
import AddToPlaylistsIcon from '../components/cardIcons/addToPlaylists'



const UpcomingMoviesPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('upcoming', getUpcoming)


  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;
  console.log('movies11111',movies)

  const playlist = movies.filter((movie) => movie.playlist === true);
  console.log("playlist",playlist)
  localStorage.setItem("playlists", JSON.stringify(playlist));


  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => {
         return <AddToPlaylistsIcon movie={movie} />
      }}
    />
  );
};

export default UpcomingMoviesPage;
