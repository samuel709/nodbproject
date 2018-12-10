import React, {Component} from 'react'
import Input from './Input'
import './FilterByName.css'

class FilterByName extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: ""
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(prop, value) {
        this.setState({ [prop] : value });
     }

    render(){
        return(
            <div className="filterFighters">
                <Input placeholder="Search by name"
                        field="name"
                        handleChange={this.handleChange}/>
                <button className="filterButton"
                        onClick={() => {this.props.filterByName(this.state.name)}}>Filter</button>
            </div>
        )
    }
}

export default FilterByName