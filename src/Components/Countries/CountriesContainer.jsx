import React from 'react'
import {connect} from "react-redux";
import Countries from "./Countries";
import {getCountries} from "../../Redux/countriesReducer";
import {getCountriesSelector} from "../../Redux/CountriesSelector";


class CountriesContainer extends React.Component {
    componentDidMount() {
        this.props.getCountries()
    }


    render() {
        return <>
            <Countries
                countries={this.props.countries}
            />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        countries: getCountriesSelector(state)

    }
}



export default connect((mapStateToProps),
    {getCountries})(CountriesContainer)
