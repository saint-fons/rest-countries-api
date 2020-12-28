import { createStore, combineReducers } from "redux"
import countriesReducer from "./countriesReducer";



let reducers = combineReducers({
    Countries: countriesReducer
})



let store = createStore(reducers)

window.store = store

export default store