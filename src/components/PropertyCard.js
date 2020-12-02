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
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// eslint-disable-next-line max-len
// eslint-disable-next-line object-curly-newline
const PropertyCard = ({ propertyId, _id, onDelete, onSaveProperty, userID, title, city, type, bedrooms, bathrooms, price, email }) => (
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
    <a href={`mailto: ${email}`}>
      <div className="items" id="email">
        <FontAwesomeIcon icon={faEnvelope} />
        Email
      </div>
    </a>
    {userID && (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <div>
        {propertyId ? (
          <button
            id="delete-btn"
            type="button"
            onClick={() => onDelete(propertyId)}
          >
            <FontAwesomeIcon icon={faTrashAlt} />Delete
          </button>
        ) : (
          <button
            id="save-btn"
            type="submit"
            href="#"
            className="save"
            onClick={() => onSaveProperty(_id)}
          >
            <FontAwesomeIcon icon={faStar} />Save
          </button>
        )}
      </div>
    )}
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
  userID: PropTypes.string,
  onSaveProperty: PropTypes.func,
  onDelete: PropTypes.func,
  _id: PropTypes.string,
  propertyId: PropTypes.string,
};

export default PropertyCard;
