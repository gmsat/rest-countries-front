import React, { useState } from 'react';
import { FormControl, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { RegionCheckbox, AreaSizeCheckbox } from "../index";

const FilterOptionsGroup = () => {
  return (
    <FormGroup sx={{display: "flex", flexDirection: "row"}}>
      <RegionCheckbox/>
      <AreaSizeCheckbox/>
    </FormGroup>
  );
};

export default FilterOptionsGroup;