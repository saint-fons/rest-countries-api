import React from 'react'
import s from './Countries.module.css'
import SearchCountriesContainer from "./SearchCountries/SearchCountriesContainer";


let Countries = (props) => {

    return <div className={s.bodyContainer}>
        <div>
            <div>
                <SearchCountriesContainer />
            </div>
            {
                props.countries.map(c =>
                    <div className={s.flagsContainer}>
                        <div className={s.flagContainer}>
                            <img className={s.Flag} src={c.flag} alt={"flag"}/>
                            <div>
                                {c.name}
                            </div>
                            <div>
                                Population: {c.population}
                            </div>
                            <div>
                                Region: {c.region}
                            </div>
                            <div>
                                Capital: {c.capital}
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    </div>
}


export default Countries