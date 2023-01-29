import React from 'react';
import { CountryDataRow, Loader } from "../index";
import { styled } from "@mui/material";
import { CountryObject } from "../../types";

const TableHeader = styled('th')({
  textAlign: "left"
});

const Table = styled('table')({
  position: "relative",
  alignItems: "center",
  justifyContent: "center",
  width: "100%"
});

const CountriesTable = ({data}: {data: CountryObject[]}) => {
  return (
    <Table>
      <tr>
        <TableHeader></TableHeader>
        <TableHeader>Name</TableHeader>
        <TableHeader>Region</TableHeader>
        <TableHeader>Area</TableHeader>
      </tr>
      {data?.map((country, index) => (
        <CountryDataRow key={index} index={index} country={country}/>
      ))}
      {/*{isPending && <Loader/>}*/}
    </Table>
  );
};

export default CountriesTable;