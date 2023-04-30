
import { Outlet, createBrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Footer from "../components/Footer";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const router = createBrowserRouter([
    {
        element: (
            <>
                <Navbar />
                <Outlet />
                <Footer />
            </>
        ),

        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
            
        ]
    }
])