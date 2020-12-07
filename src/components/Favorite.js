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
    alert: {
      message: '',
      isSuccess: false,
    },
  };

  const [alert, setAlert] = useState(favState.alert);
  const [favListings, setFavListings] = useState(favState.favListings);

  useEffect(() => {
    let isMounted = true;

    axios.get('http://localhost:4000/api/v1/Favourite?populate=propertyListing')
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
    axios.delete(`http://localhost:4000/api/v1/Favourite/${id}`)
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
            <div key={fav._id}>
              <PropertyCard
                {...fav.propertyListing}
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
