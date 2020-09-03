import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropertyCard from './PropertyCard';
import Alert from './Alert';
import '../styles/Properties.css';

const Properties = () => {
  const initialState = {
    properties: [],
    alert: {
      message: '',
    },
  };

  const [alert, setAlert] = useState(initialState.alert);
  const [properties, setProperties] = useState(initialState.properties);
  useEffect(() => {
    axios.get('http://localhost:4000/api/v1/PropertyListing')
      .then(({ data }) => setProperties(data))
      .catch(() => {
        setAlert({ message: 'Error! Try again later. ' });
      });
  }, []);

  return (
    <div className="Properties">
      {properties.map((property) => (
        <div key={property._id} className="item">
          <PropertyCard {...property} />
        </div>
      ))}
      {alert.message && (
        <Alert message={alert.message} />
      )}
    </div>
  );
};

export default Properties;
