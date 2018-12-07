// import React, {Component} from 'react'

// class Input extends Component {

//     handleChange(prop, value){
//         this.setState({
//             [prop]: value
//         })
//     }

//     constructor(props){
//         super(props);

//         this.state = {
//             userInput: ""
//         }
//     }

//     render(){
//         return(
//             <div>
//                 <input type="text" 
//                     placeholder={this.props.placeholderText}
//                     onChange={(e) => {
//                     this.handleChange(this.props.prop, e.target.value);
//                 }}/>
//             </div>
//         )
//     }
// }

// export default Input

// export default function Input(props) {
//     return(
//         <div>
//             <input type="text" onChange={this.props.handleChange}/>
//         </div>
//     )
// }