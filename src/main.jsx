import React from "react";
import ReactDOM from "react-dom/client";
import ErrorPage from "./ErrorPage.jsx";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./index.css";
import HomePage from "./HomePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
