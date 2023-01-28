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
  fetchedCountries: CountryObject[] = [];
  displayCountries: CountryObject[] = [];
  displayPrevious: CountryObject[] = [];
  displayPaginatedCountries: CountryObject[] = [];
  countriesPerPage: number = 10;
  currentPageNumber: number = 1;
  counterTest: number = 0;
  totalNumberOfPages: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  setFetchedCountries(data: CountryObject[]) {
    this.fetchedCountries = data;
  }

  setDisplayCountries(data: CountryObject[]) {
    this.displayCountries = data;
  }

  sortCountriesByName(option: "ascending" | "descending") {
    this.displayCountries = sortArrayByKey(this.displayCountries, "name", option);
  }

  setDisplayToPrevValue() {
    this.displayCountries = this.displayPrevious;
  }

  filterCountriesByRegion(key: string, keyVal: any) {
    this.displayPrevious = this.fetchedCountries;
    const filteredData = filterArrayByKeyValue(this.displayCountries, "region", keyVal);

    this.setDisplayCountries(filteredData);
  }

  filterCountriesByAreaRange(country: string, option: "smaller" | "bigger") {
    const countryObj = filterArrayByKeyValue(this.fetchedCountries, "name", country)[0];
    const countrySize = countryObj.area;

    this.displayPrevious = this.fetchedCountries;
    const filteredData = filterArrayByRange(this.displayCountries, "area", countrySize, option);

    this.setDisplayCountries(filteredData);
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

  increaseCounter(_amount: number) {
    this.counterTest = this.counterTest + _amount;
  }

}

const countriesStore = new CountriesStore();

export default countriesStore;