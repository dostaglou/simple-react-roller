import React from 'react'

class DiceForm extends React.Component {
  state = {
    diceSides: null,
    diceNumber: null,
    diceAdjustment: null
  }


  logDice = () => {
    console.log(this.state)
  }

  handleDiceSides = (e) => {
    this.setState({diceSides: e.target.value})
  }

  handleDiceNumber = (e) => {
    this.setState({diceNumber: e.target.value})
  }

  handleDiceAdjustments = (e) => {
    this.setState({diceAdjustment: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let sides = this.state.diceSides
    let number = this.state.diceNumber
    let adjustment = this.state.diceAdjustment
    this.props.handleRoll(sides, number, adjustment)
  }


  render() {
    const styles = {

    }

    const classes = "col-6 col-offset-3"

    return (
      <form className={classes}
            onSubmit={this.handleSubmit}>
        <div>
          <p>How many sides?</p>
          <input
            onChange={this.handleDiceSides}
            type="number"
            min="1"
            max="100"
            placeholder="0"
          />
        </div>
        <div>
          <p>How many rolls?</p>
          <input
            onChange={this.handleDiceNumber}
            type="number"
            min="1"
            max="100"
            placeholder="0"
          />
        </div>
        <div>
          <p>Any Adjustments?</p>
          <input
            onChange={this.handleDiceAdjustments}
            type="number"
            min="-100"
            max="100"
            placeholder="0"
          />
        </div>
        <input
          className="w-100 mt-3"
          type="submit"
        />
      </form>
    );
  }
}

export default DiceForm
