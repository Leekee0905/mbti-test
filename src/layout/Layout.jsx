import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";

const Layout = () => {
  const { isAuthenticated, userProfile } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated && userProfile) {
      navigate("/login");
    }
  }, []);
  return (
    <div className="bg-gray-200 flex flex-col items-center min-h-screen min-w-screen">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
