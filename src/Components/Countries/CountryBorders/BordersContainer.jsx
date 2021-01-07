import React from 'react'
import {connect} from "react-redux";
import {getBordersSuperSelector} from "../../../Redux/CountriesSelector";
import {setCountryNameDispatch} from "../../../Redux/countriesReducer";
import Bordes from "./Bordes";
import {compose} from "redux";
import {withRouter} from "react-router";


class BordersContainer extends React.Component {
    componentDidMount() {
        let country = this.props.match.params.country
        /*this.props.getCountryName(country)*/
        this.props.setCountryNameDispatch(country)
    }


    render() {
        return <>
            <div>
                hiiiiiii
            </div>
            <Bordes
                countries={this.props.countries}
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

