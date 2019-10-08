import React, { Component } from 'react';
import Header from './components/Header'
import DiceForm from './components/DiceForm'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    diceContent: [{
      headerText: "Welcome to Simple React Roller",
      diceSides: null,
      diceNumber: null,
      diceAdjustment: null,
    }]
  }

  diceToAdd = {
    headerText: null,
    diceSides: null,
    diceNumber: null,
    diceAdjustment: null
  }

  logDice = () => {
    console.log(this.diceToAdd)
  }

  handleDiceSides = (value) => {
    this.diceToAdd.diceSides = value
    this.logDice()
  }

  handleDiceNumber = (value) => {
    this.diceToAdd.diceNumber = value
    this.logDice()
  }

  handleDiceAdjustments = (value) => {
    this.diceToAdd.diceAdjustment = value
    this.logDice()
  }

  handleRoll = () => {

  }


  render() {
    return (
      <div className="container mt-5 p-4 bg-light">
        <Header
          header = { this.state.diceContent.slice(-1)[0].headerText }
        />
        <DiceForm
        diceSides = {this.handleDiceSides}
        diceNumber = {this.handleDiceNumber}
        diceAdjustment = {this.handleDiceAdjustments}
        />
      </div>
    );
  }
}

export default App;
