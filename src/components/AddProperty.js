import React, { useState } from 'react';
import axios from 'axios';
import '../styles/AddProperty.css';
import Alert from './Alert';

function AddProperty() {
  const initialState = {
    fields: {
      title: '',
      city: 'Manchester',
      type: 'Flat',
      bedrooms: '',
      bathrooms: '',
      price: '',
      email: '',
    },
    alert: {
      message: '',
      isSuccess: false,
    },
  };

  const [alert, setAlert] = useState(initialState.alert);
  const [fields, setFields] = useState(initialState.fields);
  const handleAddProperty = (e) => {
    e.preventDefault();
    setAlert({ message: '', isSuccess: false });
    axios.post('https://vpetrova-surreal-estate.herokuapp.com/api/v1/PropertyListing', fields)
      .then(() => setAlert({
        message: 'Property has been created!',
        isSuccess: true,
      }),
      setTimeout(() => {
        setAlert({
          message: '',
        });
      }, 2500))
      .catch((err) => setAlert({
        message: `${err.message}! Try again later!`,
        isSuccess: false,
      }),
      setTimeout(() => {
        setAlert({
          message: '',
        });
      }, 3000));
  };

  const handleFieldChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  return (
    <div className="AddProperty">
      <form onSubmit={handleAddProperty}>
        <label htmlFor="title">
          Title:
          <input
            id="title"
            name="title"
            placeholder="3 bedrooms flat"
            value={fields.title}
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="city">
          City:
          <select id="city" name="city" value={fields.city} onChange={handleFieldChange}>
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Liverpool">Liverpool</option>
          </select>
        </label>
        <label htmlFor="type">
          Type:
          <select id="type" name="type" value={fields.type} onChange={handleFieldChange}>
            <option value="flat">Flat</option>
            <option value="detached">Detached</option>
            <option value="semi-detached">Semi-Detached</option>
            <option value="terraced">Terraced</option>
            <option value="endOfTerrace">End of Terrace</option>
            <option value="cottage">Cottage</option>
            <option value="bungalow">Bungalow</option>
          </select>
        </label>
        <label htmlFor="bedrooms">
          Bedrooms:
          <input
            id="bedrooms"
            name="bedrooms"
            type="number"
            min="0"
            max="100"
            value={fields.bedrooms}
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="bathrooms">
          Bathrooms:
          <input
            id="bathrooms"
            name="bathrooms"
            type="number"
            min="0"
            max="50"
            value={fields.bathrooms}
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="price">
          Price:
          <span>
            £
          </span>
          <input
            id="price"
            name="price"
            type="number"
            min="0"
            max="1000000000"
            step="1000"
            value={fields.price}
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            id="input-email"
            name="email"
            placeholder="your-email@gmail.com"
            type="email"
            value={fields.email}
            onChange={handleFieldChange}
          />
        </label>
        <button type="submit">Add</button>
        {alert.message && (
          <Alert message={alert.message} success={alert.isSuccess} />
        )}
      </form>
    </div>
  );
}

export default AddProperty;
