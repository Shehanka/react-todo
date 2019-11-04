import React, { Component } from 'react';

class Header extends Component {
  state = {
    title: ''
  };

  onChanged = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.setState({ title: this.state.title });
  };

  onSubmit = e => {
    this.props.addTodo(this.state.title);
  };

  render() {
    return (
      <React.Fragment>
        <header className='navbar navbar-primary'></header>

        <form onSubmit={this.onSubmit}>
          <input
            type='text'
            name='title'
            id=''
            placeholder='enter todo ...'
            onChange={this.onChanged}
          />

          <button type='submit'>Submit</button>
        </form>
      </React.Fragment>
    );
  }
}

export default Header;
