import React, {Component} from 'react';
import ProfileContainer from './components/ProfileContainer';
import Nav from './components/Nav';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <ProfileContainer />
        <Nav />
      </div>
    );
  }
}

export default Home;
