import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from '../components/LandingPage';
import ProfileContainer from '../containers/ProfileContainer';
import SignUpPage from '../components/SignUpPage';
import LoginPage from '../components/LoginPage';
import UserContainer from '../containers/UserContainer';



const Routes = ({ handleLogin }) => (
  <>
    <Switch>
        <Route exact path='/' component={ LandingPage }/>
        <Route path='/signup' component={ SignUpPage }/>
        <Route path='/login' component={ LoginPage }/>
        <Route path='/profile' component={ ProfileContainer } />
        <Route path='/user' component={ UserContainer }/>
    </Switch>
  </>
);



export default Routes;