import React, {Component} from 'react';

class SignUpLogin extends Component {
  render() {
    return(
      <div>
        <h1>Login</h1>
        <form>
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
        </form>
      </div>
    );
  };
};

export default SignUpLogin;