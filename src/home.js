import React, {Component} from 'react';
// import {Route, Link, Switch} from 'react-router-dom'
// import { Redirect } from 'react-router';
import localStorage from 'local-storage';
import axios from 'axios';
import Nav from './components/Nav';
import Routes from './config/Config';
import './css/nav.css'
import './home.css';


class Home extends Component {
 state = {
   loggedIn: false,
   email: '',
   password: '',
   id: ''
   // childHistory: '',
   // redirect: false,
 }

 emailPasswordInput = (e) => {
   e.preventDefault();
   this.setState({
     [e.target.name]: e.target.value,
   })
 }

 logout = (e) => {
   this.setState({loggedIn: false});
 }

 handleLogin = (e) => {
   e.preventDefault();
   const { redirect } = this.state;
   // this.setState({loggedIn: true});
   axios({
     method: 'post',
     url: 'https://sheltered-stream-96328.herokuapp.com/api/v1/auth/login',
     data: {
       email: this.state.email,
       password: this.state.password,
     }
   }).then(response => {
     console.log(this.state);
     console.log(response);
     if (response.status === 200) {
       console.log('success');
       this.setState({loggedIn: true});
       this.setState({id: response.data});
       // localStorage.setItem('loggedIn', this.state);
       // console.log(localStorage);
       // this.props.history.push('/user');
     };
   }).catch((errors) => {
     console.log(errors);
   });
 }

 render() {

   return (
     <div className="container">
       <Nav state={this.state} logout={this.logout}/>
       <Routes handleLogin={this.handleLogin} emailPasswordInput={this.emailPasswordInput} userId={this.state.id}/>
     </div>
   );
 };
}

export default Home;