import React from 'react'
import s from './Countries.module.css'
import SearchCountriesContainer from "./SearchCountries/SearchCountriesContainer";
import {NavLink} from "react-router-dom";


let Countries = (props) => {

    return <div className={s.bodyContainer}>
        <div>
            <div>
                <SearchCountriesContainer/>
            </div>
            {
                props.countries.map(c =>

                    <div className={s.flagsContainer}>
                        <div className={s.flagContainer}>
                            <img className={s.Flag} src={c.flag} alt={"flag"}/>
                            <div>
                                <NavLink to={'/name/' + c.name}
                                         className={s.LinkStyle}
                                >
                                    {c.name}
                                </NavLink>
                            </div>
                            <div>
                               <span className={s.MetaInfoCountry}>
                                   Population:
                               </span>
                                {c.population}
                            </div>
                            <div>
                                <span className={s.MetaInfoCountry}>
                                Region:
                                    </span>
                                {c.region}
                            </div>
                            <div>
                                <span className={s.MetaInfoCountry}>
                                Capital:
                                    </span>
                                {c.capital}
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    </div>
}


export default Countries