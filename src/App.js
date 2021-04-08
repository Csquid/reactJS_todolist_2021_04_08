import React, { Component } from 'react';
import Header from './components/Header';
import Add from './components/todo/Add';
import List from './components/todo/List';
import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { }
  }

  render() {
    return (
      <div className="App">
        <div className="floating-box">
          <Header title="todos"></Header>
          <Add></Add>
          <List></List>
        </div>
      </div>
    );
  }
}

export default App;