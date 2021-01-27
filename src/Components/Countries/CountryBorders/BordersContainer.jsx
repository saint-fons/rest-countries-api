import React from 'react'
import {connect} from "react-redux";
import {getBordersSuperSelector} from "../../../Redux/CountriesSelector";
import {setCountryNameDispatch} from "../../../Redux/countriesReducer";
import Borders from "./Bordes";
import {compose} from "redux";
import {withRouter} from "react-router";


class BordersContainer extends React.Component {

    componentDidMount() {
        let country = this.props.match.params.country
        /*this.props.getCountryName(country)*/
        this.props.setCountryNameDispatch(country)
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        let country1 = this.props.match.params.country
        let country2 = prevProps.match.params.country
        if(country1 !== country2) {
            this.props.setCountryNameDispatch(country1)
        }
    }

    render() {
        return <>
            <Borders
                countries={this.props.countries}
                country={this.props.country}
            />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        countries: getBordersSuperSelector(state)
    }
}



export default compose(
    withRouter,connect((mapStateToProps),
    {setCountryNameDispatch}))(BordersContainer)

