import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/menu" className={({ isActive }) => (isActive ? 'active' : '')}>
            Menu
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
