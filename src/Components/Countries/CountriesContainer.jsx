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
                Afghanistan={this.props.Afghanistan}
                nativeName={this.props.nativeName}
            />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        Afghanistan: state.listCountries.Afghanistan.name,
        nativeName: state.listCountries.Afghanistan.nativeName
    }
}



export default connect((mapStateToProps),
    {getCountries})(CountriesContainer)
