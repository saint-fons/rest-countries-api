import {CountriesAPI} from "../api/api";


const SET_COUNTRIES = 'SET-COUNTRIES'
const SET_COUNTRY_NAME_PAGE = 'SET_COUNTRY_NAME_PAGE'
const SET_COUNTRY_NAME = 'SET_COUNTRY_NAME'
const UPDATE_NEW_COUNTRIES = 'UPDATE_NEW_COUNTRIES'


let initialState = {
    countries: [],
    countryNamePage: [],
    countriesSearch: "",
    countryPage: ""
}


const countriesReducer = (state = initialState, action) => {
    let stateCopy
    switch (action.type) {
        case SET_COUNTRIES:
            return {
                ...state,
                countries: action.countries
            }
            case SET_COUNTRY_NAME_PAGE: {
                stateCopy = {...state}
                stateCopy.countryNamePage = action.countryNamePage
                return stateCopy
            }
            case UPDATE_NEW_COUNTRIES: {
                stateCopy = {...state}
                stateCopy.countriesSearch = action.countriesSearch
                return stateCopy
            }
            case SET_COUNTRY_NAME: {
                stateCopy = {...state}
                stateCopy.countryPage = action.name
                return stateCopy
            }
        default:
            return state
    }
}

export const setCountries = (countries) =>
    ({type: SET_COUNTRIES, countries})

export const setCountryNamePage = (countryNamePage) =>
    ({type: SET_COUNTRIES, countryNamePage})

export const setCountryNameDispatch = (name) =>
    ({type: SET_COUNTRY_NAME, name})

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

export const getCountryName = (name) => {
    return (dispatch) => {
        CountriesAPI.getCountryName(name)
            .then(response => {
                dispatch(setCountryNamePage(response))
            })
    }
}





export default countriesReducer