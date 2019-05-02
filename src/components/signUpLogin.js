import React, {Component} from 'react';
import {Route, Link, Switch} from 'react-router-dom';

class SignUpLogin extends Component {
  render() {
    return(
      <div className="navSignUpLogin">
        <Link to="/" className="signUp">Landing Page</Link>
        <Link to="/signup" className="signUp">Sign Up & Login</Link>
        <Link to="/profile" className="signUp">Profile</Link>
      </div>
    );
  };
};

export default SignUpLogin;

