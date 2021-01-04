import React from 'react'

let SearchCountries = (props) => {

    let countriesElements = React.createRef();

    let updateCountries = () => {
        let text = countriesElements.current.value
        props.updateCountries(text)
    }

    return <div>
         <textarea onChange={ updateCountries }
                   ref={ countriesElements }
                   value={ props.countriesSearch }
                   placeholder={ "Search here" }
         >
         </textarea>
        <div>
            {props.countriesSearch}
        </div>
    </div>
}


export default SearchCountries