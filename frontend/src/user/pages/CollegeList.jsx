import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CollegeList = () => {
  
  const [colleges, setColleges] = useState([]);
  const [filteredColleges, setFilteredColleges] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchColleges = async () => {
      try {
        // Fetch all colleges from the API
        const response = await fetch(`/api/college/getAllColleges`);
        if (!response.ok) {
          throw new Error('Failed to fetch colleges');
        }
        const data = await response.json();
        setColleges(data.collages);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching colleges:', error);
        setError('Failed to fetch colleges. Please try again later.');
        setLoading(false);
      }
    };

    fetchColleges();
  }, []);

  useEffect(() => {
    // Filter colleges based on search query
    const filtered = colleges.filter((college) => {
      return (
        college.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        college.code.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
    setFilteredColleges(filtered);
  }, [colleges, searchQuery]);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <h2>Colleges</h2>
      <input
        type="text"
        placeholder="Search by name or code"
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <ul>
          {filteredColleges.map((college) => (
            <li key={college.id}>
              <p>Name: {college.name}</p>
              <p>Code: {college.code}</p>
              <Link to={`/edit/${college.id}`}>
                <button>Edit</button>
              </Link>
              <button onClick={() => handleDelete(college.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CollegeList;
