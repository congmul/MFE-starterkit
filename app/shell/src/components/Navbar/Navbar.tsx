import * as React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimneyWindow, faChartLine } from '@fortawesome/free-solid-svg-icons'
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
            <Link to="/home"><FontAwesomeIcon icon={faHouseChimneyWindow} /></Link>
            <Link to="/dashboard"><FontAwesomeIcon icon={faChartLine} /></Link>
        </div>
        <div className="nav-bottom">
            <UserAvatar error={"Error"} />
        </div>
    </nav>)
}