import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useForm, Controller } from "react-hook-form";
import { MoviesContext } from "../../contexts/moviesContext";
import { useNavigate } from "react-router-dom";
import styles from "./styles";
import genres from "./genreCategories";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const AddMovieForm = (props) => {

  const defaultValues = {
    title: "",
    overview: "",
    genres: "",
    releaseDate: "",
    runtime: "",
    production: "",
    agree: false,
  };
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm(defaultValues);
  const navigate = useNavigate();
  const context = useContext(MoviesContext);
  const [genre, setGenre] = useState(3);


  const handleGenreChange = (event) => {
    setGenre(event.target.value);
  };

  const handleSnackClose = (event) => {
    setOpen(false);
    // navigate("/movies/addMovie/");
  };

  const onSubmit = (addMovie) => {
    // addMovie.movieId = movie.id;
    addMovie.genre = genre;
    context.addMovie(addMovie);
    console.log(addMovie);
    setOpen(true); // NEW
  };

  const [open, setOpen] = useState(false);  //NEW

  return (
    <Box component="div" sx={styles.root}>
      <Typography component="h2" variant="h3">
        Add your Movie
      </Typography>
      <Snackbar
        sx={styles.snack}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        onClose={handleSnackClose}
      >
        <Alert
          severity="success"
          variant="filled"
          onClose={handleSnackClose}
        >
          <Typography variant="h4">
            Thank you for submitting a review
          </Typography>
        </Alert>
      </Snackbar>
      <form sx={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
        <Controller
          name="title"
          control={control}
          rules={{ required: "Title is required" }}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TextField
              sx={{ width: "40ch" }}
              variant="outlined"
              margin="normal"
              required
              onChange={onChange}
              value={value}
              id="title"
              label="Movie's title"
              autoFocus
            />
          )}
        />
        {errors.title && (
          <Typography variant="h6" component="p">
            {errors.title.message}
          </Typography>
        )}
        <Controller
          name="overview"
          control={control}
          rules={{
            required: "Overview cannot be empty.",
            minLength: { value: 3, message: "Overview is too short" },
          }}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={value}
              onChange={onChange}
              label="Overview text"
              id="overview"
              multiline
              minRows={10}
            />
          )}
        />
        {errors.overview && (
          <Typography variant="h6" component="p">
            {errors.overview.message}
          </Typography>
        )}

        <Controller
          control={control}
          name="genre"
          render={({ field: { onChange, value } }) => (
            <TextField
              id="select-genre"
              select
              variant="outlined"
              label="Genre Select"
              value={genre}
              onChange={handleGenreChange}
              helperText="Don't forget your genre"
            >
              {genres.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          )}
        />

        <Controller
          name="releaseDate"
          control={control}
          rules={{
            required: "ReleaseDate cannot be empty.",

          }}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TextField
              sx={{ width: "40ch" }}
              variant="outlined"
              margin="normal"
              required
              onChange={onChange}
              value={value}
              label="releaseDate"
              id="releaseDate"
              autoFocus
            />
          )}
        />
        {errors.releaseDate && (
          <Typography variant="h6" component="p">
            {errors.releaseDate.message}
          </Typography>
        )}

        <Controller
          name="runtime"
          control={control}
          rules={{
            required: "runtime cannot be empty.",
            minLength: { value: 1, message: "runtime not correct" },
          }}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TextField
            sx={{ width: "40ch" }}
              variant="outlined"
              margin="normal"
              required
              onChange={onChange}
              value={value}
              label="runtime"
              id="runtime"

            />
          )}
        />
        {errors.runtime && (
          <Typography variant="h6" component="p">
            {errors.runtime.message}
          </Typography>
        )}

    <Controller
          name="production"
          control={control}
          rules={{
            required: "production cannot be empty.",
            minLength: { value: 1, message: "production is too short" },
          }}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TextField
              sx={{ width: "40ch" }}
              variant="outlined"
              margin="normal"
              required
              onChange={onChange}
              value={value}
              label="production"
              id="production"

            />
          )}
        />
        {errors.production && (
          <Typography variant="h6" component="p">
            {errors.production.message}
          </Typography>
        )}


        <Box sx={styles.buttons}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={styles.submit}
          >
            Submit
          </Button>
          <Button
            type="reset"
            variant="contained"
            color="secondary"
            sx={styles.submit}
            onClick={() => {
              reset({
                title: "",
                overview: "",
                genres: "",
                releaseDate: "",
                runtime: "",
                production: "",
                agree: false,
              });
            }}
          >
            Reset
          </Button>
        </Box>
      </form>
    </Box>
  );

  //   return (
//       <h3>Placeholder for Add Movie form</h3>
//   );


 };


export default AddMovieForm;