import React, { Component } from 'react';
// import axios from 'axios';
import '../css/signUpLoginPage.css'; 

class LoginPage extends Component {
  state = {
    email: '',
    password: '',
    // id: ''
  }

  handleChange = e => {
    e.preventDefault(e);
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  // handleLogin = (e) => {
  //   e.preventDefault();
  //   const { history } = this.props;

  //   axios({
  //     method: 'post',
  //     url: 'https://sheltered-stream-96328.herokuapp.com/api/v1/auth/login',
  //     data: {
  //       email: this.state.email,
  //       password: this.state.password,
  //     }
  //   }).then(response => {
  //     console.log(response);
  //     if (response.status === 200) {
  //       console.log('success');
  //       history.push('/profile');
  //     };
  //   }).catch((errors) => {
  //     console.log(errors);
  //   });
  // }

  //   axios({
  //     method: 'post',
  //     url: 'https://sheltered-stream-96328.herokuapp.com/api/v1/auth/login',
  //     data: {
  //       email: this.state.email,
  //       password: this.state.password,
  //     }
  //   }).then(response => {
  //     console.log(response);
  //     if (response.status === 200) {
  //       history.push({pathname: '/user', state: {account: response.data}});
  //     }
 
  //   }).catch((errors) => {
  //     console.log(errors);
  //   })

  // }


  render() {
    console.log(this.props);
    return(
      
      <div className='signUpLoginPage'>
        <div className='form'>
          <h1>Login</h1> 
          <form className='forms' onSubmit={this.props.handleLoggin}>
            <input type="email" id="email" value={this.state.email} placeholder="email" name="email" onChange={this.handleChange} />
            <input type="password" id="password" value={this.state.password} name='password' placeholder="Password" onChange={this.handleChange} />
            <input type='submit' value='submit' />
          </form>
        </div>
      </div>
    );
  };
};

export default LoginPage;
