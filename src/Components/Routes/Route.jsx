import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Error404 from "../Pages/ErrorPages/Error404";

import Login from "../Pages/Login/Login";

import Home from "../Pages/Home/Home";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";

import Loading from "../Pages/Loading/Loading";
import Alltoys from "../Pages/Alltoys/Alltoys";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Profile from "../Pages/Profile/Profile";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Registration from "./../Registration/Registration";
import PrivateRoute from "./../../Provider/PrivateRoute";
import Myparcels from "../Pages/Dashboard/MyParcles/Myparcels";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        Component: Home,
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/registration",
        Component: Registration,
      },
      {
        path: "/toyDetails/:id",
        loader: () => fetch("/toyData.json"),
        element: <ToyDetails />,
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/allToys",
        Component: Alltoys,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Myparcels />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/myParcels",
        element: (
          <PrivateRoute>
            <Myparcels />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
