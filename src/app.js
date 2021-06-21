import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SettingsContext from './context/settings';
import { withAuth0 } from '@auth0/auth0-react';
import Dashboard from './components/dashboard/dashboard.js';
import Login from './components/login/login.js';
import SideBar from './components/sideBar/sideBar.js';
import Questions from './components/questions/questions.js';
import Guide from './components/guide/guide.js';
import Results from './components/results/results.js';
import Admin from './components/adminPage/admin.js';


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
              <Route exact path="/questions">
                {props.auth0.isAuthenticated ?
                  <Questions /> : <Login />
                }
              </Route>
              <Route exact path="/results">
                {props.auth0.isAuthenticated ?
                  <Results /> : <Login />
                }
              </Route>
              <Route exact path="/admin">
                {props.auth0.isAuthenticated ?
                  <Admin /> : <Login />
                }
              </Route>
              <Route exact path="/guide">
                {props.auth0.isAuthenticated ?
                  <Guide /> : <Login />
                }
              </Route>
            </Switch>
            {props.auth0.isAuthenticated ? 
            <SideBar /> : null
            }
        </BrowserRouter>
      </SettingsContext>
    </>
  )
}

export default withAuth0(App);