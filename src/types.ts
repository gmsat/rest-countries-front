type CountryImages = {svg: string, png: string};

export type CountryObject = {
  name: string,
  region: string,
  area: number,
  flags: CountryImages,
  independent?: boolean
}