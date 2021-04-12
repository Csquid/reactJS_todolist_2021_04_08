import React, { Component } from 'react';
import Header from 'components/TodoHeader';
import Add from 'components/todo/TodoInput';
import List from 'components/todo/TodoList';
import * as util from 'js/util';
import 'css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Local Storage todolist 
      todolistLS: util.loadLocalStorageTodoList().todolist,
      todolistLastIDX: util.loadLocalStorageTodoList().todolistLastIDX
      // todolist
    } 
  }
  render() {
    console.log('Root render');
    util.init();
    
    return (
      <div className="App">
        <div className="floating-box">
          <Header title="Todos"></Header>
          <Add></Add>
          <List lists={this.state.todolistLS} deleteList={(idx) => {
            console.log('App deleteList Function');
            console.log('idx', idx);
          }}></List>
        </div>
      </div>
    );
  }
}

export default App;