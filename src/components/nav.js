import React, {Component} from 'react';
import SignUpLogin from './signUpLogin'
import Logout from './logout';
import './nav.css';

class Nav extends Component {
  render() {
    return(
      <div className='navBody'>
        <h1>Nav</h1>
        <SignUpLogin />
        <Logout />
      </div>
    );
  };
};

export default Nav;