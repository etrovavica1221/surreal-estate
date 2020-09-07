/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable global-require */
/* eslint-disable import/no-duplicates */
/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/PropertyCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { faBath } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const PropertyCard = ({ title, city, type, bedrooms, bathrooms, price, email }) => (
  <div className="Property">
    <div id="house-padding">
      <img id="house-icon" src={require('../styles/house-icon.svg')} alt="house icon" width="60" />
    </div>
    <div className="items" id="title">
      {title}
    </div>
    <div className="items" id="city">
      {type} - {city}
    </div>
    <div className="items">
      <FontAwesomeIcon icon={faBed} />
      {bedrooms}
    </div>
    <div className="items">
      <FontAwesomeIcon icon={faBath} />
      {bathrooms}
    </div>
    <div className="items">
      £{numberWithCommas(price)}
    </div>
    <div className="items" id="email">
      <a href={`mailto: ${email}`}>
        <FontAwesomeIcon icon={faEnvelope} />
        email
      </a>
    </div>
  </div>
);

PropertyCard.propTypes = {
  title: PropTypes.string,
  city: PropTypes.string,
  type: PropTypes.string,
  bedrooms: PropTypes.string,
  bathrooms: PropTypes.string,
  price: PropTypes.string,
  email: PropTypes.string,
};

export default PropertyCard;
