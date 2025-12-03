import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Error404 from "../Pages/ErrorPages/Error404";

import Login from "../Pages/Login/Login";
import Registration from "../Registration/Registration";
import Home from "../Pages/Home/Home";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import PrivateRoute from "../../Provider/PrivateRoute";
import Loading from "../Pages/Loading/Loading";
import Alltoys from "../Pages/Alltoys/Alltoys";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error404></Error404>,
    children: [
      {
        index: true,
        Component: Home,
        hydrateFallbackElement: <Loading></Loading>,
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
        element: <ToyDetails></ToyDetails>,
        hydrateFallbackElement: <Loading></Loading>,
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
    ],
  },
]);
