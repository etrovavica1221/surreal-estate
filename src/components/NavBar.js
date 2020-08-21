import React from 'react';
import '../styles/NavBar.css';

function NavBar() {
  return (
    <div className="navbar">
      <img src={require('../styles/logo-house.png')} alt="logo" width="250" />
      <ul className="navbar-links">
        <li className="navbar-links-item">View Properties</li>
        <li className="navbar-links-item">Add a Property</li>
      </ul>
    </div>
  );
}

export default NavBar;
