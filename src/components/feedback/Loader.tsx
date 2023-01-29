import React from 'react';
import { Backdrop, CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <Backdrop sx={{position: "absolute", height: "100%", width: "100%"}} open={true}>
      <CircularProgress variant={"indeterminate"}/>
    </Backdrop>
  );
};

export default Loader;