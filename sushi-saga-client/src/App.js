import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor(){
    super()
    this.state = {
      money: 100,
      sushis: [],
      index: 0,
      eaten: []
    }
  }

  eatSushi = (sushiObj) => {
    if (!this.state.eaten.find(sushi => sushi.id === sushiObj.id)) {
      if (this.state.money >= sushiObj.price){
        this.setState({
          money: this.state.money - sushiObj.price,
          eaten: [...this.state.eaten, sushiObj]
        })
      }}
  } 

  moreSushiOnTable = () => {
    this.setState({
      index: (this.state.index + 4) % 100
    })
  }

  sushiOnTable(){
    return this.state.sushis.slice(this.state.index, this.state.index + 4 ) 
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(data => this.setState({sushis: data}))
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.sushiOnTable()} moreSushi={this.moreSushiOnTable} eatSushi={this.eatSushi} eatenSushi={this.state.eaten} />
        <Table money={this.state.money} eaten={this.state.eaten} />
      </div>
    );
  }
}

export default App;