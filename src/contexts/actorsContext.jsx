import React, { useState } from "react";

export const ActorsContext = React.createContext(null);

const ActorsContextProvider = (props) => {
  const [favouriteActors, setFavouriteActors] = useState([]);


  const addToFavouriteActors = (actor) => {
    let updatedFavouriteActors = [...favouriteActors];
    if (!favouriteActors.includes(actor.id)) {
      updatedFavouriteActors.push(actor.id);
    }
    setFavouriteActors(updatedFavouriteActors);
    console.log(updatedFavouriteActors);
  };

  // We will use this function in a later section
  const removeFromFavouriteActors = (actor) => {
    setFavouriteActors(favouriteActors.filter((mId) => mId !== actor.id));
  };


  return (
    <ActorsContext.Provider
      value={{
        favouriteActors,
        addToFavouriteActors,
        removeFromFavouriteActors,
      }}
    >
      {props.children}
    </ActorsContext.Provider>
  );
};

export default ActorsContextProvider;