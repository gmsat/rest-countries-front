import './App.css';
import { Grid } from "@mui/material";
import useFetch from "./hooks/useFetch";
import { CountriesList } from "./components";
import { useEffect, useState } from "react";
import countriesStore from "./CountriesStore";
import Counter from "./components/Counter";
import { Simulate } from "react-dom/test-utils";
import load = Simulate.load;
import DataHandlersContainer from "./components/data-handling-options/DataHandlersContainer";

// using https://restcountries.com make a visualized representation of countries
// display country name, region, and area size (use https://restcountries.com/v2/all?fields=name,region,area to get only necessary data)

// main app page
// TODO: add react router
// TODO: add UI elements
// fetch and display the data
// TODO: implement assignment requirements
// fetch the data from the endpoint
// display a list for the data
// TODO: make the list sortable alphabetically by name (ascending, descending)
// TODO: Implement filters that filter countries:
//  - That are smaller than Lithuania
//  - That are in "Oceania" region
// TODO: Implement pagination

function App() {

  const url = "https://restcountries.com/v2/all?fields=name,region,area";
  const {data, loading, error} = useFetch(url, true);

  if (loading) {
    return (
      <div>
        ...loading
      </div>
    )
  }

  if (error) {
    return (
      <div>
        Error - try again later.
      </div>
    )
  }

  return (
    <>
      <Grid sx={{padding: 3}}>
        <DataHandlersContainer/>
        <CountriesList data={data}/>
      </Grid>
    </>
  )
}

export default App
