import React, { Component } from 'react';
import * as events from "js/events.js";

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
      let checkStr = 'todo-text';
      let deleteDisplay = '';
      if(datas[i].check) {
        checkStr += ' check';
        deleteDisplay = 'inline-block';
      }
      lists.push (
        <div key={datas[i].id} className="item-container" data-id={datas[i].id}>
          <input className="todo-checkbox" type="checkbox" defaultChecked={datas[i].check}/>
          <input className={checkStr} type="text" defaultValue={datas[i].text} readOnly/>
          <span className="todo-update"> 
            <i className="fas fa-pen-fancy"></i> 
          </span>
          <span className="todo-delete" style={{display: deleteDisplay}}>
            <i className="far fa-trash-alt"></i>
          </span>
        </div>
      );
    }
    return ( 
      <div className="item-content">
        {lists}
      </div>
    );
  }
}
 
export default TodoLists;