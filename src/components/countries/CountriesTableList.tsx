import React, { useEffect, useState, useTransition } from 'react';
import { CountryDataRow } from "../index";
import { CountryObject } from "../../types";
import { observer } from "mobx-react-lite";
import countriesStore from "../../CountriesStore";
import { Grid, Pagination } from "@mui/material";
import { getTotalPagesNumber, paginateArray } from "../../helpers/ArrayHelpers";
import { Loader } from "../index";
import { styled } from "@mui/material";

interface CountriesListProps {
  data: CountryObject[] | null
}

const TableHeader = styled('th')({
  textAlign: "left"
});

const Table = styled('table')({
  position: "relative",
  alignItems: "center",
  justifyContent: "center",
  width: "100%"
});

const CountriesTableList: React.FC<CountriesListProps> = ({data}) => {
  const [pageData, setPageData] = useState<null | CountryObject[]>(null);
  const [pageCount, setPageCount] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [isPending, setTransition] = useTransition();

  async function setPagesNumber() {
    const totalPageCount = await getTotalPagesNumber(countriesStore.displayCountries, pageSize);
    setTotalPages(totalPageCount);
  }

  async function setPaginatedData() {
    const paginatedData = await paginateArray(countriesStore.displayCountries, pageSize, currentPage);
    setPageData(paginatedData);
  }

  const handlePageChange = (e: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value)
  }

  useEffect(() => {
    countriesStore.setFetchedCountries(data!);
    countriesStore.setDisplayCountries(countriesStore.fetchedCountries);
    setPagesNumber();
    setPaginatedData();
  }, []);

  useEffect(() => {
    setPaginatedData();
  }, [currentPage]);

  useEffect(() => {
    setPaginatedData();
    setPagesNumber();
  }, [countriesStore.displayCountries]);

  return (
    <>
      <Table>
        <tr>
          <TableHeader></TableHeader>
          <TableHeader>Name</TableHeader>
          <TableHeader>Region</TableHeader>
          <TableHeader>Area</TableHeader>
        </tr>
        {pageData?.map((country, index) => (
          <CountryDataRow key={index} index={index} country={country}/>
        ))}
        {isPending && <Loader/>}
      </Table>
      <Grid display={"flex"}
            sx={{
              top: 'auto',
              bottom: 0,
              padding: 2,
              position: "sticky",
              width: "100%",
              justifyContent: "center",
              alignItems: "center"

      }}>
        <Pagination onChange={handlePageChange} defaultPage={1} count={totalPages} page={currentPage}/>
      </Grid>
    </>
  );
};

export default observer(CountriesTableList);