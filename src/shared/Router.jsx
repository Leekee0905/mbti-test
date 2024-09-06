import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Test from "../pages/Test/Test";
import MyPage from "../pages/Mypage/Mypage";
import Result from "../pages/Result/Result";
import Layout from "../layout/layout";

const pages = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/test",
        element: <Test />,
      },
      {
        path: "/mypage",
        element: <MyPage />,
      },
      {
        path: "/result",
        element: <Result />,
      },
    ],
  },
]);

const Router = () => <RouterProvider router={pages} />;
export default Router;
