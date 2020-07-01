import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
    constructor() {
        super()
        this.state = {
            allSushi: [],
            displaySushi: [],
            lastIndex: -1, //remember that lastIndex will be offset from sushiId by 1
            eaten: [],
            budget: 100,
            deposit: 0
        }
    }
    componentDidMount() {
        console.log("Hello")
        fetch(API)
        .then(res => res.json())
        .then(d => {
            this.setState({allSushi: d})
            this.nextFourSushi()
        })
        .then(console.log("Hello, I have the first 4 sushi in state"))
    }

    nextFourSushi = () => {
        // console.log("I will add new sushi", this.state.lastIndex)
        let ind = this.state.lastIndex
        let newInd = ((ind + 1) % 100)
        let newEnd = ((ind + 5) % 100)
        let newLastIndex = ((ind + 4) % 100)
        let newDisplaySushi = this.state.allSushi.slice(newInd, newEnd )
        this.setState({displaySushi: newDisplaySushi, lastIndex: newLastIndex})
    }

    eatSushi = (id, price) => {
        if (price <= this.state.budget) {
            let allEaten = [...this.state.eaten, id]
            let currBudget = this.state.budget
            currBudget -= price
            this.setState({eaten: allEaten, budget: currBudget})
        } else {
            alert("you need more cash, buddy")
        }
    }

    handleDeposit = (e) => {
        console.log(e.target.value)
        this.setState({deposit: e.target.value})
    }

    handlePayment = (e) => {
        e.preventDefault()
        let dep = parseInt(this.state.deposit)
        let currBal = parseInt(this.state.budget)
        currBal += dep
        this.setState({budget: currBal, deposit: 0})
    }

    render() {
        return (
            <div>
            <div className="app">
                <SushiContainer displaySushi={this.state.displaySushi} moreSushi={this.nextFourSushi} eatSushi={this.eatSushi} eaten={this.state.eaten}/>
                <Table budget={this.state.budget} eaten={this.state.eaten}/>

            </div>
            <form onSubmit={this.handlePayment} onChange={this.handleDeposit}>
                <input type="number" value={this.state.deposit}/>
                <input type="submit" />
            </form>
            </div>
        );
    }
}

export default App;

// <div className="app">
// <SushiContainer />
// <Table />
// </div>
