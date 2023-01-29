import './App.css';
import { Box, Grid, Paper } from "@mui/material";
import useFetch from "./hooks/useFetch";
import { CountriesList } from "./components";
import DataHandlersContainer from "./components/data-handling-options/DataHandlersContainer";
import { Toolbar } from "./components";
import { LinearProgress } from "@mui/material";
import countriesJson from './countries.json';
import { useEffect, useState, useTransition } from "react";
import { Divider, Grow } from "@mui/material";
import { GlobalStyles } from "@mui/material";
import { Fab } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';

// using https://restcountries.com make a visualized representation of countries

function App() {

  const url = "https://restcountries.com/v2/all?fields=name,region,area,flags";
  const {data, loading, error} = useFetch(url, true);
  const [countriesData, setCountriesData] = useState<null | any>(data);

  const [isPending, setTransition] = useTransition();

  useEffect(() => {
    setTransition(() => {
      setCountriesData(data);

      if (error) {
        setCountriesData(countriesJson);
      }
    });
  }, [data, loading, error]);

  return (
  <Grow in={true}>
    <Grid sx={{
      display: "flex",
      margin: "0 auto",
      maxWidth: "100%",
      width: "100vw",
      height: "100vh",
      overflowX: "hidden",
      background: "linear-gradient(45deg, rgba(2,0,36,1) 0%, rgba(3,57,108,1) 35%, rgba(0,212,255,1) 100%)"
    }}>
      <Grid display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            container
            sx={{
              padding: 8,
              margin: "auto",
              width: "100%",
              maxWidth: "1250px"
            }}>
        <Paper sx={{
          width: "100%",
          padding: 8,
          backgroundColor: "rgba(255,255,255,0.2)",
        }}>

          <Toolbar>
            <DataHandlersContainer/>
          </Toolbar>

          <Divider component={"div"} variant={"fullWidth"} role={"presentation"} sx={{width: "100%", marginTop: 4}}></Divider>

          {error && <div>Error</div>}
          {loading && <LinearProgress/>}
          {countriesData && <CountriesList data={countriesData}/>}

        </Paper>

        <Fab target={"_blank"} href={"https://github.com/gmsat/rest-countries-front"} color={"primary"} sx={{position: "absolute", right: 50, bottom: 50, height: 75, width: 75}} variant={"circular"}>
          <GitHubIcon sx={{fontSize: "3rem"}}/>
        </Fab>

      </Grid>

    </Grid>
  </Grow>
  )
}

export default App
