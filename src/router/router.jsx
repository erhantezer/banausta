
import { Outlet, createBrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";

const router = createBrowserRouter([
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
                path: "about",
                element: <About />
            },
            {
                path: "contact",
                element: <Contact />
            },
            
        ]
    }
])