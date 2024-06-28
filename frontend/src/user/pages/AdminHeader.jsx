import React,{ useContext } from "react";
import { Link, useParams,useNavigate } from "react-router-dom";
import "./Header.css";
import {useAuth} from "../context/AuthContext";

export default function AdminHeader() {
  const { id } = useParams();
  // const { isLoggedIn, user,setIsLoggedIn, setUser } = useAuth();
  const { isLoggedIn, user,logout } = useAuth()
  const navigate = useNavigate(); // Initialize the useNavigate hook

  console.log(user);
 
  const handleLogout = async () => {
    try {
      console.log("Button Clicked");
      await logout();
      navigate("/"); // Navigate to the root path (/) after logout
    } catch (error) {
      console.error("Error occurred during logout:", error);
    }
  };

  return (
    <div>
      <header className="header">
        <img src="../../../public/images/logo.jpg" alt=" " className="logo" />
        <nav className="navigation">
          <ul>
            <li>
              <Link to={`/add_date`}>Important Dates</Link>
            </li>
            <li>
              <Link to={`/admin/${id}/updates`}>Updates</Link>
            </li>
            <li>
              <Link to="/admin_add_college">Add College</Link>
            </li>
            <li>
              {isLoggedIn ? (
                <div className="greeting-container">
                  {user && user.name ? (
                    <span>Hi, Admin {user.name}</span>
                  ) : (
                    <span>Hi, Admin</span>
                  )}
                  <button onClick={handleLogout} className="logout-btn">
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    window.location.href = "/login";
                  }}
                  className="login-btn"
                >
                  Login
                </button>
              )}
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}