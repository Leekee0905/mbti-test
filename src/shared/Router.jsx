import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Test from "../pages/Test/Test";
import MyPage from "../pages/MyPage/MyPage";
import Result from "../pages/Result/Result";
import Layout from "../layout/layout";
import useAuth from "../hooks/useAuth";
import { AuthProvider } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const { pathname } = useLocation();
  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ redirectedFrom: pathname }} />
  );
};

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
        element: (
          <PrivateRoute>
            <Test />
          </PrivateRoute>
        ),
      },
      {
        path: "/mypage",
        element: (
          <PrivateRoute>
            <MyPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/result",
        element: (
          <PrivateRoute>
            <Result />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

const Router = () => (
  <AuthProvider>
    <RouterProvider router={pages} />
  </AuthProvider>
);
export default Router;
