import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import React from "react";
import NotFound from "./pages/NotFound"
import Cities from "./pages/Cities";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "/home", element: <Home /> },
            { path: "/cities", element: <Cities /> },
            { path: "*", element: <NotFound /> },
        ],
    },
]);

export default router;
