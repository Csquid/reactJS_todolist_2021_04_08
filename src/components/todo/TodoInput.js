import React, { Component } from 'react';

class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoInputTextElement: null
    }
  }

  /* 
    컴포넌트가 마운트된 직후, 즉 트리에 삽입된 직후에 호출됩니다. 
    DOM 노드가 있어야 하는 초기화 작업은 이 메서드에서 이루어지면 됩니다
  */
  componentDidMount() {
    this.setState({
      todoInputTextElement: document.querySelector('.add-todo input[type="text"]')
    });
  }
  
  render() {
    console.log('Add render');
    
    
    return (
      <div className="add-todo">
        <input type="text" placeholder="Todo" />
        <input type="button" value="add" onClick={()=> {
          if(this.state.todoInputTextElement.value === '') {
            alert("You Can't add empty data.");
            return;
          }
          console.log(this.state.todoInputTextElement.value);
        }}/>
      </div>
    );
  }
}

export default TodoInput;