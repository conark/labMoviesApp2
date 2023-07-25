import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import RemoveFromPlaylists from "../components/cardIcons/removeFromPlaylists";
import WriteReview from "../components/cardIcons/writeReview";

const PlaylistsPage = (props) => {
  const { playlists: movieIds } = useContext(MoviesContext);

  // Create an array of queries and run them in parallel.
  const playlistMovieQueries = useQueries(
    movieIds.map((movieId) => {
      return {
        queryKey: ["movie", { id: movieId }],
        queryFn: getMovie,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = playlistMovieQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const movies = playlistMovieQueries.map((q) => q.data);

  // const toDo = () => true;

  return (
    <PageTemplate
      title="Must Watch"
      movies={movies}
      action={(movie) => {
        return (
          <>
            <RemoveFromPlaylists movie={movie} />
            <WriteReview movie={movie} />
          </>
        );
      }}
    />
  );
};

export default PlaylistsPage;
