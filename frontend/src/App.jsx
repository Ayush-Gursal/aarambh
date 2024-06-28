import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./user/pages/Homepage";
import LoginPage from "./user/pages/User";
import SignUp from "./user/pages/SignUp";
import ImportantDates from "./user/pages/ImportantDates";
import Info from "./user/pages/Info";
import MHTCETInfo from "./user/pages/CET";
import JEEmain from "./user/pages/JEE";
import SearchCollege from "./user/pages/SearchCollege";
import CollegeDetails from "./user/pages/CollegeDetails";
import AdminHomePage from "./user/pages/AdminHomePage";
import Footer from "./user/pages/Footer";
import About from "./user/pages/About"
import AdminDates from "./user/pages/AdminDates";
import EditCollege from "./user/pages/EditCollege";
import {AuthProvider} from "./user/context/AuthContext"; // Import the AuthProvider
import ImpUpdates from "./user/pages/impupdates";
import AdminCollegeDetailsPage from "./user/pages/AdminCollegesdetails";
import AddCollegeForm from "./user/pages/AddColleges";
function App() {
  return (
    
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/:id" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/:id/about" element={<About/>} />
          <Route path="/:id/important" element={<ImportantDates />} />
          <Route path="/:id/jee" element={<JEEmain />} />
          <Route path="/search_college" element={<SearchCollege />} />
          <Route path="/exam_info" element={<Info />} />
          <Route path="/:id/mht_cet" element={<MHTCETInfo />} />
          <Route path="/college_details/:collegeId" element={<CollegeDetails />} />
          <Route path="/admin_college_details/:collegeId" element={<AdminCollegeDetailsPage />} />
          <Route path="/admin/:id" element={<AdminHomePage />} />
          <Route path="/add_date" element={<AdminDates/> } />
          <Route path="/admin/:id/" element={<AdminHomePage />} />
          <Route path="/admin/:id/updates" element={<ImpUpdates />} />
          <Route path="/admin_add_college" element={<AddCollegeForm />} />
          {/* <Route path="/admin/college_edit/:id" element={<EditCollege/>} /> */}
        </Routes>
    
      </BrowserRouter>

    </AuthProvider>
  );
}

export default App;
