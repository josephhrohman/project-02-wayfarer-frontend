import React, {Component} from 'react';
import Nav from './components/nav';
import './home.css';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Nav />
      </div>
    );
  }
}

export default Home;
