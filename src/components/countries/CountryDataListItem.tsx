import React, { useState } from 'react';
import { Avatar, Box, Chip, Divider, Grid, Grow, Paper, Typography } from "@mui/material";
import { CountryDataRowProps } from "../../types";

const CountryDataListItem: React.FC<CountryDataRowProps> = ({country, index}) => {
  const {name, region, area, flags} = country;
  const [elevation, setElevation] = useState(1);

  const handleHover = (amount: number) => {
    setElevation(amount);
  }

  return (
    <Box sx={{display: "flex", width: "100%", position: "relative"}}
         onPointerEnter={() => handleHover(6)}
         onPointerLeave={() => handleHover(1)}>

      <Paper variant={"elevation"} elevation={elevation} sx={{width: "100%", padding: 2, backgroundColor: "#6497b1"}}>
        <Grid container display={"flex"} flexDirection={"row"} spacing={2}>

          <Grid item>
            <Grow in={!!flags.png}>
              <Paper elevation={2} sx={{position: "absolute", left: -30, top: "10%"}}>
                <Avatar sx={{width: 90, height: 90}} variant={"rounded"} src={flags.png}/>
              </Paper>
            </Grow>
          </Grid>

          <Grid item sx={{width: "100%", height: "100%"}} flex={1}>

            <Chip sx={{
              position: "relative",
              left: 50,
              minWidth: "300px",
              height: "100%",
              backgroundColor: "#76b6c4",
              borderRadius: 2
            }}
                  label={<Typography variant={"h4"}>{name}</Typography>}/>

            <Divider variant={"fullWidth"} sx={{
              position: "relative",
              left: 50,
              backgroundColor: "rgba(6,66,115,0.1)",
              width: "5%",
              marginTop: 1,
              marginBottom: 1
            }}/>

            <Chip
              color={"default"}
              sx={{position: "relative", left: 50, minWidth: "300px", borderRadius: 2}}
              label={<Typography variant={"h6"}>Region: {region}</Typography>}/>

          </Grid>

          <Grid item display={"flex"} sx={{alignItems: "flex-start", justifyContent: "center"}}>
            <Chip color={"primary"}
                  sx={{minWidth: 180, width: "100%", fontSize: "1rem", borderRadius: 2}}
                  label={area ? <Typography>Area: {area} km2</Typography> : <em>no data</em>}/>
          </Grid>

        </Grid>
      </Paper>
    </Box>
  );
};

export default CountryDataListItem;