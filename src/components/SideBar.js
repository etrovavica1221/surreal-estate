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
        <Link to={buildQueryString('query', { city: 'Manchester' })}>
          <li className="sidebar-links-item">
            Manchester
          </li>
        </Link>
        <Link to={buildQueryString('query', { city: 'Leeds' })}>
          <li className="sidebar-links-item">
            Leeds
          </li>
        </Link>
        <Link to={buildQueryString('query', { city: 'Sheffield' })}>
          <li className="sidebar-links-item">
            Sheffield
          </li>
        </Link>
        <Link to={buildQueryString('query', { city: 'Liverpool' })}>
          <li className="sidebar-links-item">
            Liverpool
          </li>
        </Link>
        <h1>Sort by price:</h1>
        <Link to={buildQueryString('sort', { price: 1 })}>
          <li className="sidebar-links-item">
            Ascending
          </li>
        </Link>
        <Link to={buildQueryString('sort', { price: -1 })}>
          <li className="sidebar-links-item">
            Descending
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default SideBar;
