import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import PropertyCard from './PropertyCard';
import Alert from './Alert';
import SideBar from './SideBar';
import '../styles/Properties.css';
import '../styles/Alert.css';

const Properties = ({ userID }) => {
  const [favourite, setFavourite] = useState([]);

  const initialState = {
    properties: [],
    alert: {
      message: '',
      isSuccess: false,
    },
  };

  const [alert, setAlert] = useState(initialState.alert);
  const [properties, setProperties] = useState(initialState.properties);
  const { search } = useLocation();
  useEffect(() => {
    axios.get(`http://localhost:4000/api/v1/PropertyListing${search}`)
      .then(({ data }) => setProperties(data))
      .catch((err) => {
        setAlert({ message: `${err.message}! Try again later!` });
      },
      setTimeout(() => {
        setAlert({
          message: '',
        });
      }, 3000));
  }, [search]);

  const handleSaveProperty = (propertyId) => {
    let isMounted = true;

    axios.post(
      'http://localhost:4000/api/v1/Favourite?populate=propertyListing', {
        propertyListing: propertyId,
        fbUserId: userID,
      },
    )
      .catch((err) => setAlert({
        message: `${err.message}!Try again later!`,
        isSuccess: false,
      }),
      setTimeout(() => {
        if (isMounted) {
          setAlert({
            message: '',
          });
        }
      }, 2500));
    return () => { isMounted = false; };
  };

  useEffect(() => {
    let isMounted = true;

    axios.get('http://localhost:4000/api/v1/Favourite')
      .then(({ data }) => { if (isMounted) setFavourite(data.map((p) => p.propertyListing)); })
      .catch((err) => console.log(err));
    return () => { isMounted = false; };
  }, [userID, Object.values(favourite)]);

  return (
    <div className="Properties">
      <SideBar />
      <div id="prop-container">
        {properties.map((property) => (
          <div key={property._id} className="item">
            <PropertyCard
              {...property}
              favourite={favourite}
              property={property}
              userID={userID}
              onSaveProperty={handleSaveProperty}
            />
          </div>
        ))}
        <div id="prop-error">
          {alert.message && (
          <Alert message={alert.message} success={alert.isSuccess} />
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
