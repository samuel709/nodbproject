import React, {Component} from 'react'
import './DisplayFighters.css'

function DisplayFighters(props){
    const fighters = props.fighters.map((val, i) => {
        return(
            <div key={val.id}>
                <li>{val.name}</li>
                <li>{val.franchise}</li>
                <li>{val.image}</li>
            </div>
        )
    })
    return fighters;
}

export default DisplayFighters;