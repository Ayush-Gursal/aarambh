// import React from 'react';
import React, { useEffect,useState } from 'react';
import axios from "axios";
import Header from './Header';
import Footer from './Footer';
import "./ImportantDates.css"


const ImportantDates = () => {
  const [datesData, setDatesData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/date"); // Adjust the endpoint URL
      console.log("Response data:", response.data); // Check the structure of response data
      setDatesData(response.data.dates); // Assuming the response data is an array of date objects
    } catch (error) {
      console.error("Error fetching dates:", error);
    }
  };

  return (
    <div>
      <Header />

      <table>
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Activity</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>
          {datesData.map((date, index) => (
            <tr key={index}>
              <td>{index + 1}</td> {/* Serial number */}
              <td>{date.activity}</td>
              <td>{new Date(date.startDate).toLocaleDateString()}</td>{" "}
              {/* Display only date */}
              <td>{new Date(date.endDate).toLocaleDateString()}</td>{" "}
              {/* Display only date */}
            </tr>
          ))}
        </tbody>
      </table>

      <Footer />
    </div>
  );
};

export default ImportantDates;
