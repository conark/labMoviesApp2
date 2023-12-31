import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import Grid from "@mui/material/Grid";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import MovieList from "../movieList";

const styles = {
  root: {
    padding: "20px",
  },
  fab: {
    marginTop: 8,
    position: "fixed",
    top: 2,
    right: 2,
  },
};

function MovieListPageTemplate({ movies, title, action }) {
  console.log('movie List temp')
  const [titleFilter, setTitleFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("");


  const genreId = Number(genreFilter);

  let displayedMovies = movies
    .filter((m) => {
      return m.title.toLowerCase().search(titleFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    });

  if (selectedSort === "average.desc") {
    displayedMovies.sort((a, b) => b.vote_average - a.vote_average);
    console.log('desc  displayed moviesssssssssss',displayedMovies)
  } else if (selectedSort === "average.asc") {
    displayedMovies.sort((a, b) => a.vote_average - b.vote_average);
    console.log('asc  displayed moviesssssssssss',displayedMovies)
  };


  // const handleChange = (type, value) => {
  //   if (type === "title") setTitleFilter(value);
  //   else setGenreFilter(value);
  // };

  const handleUserInput = (type, value) => {
    if (type === "title") {
      setTitleFilter(value);
    } else if (type === "genre") {
      setGenreFilter(value);
    } else if (type === "sort") {
      setSelectedSort(value);
      
    }
  };

  return (
   <>
      <Grid container sx={styles.root}>
        <Grid item xs={12}>
          <Header title={title} />
        </Grid>
        <Grid item container spacing={5}>
        <MovieList action={action} movies={displayedMovies} />
        </Grid>
      </Grid>
      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        sx={styles.fab}
      >
        Filter
      </Fab>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <FilterCard
          onUserInput={handleUserInput}
          titleFilter={titleFilter}
          genreFilter={genreFilter}
          selectedSort={selectedSort}
        />
      </Drawer>
    </>  
  );
}
export default MovieListPageTemplate;