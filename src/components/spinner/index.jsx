import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const styles = {
  root: {
    display: 'flex',
    justifyContent: "center",
    '& > * + *': {
      marginLeft: 2,
    },
  },
};

export default function CircularIndeterminate() {
  return (
    <div sx={styles.root}>
      <CircularProgress />
      <CircularProgress />
    </div>
  );
};