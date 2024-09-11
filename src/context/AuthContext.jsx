import { createContext, useEffect, useState } from "react";
import { useGetLoginUserQuery } from "../hooks/queries/auth/useGetLoginUserQuery";
import { useQueryClient } from "@tanstack/react-query";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const token = localStorage.getItem("accessToken");
  const queryClient = useQueryClient();
  const { data: userProfile, isError } = useGetLoginUserQuery();
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);

  useEffect(() => {
    if (isError) {
      queryClient.invalidateQueries(["userProfile"]);
      setIsAuthenticated(false);
    }
  }, [isError]);

  const getLoginToken = (token) => {
    localStorage.setItem("accessToken", token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    setIsAuthenticated(false);
    queryClient.invalidateQueries(["userProfile"]);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, getLoginToken, logout, userProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
};
