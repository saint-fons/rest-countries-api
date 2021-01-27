import React from 'react'
import s from "./../Countries.module.css"
import SearchIcon from "./../../../img/search-location-solid.svg"

let SearchCountries = (props) => {

    let countriesElements = React.createRef();

    let updateCountries = () => {
        let text = countriesElements.current.value
        props.updateCountries(text)
    }

    return <div className={s.SearchContainer}>
         <textarea onChange={ updateCountries }
                   ref={ countriesElements }
                   value={ props.countriesSearch }

                   placeholder={"Search here" }
                   className={s.SearchTextAreaContainer}
         >
         </textarea>
        <div>
            {props.countriesSearch}
        </div>

    </div>
}


export default SearchCountries