import * as React from 'react';
import { Link } from 'react-router-dom';

export default ():JSX.Element => {
    return(
    <nav className="nav-wrapper">
        <Link to="/home">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
    </nav>)
}