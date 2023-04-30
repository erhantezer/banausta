
import { Outlet, createBrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";

const router = createBrowserRouter([
    {
        element: (
            <>
                <Navbar/>
                <Outlet/>
                <Footer/>
            </>
        )
    }
])