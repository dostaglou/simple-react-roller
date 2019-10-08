import React, { Component } from 'react';
import Header from './components/Header'
import DiceForm from './components/DiceForm'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    diceContent: [{
      headerText: "Welcome to Simple React Roller",
    }]
  }

  handleAddDice =(rolls, total) => {
    let roll = {
      headerText: rolls,
      total: total
    };
    this.setState( prevState => ({
      diceContent: prevState.diceContent.concat(roll)
    }))
  }

  handleRoll = (sides, number, adjustment) => {
    let rolls = "";
    let total = 0;
    let adj = parseInt(adjustment)

    var i = 0
    if (number > 1) {
      rolls += "Your individual rolls were:"
    } else {
      rolls += "Your roll was"
    };
    for (i = 0; i < number; i++) {
      var result = Math.floor(Math.random() * sides + 1);
      if (i === 0) {
        rolls += ` ${result.toString()}`
      } else {
        rolls += `, ${result.toString()}`
      };
      total += result
    }
    rolls += ` with a + ${adjustment}`
    total = total + adj
    this.handleAddDice(rolls, total)
  }

  render() {
    return (
      <div className="container mt-5 p-4 bg-light">
        <Header
          header = { this.state.diceContent.slice(-1)[0].headerText }
        />
        <DiceForm
        handleRoll = {this.handleRoll}
        />
      </div>
    );
  }
}

export default App;
