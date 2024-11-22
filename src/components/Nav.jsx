import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  return (
    <nav className="nav">
        <div class="container-nav">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
                <img src="/logo.png" alt="logotipo el rincon de la brisa" />
            </NavLink>
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
                <li className="nav-item">
                <NavLink to="/booking" className={({ isActive }) => (isActive ? 'active' : '')}>
                    Book Now!
                </NavLink>
                </li>
            </ul>
        </div>
    </nav>
  );
};

export default Nav;
