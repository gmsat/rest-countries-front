import React, { useEffect, useState } from 'react';
import { CountryDataRow } from "../index";
import { CountryObject } from "../../types";
import { observer } from "mobx-react-lite";
import countriesStore from "../../CountriesStore";

interface CountriesListProps {
  data: CountryObject[] | null
}

const CountriesTableList: React.FC<CountriesListProps> = ({data}) => {
  useEffect(() => {
    countriesStore.setFetchedCountries(data!);
    countriesStore.setDisplayCountries(countriesStore.fetchedCountries);
  }, []);

  return (
    <>
      <table>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Region</th>
          <th>Area</th>
        </tr>
        {countriesStore.displayCountries?.map((country, index) => (
          <CountryDataRow key={index} index={index} country={country}/>
        ))}
      </table>
    </>
  );
};

export default observer(CountriesTableList);