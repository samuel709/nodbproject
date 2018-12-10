import React, {Component} from 'react'
import axios from 'axios';

class DeleteFighter extends Component {
    constructor(props){
        super(props);

        this.state = {
            fighters: []
        }
    }

    deleteFighter(id){
        axios.delete(`/api/fighters/${id}`)
        .then ((response) => {
            this.setState({
                fighters: response.data
            })
        })
    }

    render(){
        return(
            <button className="deleteButton"
                onClick={() => {this.props.deleteFighter(this.props.id)}}>
                Delete
            </button>
        )
    }
}

export default DeleteFighter