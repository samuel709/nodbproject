import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import DisplayFighters from './components/DisplayFighters';
import AddFighter from './components/AddFighter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fighters: []
    }

    this.addFighter = this.addFighter.bind(this)
  }

  componentDidMount() {
    axios.get('/api/fighters')
      .then((response) => {
        this.setState({
          fighters: response.data
        })
      })
  }

  addFighter(obj){
    axios.post('/api/fighter', obj)
    .then((response) => {
      this.setState({
        fighters: response.data
      })
    })
  }

  render() {
    const { fighters } = this.state;
    return (
      <div>
        <div>
          <AddFighter 
          fighters={fighters}
          addFighter={this.addFighter}/>
        </div>

        <div>
          <DisplayFighters 
          fighters={fighters}
          />
        </div>

      </div>
    );
  }
}

export default App;
