import {createSelector} from "reselect";


export const getCountriesSelector = (state) => {
    return (state)
}

export const updateCountriesSelector = (state) => {
    return state.listCountries.countriesSearch
}

export const getCountriesSuperSelector = createSelector(getCountriesSelector,
    (state) => {
        return state.listCountries.countries.filter( c =>
            (c.name.includes(state.listCountries.countriesSearch)))
    })
