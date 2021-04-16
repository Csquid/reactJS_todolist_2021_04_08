import React, { Component } from 'react';
import Header from 'components/TodoHeader';
import Add from 'components/todo/TodoInput';
import List from 'components/todo/TodoList';
import { create, deleteF, util } from 'js/modules';
import 'css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Local Storage todolist
      todolistLS: null,
    };

    this.init = () => {
      util.init();
    };

    this.deleteList = (idx) => {
      console.log(idx);
      deleteF.todos(idx);
    };

    this.createTodo = (todoText) => {
      this.setState({
        todolistLS: create.todos(todoText),
      });

      // eslint-disable-next-line no-debugger
      // debugger;
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
    // this.init();

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
