import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from '../components/LandingPage';
import ProfileContainer from '../containers/ProfileContainer';
import SignUpLoginPage from '../components/SignUpLoginPage';


export default (
  <Switch>
      <Route exact path='/' component={ LandingPage }/>
      <Route path='/signup' component={ SignUpLoginPage }/>
      <Route path='/profile' component={ ProfileContainer }/>
  </Switch>
);