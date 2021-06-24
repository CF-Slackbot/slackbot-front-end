import React from 'react';
import { NavLink } from 'react-router-dom';
import dashboard from '../../assets/dashboard.png';
import questions from '../../assets/questions.png';
import help from '../../assets/help.png';
import results from '../../assets/results.png';
import admin from '../../assets/admin.png';
import about from '../../assets/about-us.png';
import logout from '../../assets/logout.png';
import LogoutButton from '../login/logoutButton';


const SideBar = () => {
  return (
    <>
      <div className="sidenav">
      <ul>
        <li>
          <img src={dashboard} alt="dashboard" className="icons"/>
          <NavLink className="navlink" to="/">Dashboard</NavLink>
        </li>
        <li>
          <img src={help} alt="help" className="icons" />
          <NavLink className="navlink" to="/guide">Guide</NavLink>
        </li>
        <li>
          <img src={results} alt="results" className="icons" />
          <NavLink className="navlink" to="/results">Results</NavLink>
        </li>
        <li>
          <img src={questions} alt="questions" className="icons" />
          <NavLink className="navlink" to="/questions">Questions</NavLink>
        </li>
        <li>
          <img src={admin} alt="admin" className="icons" />
          <NavLink className="navlink" to="/admin">Admin</NavLink>
        </li>
        <li>
          <img src={about} alt="about us" className="icons" />
          <NavLink className="navlink" to="/about">About Us</NavLink>
        </li>
        <li>
          <img src={logout} alt="logout" className="icons" />
          <LogoutButton className="navlink">Log out</LogoutButton>
        </li>
      </ul>
      </div>
    </>
  );
}

export default SideBar;
