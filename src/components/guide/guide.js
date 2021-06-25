import React from 'react';
import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Guide = () => {
  return (
    <Container fluid="md" maxwidth="sm">
      <h1>Guide: How to Use </h1>
      <section className="guide-wrapper">
        <div>
          <section className="guide-left red">
            <h2 style={{ marginBottom: "2vh" }}>Purpose</h2>
            <p style={{ textAlign: "justify", padding: "1vw" }}>This application gives the staff members of Code Fellows the ability to manage the content for the CF Study Slackbot.  Users with access to this site will be able to pull current list of questions, add new questions, and update existing questions. They will also be able to view data pulled in from the Slackbot of how students are performing across the quiz topics.</p>
            <p style={{ textAlign: "justify", padding: "1vw" }}>Users designated as 'Admins' will have access to the Admin page that will allow them to create new users, delete, or update existing user roles</p>

          </section>
          <section className="guide-right">
            <span><h2 style={{ marginBottom: "2vh" }}>Abilities by user role</h2></span>
            <p style={{ textAlign: "justify", padding: "1vw" }}><span style={{ textDecoration: "underline", fontWeight: "bold" }}>Admin:</span> Create, Read, Update, Delete both from Users and Questions API</p>
            <p style={{ textAlign: "justify", padding: "1vw" }}><span style={{ textDecoration: "underline", fontWeight: "bold" }}>Faculty:</span> Create, Read, Update, Delete from Questions API</p>
            <p style={{ textAlign: "justify", padding: "1vw" }}><span style={{ textDecoration: "underline", fontWeight: "bold" }}>TA:</span> Create, Read, Update, Delete from Questions API</p>
          </section>
        </div>
        <div>
          <section className="guide-left yellow">
            <h2 style={{ marginBottom: "2vh" }}>Questions API</h2>
            <p style={{ textAlign: "justify", margin: "1vw" }}>No authentication is required to access this API, and all resources are fully open and available.</p>
            <p style={{ textAlign: "justify", margin: "1vw", textDecoration: "underline" }}>"https://cf-slackbot-questions-api.herokuapp.com/api/v2/question"</p>
            <p style={{ margin: "1vw" }}><span style={{ textDecoration: "underline", fontWeight: "bold" }}>GET:</span> "/question"</p>
            <p style={{ margin: "1vw" }}><span style={{ textDecoration: "underline", fontWeight: "bold" }}>GET/ID:</span> "/question/id"</p>
            <p style={{ margin: "1vw" }}><span style={{ textDecoration: "underline", fontWeight: "bold" }}>POST:</span> "/question"</p>
            <p style={{ margin: "1vw" }}><span style={{ textDecoration: "underline", fontWeight: "bold" }}>PUT/ID:</span> "/question/id"</p>
            <p style={{ margin: "1vw" }}><span style={{ textDecoration: "underline", fontWeight: "bold" }}>DELETE/ID:</span> "/question/id"</p>

          </section>
          <section className="guide-right">
            <h2>Body format</h2>
            <pre style={{ fontSize: "80%", overflow: "hidden" }} >{`
body:{
       question: required,
       answers: {
         answer_a: required
         answer_b: required
         answer_c: optional
         answer_d: optional
         answer_e: optional
       },
      correct_answer: format - answer_*,
      tags: optional
      category: required - CSS, HTML, JavaScript
      difficulty: required - Easy, Medium, Hard
      }            
              `}</pre>
          </section>
        </div>
        <div>
          <section className="guide-left green">
            <h2 style={{ marginBottom: "2vh" }}>Results</h2>
            <p style={{ textAlign: "justify", padding: "1vw" }}>Results are stored in a MongoDB and can be pulled from the following API:</p>
            <p style={{ textAlign: "justify", margin: "1vw", textDecoration: "underline" }}>"https://cf-slackbot-questions-api.herokuapp.com/api/v2/result"</p>
            <p style={{ textAlign: "justify", padding: "1vw" }}>Chart renders data of the correct and incorrect answers by each category. This will allow Code Fellows staff members to see how students are performing by topic.</p>
          </section>
          <section className="guide-right">
            <h2>Results Schema</h2>
            <pre style={{overflow: "hidden"}}>{`
    {
      user: String,
      userID: String,
      questions: Array,
      incorrectQ: Array,
      timestamp: Date,
    }`}</pre>
          </section>
        </div>
        <div>
          <section className="guide-left blue">
            <h2 style={{ marginBottom: "2vh" }}>Users</h2>
            <p style={{ textAlign: "justify", padding: "1vw" }}>Login and Authorization is managed with Auth0 and uses a custom database to store users. </p>
            <p style={{ textAlign: "justify", padding: "1vw" }}>You can review Auth0's documentation on interacting with their User Manager API <Link to={{ pathname: "https://auth0.com/docs/api/management/v2?_gl=1*npfyw0*rollup_ga*Njk1MTM3NjEyLjE2MjQyMTU4ODY.*rollup_ga_F1G3E656YZ*MTYyNDU3ODUwMC4xNy4xLjE2MjQ1Nzg1MjYuMzQ." }} target="_blank"> here</Link>.</p>
          </section>
          <section className="guide-right">
           <h2 style={{ marginBottom: "2vh" }}>User Schema</h2>
            <pre style={{overflow: "hidden"}}>{`
  data: {
          email: String,
          connection: 'CF-Slackbot-DB',
          password: String,
          user_metadata: {
            role: String
          }    
        }     
              `}</pre>
          </section>
        </div>
        <div>
          <section className="guide-left purple"></section>
          <section className="guide-right"></section>
        </div>
      </section>
    </Container>
  );

}

export default Guide;
