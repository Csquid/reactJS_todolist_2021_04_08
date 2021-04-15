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

    this.createTodo = (todoText) => {
      console.log(create.todos(todoText));

      this.setState({
        todolistLS: util.loadLocalStorageTodoList(),
      });

      // eslint-disable-next-line no-debugger
      debugger;
    };
  }

  componentDidMount() {
    console.log('Root ComponentDidMount');
  }

  render() {
    console.log('Root render');
    const { todolistLS } = this.state;
    console.log(todolistLS);
    console.log(util.loadLocalStorageTodoList());
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
