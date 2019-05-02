import React from 'react';
import '../css/signUpLoginPage.css';

function SignUpLoginPage() {
  return(
    <div className='signUpLoginPage'>
      <div className='form'>
        <h1>Login</h1> 
        <form className='forms'>
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
        </form>
        <button>Login</button>
        <h1>Sign Up</h1> 
        <form className='forms'>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Current City" />
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <input type="password2" placeholder="Confirm Password" />
        </form>
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default SignUpLoginPage;
