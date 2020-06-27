import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(){
    super()
    this.state = {
      sushis: [],
      four: [],
      table: [],
      wallet: 100
    }
  }

  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(sushis => {
      let fourSushi = sushis.splice(0,4)
      this.setState({
        sushis: sushis,
        four: fourSushi
      })
    })
  }

  newSushis = () => {
    console.log(this.state.sushis)
    let newFour = this.state.sushis.splice(0,4)
    this.setState({
      four: newFour
    })  
  }
  eatSushi = (event) => {
    if (event.sushi.price > this.state.wallet) {
      alert("You got no money")
    } else {
    this.setState({
      table: [...this.state.table, event.sushi],
      wallet: this.state.wallet - event.sushi.price
    }) 
  }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer fourSushis={this.state.four} table={this.state.table} newSushis={this.newSushis} eatSushi={this.eatSushi}/>
        <Table table={this.state.table} wallet={this.state.wallet}/>
      </div>
    );
  }
}

export default App;