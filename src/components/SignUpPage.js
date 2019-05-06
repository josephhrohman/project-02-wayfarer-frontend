import React, { Component } from 'react';
import axios from 'axios';
import '../css/signUpLoginPage.css';

function SignUpPage() {

  const handleSignUp = (e) => {
    e.preventDefault();

    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const city = document.querySelector('#city').value;
    const password = document.querySelector('#password').value;
    const password2 = document.querySelector('#password2').value;

    axios({
      method: 'post',
      url: 'https://sheltered-stream-96328.herokuapp.com/api/v1/auth/signup',
      data: {
        name,
        email,
        city,
        password,
        password2,
      }
    }).then(function (response) {
      console.log(response);
    }).catch((err) => {
      console.log(err);
    });
  }

  return(
    <div className='signUpLoginPage'>
      <div className='form'>
        <h1>Sign Up</h1> 
        <form className='forms' onSubmit={handleSignUp}>
          <input className="inputField" type="text" id='name' name='name' placeholder="Name" />
          <input className="inputField" type="email" id='email' name='email' placeholder="Email" />
          <input className="inputField" type="text" id='city' name='city' placeholder="City" />
          <input className="inputField" type="password" id='password' name='password' placeholder="Password" />
          <input className="inputField" type="password" id='password2' name='password2' placeholder="Confirm Password" />
          <input className="inputField" type='submit' value='submit' />
        </form>
        
      </div>
    </div>
  );
};


export default SignUpPage;
