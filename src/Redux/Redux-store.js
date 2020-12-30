import {createStore, combineReducers, applyMiddleware} from "redux"
import countriesReducer from "./countriesReducer";
import thunkMiddleware from "redux-thunk"



let reducers = combineReducers({
    listCountries: countriesReducer
})



let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store