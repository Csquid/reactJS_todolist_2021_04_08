import React, { Component } from 'react';
import * as events from "js/events";
import * as read   from 'js/read';
class TodoLists extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      lists: read.getListElement(this.props.lists, this.props)
    }
  }
  
  componentDidMount() {
    console.log('TodoList ComponentDidMount');
    const itemContainerElements = document.querySelectorAll(".item-container");

    events.initTodoListEvents(itemContainerElements);
  }
  
  render() { 
    console.log('TodoList render');

    return ( 
      <div className="item-content">
        {this.state.lists}
      </div>
    );
  }
}
 
export default TodoLists;