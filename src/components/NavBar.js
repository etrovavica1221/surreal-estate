/* eslint-disable react/require-default-props */
/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import FacebookLogin from 'react-facebook-login';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

function NavBar({ onLogin, userID, onLogout }) {
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
        {userID && (
          <Link to="/favorite">
            <li className="navbar-links-item">
              Saved properties
            </li>
          </Link>
        )}
      </ul>
      {userID ? (
        <button id="facebook-btn" type="submit" onClick={onLogout}>Sign out</button>
      ) : (
        <FacebookLogin
          id="facebook-btn"
          appId="930867284109573"
          fields="name,email,picture"
          callback={(res) => onLogin(res)}
        />
      )}
    </div>
  );
}

NavBar.propTypes = {
  onLogin: PropTypes.func,
  onLogout: PropTypes.func,
  userID: PropTypes.string,
};

export default NavBar;
