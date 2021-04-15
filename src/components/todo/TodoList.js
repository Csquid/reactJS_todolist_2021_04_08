import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { events, read, util } from 'js/modules';

class TodoLists extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.setEvent = () => {
      if (!util.hasLsTodos()) { return; }

      const ItemContainerElements = document.querySelectorAll('.item-container');

      events.initTodoListEvents(ItemContainerElements);
    };
  }

  componentDidMount() {
    console.log('TodoList ComponentDidMount');
    this.setEvent();
  }

  componentDidUpdate() {
    console.log('TodoList ComponentDidUpdate');
    this.setEvent();
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
  deleteListFunc: PropTypes.func.isRequired,
  // eslint-disable-next-line react/require-default-props
  lists: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.number,
    ]),
  ),
};

export default TodoLists;
