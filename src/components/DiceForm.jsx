import React from 'react'

class DiceForm extends React.Component {
  state = {

  }

  handleDiceSides = (e) => {
    this.props.diceSides(e.target.value)
  }
  handleDiceNumber = (e) => {
    this.props.diceNumber(e.target.value)
  }
  handleDiceAdjustments = (e) => {
    this.props.diceAdjustment(e.target.value)
  }

  handleSubmit = (e) => {
    e.preventDefault();

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
            placeholder="1"
          />
        </div>
        <div>
          <p>How many rolls?</p>
          <input
            onChange={this.handleDiceNumber}
            type="number"
            min="1"
            max="100"
            placeholder="1"
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
