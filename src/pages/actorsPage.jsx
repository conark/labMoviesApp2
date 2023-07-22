import React, { useState, useEffect } from "react";
import ActorPageTemplate from "../components/templateActorListPage";
import { getActors } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'


const ActorsPage = (props) => {
  const { data, error, isLoading, isError } = useQuery("discover", getActors);
  console.log('actors page')
  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const actors = data ? data.results : [];


  return (
    <ActorPageTemplate
      title="Discover Movies"
      actors={actors}
      action={(actor) => {
        return <AddToFavouritesIcon actor={actor} />
      }}
    />
  );
};
export default ActorsPage;