import * as React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

import RemoteWrapper from '../RemoteWrapper/RemoteWrapper';

const UserAvatar = RemoteWrapper(React.lazy(() => import('userManagement/UserAvatar')));

export default ():JSX.Element => {
    return(
    <nav className="nav">
        <Link className="nav-header" to="/home">
            <div className="logo"></div>
            <div className="title">
                MFE Starter
            </div>
        </Link>
        <div className="link-wrapper">
            <Link to="/home">Home</Link>
            <Link to="/dashboard">Dash</Link>
        </div>
        <div className="nav-bottom">
            <UserAvatar error={"Error"} />
        </div>
    </nav>)
}