import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import DisplayFighters from './components/DisplayFighters';
import AddFighter from './components/AddFighter';
import MainHeader from './components/MainHeader';
import FilterByName from './components/FilterByName';
import FilterByFranchise from './components/FilterByFranchise'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fighters: []
    }

    this.addFighter = this.addFighter.bind(this)
    this.deleteFighter = this.deleteFighter.bind(this)
    this.filterByName = this.filterByName.bind(this)
    this.filterByFranchise = this.filterByFranchise.bind(this)
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

  deleteFighter(id){
    axios.delete(`/api/fighters/${id}`)
    .then((response) => {
      this.setState({
        fighters: response.data
      })
    })
  }

  filterByName(name){
    axios.get(`/api/fighter/${name}`)
    .then((response) => {
      this.setState({
        fighters: response.data
      })
    })
  }

  filterByFranchise(franchise){
    axios.get(`/api/fighters/${franchise}`)
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
        <div className="header">
          <MainHeader />
        </div>

        <div className="addFighterDiv">
          <FilterByName className="filter"
            filterByName={this.filterByName}/>

          <AddFighter className="add"
            fighters={fighters}
            addFighter={this.addFighter}/>

          <FilterByFranchise 
            filterByFranchise={this.filterByFranchise}/>
        </div>

        <div className="displayFighterDiv">
          <DisplayFighters 
          fighters={fighters}
          deleteFighter={this.deleteFighter}/>
        </div>

      </div>
    );
  }
}

export default App;
