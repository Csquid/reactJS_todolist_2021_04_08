import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { events, read, util } from 'js/modules';

class TodoLists extends Component {
  componentDidMount() {
    console.log('TodoList ComponentDidMount');
    if (!util.hasLsTodos()) { return; }

    const ItemContainerElements = document.querySelectorAll('.item-container');

    events.initTodoListEvents(ItemContainerElements);
  }

  render() {
    const { lists, deleteListFunc } = this.props;
    const getLists = read.getListElement(lists, deleteListFunc);
    console.log(this.props);
    console.log('TodoList render');

    return (
      <div className="item-content">
        {getLists}
      </div>
    );
  }
}

TodoLists.propTypes = {
  lists: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.array,
    ]),
  ).isRequired,
  deleteListFunc: PropTypes.func.isRequired,
};

export default TodoLists;
