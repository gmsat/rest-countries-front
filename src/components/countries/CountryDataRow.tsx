import React from 'react';
import { CountryObject } from "../../types";

interface CountryDataRowProps {
  country: CountryObject,
  index: number
}

const CountryDataRow: React.FC<CountryDataRowProps> = ({country, index}) => {
  const {name, region, area, independent} = country;

  return (
    <tr>
      <td>{index}</td>
      <td>{name}</td>
      <td>{region}</td>
      <td>{area}</td>
    </tr>
  );
};

export default CountryDataRow;