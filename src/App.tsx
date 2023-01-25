import './App.css';
import { Grid } from "@mui/material";
import useFetch from "./hooks/useFetch";
import { useEffect, useState } from "react";

// using https://restcountries.com make a visualized representation of countries
// display country name, region, and area size (use https://restcountries.com/v2/all?fields=name,region,area to get only necessary data)

// TODO: main app page
// TODO: add react router
// TODO: add UI elements
// TODO: fetch and display the data
// TODO: implement assignment requirements
// TODO: fetch the data from the endpoint
// TODO: display a list for the data
// TODO: make the list sortable alphabetically by name (ascending, descending)
// TODO: Implement filters that filter countries:
//  - That are smaller than Lithuania
//  - That are in "Oceania" region
// TODO: Implement pagination

function App() {

  const url = "https://restcountries.com/v2/all?fields=name,region,area";
  const {data, loading, error} = useFetch(url, true);

  return (
    <Grid>
      {JSON.stringify(data)}
    </Grid>
  )
}

export default App
