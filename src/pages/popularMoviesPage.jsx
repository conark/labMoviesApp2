import React from "react";
import PageTemplate from '../components/templateMovieListPage/index';
import { getPopularMovie } from "../api/tmdb-api";
import { useQuery} from "react-query";
import Spinner from "../components/spinner";
import AddToPlaylistsIcon from '../components/cardIcons/addToPlaylists'



const PopularMoviesPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('popular', getPopularMovie)


  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  const playlist = movies.filter((m) => m.playlist);
  localStorage.setItem("playlists", JSON.stringify(playlist));


  return (
    <PageTemplate
      title="Popular Movies"
      movies={movies}
      action={(movie) => {
         return <AddToPlaylistsIcon movie={movie} />
      }}
    />
  );
};

export default PopularMoviesPage;
