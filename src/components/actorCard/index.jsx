//import React from "react";
import React, { useContext  } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
//import IconButton from "@mui/material/IconButton";
import img from '../../images/film-poster-placeholder.png'
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { ActorsContext } from "../../contexts/actorsContext";


const styles = {
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};

export default function ActorCard({actor, action }) {
  const { favouriteActors, addToFavouriteActors} = useContext(ActorsContext);

  if (favouriteActors.find((id) => id === actor.id)) {
    actor.favouriteActor = true;
  } else {
    actor.favouriteActor = false
  }

  return (
    <Card sx={styles.card}>
    <CardHeader
      sx={styles.header}
      avatar={
          actor.favouriteActor ? (
            <Avatar sx={styles.avatar}>
              <FavoriteIcon />
            </Avatar>
          ) : null
      }

      title={
        <Typography variant="h5" component="p">
          {actor.name}{" "}
        </Typography>
      }
    />

      <CardMedia
        sx={styles.media}
        image={
          actors.profile_path
          ? `https://image.tmdb.org/t/p/w500/${actors.profile_path}` 
          : img
      }
      />
      <CardContent>
        {/* <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {movie.release_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {movie.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid> */}
      </CardContent>
      <CardActions disableSpacing>
      {action(movie)}
        <Link to={`/actors/${actor.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}