import React, {Component} from 'react';
import SignUpLogin from './SignUpLogin'
import Logout from './Logout';
import blog from '../images/blogImg.png';
import '../css/Nav.css';


class Nav extends Component {
  render() {
    return(
      <div className='navBody'>
        <img className='blogImg' src={blog} alt="Blog" />
        <div className='navTitle'>Nav</div>
        <SignUpLogin />
        <Logout />
      </div>
    );
  };
};

export default Nav;