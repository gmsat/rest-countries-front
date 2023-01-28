import { CountryObject } from "./types";
import { makeAutoObservable } from "mobx";
import { arrayHelpers } from "./helpers/ArrayHelpers";

class CountriesStore {
  fetchedCountries: CountryObject[] = [];
  displayCountries: CountryObject[] = [];
  displayPrevious: CountryObject[] = [];
  counterTest: number = 0;

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
    this.displayCountries = arrayHelpers.sortArrayByKey(this.displayCountries, "name", option);
  }

  setDisplayToPrevValue() {
    this.displayCountries = this.displayPrevious;
  }

  filterCountriesByRegion(key: string, keyVal: any) {
    this.displayPrevious = this.fetchedCountries;
    const filteredData = arrayHelpers.filterArrayByKeyValue(this.displayCountries, "region", keyVal);

    this.setDisplayCountries(filteredData);

  }

  filterCountriesByAreaRange(country: string, option: "smaller" | "bigger") {
    const countryObj = arrayHelpers.filterArrayByKeyValue(this.fetchedCountries, "name", country)[0];
    const countrySize = countryObj.area;

    this.displayPrevious = this.fetchedCountries;
    const filteredData = arrayHelpers.filterArrayByRange(this.displayCountries, "area", countrySize, option);

    this.setDisplayCountries(filteredData);
  }

  applyFilters() {

  }

  increaseCounter(_amount: number) {
    this.counterTest = this.counterTest + _amount;
  }

}

const countriesStore = new CountriesStore();

export default countriesStore;