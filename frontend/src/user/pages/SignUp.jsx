import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./SignUp.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordValid, setPasswordValid] = useState(true);
  const [passwordError, setPasswordError] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [registrationError, setRegistrationError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { signup, isLoggedIn, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn && user) {
      if (user.is_admin) {
        navigate(`/admin/${user._id}`);
      } else {
        navigate(`/${user._id}`);
      }
    }
  }, [isLoggedIn, user, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "password") {
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10,}$/;
      setPasswordValid(regex.test(value));
    } else if (name === "email") {
      const emailRegex = /\S+@\S+\.\S+/;
      setEmailValid(emailRegex.test(value));
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(
      (prevShowConfirmPassword) => !prevShowConfirmPassword
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!passwordValid) {
      setPasswordError(
        "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and be at least 10 characters long."
      );
      return;
    } else {
      setPasswordError("");
    }

    setLoading(true);

    try {
      const { success, user } = await signup(formData);
      if (success && user) {
        // Registration successful, redirect to homepage or display success message
        console.log("Registration successful");
      } else {
        // Handle non-200 status codes and display error message
        setRegistrationError(
          "An error occurred during registration. Please try again later."
        );
      }
    } catch (error) {
      console.error("Registration failed:", error.message);
      setRegistrationError(
        "An error occurred during registration. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>
          <span className="text-span">Sign</span> Up Page
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="input-text"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={!emailValid ? "invalid" : ""}
            required
          />
          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className={!passwordValid ? "invalid" : ""}
            />
            <span className="eye-icon" onClick={togglePasswordVisibility}>
              {showPassword ? "👁️" : "👁️"}
            </span>
          </div>
          <div className="password-field">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <span
              className="eye-icon"
              onClick={toggleConfirmPasswordVisibility}
            >
              {showConfirmPassword ? "👁️" : "👁️"}
            </span>
          </div>
          {passwordError && <p className="error-message">{passwordError}</p>}
          {registrationError && (
            <p className="error-message">{registrationError}</p>
          )}
          {loading ? (
            <p>Loading...</p>
          ) : (
            <button type="submit" id="signup-btn">
              Sign Up
            </button>
          )}
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;