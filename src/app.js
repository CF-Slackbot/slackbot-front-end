import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SettingsContext from './context/settings';
import { withAuth0 } from '@auth0/auth0-react';
import Dashboard from './components/dashboard/dashboard.js';
import Login from './components/login/login.js';

const App = props => {
  return (
    <>
      <SettingsContext>
        <BrowserRouter>
            <Switch>
            <Route exact path="/">
                {props.auth0.isAuthenticated ?
                  <Dashboard /> : <Login />
                }
              </Route>
              {/* <Route exact path="/login">
                {this.props.auth0.isAuthenticated ?
                  <Redirect to='/profile' /> : <Login />
                }
              </Route> */}
            </Switch>
        </BrowserRouter>
      </SettingsContext>
    </>
  )
}

export default withAuth0(App);