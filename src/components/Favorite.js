import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import PropertyCard from './PropertyCard';
import Alert from './Alert';
import '../styles/Favorite.css';
import '../styles/Alert.css';

const Favorite = ({ userID }) => {
  const favState = {
    favListings: [],
    properties: [],
    alert: {
      message: '',
      isSuccess: false,
    },
  };

  const [alert, setAlert] = useState(favState.alert);
  const [properties, setProperties] = useState(favState.properties);
  const [favListings, setFavListings] = useState(favState.favListings);

  useEffect(() => {
    axios.get('https://vpetrova-surreal-estate.herokuapp.com/api/v1/PropertyListing')
      .then(({ data }) => setProperties(data))
      .catch((err) => {
        setAlert({ message: `${err.message}! Try again later!` });
      },
      setTimeout(() => {
        setAlert({
          message: '',
        });
      }, 3000));
  }, [userID]);

  useEffect(() => {
    let isMounted = true;

    axios.get('https://vpetrova-surreal-estate.herokuapp.com/api/v1/Favourite')
      .then(({ data }) => setFavListings(data))
      .catch((err) => {
        if (isMounted) {
          setAlert({
            message: `${err.message}! Try again later!`,
            isSuccess: false,
          });
        }
      },
      setTimeout(() => {
        if (isMounted) {
          setAlert({
            message: '',
          });
        }
      }, 3000));
    return () => { isMounted = false; };
  }, [userID]);

  const handleDelete = (id) => {
    axios.delete(`https://vpetrova-surreal-estate.herokuapp.com/api/v1/Favourite/${id}`)
      .then(() => console.log('deleted!'))
      .catch((err) => {
        setAlert({
          message: `${err.message}! Try again later!`,
          isSuccess: false,
        });
      },
      setTimeout(() => {
        setAlert({
          message: '',
        });
      }, 3000));
  };

  return (
    <div className="Favorite">
      <div id="fav-container">
        {favListings.length > 0 && (
          favListings.map((fav) => (
            fav !== undefined && (
            <div id="favourite" key={fav._id}>
              <PropertyCard
                {...properties.filter(p => p._id === fav.propertyListing)[0]}
                propertyId={fav._id}
                userID={userID}
                onDelete={handleDelete}
              />
            </div>
            )
          ))
        )}
        <div id="prop-error">
          {alert.message && (
            <Alert message={alert.message} />
          )}
        </div>
      </div>
    </div>
  );
};

Favorite.propTypes = {
  // eslint-disable-next-line react/require-default-props
  userID: PropTypes.string,
};

export default Favorite;
