// SearchPage.js

import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import CollegeList from './CollegeList';
import './College.css';

const SearchPage = () => {
  // Mock data for filter options
  const cities = ['City A', 'City B', 'City C'];

  // State for selected city filter
  const [selectedCity, setSelectedCity] = useState('');

  const handleCityChange = event => {
    setSelectedCity(event.target.value);
  };

  return (
    <div className="container">
      <h1>Find Colleges</h1>
      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search..." className="search-input" />
        <button>Search</button>
      </div>

      {/* Filter by City */}
      <div className="filter-container">
        <label htmlFor="cityFilter" className="filter-label">Filter by City:</label>
        <select id="cityFilter" value={selectedCity} onChange={handleCityChange}>
          <option value="">All</option>
          {cities.map((city, index) => (
            <option key={index} value={city}>{city}</option>
          ))}
        </select>
      </div>

      {/* College List */}
      <CollegeList selectedCity={selectedCity} />

      {/* Next and Previous Buttons */}
      <div>
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
};

export default SearchPage;
