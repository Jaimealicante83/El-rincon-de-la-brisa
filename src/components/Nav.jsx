import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav ${isFixed ? 'nav-fixed' : ''}`}>
      <div className="container-nav">
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
