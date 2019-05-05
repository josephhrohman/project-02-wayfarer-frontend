import React, {Component} from 'react';
import SignUpLogin from './SignUpLogin';
import {Link} from 'react-router-dom';
import SearchLogout from './SearchLogout';
import blog from '../images/blogImg.png';
import '../css/nav.css';


class Nav extends Component {



  // logStatus = () => {
  //   if (this.state.loggedIn === true) {
  //     <SearchLogout />;
  //   } else {
  //     <SignUpLogin />;
  //   }
  // };

  render() {
    const { state } = this.props;
    console.log(state);
    const authLinks = <SearchLogout />;
    const links = <SignUpLogin />;

    return (
      <nav className='navBody'>
        <Link to="/"><img className='blogImg' src={blog} alt="Blog" /></Link>
        <div className='navTitle'>Wayfarer</div>
        {state.loggedIn === true ? authLinks : links}
        {/* {authLinks}
        {links} */}
      </nav>
    )}
};

export default Nav;

{/* {condition === loggedIn ? authLinks : links} */}

