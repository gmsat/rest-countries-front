import React, { useEffect, useState, useTransition } from 'react';
import { CountriesDataList } from "../index";
import { CountryObject } from "../../types";
import { observer } from "mobx-react-lite";
import countriesStore from "../../CountriesStore";
import { Pagination, Paper } from "@mui/material";
import { getTotalPagesNumber, paginateArray } from "../../helpers/ArrayHelpers";

interface CountriesListProps {
  data: CountryObject[] | null
}

const CountriesData: React.FC<CountriesListProps> = ({data}) => {
  const [pageData, setPageData] = useState<null | CountryObject[]>(null);
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [isPending, setTransition] = useTransition();

  async function setPagesNumber() {
    const totalPageCount = await getTotalPagesNumber(countriesStore.displayData, pageSize);
    setTotalPages(totalPageCount);
  }

  async function setPaginatedData() {
    const paginatedData = await paginateArray(countriesStore.displayData, pageSize, countriesStore.currentPageNumber);
    setPageData(paginatedData);
  }

  const handlePageChange = (e: React.ChangeEvent<unknown>, value: number) => {
    countriesStore.setCurrentPageNumber(value);
  }

  useEffect(() => {
    countriesStore.setFetchedData(data!);
    countriesStore.setDisplayData(countriesStore.fetchedData);
    setPagesNumber();
    setPaginatedData();
  }, []);

  useEffect(() => {
    setTransition(() => {
      setPaginatedData();
    });
  }, [countriesStore.currentPageNumber]);

  useEffect(() => {
    setPaginatedData();
    setPagesNumber();
  }, [countriesStore.displayData]);

  return (
    <>
      <CountriesDataList data={pageData!}/>
      <Paper variant={"outlined"}
             sx={{
               top: 'auto',
               bottom: 0,
               padding: 2,
               position: "sticky",
               width: "100%",
               justifyContent: "center",
               alignItems: "center",
               backgroundColor: "rgba(179,205,224,0.7)",
               borderRadius: 2,
               marginTop: 2,
               display: "flex"
             }}>

        <Pagination onChange={handlePageChange}
                    defaultPage={1}
                    variant={"outlined"}
                    count={totalPages}
                    page={countriesStore.currentPageNumber}/>
      </Paper>
    </>
  );
};

export default observer(CountriesData);