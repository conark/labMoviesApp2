import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Avatar from "@mui/material/Avatar";




const styles = {
    root: {  
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 1.5,
  },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
  avatar1: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};

const ActorHeader = (props) => {
  const actor = props.actor;
  const favouriteActors = JSON.parse(localStorage.getItem("favouriteActors"));
  const favoriteActor = favouriteActors.find((actor) => actor.id === props.actor.id);

  
  return (
    <Paper component="div" sx={styles.root}>
      <IconButton aria-label="go back">
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>
      {favoriteActor && (
        <Avatar sx={styles.avatar}>
          <FavoriteIcon sx={styles.favoriteIcon} />
        </Avatar>
      )}

      
      <Typography variant="h4" component="h3">
        {actor}{"   "}
        {/* <a href={movie.homepage}>
          <HomeIcon color="primary"  fontSize="='large"/>
        </a>
        <br />
        <span>{`${movie.tagline}`} </span> */}
      </Typography>
      <IconButton aria-label="go forward">
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default ActorHeader;