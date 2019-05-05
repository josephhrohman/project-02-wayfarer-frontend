import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class SignUpLogin extends Component {
  render() {
    return(
      <div className="navSignUpLogin">
        <Link to="/profile" className="signUp">Dashboard</Link>
        <Link to="/signup" className="signUp">Sign Up</Link>
        <Link to="/login" className="signUp">Login</Link>
      </div>
    );
  };
};

export default SignUpLogin;

