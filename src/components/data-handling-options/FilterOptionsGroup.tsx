import React, { useState } from 'react';
import { FormControl, Checkbox, FormControlLabel, FormGroup, Paper, Typography, Grid } from "@mui/material";
import { RegionCheckbox, AreaSizeCheckbox } from "../index";

const FilterOptionsGroup = () => {
  return (
    <FormGroup sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      {/*<Typography>Filters</Typography>*/}
      <Grid display={"flex"} gap={1}>
        <RegionCheckbox/>
        <AreaSizeCheckbox/>
      </Grid>
    </FormGroup>
  );
};

export default FilterOptionsGroup;