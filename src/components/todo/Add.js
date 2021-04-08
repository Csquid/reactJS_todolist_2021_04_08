import React, { Component } from 'react';

class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="add-todo">
        <input type="text" placeholder="Todo" />
        <input type="button" value="add" />
      </div>
    );
  }
}

export default TodoInput;