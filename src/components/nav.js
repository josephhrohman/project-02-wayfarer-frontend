import React from 'react';
import SignUpLogin from './SignUpLogin';
import {Link} from 'react-router-dom';
// import Logout from './Logout';
import blog from '../images/blogImg.png';
import '../css/nav.css';


const Nav = (props) => {
  let authLinks;

  let links = <SignUpLogin />;

   return (
    <nav className='navBody'>
      <Link to="/"><img className='blogImg' src={blog} alt="Blog" /></Link>
      <div className='navTitle'>Wayfarer</div>
      {/* {condition === loggedIn ? authLinks : links} */}
    </nav>
   )
};

export default Nav;