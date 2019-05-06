import React, { Component } from 'react';
import '../css/signUpLoginPage.css';

class LoginPage extends Component {
 state = {
   email: '',
   password: '',
 }

 handleChange = e => {
   e.preventDefault(e);
   this.setState({[e.target.name]: e.target.value})
 }
 
 render() {
   const { handleLogin } = this.props;
   const { emailPasswordInput } = this.props;
  //  const { props } = this.props;
   return(
     <div className='signUpLoginPage'>
       <div className='form'>
         <h1>Login</h1>
         <form className='forms' onSubmit={handleLogin}>
           <input className="inputField" type="email" id="email" value={this.state.email} placeholder="email" name="email" onChange={this.handleChange} onKeyUp={emailPasswordInput}/>
           <input className="inputField" type="password" id="password" value={this.state.password} name='password' placeholder="Password" onChange={this.handleChange} onKeyUp={emailPasswordInput}/>
           <input type='submit' value='submit' />
         </form>
       </div>
     </div>
   );
 };
};

export default LoginPage;