import React from 'react';
import { CircularProgress, Grid } from "@mui/material";
import { Backdrop } from "@mui/material";

const Loader = () => {
  return (
    <Backdrop sx={{position: "absolute", height: "100%", width: "100%"}} open={true}>
      <CircularProgress variant={"indeterminate"}/>
    </Backdrop>
  );
};

export default Loader;