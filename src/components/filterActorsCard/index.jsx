import React from "react";  // useState/useEffect redundant 
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SortIcon from '@mui/icons-material/Sort';
import { useQuery } from "react-query";
import Spinner from '../spinner'

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { getActors } from "../../api/tmdb-api";



const styles = {
  root: {
    maxWidth: 345,
  },
  media: { height: 300 },

  formControl: {
    margin: 1,
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)",
  },
};

export default function FilterActorsCard(props) {
    const { data, error, isLoading, isError } = useQuery("actorData", getActors);
    



  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }


  const handleUserImput = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value); // NEW
  };

  const handleTextChange = (e, props) => {
    handleUserImput(e, "name", e.target.value);
  };



  return (
    <>
    <Card sx={styles.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h1">
          <FilterAltIcon fontSize="large" />
          Filter the actors.
        </Typography>
        <TextField
        sx={styles.formControl}
        id="filled-search"
        label="Search field"
        type="search"
        value={props.nameFilter}
        variant="filled"
        onChange={handleTextChange}
        />

      </CardContent>
    </Card>
    <Card sx={styles.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h1">
            <SortIcon fontSize="large" />
            Sort the actors.
          </Typography>
        </CardContent>
      </Card>
      </>
  );
}