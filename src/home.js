import React, {Component} from 'react';
// import {Route, Link, Switch} from 'react-router-dom'
import Nav from './components/Nav';
import Routes from './config/Config';
import './css/nav.css'
import './home.css';
import UserContainer from './containers/UserContainer'


class Home extends Component {
  render() {
    return (
      <div className="container">
        <Nav />
        { Routes }
        {/* <UserContainer /> */}
      </div>
    );
  };
}

export default Home;
