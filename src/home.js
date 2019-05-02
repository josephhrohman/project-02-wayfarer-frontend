import React, {Component} from 'react';
// import {Route, Link, Switch} from 'react-router-dom'
import Nav from './components/Nav';
import Routes from './config/Config';
import './css/Nav.css'
import './Home.css';


class Home extends Component {
  render() {
    return (
      <div className="container">
        <Nav />
        { Routes }
      </div>
    );
  };
}

export default Home;
