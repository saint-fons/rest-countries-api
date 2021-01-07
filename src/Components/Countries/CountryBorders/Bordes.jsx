import React from 'react'
import {NavLink} from "react-router-dom";
import s from "../Countries.module.css";


let Borders = (props) => {
    return <div>
        <div>
            <NavLink to={'/'}>
                Home
            </NavLink>
        </div>
        <div> {
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
                            NativeName: {c.nativeName}
                        </div>
                        <div>
                            Region: {c.region}
                        </div>
                        <div>
                            Subregion: {c.subregion}
                        </div>
                        <div>
                            TopLevelDomain: {c.topLevelDomain}
                        </div>
                        <div>
                            languages;
                            {
                                c.languages.map(l => l.name)
                            }
                        </div>
                    </div>
                </div>
            )
        }
        </div>
    </div>
}


export default Borders