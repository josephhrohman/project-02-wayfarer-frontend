import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Logout from './Logout';

class SearchLogout extends Component {
  state = {
    searchInput: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSearch = (e) => {
    e.preventDefault();
    console.log('searched');
  };

  render() {
    return(
      <div className="navSignUpLogin">
        <div className="search">
          <form className='forms' onSubmit={this.handleSearch}>
            <input type="text" id="search" placeholder="Search" name="search" value={this.state.searchInput} onChange={this.handleChange} />
            <input type='submit' value='submit' />
          </form>
        </div>
        <Link to="/user" className="signUp">UserProfile</Link>
        <Logout />
      </div>
    );
  };
};

export default SearchLogout;
