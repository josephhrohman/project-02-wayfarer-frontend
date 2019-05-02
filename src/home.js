import React, {Component} from 'react';
import ProfileContainer from './containers/ProfileContainer';
import Nav from './components/nav';
import './home.css';

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
