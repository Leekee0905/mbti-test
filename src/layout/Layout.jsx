import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="bg-gray-200 flex flex-col items-center min-h-screen min-w-screen">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
