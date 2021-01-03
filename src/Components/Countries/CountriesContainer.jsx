import React from 'react'
import {connect} from "react-redux";
import {getCountries} from "../../Redux/countriesReducer";
import Countries from "./Countries";


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
        countries: state.listCountries.countries

    }
}



export default connect((mapStateToProps),
    {getCountries})(CountriesContainer)
