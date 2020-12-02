import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import PropertyCard from './PropertyCard';
import Alert from './Alert';
import SideBar from './SideBar';
import '../styles/Properties.css';

const Properties = ({ userID }) => {
  const initialState = {
    properties: [],
    alert: {
      message: '',
    },
  };

  const [alert, setAlert] = useState(initialState.alert);
  const [properties, setProperties] = useState(initialState.properties);
  const { search } = useLocation();
  useEffect(() => {
    axios.get(`http://localhost:4000/api/v1/PropertyListing${search}`)
      .then(({ data }) => setProperties(data))
      .catch(() => {
        setAlert({ message: 'Error! Try again later.' });
      });
  }, [search]);

  const handleSaveProperty = (propertyId) => {
    axios.post(
      'http://localhost:4000/api/v1/Favourite?populate=propertyListing', {
        propertyListing: propertyId,
        fbUserId: userID,
      },
    );
  };

  return (
    <div className="Properties">
      <SideBar />
      <div id="prop-container">
        {properties.map((property) => (
          <div key={property._id} className="item">
            <PropertyCard
              {...property}
              property={property}
              userID={userID}
              onSaveProperty={handleSaveProperty}
            />
          </div>
        ))}
        <div id="prop-error">
          {alert.message && (
          <Alert message={alert.message} />
          )}
        </div>
      </div>
    </div>
  );
};

Properties.propTypes = {
  // eslint-disable-next-line react/require-default-props
  userID: PropTypes.string,
  // eslint-disable-next-line react/require-default-props
  onSaveProperty: PropTypes.func,
};

export default Properties;
