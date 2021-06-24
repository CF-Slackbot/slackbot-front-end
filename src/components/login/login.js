import React from "react";
import bg from "../../assets/robot-banner.jpeg";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  var divStyle = {
    backgroundImage: `url(${bg})`,
    height: "auto",
    minHeight: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    overflow: "auto",
  };
  return (
    !isAuthenticated && (
      <div style={divStyle}>
        <h1
          className="login-header"
          style={{ textAlign: "center", marginTop: "3vh" }}
        >
          Welcome To Slackbot
        </h1>

        <h3 className="login-link" onClick={loginWithRedirect}>
          click to login
        </h3>
      </div>
    )
  );
};

export default Login;
