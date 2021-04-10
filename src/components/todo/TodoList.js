import React, { Component } from 'react';
import * as events from "js/events.js";
import * as read from 'js/read';
class TodoLists extends Component {
  constructor(props) {
    super(props);
    this.state = { 

    }
  }
  componentDidMount() {
    const itemContainerElements = document.querySelectorAll(".item-container");

    this.setState({
      todoInputTextElement: document.querySelector('.add-todo input[type="text"]')
    });
    
    events.initTodoListEvents(itemContainerElements);
  }
  render() { 
    const datas = this.props.lists;
    const lists = [];
    
    for(let i = 0; i < datas.length; i++) {
      lists.push (read.getTodoListElement(datas[i]));
    }
    
    return ( 
      <div className="item-content">
        {lists}
      </div>
    );
  }
}
 
export default TodoLists;