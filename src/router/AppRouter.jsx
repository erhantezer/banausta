import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import NotFound from '../pages/NotFound'

const AppRouter = () => {


    return (
        <BrowserRouter>
            <Routes>
                <Route element={
                    <>
                        <Navbar/>
                        <Outlet/>
                        <Footer/>
                    </>
                }>
                    <Route path='/' element={<Home />} />
                </Route>
                <Route path='login' element={<Login/>}/>
                <Route path='register' element={<Register/>}/>
                {/* <Route path='' element={}/>
                <Route path='' element={}/> */}
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter