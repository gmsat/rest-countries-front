import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, SelectChangeEvent, Box, Paper, Select } from "@mui/material";
import { observer } from "mobx-react-lite";
import countriesStore from "../../CountriesStore";
import { Chip } from "@mui/material";
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';


type AbcSortingOpts = "ascending" | "descending"

const AlphabeticalSortingOption = () => {
  const [selected, setSelected] = useState<AbcSortingOpts | "">("");

  const handleChange = (e: SelectChangeEvent) => {
    const targetVal = e.target.value;
    setSelected(targetVal as AbcSortingOpts);
    countriesStore.sortCountriesByName(targetVal as AbcSortingOpts);
  }

  return (
    <FormControl size={"small"} sx={{minWidth: "120px"}}>
      <InputLabel id={"sorting-option"} color={"info"}><SortByAlphaIcon/></InputLabel>
      <Select
        labelId={"sorting-option"}
        value={selected}
        onChange={handleChange}
        label={"AZ"}
        size={"small"}
        variant={"outlined"}
      >
        {/*<MenuItem value={""}></MenuItem>*/}
        <MenuItem value={"ascending"}>Ascending</MenuItem>
        <MenuItem value={"descending"}>Descending</MenuItem>
      </Select>
    </FormControl>
  );
};

export default observer(AlphabeticalSortingOption);