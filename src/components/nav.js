import React, {Component} from 'react';
import SignUpLogin from './SignUpLogin';
import {Link} from 'react-router-dom';
// import Logout from './Logout';
import blog from '../images/blogImg.png';
import '../css/nav.css';


class Nav extends Component {
  render() {
    return(
      <div className='navBody'>
        <Link to="/"><img className='blogImg' src={blog} alt="Blog" /></Link>
        <div className='navTitle'>Wayfarer</div>
        <SignUpLogin /> 
      </div>
    );
  };
};

export default Nav;