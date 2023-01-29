import React, { useState } from 'react';
import { Checkbox, Chip, FormControlLabel, Tooltip } from "@mui/material";
import countriesStore from "../../CountriesStore";
import { observer } from "mobx-react-lite";

const RegionCheckbox = () => {
  const [checked, setChecked] = useState(false);

  const handleChecked = (value: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const targetVal = e.target.checked;

    setChecked(targetVal);
    countriesStore.setCurrentPageNumber(1);

    if (targetVal) {
      countriesStore.filterCountriesByRegion("region", value);
    } else {
      countriesStore.setDisplayToPrevValue();
    }
  }

  return (
    <Tooltip arrow placement={"top"} title={"Show countries in Oceania region"}>
      <Chip color={"default"} label={<FormControlLabel
        control={<Checkbox inputProps={{'aria-label': 'controlled'}} value={checked}
                           onChange={(e) => handleChecked("Oceania", e)}/>} label={"Oceania"}/>}></Chip>
    </Tooltip>
  );
};

export default observer(RegionCheckbox);