import {CountriesAPI} from "../api/api";


const SET_COUNTRIES = 'SET-COUNTRIES'


let initialState = {
    Afghanistan:{
        Afghanistan:{
            name:"",
            nativeName:""
        }
    }
}


const countriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COUNTRIES:
            return {...state,
                Afghanistan: action.Afghanistan,
                Albania: action.Albania
            }
        default:
            return state
    }
}


export const setCountries = (countries) =>
    ({type: SET_COUNTRIES, Afghanistan: countries.Afghanistan, Albania: countries.Albania})


export const getCountries = () => {
    return (dispatch) => {
        CountriesAPI.getCountries()
            .then(response => {
                let Afghanistan = response.data[0]
                let Albania = response.data[2]
                dispatch(setCountries({Afghanistan, Albania}))
            })
    }
}


export default countriesReducer