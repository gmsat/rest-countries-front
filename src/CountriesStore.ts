import { CountryObject } from "./types";
import { makeAutoObservable } from "mobx";
import {
  filterArrayByRange,
  filterArrayByKeyValue,
  sortArrayByKey,
  paginateArray,
  getTotalPagesNumber
} from "./helpers/ArrayHelpers";

class CountriesStore {
  fetchedData: CountryObject[] = [];
  displayData: CountryObject[] = [];
  displayPrevious: CountryObject[] = [];
  displayPaginatedCountries: CountryObject[] = [];
  countriesPerPage: number = 10;
  currentPageNumber: number = 1;
  counterTest: number = 0;
  totalNumberOfPages: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  setFetchedData(data: CountryObject[]) {
    this.fetchedData = data;
  }

  setDisplayData(data: CountryObject[]) {
    this.displayData = data;
  }

  sortCountriesByName(option: "ascending" | "descending") {
    this.displayData = sortArrayByKey(this.displayData, "name", option);
  }

  setDisplayToPrevValue() {
    this.displayData = this.displayPrevious;
  }

  filterCountriesByRegion(key: string, keyVal: any) {
    this.displayPrevious = this.fetchedData;
    const filteredData = filterArrayByKeyValue(this.displayData, "region", keyVal);

    this.setDisplayData(filteredData);
  }

  filterCountriesByAreaRange(country: string, option: "smaller" | "bigger") {
    const countryObj = filterArrayByKeyValue(this.fetchedData, "name", country)[0];
    const countrySize = countryObj.area;

    this.displayPrevious = this.fetchedData;
    const filteredData = filterArrayByRange(this.displayData, "area", countrySize, option);

    this.setDisplayData(filteredData);
  }

  setPaginatedCountryData(data: any[], pageSize: number, pageNumber: number) {
    // const totalPages = getTotalPagesNumber(this.displayCountries, this.countriesPerPage);

    // pageSize = this.countriesPerPage;
    // pageNumber = this.currentPageNumber;

    this.displayPaginatedCountries = paginateArray(data, pageSize, pageNumber);
  }

  setCountriesPerPage(pageSize: number) {
    this.countriesPerPage = pageSize;
  }

  setCurrentPageNumber(pageNumber: number) {
    this.currentPageNumber = pageNumber;
  }

  increaseCounter(_amount: number) {
    this.counterTest = this.counterTest + _amount;
  }

}

const countriesStore = new CountriesStore();

export default countriesStore;