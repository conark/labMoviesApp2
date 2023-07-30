import React, { useState, useEffect } from "react";
import ActorListPageTemplate from "../components/templateActorListPage";
import { getActors } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouriteActorsIcon from '../components/cardIcons/addToFavouriteActors'


const ActorsPage = (props) => {
  const { data, error, isLoading, isError } = useQuery("actors", getActors);
  console.log('data:::',data)
  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const actors = data ? data.results : [];


  return (
    <ActorListPageTemplate
      title="Discover Actors"
      actors={actors}
      action={(actor) => {
        return <AddToFavouriteActorsIcon actor={actor} />
      }}
    />
  );
};
export default ActorsPage;