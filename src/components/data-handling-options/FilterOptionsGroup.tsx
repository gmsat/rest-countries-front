import React from 'react';
import { FormGroup, Grid } from "@mui/material";
import { AreaSizeCheckbox, RegionCheckbox } from "../index";

const FilterOptionsGroup = () => {
  return (
    <FormGroup sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <Grid display={"flex"} gap={1}>
        <RegionCheckbox/>
        <AreaSizeCheckbox/>
      </Grid>
    </FormGroup>
  );
};

export default FilterOptionsGroup;