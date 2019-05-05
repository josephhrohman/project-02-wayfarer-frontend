import React, {Component} from 'react';
// import {Route, Link, Switch} from 'react-router-dom'
import Nav from './components/Nav';
import Routes from './config/Config';
import './css/nav.css'
import './home.css';
import ProfileContainer from './containers/ProfileContainer';


class Home extends Component {
  state = {
    loggedIn: false,
  }

  handleLogin = () => {
      
  }

  render() {

    return (
      <div className="container">
        <Nav />
        <Routes handleLogin={this.handleLogin}  />
      </div>
    );
  };
}

export default Home;
