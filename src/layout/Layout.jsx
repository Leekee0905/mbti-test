import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="w-screen">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
