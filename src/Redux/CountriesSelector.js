import {createSelector} from "reselect";


export const getCountriesSelector = (state) => {
    return state.listCountries.countries
}

export const getCountriesSuperSelector = createSelector(getCountriesSelector,
    (countries) => {
        return countries
    })
