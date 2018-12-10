import React, {Component} from 'react'
import './DisplayFighters.css'
import DeleteFighter from './DeleteFighter'


function DisplayFighters(props){
    const fighters = props.fighters.map((val, i) => {
        return(
            <div key={i} className="fighters">
                <img src={val.image} alt="Image Not Found" className="fighterImage"/>
                <h3 className="fighterName">{val.name}</h3>
                <h6 className="fighterFranchise">{val.franchise}</h6>
                <DeleteFighter className="deleteButton"
                deleteFighter={props.deleteFighter}
                id={val.id}
                />
            </div>
        )
    })
    return fighters;
}

export default DisplayFighters;