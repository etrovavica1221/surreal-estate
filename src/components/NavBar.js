import React from 'react';
import '../styles/NavBar.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Properties from './Properties';
import AddProperty from './AddProperty';

function NavBar() {
  return (
    <Router>
      <div className="navbar">
        <img src={require('../styles/logo-house.png')} alt="logo" width="250" />
        <ul className="navbar-links">
          <li className="navbar-links-item">
            <Link to="/">View Properties</Link>
          </li>
          <li className="navbar-links-item">
            <Link to="/add-property">Add a Property</Link>
          </li>
        </ul>
      </div>
    </Router>
  );
}

export default NavBar;
