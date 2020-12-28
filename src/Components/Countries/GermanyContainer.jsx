import React from 'react'
import Germany from "./Germany";
import {connect} from "react-redux";




let mapStateToProps = (state) => {
    return {
        Germany: state.Countries.CountriesElements
    }
}


const GermanyContainer = connect(mapStateToProps)(Germany)

export default GermanyContainer