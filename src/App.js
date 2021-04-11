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
  // componentDidMount() {
  //   const lsData = util.loadLocalStorageTodoList();

  //   this.setState({
  //     todolistLS: lsData
  //   })
  //   console.log(lsData);
  // }
  // init = () => {
  // }
  render() {
    console.log('Root render');
    
    // init
    // this.init();
    
    return (
      <div className="App">
        <div className="floating-box">
          <Header title="Todos"></Header>
          <Add></Add>
          <List lists={this.state.todolistLS}></List>
        </div>
      </div>
    );
  }
}

export default App;