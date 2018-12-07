import React, {Component} from 'react'
import './DisplayFighters.css'
import DeleteFighter from './DeleteFighter'



function DisplayFighters(props){
    const fighters = props.fighters.map((val, i) => {
        return(
            <div key={val.id}>
                <li>{val.image}</li>
                <li>{val.name}</li>
                <li>{val.franchise}</li>
                <DeleteFighter 
                deleteFighter={props.deleteFighter}
                id={val.id}
                />
            </div>
        )
    })
    return fighters;
}

export default DisplayFighters;