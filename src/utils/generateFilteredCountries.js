export const generateFilteredCountries = (countryToExclude, countries) => {
  return countries.filter(country => country !== countryToExclude);
}