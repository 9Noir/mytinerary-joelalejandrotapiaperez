import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import NotFound from "./pages/NotFound";
import Cities from "./pages/Cities";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import City from "./pages/City";
import Users from "./pages/Users";
import Account from "./pages/Account";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "/", element: <Navigate to="/home" replace /> }, // Redirección a /home
            { path: "/home", element: <Home /> },
            { path: "/cities", element: <Cities /> },
            { path: "/city/:city_id", element: <City /> },
            { path: "/signin", element: <Signin /> },
            { path: "/signup", element: <Signup /> },
            { path: "/users", element: <Users /> },
            { path: "/account", element: <Account /> },
            { path: "/notfound", element: <NotFound /> },
            { path: "*", element: <Navigate to="/notfound" replace /> },
        ],
    },
]);

export default router;
