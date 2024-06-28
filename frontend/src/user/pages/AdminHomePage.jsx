// export default CollegeList;

import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./Adminpage.css";
import AdminHeader from "./AdminHeader";
const CollegeList = () => {
  const [colleges, setColleges] = useState([]);
  const [filteredColleges, setFilteredColleges] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchBasis, setSearchBasis] = useState("name"); // Default search basis
  const { id } = useParams();

  // const handleLogout = async () => {
  //   try {
  //     console.log("Button Clicked");
  //     const response = await fetch("/api/user/logout", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     if (response.ok) {
  //       // If logout successful, clear token from local storage and redirect
  //       localStorage.removeItem("token");
  //       window.location.href = "/login"; // Redirect to login page
  //     } else {
  //       // Handle logout failure
  //       console.error("Logout failed");
  //     }
  //   } catch (error) {
  //     // Handle error
  //     console.error("Error occurred during logout:", error);
  //   }
  // };

  useEffect(() => {
    const fetchColleges = async () => {
      try {
        // Fetch all colleges from the API
        const response = await fetch("/api/college/getAllColleges");
        if (!response.ok) {
          throw new Error("Failed to fetch colleges");
        }
        const data = await response.json();
        setColleges(data.collages);
      } catch (error) {
        console.error("Error fetching colleges:", error);
      }
    };

    fetchColleges();
  }, []);

  useEffect(() => {
    // Filter colleges based on search query and basis
    const filtered = colleges.filter((college) => {
      if (searchBasis === "name") {
        return college.basicInfo.institution
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
      } else if (searchBasis === "code") {
        return college.basicInfo.CollageCode.toLowerCase().includes(
          searchQuery.toLowerCase()
        );
      }
      return true; // Default to showing all colleges if search basis is not selected
    });
    setFilteredColleges(filtered);
  }, [colleges, searchQuery, searchBasis]);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchBasisChange = (e) => {
    setSearchBasis(e.target.value);
  };

  const handleDelete = async (collegeId) => {
    if (window.confirm("Are you sure you want to delete this college?")) {
      try {
        const response = await fetch(`/api/college/deletecollage/${collegeId}`, {
          method: "DELETE",
        });
        if (!response.ok) {
          throw new Error("Failed to delete college");
        }
        // Remove the deleted college from the filtered list
        setFilteredColleges(
          filteredColleges.filter((college) => college._id !== collegeId) // Use collegeId instead of id
        );
      } catch (error) {
        console.error("Error deleting college:", error);
      }
    }
  };
  
  const handleDetailsClick = (collegeId) => {
   
    window.location.href = `/admin_college_details/${collegeId}`;
  };

  return (
    <div style={{ margin: "0 20px" }}>
      <AdminHeader/>
      <div className="search-bar" style={{ width: "50%" }}>
        <div className="filter-icon">Filter</div>
        <input
          type="text"
          placeholder={`Search by ${searchBasis === "name" ? "name" : "code"}`}
          value={searchQuery}
          onChange={handleSearchInputChange}
          className="search-input"
          style={{ width: "70%" }}
        />
        <select
          value={searchBasis}
          onChange={handleSearchBasisChange}
          style={{ width: "30%" }}
        >
          <option value="name">Name</option>
          <option value="code">Code</option>
        </select>
      </div>
      {filteredColleges.length > 0 ? (
        <table
          className="college-list"
          style={{ width: "100%", marginTop: "20px" }}
        >
          <thead>
            <tr>
              <th style={{ width: "60%" }}>Name</th>
              <th style={{ width: "20%" }}>Code</th>
              <th style={{ width: "20%" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredColleges.map((college) => (
              <tr key={college.id}>
                <td>{college.basicInfo.institution}</td>
                <td style={{ textAlign: "center" }}>
                  {college.basicInfo.CollageCode}
                </td>
                <td>
                  <button
                    style={{
                      color: "green",
                      border: "1px solid grey",
                      width: "70px",
                      marginBottom: "5px",
                    }}
                  >
                    Edit
                  </button>
                  <button
                    style={{
                      color: "blue",
                      border: "1px solid grey",
                      width: "70px",
                      marginBottom: "5px",
                    }}
                    onClick={() => handleDetailsClick(college._id)}
                  >
                    Details
                  </button>
                  <button
                    style={{
                      color: "red",
                      border: "1px solid grey",
                      width: "70px",
                      marginBottom: "5px",
                    }}
                    onClick={() => handleDelete(college._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <table
          className="college-list"
          style={{ width: "100%", marginTop: "20px" }}
        >
          <tbody>
            <tr>
              <td colSpan="3" style={{ textAlign: "center" }}>
                <p>No colleges found for the given input.</p>
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CollegeList;
