import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favourites, setFavourites] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [myReviews, setMyReviews] = useState( {} )  // NEW

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
    console.log(updatedPlaylists)
  };



  // We will use this function in a later section
  const removeFromPlaylists = (movie) => {
    setPlaylists(playlists.filter((mId) => mId !== movie.id));
  };

  const addReview = (movie, review) => {   // NEW
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

  return (
    <MoviesContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        addToPlaylists,
        removeFromPlaylists,
        addReview,    // NEW
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
// import React, { useState, useEffect } from "react";



// export const MoviesContext = React.createContext(null);

// const MoviesContextProvider = (props) => {
//   const [favourites, setFavourites] = useState([]);
//   const [playlists, setPlaylists] = useState([]);
//   const [myReviews, setMyReviews] = useState({});

//   const addToFavourites = (movie) => {
//     setFavourites((prevFavourites) => [...prevFavourites, movie.id]);
//   };

//   const removeFromFavourites = (movie) => {
//     setFavourites((prevFavourites) =>
//       prevFavourites.filter((mId) => mId !== movie.id)
//     );
//   };

//   const addToPlaylists = (movie) => {
//     setPlaylists((prevPlaylists) => [...prevPlaylists, movie.id]);
//   };

//   const removeFromPlaylists = (movie) => {
//     setPlaylists((prevPlaylists) =>
//       prevPlaylists.filter((mId) => mId !== movie.id)
//     );
//   };

//   const addReview = (movie, review) => {
//     setMyReviews((prevReviews) => ({
//       ...prevReviews,
//       [movie.id]: review,
//     }));
//   };

//   useEffect(() => {
//     console.log(playlists);
//   }, [playlists]);

//   return (
//     <MoviesContext.Provider
//       value={{
//         favourites,
//         addToFavourites,
//         removeFromFavourites,
//         playlists,
//         addToPlaylists,
//         removeFromPlaylists,
//         myReviews,
//         addReview,
//       }}
//     >
//       {props.children}
//     </MoviesContext.Provider>
//   );
// };

// export default MoviesContextProvider;