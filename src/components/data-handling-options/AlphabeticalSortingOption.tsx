import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Box } from "@mui/material";
import { observer } from "mobx-react-lite";
import countriesStore from "../../CountriesStore";

type AbcSortingOpts = "ascending" | "descending"

const AlphabeticalSortingOption = () => {
  const [selected, setSelected] = useState<AbcSortingOpts>("ascending");

  const handleChange = (e: SelectChangeEvent) => {
    const targetVal = e.target.value;
    setSelected(targetVal as AbcSortingOpts);
    countriesStore.sortCountriesByName(targetVal as AbcSortingOpts);
  }

  return (
    <Box>
      <FormControl size={"small"} sx={{minWidth: 120}}>
        <InputLabel id={"sorting-option"}>Sort</InputLabel>
        <Select
          labelId={"sorting-option"}
          value={selected}
          onChange={handleChange}
          label={"Sort"}
        >
          <MenuItem value={"ascending"}>Ascending</MenuItem>
          <MenuItem value={"descending"}>Descending</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default observer(AlphabeticalSortingOption);