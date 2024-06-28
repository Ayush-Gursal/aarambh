


import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SearchCollege.css";

const SearchCollege = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("name");
  const [searchResults, setSearchResults] = useState();

  const fetchData = async () => {
    try {
      if (filter === "name") {
        const response = await fetch(
          `/api/college/getCollageDataByName?name=${searchQuery}`
        );
        const data = await response.json();
        setSearchResults(data.collages); // Assuming collages is an array in the API response
      } else if (filter === "code") {
        const response = await fetch(
          `/api/college/getCollageDataByCode?code=${searchQuery}`
        );
        const data = await response.json();
        
           setSearchResults(data.collages);
       
      }else if (filter === "district") {
        const response = await fetch(
          `/api/college/getCollageDataByName?name=${searchQuery}`
        );
        const data = await response.json();
        setSearchResults(data.collages);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e) => {
     setFilter(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div className="container">
       <h1 className="scHead" >Search Colleges</h1>

      <form onSubmit={handleSubmit} className="search-container">
        {filter === "district" ? (
          <select
            value={searchQuery}
            onChange={handleSearchInputChange}
            className="search-input-scs"
          >
            <option value="Nashik">Nashik</option>
            <option value="Ahmednagar">Ahmednagar</option>
            <option value="Pune">Pune</option>
          </select>
        ) : (
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchInputChange}
            className="search-input-scs"
            id="search-input-scs"
          />
        )}
        <select
          value={filter}
          onChange={handleFilterChange}
          className="filter-select"
        >
          <option value="name">Name</option>
          <option value="code">Code</option>
          <option value="district">District</option>
        </select>
        <br></br>
        <button type="submit" className="search-button" id="search-btn-sc">
          Search
        </button>
      </form>


      <div className="result-container">
        {searchResults ? (
          <table className="search-results-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Code</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {searchResults.map((result, index) => (
                <tr key={index}>
                  <td>{result.basicInfo.institution}</td>
                  <td>{result.basicInfo.CollageCode}</td>
                  <td>{result.basicInfo.address}</td>
                  <td>
                    <Link to={`/college_details/${result._id}`}>
                      <button className="details-button">Details</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="no-results-message">No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchCollege;