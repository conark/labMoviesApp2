import React from "react";
import { useParams } from "react-router-dom";
import ActorDetails from "../components/actorDetails";
import ActorPageTemplate from "../components/templateActorPage";
//import useActor from "../hooks/useActor";
import { getActor } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'


const ActorDetailsPage = (props) => {
  const { id } = useParams();

  const { data: actor, error, isLoading, isError } = useQuery(
    ["actor", { id: id }],
    getActor
  );

  console.log('actor detail page/page    '+id)

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {actor ? (
        <>
          <ActorPageTemplate actor={actor}>
            <ActorDetails actor={actor} />
          </ActorPageTemplate>
        </>
      ) : (
        <p>Waiting for actor details</p>
      )}
    </>
  );
};

export default ActorDetailsPage;