import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../css/signUpLoginPage.css';

class SignUpLogin extends Component {
  state = {
    loginmodal: false,
  }
  
  render(){
    
    return(
      <div className="navSignUpLogin">
        <Link to="/signup" className="signUp">Sign Up</Link>
        <Link to="/login" className="signUp">Login</Link>
      </div>
    );
  };
};

export default SignUpLogin;
