import React, { useContext } from "react";
import { MoviesContext } from "../contexts/moviesContext";


const MyMoviesPage = (props) => {
  const { newMovies: movieIds } = useContext(MoviesContext);
    if (!Array.isArray(movieIds)) {
      return <div>Invalid newMovies data</div>;
    }
  
    // Create an array of movie data from movieIds
    const movies = movieIds.map((movie) => {
      console.log('movieID:',movieIds)
      return {
        
        id: movie.id,
        title: `Movie Title: ${movie.title}`, 
        overview: `Overview of Movie: ${movie.overview}`, 
        genre: `Genre: ${movie.genre}`, 
        releaseDate: `Release Date: ${movie.releaseDate}`, 
        runtime: `Runtime:  ${movie.runtime}`, 
        production: `Production: ${movie.production}`, 
  
      };
      
    });

  

  return (
    <div>
      <h1>My Original Movies</h1>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.overview}</p>
          <p>{movie.genre}</p>
          <p>{movie.releaseDate}</p>
          <p>{movie.runtime}</p>
          <p>{movie.production}</p>
        </div>
      ))}
    </div>
  );
};

export default MyMoviesPage;