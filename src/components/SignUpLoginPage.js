import React from 'react';
import axios from 'axios';
import '../css/signUpLoginPage.css';

function SignUpLoginPage() {

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
        password2
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
        <h1>Login</h1> 
        {/* Axios */}
        <form className='forms'> 
          <input type="email" placeholder="email" />
          <input type="password" name='password' placeholder="Password" />
        </form>
        <input type='submit' value='login' />
        <h1>Sign Up</h1> 
        <form className='forms' onSubmit={handleSignUp}>
          <input type="text" id='name' name='name' placeholder="Name" />
          <input type="email" id='email' name='email' placeholder="Email" />
          <input type="text" id='city' name='city' placeholder="Current City" />
          <input type="password" id='password' name='password' placeholder="Password" />
          <input type="password" id='password2' name='password2' placeholder="Confirm Password" />
          <input type='submit' value='submit' />
        </form>
        
      </div>
    </div>
  );
};

export default SignUpLoginPage;
