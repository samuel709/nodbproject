import React, {Component} from 'react'

class DeleteFighter extends Component {
    constructor(props){
        super(props);
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