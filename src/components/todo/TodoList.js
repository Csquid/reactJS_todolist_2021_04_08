import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { events, read, util } from 'js/modules';

class TodoLists extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.setEvent = (itemContainerElements) => {
      if (!util.hasLsTodos()) { return; }

      events.initTodoListEvents(itemContainerElements);
    };
  }

  componentDidMount() {
    console.log('TodoList ComponentDidMount');
    /*
      첫번째 App.js가 Rendering 될때 props.list 가 null 이기 때문에 componentDidMount 에서 setEvent를 사용하지 않으며,
      App.js에서 componentDidMount 에서 setState에서 todolistLS를 초기화 시키며 re-rendering이 된다.
      그때 todoList componentDidUpdate에서 setEvent가 실행되도록 한다.
    */
  }

  componentDidUpdate(prevProps) {
    console.log('TodoList ComponentDidUpdate');
    const itemContainerElements = document.querySelectorAll('.item-container');
    const { lists } = this.props;

    if (prevProps.lists === null) {
      this.setEvent(itemContainerElements);

      return;
    }

    if (prevProps.lists.todolistLastIDX !== lists.todolistLastIDX) {
      const itemContainerElement = itemContainerElements[itemContainerElements.length - 1];
      this.setEvent([itemContainerElement]);
    }
  }

  render() {
    console.log('TodoList render');

    const { lists, deleteTodosFunc, updateTodosFunc } = this.props;
    const funcOBJ = {
      delete: deleteTodosFunc,
      update: updateTodosFunc,
    };
    const getLists = read.getListElement(lists, funcOBJ);

    return (
      <div className="item-contet">
        {getLists}
      </div>
    );
  }
}

TodoLists.propTypes = {
  deleteTodosFunc: PropTypes.func.isRequired,
  updateTodosFunc: PropTypes.func.isRequired,
  // eslint-disable-next-line react/require-default-props
  lists: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.number,
    ]),
  ),
};

export default TodoLists;
