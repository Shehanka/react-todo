import React, { Component } from 'react';
import './App.css';
import Todos from './components/todos';
import Header from './components/header';
import uuid from 'uuid';
// import '../'

class App extends Component {
  state = {
    todos: [
      { id: 1, title: 'trash clean', completed: false },
      { id: 2, title: 'node app', completed: true },
      { id: 3, title: 'docker build', completed: false }
    ]
  };

  // Toggle complete
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  deleteTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  addTodo = title => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    };

    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  render() {
    return (
      <div className='App'>
        <Header addTodo={this.addTodo} />

        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

export default App;
