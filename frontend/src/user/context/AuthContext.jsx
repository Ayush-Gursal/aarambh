
import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const initializeUserRole = () => {
      // Check if user data exists in localStorage or sessionStorage
      const storedUser =
        localStorage.getItem("user") || sessionStorage.getItem("user");
      if (storedUser) {
        const user = JSON.parse(storedUser);
        setUser(user);
        const isAdmin = user.is_admin || false;
        setUserRole(isAdmin ? "admin" : "user");
        setIsLoggedIn(true); // Set isLoggedIn to true if user data is found
      }
    };

    initializeUserRole();
  }, []);

  const login = async (formData) => {
    try {
      const response = await fetch("/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const { success, user } = await response.json();

        if (success && user) {
          console.log("User Data:", user);
          setIsLoggedIn(true);
          setUser(user);
          const isAdmin = user.is_admin || false;
          setUserRole(isAdmin ? "admin" : "user");

          // Store user data in localStorage or sessionStorage
          localStorage.setItem("user", JSON.stringify(user));
          // or sessionStorage.setItem("user", JSON.stringify(user));

          return { success, user };
        } else {
          throw new Error("An error occurred during login.");
        }
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "An error occurred during login.");
      }
    } catch (error) {
      console.error("Login failed:", error.message);
      throw new Error(
        "An error occurred during login. Please try again later."
      );
    }
  };

  const signup = async (formData) => {
    try {
      const response = await fetch("/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const { success, user } = await response.json();

        if (success && user) {
          console.log("User Data:", user);
          setIsLoggedIn(true);
          setUser(user);
          const isAdmin = user.is_admin || false;
          setUserRole(isAdmin ? "admin" : "user");

          // Store user data in localStorage or sessionStorage
          localStorage.setItem("user", JSON.stringify(user));
          // or sessionStorage.setItem("user", JSON.stringify(user));

          return { success, user };
        } else {
          throw new Error("An error occurred during registration.");
        }
      } else {
        const errorData = await response.json();
        throw new Error(
          errorData.message || "An error occurred during registration."
        );
      }
    } catch (error) {
      console.error("Registration failed:", error.message);
      throw new Error(
        "An error occurred during registration. Please try again later."
      );
    }
  };

  const logout = async () => {
    try {
      const response = await fetch("/api/user/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setIsLoggedIn(false);
        setUser(null);
        setUserRole(null);
        // Check the userRole before removing the user data
       
        localStorage.removeItem("user");
          // or sessionStorage.removeItem("user");
        
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error occurred during logout:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, userRole, login, signup,logout }}>
      {children}
    </AuthContext.Provider>
  );
};
