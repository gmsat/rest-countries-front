import { CountryObject } from "./types";
import { makeAutoObservable } from "mobx";
import {
  filterArrayByRange,
  filterArrayByKeyValue,
  sortArrayByKey,
} from "./helpers/ArrayHelpers";

class CountriesStore {
  fetchedData: CountryObject[] = [];
  displayData: CountryObject[] = [];
  displayPrevious: CountryObject[] = [];
  currentPageNumber: number = 1;

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

  filterCountriesByRegion(key: string, keyVal: string) {
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

  setCurrentPageNumber(pageNumber: number) {
    this.currentPageNumber = pageNumber;
  }

}

const countriesStore = new CountriesStore();

export default countriesStore;