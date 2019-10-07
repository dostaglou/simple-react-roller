import React from 'react'

class DiceForm extends React.Component {
  state = {

  }

  render() {
    return (
      <from>
        <div>
          <p>How many sides?</p>
          <input
            type="number"
            min="1"
            max="100"
            placeholder="1"
          />
        </div>
        <div>
          <p>How many rolls?</p>
          <input
            type="number"
            min="1"
            max="100"
            placeholder="1"
          />
        </div>
        <div>
          <p>Any Adjustment?</p>
          <input
            type="number"
            min="-100"
            max="100"
            placeholder="0"
          />
        </div>
      </from>
    );
  }
}

export default DiceForm
