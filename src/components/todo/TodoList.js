import React, { Component } from 'react';
import * as events from "js/events";
import * as read   from 'js/read';
class TodoLists extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      lists: []
    }
  }
  componentDidMount() {
    console.log('TodoList ComponentDidMount');
    // let itemContainerElements = document.querySelectorAll(".item-container");
    const datas = this.props.lists;
    const todosArray = [];
    
    for(let i = 0; i < datas.length; i++) {
      todosArray.push (read.getTodoListElement(datas[i]));
    }

    this.setState({
      lists: todosArray
    });

    // itemContainerElements = document.querySelectorAll(".item-container");
    // events.initTodoListEvents(itemContainerElements);
  }
  
  render() { 
    console.log('TodoList render');

    // let itemContainerElements = document.querySelectorAll(".item-container");
    // events.initTodoListEvents(itemContainerElements);

    console.log(document.querySelectorAll(".item-container"));
    return ( 
      <div className="item-content">
        {this.state.lists}
      </div>
    );
  }
}
 
export default TodoLists;