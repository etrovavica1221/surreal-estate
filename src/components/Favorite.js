import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import PropertyCard from './PropertyCard';
import SideBar from './SideBar';
import Alert from './Alert';
import '../styles/Favorite.css';

const Favorite = ({ userID }) => {
  const favState = {
    favListings: [],
    alert: {
      message: '',
    },
  };

  const [alert, setAlert] = useState(favState.alert);
  const [favListings, setFavListings] = useState(favState.favListings);
  useEffect(() => {
    axios.get('http://localhost:4000/api/v1/Favourite?populate=propertyListing')
      .then(({ data }) => setFavListings(data))
      .catch(() => {
        setAlert({ message: 'Error! Try again later.' });
      });
  }, [userID]);

  const handleDelete = (id) => {
    axios.delete(
      `http://localhost:4000/api/v1/Favourite/${id}`,
    );
  };

  return (
    <div className="Favorite">
      <SideBar />
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
