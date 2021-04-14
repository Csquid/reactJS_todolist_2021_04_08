import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log('TodoHeader render');

    const { title } = this.props;
    return (
      <h2>{title}</h2>
    );
  }
}

TodoHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TodoHeader;
