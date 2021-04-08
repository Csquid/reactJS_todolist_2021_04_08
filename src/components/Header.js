import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <h2>{this.props.title}</h2>
    );
  }
}
 
export default Header;