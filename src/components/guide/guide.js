import React from 'react';
import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Guide = () => {
  return (
    <Container fluid="md" maxwidth="sm">
      <h1>Guide: How to Use </h1>
      <section className="guide-wrapper">
        <div>
          <section className="guide-left red">
            <h2 style={{marginBottom: "15px"}}>Purpose</h2>
            <p>This application gives the staff members of Code Fellows the ability to manage the content for the CF Study Slackbot.</p>
            <p>Users with access to this site will be able to pull current list of questions, add new questions, and update existing questions. They will also be able to view data pulled in from the Slackbot of how students are performing across the quiz topics</p>
            <p>Users designated as 'Admins' will have access to the Admin page that will allow them to create new users, delete, or update existing user roles</p>
          </section>
          <section className="guide-right">
            <span><h2 style={{marginBottom: "15px"}}>Abilities by user role:</h2></span>
            <h4><span className="accent">Admin:</span> Create, Read, Update, Delete both from Users and Questions API</h4>
            <h4><span className="accent">Faculty: </span>Create, Read, Update, Delete from Questions API</h4>
            <h4><span className="accent">TA:</span> Create, Read, Update, Delete from Questions API</h4>
          </section>
        </div>
        <div>
          <section className="guide-left yellow">
            <h2 style={{marginBottom: "15px"}}>Questions API</h2>
            <p>No authentication is required to access this API, and all resources are fully open and available.</p>
            <h3>Routes</h3>
            <ul>
              <li>➡ <span className="accent2">GET:</span> https://cf-slackbot-questions-api.herokuapp.com/api/v2/question</li>
              <li>➡ <span className="accent2">GET by ID: </span>https://cf-slackbot-questions-api.herokuapp.com/api/v2/question/id</li>
              <li>➡ <span className="accent2">POST: </span>https://cf-slackbot-questions-api.herokuapp.com/api/v2/question</li>
              <li>➡ <span className="accent2">PUT by ID:</span> https://cf-slackbot-questions-api.herokuapp.com/api/v2/question/id</li>
              <li>➡ <span className="accent2">DELETE by ID:</span> https://cf-slackbot-questions-api.herokuapp.com/api/v2/question/id</li>
            </ul>
          </section>
          <section className="guide-right">
            <span><h2>Body format</h2></span>
            <SyntaxHighlighter language="javascript" style={monokai}>
{`body:{
  question: String,
  answers: {
    answer_a: String, required
    answer_b: String, required
    answer_c: String, optional
    answer_d: String, optional
    answer_e: String, optional
    answer_f: String, optional
  },
  correct_answer: String format: answer_*,
  tags: String, optional
  category: String required options: CSS, HTML, JavaScript
  difficulty: String required options: Easy, Medium, Hard
}`}
            </SyntaxHighlighter>
          </section>
        </div>
        <div>
          <section className="guide-left green">
            <h2 style={{marginBottom: "15px"}}>Results</h2>
            <p>Results are stored in a MongoDB and can be pulled from the following API:</p>
            <p><span className="accent3">https://cf-slackbot-questions-api.herokuapp.com/api/v2/result</span></p>
            <p>Chart renders data of the correct and incorrect answers by each category. This will allow Code Fellows staff members to see how students are performing by topic.</p>
          </section>
          <section className="guide-right">
            <span><h2>Results Schema</h2></span>
            <SyntaxHighlighter language="javascript" style={monokai}>
{`
  {
    user: String,
    userID: String,
    questions: Array,
    incorrectQ: Array,
    timestamp: Date,
  }            
`}
            </SyntaxHighlighter>
          </section>
        </div>
        <div>
          <section className="guide-left blue">
          <h2 style={{marginBottom: "15px"}}>Users</h2>
          <p>Login and Authorization is managed with Auth0 and uses a custom database to store users. </p>
          <p>You can review Auth0's documentation on interacting with their User Manager API <Link to={{ pathname: "https://auth0.com/docs/api/management/v2?_gl=1*npfyw0*rollup_ga*Njk1MTM3NjEyLjE2MjQyMTU4ODY.*rollup_ga_F1G3E656YZ*MTYyNDU3ODUwMC4xNy4xLjE2MjQ1Nzg1MjYuMzQ." }} target="_blank"> here</Link></p>
          </section>
          <section className="guide-right">
          <span><h2>User Schema</h2></span>
            <SyntaxHighlighter language="javascript" style={monokai}>
              {`
data: {
        email: String,
        connection: 'CF-Slackbot-DB',
        password: String,
        user_metadata: {
              role: String
        }    
      }     
    `}
            </SyntaxHighlighter>
          </section>
        </div>
      </section>
    </Container>
  );

}

export default Guide;
