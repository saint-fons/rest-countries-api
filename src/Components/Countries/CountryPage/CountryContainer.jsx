import React from 'react'
import {connect} from "react-redux";
import {setCountryName} from "../../../Redux/countriesReducer";
import Country from "./Country";
import {compose} from "redux";
import {withRouter} from "react-router";


class CountryContainer extends React.Component {
    componentDidMount() {
        let country = this.props.match.params.country
        this.props.setCountryName(country)
    }

    componentDidUpdate(prevProps) {
        let country = this.props.match.params.country
        if (this.props.country !== prevProps.country) {
            this.props.setCountryName(country)
            console.log(country)
        }

    }

    render() {
        return <>
            <Country
            />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
    }
}



export default compose(
    withRouter,connect((mapStateToProps),
    {setCountryName}))(CountryContainer)

