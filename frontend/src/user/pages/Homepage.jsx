import "./Homepage.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Import useAuth hook
import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import axios from 'axios'; // Import axios here


import {useParams} from "react-router-dom"
const Homepage = () => {
  const [showCollegeList, setShowCollegeList] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const { isLoggedIn } = useAuth(); // Get isLoggedIn from AuthContext

  const handlePredictButtonClick = () => {
    // Update the state to show the college list
    setShowCollegeList(true);
  };

  const AnnouncementBar = () => {

    const [latestUpdate, setLatestUpdate] = useState('');

    useEffect(() => {
      const fetchLatestUpdate = async () => {
        try {
          const response = await axios.get('/api/updates/getlatestupdate');
          setLatestUpdate(response.data.update.content);
        } catch (error) {
          console.error('Error fetching latest update:', error);
        }
      };
  
      fetchLatestUpdate();
    }, []);
    return (
      <div className="announcement-container">
        <button className="announcement-button">Announcement</button>
        <div className="announcement-bar">
          <marquee behavior="scroll" direction="left" scrollamount="10">
            {latestUpdate || 'Loading latest update...'}
          </marquee>
        </div>
      </div>
    );
  };

  const handleDetailsClick = () => {
    // Handle click event for "Details" button
    console.log("Details clicked");
    // Perform navigation or other actions as needed
  };

  // const handleSearchCollegeClick = (e) => {
  //   e.preventDefault(); // Prevent the default link behavior
  //   if (isLoggedIn) {
  //     if (id) {
  //       navigate(`/${id}/search_college`);
  //     } else {
  //       console.error('Invalid id parameter');
  //     }
  //   } else {
  //     navigate('/login', { state: { from: `/search_college` } });
  //   }

  //   if (id) {
  //     navigate(`/${id}/search_college`);
  //   } else {
  //     console.error('Invalid id parameter');
  //   }
  // };
  const handleSearchCollegeClick = (e) => {
    e.preventDefault(); // Prevent the default link behavior
  
    navigate('/search_college');
  };

  // const handelExaminformationOnclick=(e)=>{
  //   e.preventDefault(); // Prevent the default link behavior
  //   if (isLoggedIn) {
  //     if (id) {
  //       navigate(`/${id}/exam_info`);
  //     } else {
  //       console.error('Invalid id parameter');
  //     }
  //   } else {
  //     navigate('/login', { state: { from: `/exam_info` } });
  //   }

  // };

  const handelExaminformationOnclick = (e) => {
    e.preventDefault(); // Prevent the default link behavior
    navigate('/exam_info');
  };

 
  return (
    <>
      <div className="homepage">
        {/* Existing code for header, search bar, main content, latest news, and prediction form */}
        <Header />
        <AnnouncementBar />

        <div className="main-content">
          <h2 className="title">MHT-CET College Predictor</h2>
          <p className="subtitle">
            Predict yours college based on percentile, rank, category, Gender
          </p>
          <p className="subtitle">
            and preferred branch.Get counseling session as well.
          </p>
        </div>
        {/* Two rectangular containers in a row */}
        <div className="row">
          {/* Left container with college students picture */}
          <div className="container left-container">
            {/* Random image */}
            <img src="./images/Students.jpg" alt=" " />
          </div>

          {/* Right container with buttons */}
          <div className="container right-container">
            {/* Predict College button */}
            <div className="button">
              <img src="./images/clg.jpeg" alt="Predict College" />
              {/* <span>Predict College</span> */}
              <Link
                href="/predict_college"
                activeClass="active"
                to="prediction-form-container"
                spy={true}
                smooth={true}
                offset={-70} // adjust this value to fit your layout
                duration={500}
              >
                Predict College
              </Link>
            </div>
            {/* Search College button */}
            <div className="button"  onClick={handleSearchCollegeClick}>
              <img src="./images/searchh.png" alt="Search College" />
              <a href={`/${id}/search_college`}>Search College</a>
            </div>
            {/* Exams Information button */}
            <div className="button" onClick={handelExaminformationOnclick}>
              <img src="./images/exams.jpg" alt="Exams Information" />
              <span>
                <a href={`/${id}/exam_info`}>Exam Information</a>
              </span>
            </div>
            {/* </div> */}

            {/* Cap rounds button */}
            <div className="button">
              <img src="./images/cap.jpg" alt="Cap Rounds" />
              <span>
                <a href={`/${id}/cap_rounds`}>Cap Rounds</a>
              </span>
            </div>
          </div>
        </div>
        
      </div>
      {/* <Footer/> */}
     
    </>
  );
};

export default Homepage;


