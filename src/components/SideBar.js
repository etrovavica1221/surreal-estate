/* eslint-disable quotes */
import React from 'react';
import qs from 'qs';
import { Link, useLocation } from 'react-router-dom';
import '../styles/SideBar.css';

const SideBar = () => {
  const { search } = useLocation();
  const buildQueryString = (operation, valueObj) => {
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify(valueObj),
    };
    return qs.stringify(newQueryParams, { addQueryPrefix: true }, { encode: false });
  };

  return (
    <nav className="sidebar">
      <ul className="sidebar-links">
        <h1>Filter by city:</h1>
        <li className="sidebar-links-item">
          <Link to={buildQueryString('query', { city: 'Manchester' })}>Manchester</Link>
        </li>
        <li className="sidebar-links-item">
          <Link to={buildQueryString('query', { city: 'Leeds' })}>Leeds</Link>
        </li>
        <li className="sidebar-links-item">
          <Link to={buildQueryString('query', { city: 'Sheffield' })}>Sheffield</Link>
        </li>
        <li className="sidebar-links-item">
          <Link to={buildQueryString('query', { city: 'Liverpool' })}>Liverpool</Link>
        </li>
        <h1>Sort by price:</h1>
        <li className="sidebar-links-item">
          <Link to={buildQueryString('sort', { price: 1 })}>Ascending</Link>
        </li>
        <li className="sidebar-links-item">
          <Link to={buildQueryString('sort', { price: -1 })}>Descending</Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
