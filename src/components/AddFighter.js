import React, {Component} from 'react'
import Input from './Input'
import "./AddFighter.css"

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
        <div className="addFighter">
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
                className="addFighterButton">Add Fighter</button>
        </div>
    )
}
}

export default AddFighter;