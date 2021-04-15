import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.addClicked = (todoInputTextElement) => {
      const { createTodo } = this.props;
      const todoInputTemp = todoInputTextElement;
      // console.log(todoInputTemp);

      if (todoInputTemp.value === '') {
        alert("You Can't add empty data.");

        return;
      }

      createTodo(todoInputTemp.value);

      todoInputTemp.value = '';
    };
  }

  /*
    컴포넌트가 마운트된 직후, 즉 트리에 삽입된 직후에 호출됩니다.
    DOM 노드가 있어야 하는 초기화 작업은 이 메서드에서 이루어지면 됩니다
  */
  componentDidMount() {
    console.log('TodoInput ComponentDidMount');
  }

  render() {
    console.log('TodoInput render');

    return (
      <div className="add-todo">
        <input type="text" placeholder="Todos" />
        <input
          type="button"
          value="add"
          onClick={() => {
            const todoInputTextElement = document.querySelector('.add-todo input[type="text"]');
            this.addClicked(todoInputTextElement);
          }}
        />
      </div>
    );
  }
}

TodoInput.propTypes = {
  createTodo: PropTypes.func.isRequired,
};

export default TodoInput;
