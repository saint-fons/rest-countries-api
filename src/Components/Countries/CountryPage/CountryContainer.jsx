import React from 'react'
import {connect} from "react-redux";
import {getPageNameSuperSelector} from "../../../Redux/CountriesSelector";
import {getCountryName, setCountryNameDispatch} from "../../../Redux/countriesReducer";
import Country from "./Country";
import {compose} from "redux";
import {withRouter} from "react-router";


class CountryContainer extends React.Component {
    componentDidMount() {
        let country = this.props.match.params.country
        /*this.props.getCountryName(country)*/
        this.props.setCountryNameDispatch(country)
    }

    componentDidUpdate(prevProps) {
        let country = this.props.match.params.country
        if (this.props.country !== prevProps.country) {
            this.props.setCountryNameDispatch(country)
        }

    }

    render() {
        return <>
            <div>
                {this.props.country}
            </div>
            <Country
                countries={this.props.countries}
            />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        countries: getPageNameSuperSelector(state)
    }
}



export default compose(
    withRouter,connect((mapStateToProps),
    {getCountryName, setCountryNameDispatch}))(CountryContainer)

