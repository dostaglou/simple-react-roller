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
      <div className="container mt-5 p-4 bg-primary">
        <Header />
        <DiceForm />
      </div>
    );
  }
}

export default App;
