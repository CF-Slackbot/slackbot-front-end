import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import SettingsContext from "./context/settings";
import { withAuth0, useAuth0 } from "@auth0/auth0-react";
import Dashboard from "./components/dashboard/dashboard.js";
import Login from "./components/login/login.js";
import SideBar from "./components/sideBar/sideBar.js";
import Questions from "./components/questions/questions.js";
import Guide from "./components/guide/guide.js";
import Results from "./components/results/results.js";
import Admin from "./components/adminPage/admin.js";
import AboutUs from "./components/aboutUs/about";
import { Spinner } from "react-bootstrap";

const App = (props) => {
  const { user } = useAuth0();

  return (
    <>
      <SettingsContext>
        <BrowserRouter>
          <SideBar />
          <Route exact path="/">
            {props.auth0.isAuthenticated ? <div className="main"><Dashboard /></div> : <Login />}
          </Route>
          <div className="main">
            <Route exact path="/questions">
              <Questions />
            </Route>
            <Route exact path="/results">
              <Results />
            </Route>
            <Route exact path="/admin">
              {props.auth0.isAuthenticated ? (
                <Admin user={user} />
              ) : (
                <Spinner animation="border" />
              )}
            </Route>
            <Route exact path="/guide">
              {props.auth0.isAuthenticated ? <Guide /> : <Login />}
            </Route>
            <Route exact path="/about">
              <AboutUs />
            </Route>
          </div>
        </BrowserRouter>
      </SettingsContext>
    </>
  );
};

export default withAuth0(App);
