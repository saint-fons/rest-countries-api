import {CountriesAPI} from "../api/api";


const SET_COUNTRIES = 'SET-COUNTRIES'
const UPDATE_NEW_COUNTRIES = 'UPDATE_NEW_COUNTRIES'


let initialState = {
    countries: [],
    countriesSearch: ""
}


const countriesReducer = (state = initialState, action) => {
    let stateCopy
    switch (action.type) {
        case SET_COUNTRIES:
            return {
                ...state,
                countries: action.countries
            }
            case UPDATE_NEW_COUNTRIES: {
                stateCopy = {...state}
                stateCopy.countriesSearch = action.countriesSearch
                return stateCopy
            }
        default:
            return state
    }
}


export const setCountries = (countries) =>
    ({type: SET_COUNTRIES, countries})

export const updateCountriesActionCreator = (text) =>
    ({ type: UPDATE_NEW_COUNTRIES, countriesSearch: text})


export const getCountries = () => {
    return (dispatch) => {
        CountriesAPI.getCountries()
            .then(response => {
                dispatch(setCountries(response))
            })
    }
}




export default countriesReducer