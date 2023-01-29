import React, { useState } from 'react';
import { Checkbox, Chip, FormControlLabel, Tooltip } from "@mui/material";
import countriesStore from "../../CountriesStore";
import { observer } from "mobx-react-lite";

const AreaSizeCheckbox = () => {
  const [checked, setChecked] = useState(false);

  const handleChecked = (country: string, option: "smaller" | "bigger", e: React.ChangeEvent<HTMLInputElement>) => {
    const targetVal = e.target.checked;

    setChecked(targetVal);
    countriesStore.setCurrentPageNumber(1);

    if (targetVal) {
      countriesStore.filterCountriesByAreaRange(country, option);
    } else {
      countriesStore.setDisplayToPrevValue();
    }
  }

  return (
    <Tooltip arrow title={"Show countries smaller than Lithuania"} placement={"top"}>
      <Chip
        color={"default"}
        label={<FormControlLabel control={<Checkbox inputProps={{'aria-label': 'controlled'}} value={checked}
                                                    onChange={(e) => handleChecked("Lithuania", "smaller", e)}/>}
                                 label={"< Lithuania"}/>}/>
    </Tooltip>
  );
};

export default observer(AreaSizeCheckbox);