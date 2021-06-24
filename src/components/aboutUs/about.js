import React from 'react';
import { Container, Spinner } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import github from '../../assets/gh.png'
import linkedin from '../../assets/li.png'

const About = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <Spinner animation="border" />;
  }

  return (
    isAuthenticated && (
    <Container fluid="md" maxwidth="sm">
      <h1>About Us</h1>
      <h4><a href="https://github.com/CF-Slackbot" alt="github source code" target="_blank" rel="noopener noreferrer">GitHub Source Code</a></h4>
      <h2>Hover or click each image to learn more about the authors.</h2>
      <section className="about-us-wrapper">
        <div className="about-card-container">
          <div className="about-card">
            <div className="side lydia"></div>
              <div className="side back">
                <div>
                  <h3>About Lydia</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat. Tortor vitae purus faucibus ornare suspendisse sed. Sagittis nisl rhoncus mattis rhoncus. Duis convallis convallis tellus id interdum. Facilisis gravida neque convallis a cras semper. Justo donec enim diam vulputate ut pharetra. Arcu felis bibendum ut tristique. Nec feugiat nisl pretium fusce id velit ut tortor. Lacus sed viverra tellus in hac. Tellus mauris a diam maecenas sed enim ut sem. Placerat orci nulla pellentesque dignissim enim sit amet. Porttitor rhoncus dolor purus non enim. Neque sodales ut etiam sit amet nisl purus in mollis. Pellentesque habitant morbi tristique senectus et.</p>
                </div>
              <div className="connect">
                <a href="https://github.com/LydiaMT" alt="Lydia github" target="_blank" rel="noopener noreferrer"><img className="social-icon"src={github}/></a>                
                <a href="https://www.linkedin.com/in/lydiaminehantubic/" alt="lydia linkedIn" target="_blank" rel="noopener noreferrer"><img className="social-icon"src={linkedin}/></a>
              </div>
            </div>
          </div>
        </div>
        <div className="about-card-container">
          <div className="about-card">
            <div className="side audrey"></div>
              <div className="side back">
                <div>
                  <h3>About Audrey</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat. Tortor vitae purus faucibus ornare suspendisse sed. Sagittis nisl rhoncus mattis rhoncus. Duis convallis convallis tellus id interdum. Facilisis gravida neque convallis a cras semper. Justo donec enim diam vulputate ut pharetra. Arcu felis bibendum ut tristique. Nec feugiat nisl pretium fusce id velit ut tortor. Lacus sed viverra tellus in hac. Tellus mauris a diam maecenas sed enim ut sem. Placerat orci nulla pellentesque dignissim enim sit amet. Porttitor rhoncus dolor purus non enim. Neque sodales ut etiam sit amet nisl purus in mollis. Pellentesque habitant morbi tristique senectus et.</p>
                </div>
              <div className="connect">
                <a href="https://github.com/arpatterson31" alt="audrey github" target="_blank" rel="noopener noreferrer"><img className="social-icon"src={github}/></a>                
                <a href="https://www.linkedin.com/in/audrey-patterson31/" alt="audrey linkedIn" target="_blank" rel="noopener noreferrer"><img className="social-icon"src={linkedin}/></a>
              </div>
            </div>
          </div>
        </div>
        <div className="about-card-container">
          <div className="about-card">
            <div className="side ellis"></div>
              <div className="side back">
                <div>
                  <h3>About Ellis</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat. Tortor vitae purus faucibus ornare suspendisse sed. Sagittis nisl rhoncus mattis rhoncus. Duis convallis convallis tellus id interdum. Facilisis gravida neque convallis a cras semper. Justo donec enim diam vulputate ut pharetra. Arcu felis bibendum ut tristique. Nec feugiat nisl pretium fusce id velit ut tortor. Lacus sed viverra tellus in hac. Tellus mauris a diam maecenas sed enim ut sem. Placerat orci nulla pellentesque dignissim enim sit amet. Porttitor rhoncus dolor purus non enim. Neque sodales ut etiam sit amet nisl purus in mollis. Pellentesque habitant morbi tristique senectus et.</p>
                </div>
              <div className="connect">
                <a href="https://github.com/yjyoo773" alt="ellis github" target="_blank" rel="noopener noreferrer"><img className="social-icon"src={github}/></a>                
                <a href="https://www.linkedin.com/in/yongjoo-ellis-yoo/" alt="ellis linkedIn" target="_blank" rel="noopener noreferrer"><img className="social-icon"src={linkedin}/></a>
              </div>
            </div>
          </div>
        </div>
        <div className="about-card-container">
          <div className="about-card">
            <div className="side fizzo"></div>
              <div className="side back">
                <div>
                  <h3>About Fizzo</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat. Tortor vitae purus faucibus ornare suspendisse sed. Sagittis nisl rhoncus mattis rhoncus. Duis convallis convallis tellus id interdum. Facilisis gravida neque convallis a cras semper. Justo donec enim diam vulputate ut pharetra. Arcu felis bibendum ut tristique. Nec feugiat nisl pretium fusce id velit ut tortor. Lacus sed viverra tellus in hac. Tellus mauris a diam maecenas sed enim ut sem. Placerat orci nulla pellentesque dignissim enim sit amet. Porttitor rhoncus dolor purus non enim. Neque sodales ut etiam sit amet nisl purus in mollis. Pellentesque habitant morbi tristique senectus et.</p>
                </div>
              <div className="connect">
                <a href="hhttps://github.com/fizzo999" alt="fizzon github" target="_blank" rel="noopener noreferrer"><img className="social-icon"src={github}/></a>                
                <a href="https://www.linkedin.com/in/fizzopannosch/" alt="fizzo linkedIn" target="_blank" rel="noopener noreferrer"><img className="social-icon"src={linkedin}/></a>
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
