import React from 'react';
import SignUpLogin from './SignUpLogin';
import {Link} from 'react-router-dom';
import SearchLogout from './SearchLogout';
import blog from '../images/blogImg.png';
import '../css/nav.css';


const Nav = (props) => {

  const authLinks = <SearchLogout />;
  const links = <SignUpLogin />;

  // logStatus = () => {
  //   if (this.state.loggedIn === true) {
  //     <SearchLogout />;
  //   } else {
  //     <SignUpLogin />;
  //   }
  // };

   return (
    <nav className='navBody'>
      <Link to="/"><img className='blogImg' src={blog} alt="Blog" /></Link>
      <div className='navTitle'>Wayfarer</div>
      {this.state.loggedIn === true ? authLinks : links}
    </nav>
   )
};

export default Nav;

{/* {condition === loggedIn ? authLinks : links} */}

