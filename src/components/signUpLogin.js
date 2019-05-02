import React, {Component} from 'react';

class SignUpLogin extends Component {
  render() {
    return(
      <div className="navSignUpLogin">
        <div className="signUp">Sign Up</div>
        <div className="login">Login</div>
        {/* <form>
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
        </form> */}
      </div>
    );
  };
};

export default SignUpLogin;