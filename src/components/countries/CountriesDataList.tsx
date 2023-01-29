import React from 'react';
import { CountryDataListItem } from "../index";
import { Stack } from "@mui/material";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import { CountryObject } from "../../types";
import { CountryDataRowProps } from "./CountryDataRow";

const CountriesDataList = ({data}: {data: CountryObject[]}) => {
  return (
    <Stack sx={{width: "100%", marginTop: 4}} spacing={3}>
      {data?.map((country, index) => (
        <CountryDataListItem key={index} country={country} index={index}/>
      ))}
    </Stack>
  );
};

export default CountriesDataList;