import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import Typography from "@mui/material/Typography";

import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";


const styles = {
  chipSet: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
  },
  chipLabel: {
    margin: 0.5,
  },
  fab: { 
    position: "fixed",
    top: 50,
    right: 2,
  },
};

const ActorDetails = ( {actor}) => {
  console.log('actor detail')
  const [drawerOpen, setDrawerOpen] = useState(false); // New

  return (
    <>
      <Typography variant="h5" component="h3">
        More About {actor.name}
      </Typography>

      <Typography variant="h6" component="p">
        {actor.biography}
      </Typography>

      {/* <Paper component="ul" sx={styles.chipSet}>
        <li>
          <Chip label="Genres" sx={styles.chipLabel} color="primary" />
        </li>
        {movie.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name}  />
          </li>
        ))}
      </Paper> */}
      <Paper component="ul" sx={styles.chipSet}>
        <Chip
            label={`Birthday: ${actor.birthday}`}
        />
        <Chip 
          label={`Popularity: ${actor.popularity} `} />

        <Chip
          label={`Place of Birth: ${actor.place_of_birth}`}
        />
        <Chip 
          label={`Profile path: ${actor.profile_path}`} />
      </Paper>
      <Fab    
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        sx={styles.fab}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        {/* <MovieReviews movie={movie} /> */}
      </Drawer>
    </>
  );
};
export default  ActorDetails ;