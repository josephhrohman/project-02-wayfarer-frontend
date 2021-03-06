import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from '../components/LandingPage';
import ProfileContainer from '../containers/ProfileContainer';
import SignUpPage from '../components/SignUpPage';
import LoginPage from '../components/LoginPage';
import UserContainer from '../containers/UserContainer';



const Routes = ({ location, handleLogin, emailPasswordInput, userId }) => (
  <>
    <Switch>
        <Route exact path='/' component={ LandingPage }/>
        <Route path='/signup' component={ SignUpPage }/>
        <Route path='/login' render={(routeProps) => (<LoginPage {...routeProps} props={location} handleLogin={handleLogin} emailPasswordInput={emailPasswordInput} />)}/>
        <Route path='/profile' component={ ProfileContainer } />
        <Route path='/user' render={(routeProps) => (<UserContainer {...routeProps} userId={userId}/> )}/>
    </Switch>
  </>
);


export default Routes;