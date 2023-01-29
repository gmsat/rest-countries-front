import React from 'react';
import { AlphabeticalSortingOption, FilterOptionsGroup } from "../index";
import { Grid } from "@mui/material";

const DataHandlersContainer = () => {

  return (
    <Grid container display={"flex"} flexDirection={"row"} justifyContent={"space-between"}>
      <FilterOptionsGroup/>
      <AlphabeticalSortingOption/>
    </Grid>
  );
};

export default DataHandlersContainer;