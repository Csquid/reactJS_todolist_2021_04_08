import React, { Component } from 'react';

class TodoHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    console.log('TodoHeader render');
    return (
      <h2>{this.props.title}</h2>
    );
  }
}
 
export default TodoHeader;