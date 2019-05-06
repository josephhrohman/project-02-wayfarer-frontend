import React, {Component} from 'react';
import SignUpLogin from './SignUpLogin';
import {Link} from 'react-router-dom';
import SearchLogout from './SearchLogout';
import blog from '../images/blogImg.png';
import '../css/signUpLoginPage.css';
import '../css/nav.css';


class Nav extends Component {
 render() {
   const {logout} = this.props;
   const { state } = this.props;
   const authLinks = <SearchLogout logout={logout}/>;
   const links = <SignUpLogin />;

   return (
     <nav className='navBody'>
       <div className='navLeft'>
         <Link to="/" className='blogImg'><img className='blogImg' src={blog} alt="Blog" /></Link>
         <Link to="/" className='navTitle'><div className='navTitle'>Wayfarer</div></Link>
       </div>
       <div className='navRight'>
          {state.loggedIn === true ? authLinks : links}
          <Link to="/profile" className="dashboard">Dashboard</Link>
       </div>
     </nav>
   )}
};

export default Nav;