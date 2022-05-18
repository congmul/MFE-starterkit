import * as React from 'react';
import { Outlet } from "react-router-dom";

import "./wrapper.scss"

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

export default ():JSX.Element => {
    return(
    <div className="app-wrapper">
        <Navbar />
        <Outlet />
        <Footer />
    </div>)
}