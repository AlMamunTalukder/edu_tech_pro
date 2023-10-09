import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/MainLayout/MainLayout";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./Home/Home";

import Events from "./components/Categories/Events";
import Gallery from "./components/Gallery/Gallery";

import AllEventDetails from "./components/Categories/AllEventDetails";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import AuthProvider from "./components/Hook/AuthProvider";
import PrivateHook from "./components/Hook/PrivateHook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/eduevents.json"),
      },
      {
        path: "/events",
        element: <Events></Events>,
        loader: () => fetch("/eduevents.json"),
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateHook>
            <AllEventDetails></AllEventDetails>
          </PrivateHook>
        ),
        loader: () => fetch("/eduevents.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
