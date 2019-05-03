import React from 'react';
import axios from 'axios';
import { Switch, Route, Link } from 'react-router-dom';
import UserContainer from '../containers/UserContainer';
import '../css/signUpLoginPage.css'; 

function LoginPage() {

  const handleLogin = (e) => {
    e.preventDefault();

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    axios({
      method: 'post',
      url: 'https://sheltered-stream-96328.herokuapp.com/api/v1/auth/login',
      data: {
        email,
        password,
      }
    }).then(function (response) {
      console.log(response);
      // <Route path='/user' component={ UserContainer }/>
    }).catch((errors) => {
      console.log(errors);
    });
  }

  return(
    <div className='signUpLoginPage'>
      <div className='form'>
        <h1>Login</h1> 
        <form className='forms' onSubmit={handleLogin}>
          <input type="email" id="email" placeholder="email" />
          <input type="password" id="password" name='password' placeholder="Password" />
          <input type='submit' value='submit' />
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
