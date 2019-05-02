import React, {Component} from 'react';
// import {Route, Link, Switch} from 'react-router-dom'
import Nav from './components/Nav';
import LandingPage from './components/LandingPage';
import ProfileContainer from './components/ProfileContainer';
import './Home.css';


class Home extends Component {
  render() {
    return (
      <div className="container">
        <Nav />
        <LandingPage />
        <ProfileContainer />
      </div>
    );
  }
}

export default Home;
