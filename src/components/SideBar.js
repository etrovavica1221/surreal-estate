/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable quotes */
import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import qs from 'qs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../styles/SideBar.css';

const SideBar = () => {
  const [query, setQuery] = useState("");
  const history = useHistory();
  const { search } = useLocation();

  const buildQueryString = (operation, valueObj) => {
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify({
        ...JSON.parse(currentQueryParams[operation] || '{}'),
        ...valueObj,
      }),
    };
    return qs.stringify(newQueryParams, { addQueryPrefix: true, encode: false });
  };
  const handleSearch = (e) => {
    e.preventDefault();
    const newQueryString = buildQueryString('query', { title: { $regex: query } });
    history.push(newQueryString);
  };

  return (
    <nav className="sidebar">
      <form onSubmit={handleSearch} id="search-form">
        <input
          placeholder="Search"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button id="search-button" type="submit"><FontAwesomeIcon icon={faSearch} /></button>
      </form>
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
