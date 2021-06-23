import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SettingsContext from "./context/settings";
import { withAuth0 } from "@auth0/auth0-react";
import Dashboard from "./components/dashboard/dashboard.js";
import Login from "./components/login/login.js";
import SideBar from "./components/sideBar/sideBar.js";
import Questions from "./components/questions/questions.js";
import Guide from "./components/guide/guide.js";
import Results from "./components/results/results.js";
import Admin from "./components/adminPage/admin.js";
import AboutUs from "./components/aboutUs/about"

const App = (props) => {
  return (
    <>
      <SettingsContext>
        <BrowserRouter>
          {props.auth0.isAuthenticated ? <SideBar /> : null}
          <Switch>
            <div className="main">
              <Route exact path="/">
                {props.auth0.isAuthenticated ? <Dashboard /> : <Login />}
              </Route>
              <Route exact path="/questions">
                {props.auth0.isAuthenticated ? <Questions /> : <Login />}
              </Route>
              <Route exact path="/results">
                {props.auth0.isAuthenticated ? <Results /> : <Login />}
              </Route>
              <Route exact path="/admin">
                {props.auth0.isAuthenticated ? <Admin /> : <Login />}
              </Route>
              <Route exact path="/guide">
                {props.auth0.isAuthenticated ? <Guide /> : <Login />}
              </Route>
              <Route exact path="/about">
                {props.auth0.isAuthenticated ? <AboutUs /> : <Login />}
              </Route>
            </div>
          </Switch>
        </BrowserRouter>
      </SettingsContext>
    </>
  );
};

export default withAuth0(App);
