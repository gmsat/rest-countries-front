import React, { useState } from 'react';
import { FormControl, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { RegionCheckbox, AreaSizeCheckbox } from "../index";


// TODO: filters
// TODO: show countries that are in "Oceania" region
// TODO: show countries that are smaller than Lithuania by area size

const FilterOptionsGroup = () => {
  return (
    <FormGroup>
      <RegionCheckbox/>
      <AreaSizeCheckbox/>
      {/*<FormControlLabel control={<Checkbox/>} label={"Oceania"}/>*/}
      {/*<FormControlLabel control={<Checkbox/>} label={"< Lithuania"}/>*/}
    </FormGroup>
  );
};

export default FilterOptionsGroup;