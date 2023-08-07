import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favourites, setFavourites] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [myReviews, setMyReviews] = useState( {} )  // NEW
  // const [newMovies, setNewMovies] = useState( {} )  // NEW
  const [newMovies, setNewMovies] = useState( [] )  // NEW

  const addToFavourites = (movie) => {
    let updatedFavourites = [...favourites];
    if (!favourites.includes(movie.id)) {
      updatedFavourites.push(movie.id);
    }
    setFavourites(updatedFavourites);
  };

  // We will use this function in a later section
  const removeFromFavourites = (movie) => {
    setFavourites(favourites.filter((mId) => mId !== movie.id));
  };

  const addToPlaylists = (movie) => {
    let updatedPlaylists = [...playlists];
    if (!playlists.includes(movie.id)) {
      updatedPlaylists.push(movie.id);
    }
    setPlaylists(updatedPlaylists);
    console.log(updatedPlaylists);
  };



  // We will use this function in a later section
  const removeFromPlaylists = (movie) => {
    setPlaylists(playlists.filter((mId) => mId !== movie.id));
  };

  const addReview = (movie, review) => {   // NEW
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

  const addMovie = (newMovie) => {   // NEW
    let updatedAddMovies = [...newMovies];
    updatedAddMovies.push(newMovie);
    setNewMovies([...newMovies, newMovie]);
  };

  return (
    <MoviesContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        playlists,
        addToPlaylists,
        removeFromPlaylists,
        addReview,    // NEW
        newMovies,
        addMovie
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;