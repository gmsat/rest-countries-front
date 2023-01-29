import React from 'react';
import { CountryObject } from "../../types";
import { styled, Box } from "@mui/material";
import { Skeleton } from "@mui/material";

export interface CountryDataRowProps {
  country: CountryObject,
  index: number
}

const TableRow = styled('tr')({
  padding: 2,
  backgroundColor: "white"
});

const SkeletonRow = () => {
  return (
    <TableRow>
      <td>
        <Skeleton animation={"wave"}/>
      </td>
      <td>
        <Skeleton animation={"wave"}/>
      </td>
      <td>
        <Skeleton animation={"wave"}/>
      </td>
      <td>
        <Skeleton animation={"wave"}/>
      </td>
    </TableRow>
  );
}

const CountryDataRow: React.FC<CountryDataRowProps> = ({country, index}) => {
  const {name, region, area, independent} = country;

  return (
    <TableRow>
      <td>{index}</td>
      <td>{name}</td>
      <td>{region}</td>
      <td>{area}</td>
    </TableRow>
  );
};

export default CountryDataRow;