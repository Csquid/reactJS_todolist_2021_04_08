import React, { Component } from 'react';
import Header from 'components/TodoHeader';
import Add from 'components/todo/TodoInput';
import List from 'components/todo/TodoList';
import {
  create, update, deleteF, util,
} from 'js/modules';
import 'css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todolistLS: null,
    };

    this.createTodos = (todoText) => {
      this.setState({
        todolistLS: create.todos(todoText),
      });
    };

    this.updateCheckedTodos = (idx) => {
      this.setState({
        todolistLS: update.todos(idx),
      });
    };

    this.deleteTodos = (idx) => {
      this.setState({
        todolistLS: deleteF.todos(idx),
      });
    };
  }

  componentDidMount() {
    console.log('Root ComponentDidMount');

    if (util.hasLsTodos()) {
      this.setState({
        todolistLS: util.loadLocalStorageTodoList(),
      });
    }
  }

  render() {
    console.log('Root render');
    const { todolistLS } = this.state;

    return (
      <div className="App">
        <div className="floating-box">
          <Header title="Todos" />
          <Add createTodos={this.createTodos} />
          <List
            lists={todolistLS}
            updateTodosFunc={this.updateCheckedTodos}
            deleteTodosFunc={this.deleteTodos}
          />
        </div>
      </div>
    );
  }
}

export default App;
