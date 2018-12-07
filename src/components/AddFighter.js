import React, {Component} from 'react'
import Input from './Input'
import axios from 'axios';

class AddFighter extends Component {
    
 constructor(props){
    super(props);

    this.state = {
        name: "",
        franchise: "",
        image: "",
        fighters: []
    }

    this.handleChange = this.handleChange.bind(this)
}


handleChange(prop, value) {
    this.setState({ [prop] : value });
 }

render(){

    let newFighter = {
        name: this.state.name,
        franchise: this.state.franchise,
        image: this.state.image
    }

    return(
        <div>
            <Input placeholder="Name"
                    field="name"
                    handleChange={this.handleChange}/>

            <Input placeholder="Franchise"
                    field="franchise"
                    handleChange={this.handleChange}/>

            <Input placeholder="Image"
                    field="image"
                    handleChange={this.handleChange}/>

            <button onClick={() => {
                this.props.addFighter(newFighter)}}
                >Add Fighter</button>
        </div>
    )
}
}

export default AddFighter;