import React from "react";
import { Link, useParams ,useNavigate} from "react-router-dom";
import "./Header.css";
import { useAuth } from "../context/AuthContext"; // Import useAuth hook

export default function Header() {
  const { id } = useParams();
  const { isLoggedIn, user,logout } = useAuth(); // Retrieve isLoggedIn from useAuth hook
  const navigate = useNavigate(); // Initialize the useNavigate hook
  console.log("User of homepage is ", user);

  const handleLogout = async () => {
    try {
      console.log("Button Clicked");
      await logout();
      navigate("/"); // Navigate to the root path (/) after logout
    } catch (error) {
      // Handle error
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
              <Link to={`/${id}`}>Home</Link>
            </li>
            <li>
              <Link to={`/${id}/important`}>Important Dates</Link>
            </li>
            <li>
              <Link to={`/${id}/about`}>About Us</Link>
            </li>
            <li>
              {isLoggedIn ? (
                <div className="greeting-container">
                  {user && user.name ? (
                    <span>Hi, {user.name}</span>
                  ) : (
                    <span>Hi, User</span>
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
