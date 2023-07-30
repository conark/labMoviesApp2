import React, { useState } from "react";
import Header from "../headerMovieList";
// import FilterCard from "../filterMoviesCard";
import FilterActorsCard from "../filterActorsCard";
import Grid from "@mui/material/Grid";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import ActorList from "../actorList";

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

function ActorListPageTemplate({ actors, title, action }) {
  console.log('actor list temp')
  const [nameFilter, setNameFilter] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);


  let displayedActors = actors
  
    .filter((m) => {
      console.log('m:::',m)
      return m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setNameFilter(value);
  };

  return (
   <>
      <Grid container sx={styles.root}>
        <Grid item xs={12}>
          <Header title={title} />
        </Grid>
        <Grid item container spacing={5}>
        <ActorList action={action} actors={displayedActors} />
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
        <FilterActorsCard
          onUserInput={handleChange}
          nameFilter={nameFilter}
        />
      </Drawer>
    </>  
  );
}
export default ActorListPageTemplate;