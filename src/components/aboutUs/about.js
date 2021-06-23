import React from 'react';
import lydia from '../../assets/lydia.jpg'
import audrey from '../../assets/audrey.jpg'
import ellis from '../../assets/ellis.jpg'
import fizzo from '../../assets/fizzo.jpg'

const About = () => {
  return (
    <>
      <h1>About Us</h1>
      <h2>Hover or click each image to learn more about the authors</h2>
      <div className="about-card-container">
        <div className="about-card">
          <div className="side"><img src={lydia} alt="Lydia" className="about-img"/></div>
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
          <div className="side"><img src={audrey} alt="Audrey" className="about-img"/></div>
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
          <div className="side"><img src={ellis} alt="Ellis" className="about-img"/></div>
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
          <div className="side"><img src={fizzo} alt="Fizzo" className="about-img"/></div>
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
    </>
  )
}

export default About;