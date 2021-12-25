import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import './NavBar.css';

const NavBar = () => (
  <nav className="nav">
    <img src={logo} alt="" />
    <ul className="nav-ul">
      <li>
        <NavLink
          to="/home"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/About"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          About Me
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default NavBar;
