import React, { Component } from 'react';
import Header from 'components/Header';
import Add from 'components/todo/TodoInput';
import List from 'components/todo/TodoList';
import * as util from 'js/util';
import 'css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      todolist: [
        {id: 0, text: '11', check: true},
        {id: 1, text: '22', check: false},
        {id: 2, text: '33', check: false}
      ],
      // todolist
    }
  }
  
  init() {

  }
  render() {
    console.log('Root render');
    
    // init
    this.init();
    
    return (
      <div className="App">
        <div className="floating-box">
          <Header title="Todos"></Header>
          <Add></Add>
          <List lists={this.state.todolist}></List>
        </div>
      </div>
    );
  }
}

export default App;