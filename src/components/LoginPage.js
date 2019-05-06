import React, { Component } from 'react';
// import { BrowserRouter } from 'react-router-dom';
import '../css/signUpLoginPage.css'; 

class LoginPage extends Component {
  state = {
    email: '',
    password: '',
    history: []

  }

  // componentDidMount(){
  //   console.log(this.props.history)
  //   this.setState({history: this.props.history})
  // }


  handleChange = e => {
    e.preventDefault(e);
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    const { handleLogin } = this.props;
    const { emailPasswordInput } = this.props;
    // {console.log(this)}

    // console.log(handleLogin);
    // console.log(emailPasswordInput);
    // console.log(this.props);
    return(
      <div className='signUpLoginPage'>
        <div className='form'>
          <h1>Login</h1> 
          <form className='forms' onSubmit={handleLogin}>
            <input type="email" id="email" value={this.state.email} placeholder="email" name="email" onChange={this.handleChange} onKeyUp={emailPasswordInput}/>
            <input type="password" id="password" value={this.state.password} name='password' placeholder="Password" onChange={this.handleChange} onKeyUp={emailPasswordInput}/>
            <input type='submit' value='submit' />
          </form>
        </div>
      </div>
    );
  };
};

export default LoginPage;

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