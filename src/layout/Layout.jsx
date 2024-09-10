import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";

const Layout = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) {
      alert("토큰이 만료되었습니다.");
      navigate("/login");
    }
  }, [isAuthenticated]);
  return (
    <div className="bg-gray-200 flex flex-col items-center min-h-screen min-w-screen">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
