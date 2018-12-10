import React, {Component} from 'react'
import Input from './Input'
import './Filter.css'

class FilterByFranchise extends Component {
    constructor(props){
        super(props);

        this.state = {
            franchise: ""
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(prop, value){
        this.setState({
            [prop]: value
        })
    }

    render(){
        return(
            <div className="filter">
                <Input placeholder="Search by franchise"
                        field="franchise"
                        handleChange={this.handleChange}/>
                <button className="filterButton"
                onClick={() => {this.props.filterByFranchise(this.state.franchise)}}>Filter</button>
            </div>
        )
    }
}

export default FilterByFranchise