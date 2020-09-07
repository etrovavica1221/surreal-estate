/* eslint-disable global-require */
import React from 'react';
import '../styles/NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="navbar">
      <img src={require('../styles/logo-house.png')} alt="logo" width="200" />
      <ul className="navbar-links">
        <Link to="/">
          <li className="navbar-links-item">
            View Properties
          </li>
        </Link>
        <Link to="/add-property">
          <li className="navbar-links-item">
            Add a Property
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default NavBar;
