import React, { Component } from 'react';
import Header from './components/Header'
import DiceForm from './components/DiceForm'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {

  }

  render() {
    return (
      <div>
        <Header />
        <DiceForm />
      </div>
    );
  }
}

export default App;
