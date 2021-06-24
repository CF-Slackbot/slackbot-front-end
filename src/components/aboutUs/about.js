import React from "react";
import { Container, Spinner } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

const About = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <Spinner animation="border" />;
  }

  return (
    isAuthenticated && (
      <Container fluid="md" maxwidth="sm">
        <h1>About Us</h1>
        <h2>Hover or click each image to learn more about the authors</h2>
        <section className="about-us-wrapper">
          <div className="about-card-container">
            <div className="about-card">
              <div className="side lydia"></div>
              <div className="side back">
                <div>
                  <h2>About Lydia</h2>
                  <p>placeholder about me</p>
                </div>
                <div className="connect">
                  <p>placeholder</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-card-container">
            <div className="about-card">
              <div className="side audrey"></div>
              <div className="side back">
                <div>
                  <h2>About Audrey</h2>
                  <p>placeholder about me</p>
                </div>
                <div className="connect">
                  <p>placeholder</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-card-container">
            <div className="about-card">
              <div className="side ellis"></div>
              <div className="side back">
                <div>
                  <h2>About Ellis</h2>
                  <p>placeholder about me</p>
                </div>
                <div className="connect">
                  <p>placeholder</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-card-container">
            <div className="about-card">
              <div className="side fizzo"></div>
              <div className="side back">
                <div>
                  <h2>About Fizzo</h2>
                  <p>placeholder about me</p>
                </div>
                <div className="connect">
                  <p>placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    )
  );
};

export default About;
