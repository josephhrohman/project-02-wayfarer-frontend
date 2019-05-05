import React, { Component } from 'react';
import axios from 'axios';
import '../css/signUpLoginPage.css';

class SignUpPage extends Component {
  state = {
    name: '',
    email: '',
    city: '',
    password: '',
    password2: '',
  }

  handleSignUp = e => {
    e.preventDefault();

    axios({
      method: 'post',
      url: 'https://sheltered-stream-96328.herokuapp.com/api/v1/auth/signup',
      data: {
        name: this.state.name,
        email: this.state.email,
        city: this.state.city,
        password: this.state.password,
        password2: this.state.password2,
      }
    }).then(function (response) {
      console.log(response);
    }).catch((err) => {
      console.log(err);
    });
  }

  handleChange = e => {
    e.preventDefault(e);
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return(
      <div className='signUpLoginPage'>
        <div className='form'>
          <h1>Sign Up</h1> 
          <form className='forms' onSubmit={this.handleSignUp}>
            <input type="text" name='name' placeholder="Name" />
            <input type="email" name='email' placeholder="Email" />
            <input type="text" name='city' placeholder="City" />
            <input type="password" name='password' placeholder="Password" />
            <input type="password" name='password2' placeholder="Confirm Password" />
            <input type='submit' value='submit' />
          </form>
        </div>
      </div>
    );
  }
};

export default SignUpPage;
