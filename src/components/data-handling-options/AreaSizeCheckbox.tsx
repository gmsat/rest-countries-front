import React, { useState } from 'react';
import { Checkbox, FormControlLabel } from "@mui/material";
import countriesStore from "../../CountriesStore";
import { observer } from "mobx-react-lite";

const AreaSizeCheckbox = () => {
  const [checked, setChecked] = useState(false);

  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetVal = e.target.checked;

    setChecked(targetVal);

    if (targetVal) {
      countriesStore.filterCountriesByAreaRange("Lithuania", "smaller");
    } else {
      countriesStore.setDisplayToPrevValue();
    }

  }

  return (
    <FormControlLabel control={<Checkbox inputProps={{ 'aria-label': 'controlled' }} value={checked} onChange={handleChecked}/>} label={"< Lithuania"}/>
  );
};

export default observer(AreaSizeCheckbox);