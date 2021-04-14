import React, { Component } from 'react';
import Header from 'components/TodoHeader';
import Add from 'components/todo/TodoInput';
import List from 'components/todo/TodoList';
import { create, util } from 'js/modules';
import 'css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Local Storage todolist
      todolistLS: util.loadLocalStorageTodoList(),
    };

    this.init = () => {
      util.init();
    };

    this.deleteList = (idx) => {
      console.log('App deleteList Function');
      console.log('idx', idx);
    };
  }

  componentDidMount() {
    console.log('Root ComponentDidMount');
  }

  createTodo(todoText) {
    this.setState({
      todolistLS: create.todos(todoText),
    });
  }

  render() {
    console.log('Root render');
    const { todolistLS } = this.state;

    return (
      <div className="App">
        <div className="floating-box">
          <Header title="Todos" />
          <Add createTodo={this.createTodo} />
          <List
            lists={todolistLS}
            deleteListFunc={this.deleteList}
          />
        </div>
      </div>
    );
  }
}

export default App;
