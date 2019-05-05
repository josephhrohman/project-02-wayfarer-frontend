import React, {Component} from 'react';
// import {Route, Link, Switch} from 'react-router-dom'
import axios from 'axios';
import Nav from './components/Nav';
import Routes from './config/Config';
import './css/nav.css'
import './home.css';
import ProfileContainer from './containers/ProfileContainer';


class Home extends Component {
  state = {
    loggedIn: false,
    email: '',
    password: ''
  }
  
  handleLogin = (e) => {
    e.preventDefault();
    const { history } = this.props;
    // this.setState({loggedIn: true});
    axios({
      method: 'post',
      url: 'https://sheltered-stream-96328.herokuapp.com/api/v1/auth/login',
      data: {
        email: this.state.email,
        password: this.state.password,
      }
    }).then(response => {
      console.log(response);
      if (response.status === 200) {
        console.log('success');
        history.push('/profile');
        this.setState({loggedIn: true});
      };
    }).catch((errors) => {
      console.log(errors);
    });
  }

  render() {

    return (
      <div className="container">
        <Nav value={this.props} />
        <Routes handleLogin={this.handleLogin} />
      </div>
    );
  };
}

export default Home;
