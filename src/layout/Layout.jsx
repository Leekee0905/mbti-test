import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="w-full h-full bg-gray-200 flex flex-col items-center ">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
