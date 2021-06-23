import React from 'react';
import { NavLink } from 'react-router-dom';


const Dashboard = () => {
  return (
    <section className="dashboard">
      <div>
        <section className="dash-m banner">
          <h1>Welcome to the Slack Bot Dashboard</h1>
        </section>
        <NavLink className="navlink" to="/guide">
          <section className="dash-s">
            <h2>Guide</h2>
          </section>
        </NavLink>
      </div>
      <div>
        <NavLink className="navlink" to="/results">
          <section className="dash-lg">
            <h2>Results</h2>
          </section>
        </NavLink>
      </div>    
      <div>
        <NavLink className="navlink" to="/questions">
          <section className="dash-s">
            <h2>Questions</h2>
          </section>
        </NavLink>
        <NavLink className="navlink" to="/admin">
          <section className="dash-m">
            <h2>Admin</h2>
          </section>
        </NavLink>
      </div>
    </section>
  )
}

export default Dashboard;
