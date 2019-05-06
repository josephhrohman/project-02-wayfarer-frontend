import React, {Component} from 'react';
import SignUpLogin from './SignUpLogin';
import {Link} from 'react-router-dom';
import SearchLogout from './SearchLogout';
import blog from '../images/blogImg.png';
import LoginPage from './LoginPage'
import '../css/nav.css';


class Nav extends Component {
 render() {
   const {logout} = this.props;
   const { state } = this.props;
   const authLinks = <SearchLogout logout={logout}/>;
   const links = <SignUpLogin />;

   return (
     <nav className='navBody'>
       <Link to="/"><img className='blogImg' src={blog} alt="Blog" /></Link>
       <div className='navTitle'>Wayfarer</div>
       {state.loggedIn === true ? authLinks : links}
     </nav>
   )}
};

export default Nav;