import React, {Component} from 'react'
import Input from './Input'
import axios from 'axios';

class AddFighter extends Component {
    

handleChange(prop, value) {
    this.setState({ [prop] : value });
 }


 constructor(props){
    super(props);

    this.state = {
        name: "",
        franchise: "",
        image: "",
        fighters: []
    }
}
render(){

    let newFighter = {
        name: this.state.name,
        franchise: this.state.franchise,
        image: this.state.image
    }

    return(
        <div>
            {/* THIS IS GETTING THE TEXT FROM THE NAME BOX 
            AND ASSIGINING IT TO THE NAME VARIABLE */}
            <input type="text"
                    placeholder="Name"
                    onChange={(e) => {
                        this.handleChange("name", e.target.value)
                    }}/>

            {/* THIS IS GETTING THE TEXT FROM THE FRANCHISE BOX
            AND ASSIGINING IT TO THE FRANCHISE VARIABLE */}
            <input type="text"
                    placeholder="Franchise"
                    onChange={(e) => {
                        this.handleChange("franchise", e.target.value)
                    }}/>

            {/* THIS IS GETTING THE TEXT FROM THE IMAGE BOX AND 
            ASSIGNING IT TO THE IMAGE VARIABLE */}
            <input type="text"
                    placeholder="Image URL"
                    onChange={(e) => {
                        this.handleChange("image", e.target.value)
                    }}/>
            
            {/* THIS IS GETTING THE ADDFIGHTER FUNCTION FROM
            APP.JS */}
            <button onClick={() => {
                this.props.addFighter(newFighter)}}
                >Add Fighter</button>
        </div>
    )
}
}

export default AddFighter;