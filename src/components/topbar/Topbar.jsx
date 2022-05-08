import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from '@material-ui/icons';


function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
            <div className="topLeft">
            <span className="logo">Strack</span>
            </div>
            <div className="topRight">
            <div className="topbarIconContainer">
                <NotificationsNone />
                <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
                <Language />
                <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
                <Settings />
            </div>
            <img src="https://th.bing.com/th/id/OIP.U29YoCAgIzO-dMQTQGZLTQHaF7?w=266&h=213&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="avatar" className="topAvatar" />
            </div>
            </div>

        </div>
    )
}

export default Topbar;