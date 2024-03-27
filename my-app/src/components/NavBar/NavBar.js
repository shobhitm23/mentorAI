import React from 'react';
import './NavBar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">
            <i className="bi bi-journal"></i> journal
          </a>
        </div>
        <ul className="navbar-menu flex-auto justify-end flex">
          <li className="navbar-item">
            <a href="/about">About</a>
          </li>
          <li className="navbar-item">
            <a href="/reviews">Reviews</a>
          </li>
          <li className="navbar-item">
            <a href="/faq">FAQ</a>
          </li>
        </ul>
        <div className="navbar-actions">
          <a href="/login" className="navbar-btn">Log In</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;