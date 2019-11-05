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

        <form onSubmit={this.onSubmit} className='container'>
          <div className='form-group row'>
            <div className='col-sm-8'>
              <input
                type='text'
                name='title'
                id=''
                placeholder='enter todo ...'
                onChange={this.onChanged}
                className='form-control'
              />
            </div>
            <div className='col-sm-1'>
              <button type='submit' className='btn btn-success'>
                Submit
              </button>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default Header;
