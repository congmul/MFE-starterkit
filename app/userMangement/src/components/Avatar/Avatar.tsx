import * as React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './avatar.scss';

export default ():JSX.Element => {

    function onClick(event: any) {
        let isSideMenuVisible: boolean = event.currentTarget.dataset.sideMenuVisible === 'true' || false;
        const avatarEl = event.currentTarget;
        const sideMenuEl = event.currentTarget.parentNode.children[1];

        if(!isSideMenuVisible){
            sideMenuEl.style.display = "block";
            setTimeout(() => {
                sideMenuEl.style.opacity = "100%";
            }, 10)
            avatarEl.dataset.sideMenuVisible= 'true';
        }else{
            sideMenuEl.style.opacity = "0%";
            setTimeout(() => {
                sideMenuEl.style.display = "none";
            }, 400)
            avatarEl.dataset.sideMenuVisible= 'false';
        }
    }

    window.onclick = function(event: any){
        const currentId = event.target.getAttribute('id');
        const isClassIncluding = event.target.classList.contains('a-avatar-sidemenu-class');
        if(currentId != "a-avatar-icon" && !isClassIncluding){
            const sideMenuEl = document.getElementById('a-avatar-sidemenu')!;
            const avatarEl = document.getElementById('a-avatar-icon')!;
            avatarEl.dataset.sideMenuVisible= 'false';
            sideMenuEl.style.opacity = "0%";
            setTimeout(() => {
                sideMenuEl.style.display = "none";
            }, 400)
        }
    }
    return(
        <div className="userAvatar">
            <div className="avatar" id="a-avatar-icon" data-side-menu-visible='false' onClick={onClick}>
                JJ {/* TODO: Bring user info from Token */}
            </div>
            <div className="side-menu a-avatar-sidemenu-class" id="a-avatar-sidemenu">
                <div className="header a-avatar-sidemenu-class">
                    <div className="name a-avatar-sidemenu-class">
                        {/* TODO: Bring user info from Token */}
                        Welcome, [USER NAME]
                    </div>
                </div>
                <div className="body a-avatar-sidemenu-class">
                    {/* Add more menus on sidemenu */}
                    <div className="menu a-avatar-sidemenu-class">
                        Personal info
                    </div>
                    <div className="menu a-avatar-sidemenu-class">
                        Dashboard
                    </div>
                    <div className="menu a-avatar-sidemenu-class">
                        Settings
                    </div>
                </div>
                <div className="footer a-avatar-sidemenu-class">
                    {/* TODO: Add a function that can remove sessions */}
                    <Button><a href="/">Sign out</a></Button>
                </div>
            </div>
        </div>
    )
}