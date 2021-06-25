import React from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
import github from '../../assets/gh.png';
import linkedin from '../../assets/li.png';

const About = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <Spinner animation='border' />;
  }

  return (
    isAuthenticated && (
      <Container fluid='md' maxwidth='sm'>
        <h1>About Us</h1>
        <h4>
          <a
            href='https://github.com/CF-Slackbot'
            alt='github source code'
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub Source Code
          </a>
        </h4>
        <h2>Hover or click each image to learn more about the authors.</h2>
        <section className='about-us-wrapper'>
          <div className='about-card-container'>
            <div className='about-card'>
              <div className='side lydia'></div>
              <div className='side back'>
                <div>
                  <h3>About Lydia</h3>
                  <p>
                    Fullstack JavaScript developer with a background in
                    renewable energy Program Management. Passionate about
                    writing accessible, intuitive, and easy to read code. I want
                    to build products that are equitable and inspiring.
                  </p>
                </div>
                <div className='connect'>
                  <a
                    href='https://github.com/LydiaMT'
                    alt='Lydia github'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img className='social-icon' src={github} />
                  </a>
                  <a
                    href='https://www.linkedin.com/in/lydiaminehantubic/'
                    alt='lydia linkedIn'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img className='social-icon' src={linkedin} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='about-card-container'>
            <div className='about-card'>
              <div className='side audrey'></div>
              <div className='side back'>
                <div>
                  <h3>About Audrey</h3>
                  <p>
                    Fullstack JavaScript developer with a background in software
                    training and implementation. I enjoy helping people and love
                    that technology can be used to enrich people’s lives. I want
                    to create products that have a positive impact on the world!
                  </p>
                </div>
                <div className='connect'>
                  <a
                    href='https://github.com/arpatterson31'
                    alt='audrey github'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img className='social-icon' src={github} />
                  </a>
                  <a
                    href='https://www.linkedin.com/in/audrey-patterson31/'
                    alt='audrey linkedIn'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img className='social-icon' src={linkedin} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='about-card-container'>
            <div className='about-card'>
              <div className='side ellis'></div>
              <div className='side back'>
                <div>
                  <h3>About Ellis</h3>
                  <p>
                    JavaScript and Python developer with background in
                    mathematics. Enthusiastic on maximizing efficient solutions
                    with code and keeping it DRY.
                  </p>
                </div>
                <div className='connect'>
                  <a
                    href='https://github.com/yjyoo773'
                    alt='ellis github'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img className='social-icon' src={github} />
                  </a>
                  <a
                    href='https://www.linkedin.com/in/yongjoo-ellis-yoo/'
                    alt='ellis linkedIn'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img className='social-icon' src={linkedin} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='about-card-container'>
            <div className='about-card'>
              <div className='side fizzo'></div>
              <div className='side back'>
                <div>
                  <h3>About Fizzo</h3>
                  <p>
                    Fullstack Javascript Developer. Enthusiastic & Passionate. I
                    love bringing ideas and technology from the future to
                    empower and inspire people to be experienced today.
                  </p>
                </div>
                <div className='connect'>
                  <a
                    href='https://github.com/fizzo999'
                    alt='fizzon github'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img className='social-icon' src={github} />
                  </a>
                  <a
                    href='https://www.linkedin.com/in/fizzopannosch/'
                    alt='fizzo linkedIn'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img className='social-icon' src={linkedin} />
                  </a>
                </div>
              <div className="connect">
                <a href="https://github.com/fizzo999" alt="fizzon github" target="_blank" rel="noopener noreferrer"><img className="social-icon"src={github}/></a>                
                <a href="https://www.linkedin.com/in/fizzopannosch/" alt="fizzo linkedIn" target="_blank" rel="noopener noreferrer"><img className="social-icon"src={linkedin}/></a>
              </div>
            </div>
          </div>
        </section>
      </Container>
    )
  );
};

export default About;
