import React, { ReactNode } from 'react';
import { AppBar, Grid } from "@mui/material";
import { AlphabeticalSortingOption, FilterOptionsGroup } from "../index";

const Toolbar = ({children}: {children?: ReactNode}) => {
  return (
    <Grid container sx={{backgroundColor: "white", padding: 2}}>
      {children}
    </Grid>
  );
};

export default Toolbar;