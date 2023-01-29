import './App.css';
import { Box, Grid } from "@mui/material";
import useFetch from "./hooks/useFetch";
import { CountriesList } from "./components";
import DataHandlersContainer from "./components/data-handling-options/DataHandlersContainer";
import { Toolbar } from "./components";
import { LinearProgress } from "@mui/material";

// using https://restcountries.com make a visualized representation of countries

function App() {

  const url = "https://restcountries.com/v2/all?fields=name,region,area";
  const {data, loading, error} = useFetch(url, true);

  if (loading) {

    console.log("DATA IS LOADING...");

    return (
      <Box sx={{width: "100%"}}>
        <LinearProgress variant={"indeterminate"}/>
      </Box>
    )
  }

  if (error) {
    return (
      <div>
        Error: {JSON.stringify(error)}
      </div>
    )
  }

  return (
    <Grid sx={{
            display: "flex",
            margin: "0 auto",
            maxWidth: "100%",
            width: "100vw",
            height: "100vh",
            overflowX: "hidden"
    }}>
      <Grid display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            container
            sx={{
              padding: 3,
              margin: "auto",
              width: "100%",
              maxWidth: "1250px",
              backgroundColor: "rgba(0,173,24,0.31)"
            }}>
        <Toolbar>
          <DataHandlersContainer/>
        </Toolbar>

        <CountriesList data={data}/>

      </Grid>
      <LinearProgress/>
    </Grid>
  )
}

export default App
