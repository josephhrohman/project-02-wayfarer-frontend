import React, {Component} from 'react';
// import {Route, Link, Switch} from 'react-router-dom'
// import { Redirect } from 'react-router';
import axios from 'axios';
import Nav from './components/Nav';
import Routes from './config/Config';
import './css/nav.css'
import './home.css';


class Home extends Component {
  state = {
    loggedIn: false,
    email: '',
    password: '',
    childHistory: '',
    redirect: false,
  }

  emailPasswordInput = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  
  handleLogin = (e) => {
    e.preventDefault();
    const { redirect } = this.state;
    // this.setState({loggedIn: true});
    axios({
      method: 'post',
      url: 'https://sheltered-stream-96328.herokuapp.com/api/v1/auth/login',
      data: {
        email: this.state.email,
        password: this.state.password,
      }
    }).then(response => {
      console.log(this.state);
      console.log(response);
      if (response.status === 200) {
        console.log('success');
        this.setState({loggedIn: true});
        // this.props.history.push('/user');
      };
    }).catch((errors) => {
      console.log(errors);
    });
  }

  render() {
    console.log(this);
    return (
      <div className="container">
        <Nav value={this.props} />
        <Routes handleLogin={this.handleLogin} emailPasswordInput={this.emailPasswordInput} />
      </div>
    );
  };
}

export default Home;


// import React, {Component} from 'react';
// import axios from 'axios';
// import Nav from './components/Nav';
// import Routes from './config/Config';
// import './css/nav.css'
// import './home.css';


// class Home extends Component {
//   state = {
//     loggedIn: false,
//   }

//   handleLogin = (e) => {
//     e.preventDefault();
//     const { history } = this.props;

//     const email = document.querySelector('#email').value;
//     const password = document.querySelector('#password').value;

//     axios({
//       method: 'post',
//       url: 'https://sheltered-stream-96328.herokuapp.com/api/v1/auth/signup',
//       data: {
//         email,
//         password,
//       }
//     }).then(response => {
//       console.log(email);
//       if (response.status === 200) {
//         console.log('success');
//         history.push('/profile');
//         this.setState({loggedIn: true});
//       };
//     }).catch((errors) => {
//       console.log(errors);
//     });
//   }

//   render() {
    
//     return (
//       <div className="container">
//         <Nav value={this.props} />
//         <Routes handleLogin={this.handleLogin} />
//       </div>
//     );
//   };
// }

// export default Home;
