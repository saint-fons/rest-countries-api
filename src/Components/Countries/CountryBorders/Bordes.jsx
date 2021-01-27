import React from 'react'
import {NavLink} from "react-router-dom";
import s from "../Countries.module.css";


class Borders extends React.Component {

    render() {

        return <div className={s.SingleFlag}>
            <div className={s.MetaInfoCountry}>
                <NavLink to={'/'}
                         className={s.LinkStyle}
                >
                    Home
                </NavLink>
            </div>
            <div> {
                this.props.countries.map(c =>

                    <div className={s.SingleFlagContainer}>
                        <img className={s.SingleFlagImg} src={c.flag} alt={"flag"}/>
                        <div className={s.SingleFlagInfo}>
                            <div className={s.SingleFlagName}>
                                {c.name}
                            </div>
                            <div className={s.SingleMetaFlagInfo}>
                                <span className={s.MetaInfoCountry}>Population:</span>

                                {c.population}
                            </div>
                            <div className={s.SingleMetaFlagInfo}>
                                <span className={s.MetaInfoCountry}> NativeName:</span>

                                {c.nativeName}
                            </div>
                            <div className={s.SingleMetaFlagInfo}>
                                <span className={s.MetaInfoCountry}> Region:</span>

                                {c.region}
                            </div>
                            <div className={s.SingleMetaFlagInfo}>
                                <span className={s.MetaInfoCountry}> Subregion:</span>

                                {c.subregion}
                            </div>
                            <div className={s.SingleMetaFlagInfo}>
                                <span className={s.MetaInfoCountry}> TopLevelDomain:</span>

                                {c.topLevelDomain}
                            </div>
                            <div  className={s.SingleMetaFlagInfo}>
                                <span className={s.MetaInfoCountry}> languages;</span>
                                {
                                    c.languages.map(l => l.name)
                                }
                            </div>
                            <div>
                                <span className={s.MetaInfoCountry}> borders;</span>
                                {
                                    c.borders.map(b =>
                                        (<NavLink className={s.MetaInfoCountry}
                                                  to={'/border/' + b}>{b}</NavLink>))
                                }
                            </div>
                        </div>
                    </div>
                )
            }
            </div>
        </div>
    }
}


export default Borders