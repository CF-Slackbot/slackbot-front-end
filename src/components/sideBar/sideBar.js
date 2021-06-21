import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const SideBar = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/questions">Questions</NavLink>
        </li>
        <li>
          <NavLink to="/guide">Guide</NavLink>
        </li>
        <li>
          <NavLink to="/results">Results</NavLink>
        </li>
        <li>
          <NavLink to="/admin">Admin</NavLink>
        </li>
      </ul>
    </>
  )
}

export default SideBar;