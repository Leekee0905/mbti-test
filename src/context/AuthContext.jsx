import { createContext, useEffect, useState } from "react";
import { getUserProfile } from "../api/auth";

export const AuthContext = createContext();

const token = localStorage.getItem("accessToken");

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);
  const [user, setUser] = useState({
    id: "",
    nickname: "",
    avatar: "",
    success: false,
  });

  const getUser = async () => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      const response = await getUserProfile(token);
      if (response) {
        setUser(response);
      } else {
        setIsAuthenticated(false);
      }
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const getLoginToken = (token) => {
    localStorage.setItem("accessToken", token);
    setIsAuthenticated(true);
    getUser();
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    setIsAuthenticated(false);
    setUser({
      id: "",
      nickname: "",
      avatar: "",
      success: false,
    });
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, getLoginToken, logout, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};
