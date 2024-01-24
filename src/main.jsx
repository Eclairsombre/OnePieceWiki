import React from "react";
import ReactDOM from "react-dom/client";
import ErrorPage from "./ErrorPage.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import HomePage from "./HomePage.jsx";
import DisplayCharacters from "./DisplayCharacters.jsx";
import DisplayFruits from "./DisplayFruits.jsx";
import DisplayCrews from "./DisplayCrew.jsx";
import DisplayHaki from "./DisplayHaki.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/characters",
    element: <DisplayCharacters />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/fruits",
    element: <DisplayFruits />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/crews",
    element: <DisplayCrews />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/haki",
    element: <DisplayHaki />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
