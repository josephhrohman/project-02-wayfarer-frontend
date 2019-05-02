import React, {Component} from 'react';
import SignUpLogin from './SignUpLogin'
import Logout from './Logout';
import '../css/Nav.css';

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