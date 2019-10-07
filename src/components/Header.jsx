import React from 'react'

class Header extends React.Component {

  render(){
    return (
      <div className="text-center bg-warning">{this.props.header}</div>
    );
  }
}


export default Header
