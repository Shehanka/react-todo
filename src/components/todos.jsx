import React, { Component } from 'react';
import TodoItem from './todo-item';
import PropTypes from 'prop-types';

class Todos extends Component {
  state = {};

  render() {
    return this.props.todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
        deleteTodo={this.props.deleteTodo}
      />
    ));
  }
}

// Prop Types
Todos.propTypes = {
  todo: PropTypes.array.isRequired
};

export default Todos;
