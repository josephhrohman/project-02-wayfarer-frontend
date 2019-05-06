import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../css/nav.css';

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
    const { logout } = this.props;
    // console.log(logout);
    return(
      <div className="navSignUpLogin">
        <div className="search">
          <form className='searchForm' onSubmit={this.handleSearch}>
            <input className='searchInput' type="text" id="search" placeholder="Search" name="search" value={this.state.searchInput} onChange={this.handleChange} />
            <input className='searchButton' type='submit' value='submit' />
          </form>
        </div>
        <Link to="/user" className="userButton">UserProfile</Link>
        <input onClick={logout} className='logoutButton' value='Logout' />
      </div>
    );
  };
};

export default SearchLogout;
