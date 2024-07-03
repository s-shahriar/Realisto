import {
  createBrowserRouter
} from "react-router-dom";
import { CardFetcher } from "../Loader/CardFecther";
import singleLoader from "../Loader/SingleLoader";
import ContactUs from "../Pages/ContactUs";
import ErrorPage from "../Pages/ErrorPage";
import EstateDetail from "../Pages/EstateDetail";
import Home from "../Pages/Home";
import Layout from "../Pages/Layout";
import Login from "../Pages/Login";
import PrivateRoute from "../Pages/PrivateRoute";
import Register from "../Pages/Register";
import RegisterProtect from "../Pages/RegisterProtect";
import UpdateProfile from "../Pages/UpdateProfile";
import UserProfile from "../Pages/UserProfile";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          index: true,
          element: <Home></Home>,
          loader: CardFetcher
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <RegisterProtect><Register></Register></RegisterProtect>
        },
        {
          path: "/update",
          element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>,
        },
        {
          path: "/user",
          element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>,
        },
        {
          path: "/contact",
          element: <ContactUs></ContactUs>
        },
        {
          path: "estate-details/:Id",
          element: <PrivateRoute><EstateDetail></EstateDetail></PrivateRoute>,
          loader: singleLoader,
        },
      ],
    },
  ]);

  export default router;
