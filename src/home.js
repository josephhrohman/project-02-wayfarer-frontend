import React, {Component} from 'react';
import ProfileContainer from './components/ProfileContainer';
import './home.css';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <ProfileContainer />
      </div>
    );
  }
}

export default Home;
