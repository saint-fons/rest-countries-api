import React from 'react'


let Countries = (props) => {

    return <div>
        <div>
            {
                props.countries.map(c =>
                    <div>{c.name}</div>
                )
            }
        </div>
        <div>
            {
                props.countries.map(c =>
                    <img src={c.flag} alt={"flag"} />
                )
            }
        </div>
    </div>
}


export default Countries