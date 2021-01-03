import {CountriesAPI} from "../api/api";


const SET_COUNTRIES = 'SET-COUNTRIES'


let initialState = {
    countries: []
}


const countriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COUNTRIES:
            return {...state,
                countries: action.countries
            }
        default:
            return state
    }
}


export const setCountries = (countries) =>
    ({type: SET_COUNTRIES,  countries})


export const getCountries = () => {
    return (dispatch) => {
        CountriesAPI.getCountries()
            .then(response => {
                dispatch(setCountries(response))
            })
    }
}


export default countriesReducer