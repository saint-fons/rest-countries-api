import React from 'react'
import {connect} from "react-redux";
import {updateCountriesSelector} from "../../../Redux/CountriesSelector";
import SearchCountries from "./SearchCountries";
import {updateCountriesActionCreator} from "../../../Redux/countriesReducer";


class SearchCountriesContainer extends React.Component {
    componentDidMount() {
    }


    render() {
        return <>
            <SearchCountries
                countriesSearch={this.props.countriesSearch}
                updateCountries={this.props.updateCountries}
            />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        countriesSearch: updateCountriesSelector(state)
    }
}


let mapDispatchToProps = (dispatch) => {
    return{
        updateCountries: (text) => {dispatch(updateCountriesActionCreator(text))},
    }
}


export default connect((mapStateToProps),
    (mapDispatchToProps))(SearchCountriesContainer)
