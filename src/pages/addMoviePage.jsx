import React from "react";
import PageTemplate from "../components/templateMoviePage";
import AddMovieForm from "../components/addMovieForm";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";

const AddMoviePage = (props) => {
    
//   const location = useLocation()
//   const { movieId } = location.state;
//   const { data: movie, error, isLoading, isError } = useQuery(
//     ["movie", { id: movieId }],
//     getMovie
//   );

//   if (isLoading) {
//     return <Spinner />;
//   }

//   if (isError) {
//     return <h1>{error.message}</h1>;
//   }
  return (
      <AddMovieForm />

  );
};

export default AddMoviePage;