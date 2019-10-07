import React, { Component } from 'react';
import Header from './components/Header'
import DiceForm from './components/DiceForm'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    headerText: "Welcome to Simple React Roller",
    diceSides: 6,
    diceNumber: 1,
    diceAdjustment: 0
  }

  render() {
    return (
      <div className="container mt-5 p-4 bg-light">
        <Header
          header = { this.state.headerText }
        />
        <DiceForm
        diceSides = {this.state.diceSides}
        diceNumber = {this.state.diceNumber}
        diceAdjustment = {this.state.diceAdjustment}
        />
      </div>
    );
  }
}

export default App;
