import React, { Component } from 'react';

class TodoItem extends Component {
  state = {};

  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc doted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    };
  };

  render() {
    const { id, title } = this.props.todo;

    return (
      <div className='container' style={this.getStyle()}>
        <p>
          <input
            type='checkbox'
            onChange={this.props.markComplete.bind(this, id)}
            className='form-check-input'
          />{' '}
          {title}{' '}
          <button
            className='btn btn-danger'
            onClick={this.props.deleteTodo.bind(this, id)}
          >
            X
          </button>
        </p>
      </div>
    );
  }
}

export default TodoItem;
