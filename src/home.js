import React, {Component} from 'react';
// import {Route, Link, Switch} from 'react-router-dom'
import Nav from './components/Nav';
import Routes from './config/Config';
import './css/nav.css'
import './home.css';
import UserContainer from './containers/UserContainer'
import CreatePost from './components/CreatePost'


class Home extends Component {
  state = {
    loggedIn: false,
  }

  render() {
    const handleLogin = () => {
      
    }

    return (
      <div className="container">
        <Nav />
        { Routes }
        <UserContainer />
      </div>
    );
  };
}

export default Home;
