import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { LineStyle, Report, Timeline, TrendingUp, PersonOutline, CategoryOutlined, Paid, AccountBalance, Assessment, MailOutline, Feedback, ChatBubbleOutline, WorkOutline } from "@material-ui/icons"


function Sidebar() {
    return (
        <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                <Link to="/" className="link">
                    <li className="sidebarListItem active">
                        <LineStyle className="sidebarIcon"/>
                        Home
                    </li>
                    </Link>
                    <li className="sidebarListItem">
                        <Timeline className="sidebarIcon"/>
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUp className="sidebarIcon"/>
                        Sales
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarList">
                <Link to="/users" className="link">
                    <li className="sidebarListItem active">
                        <PersonOutline className="sidebarIcon"/>
                        Users
                    </li>
                    </Link>
                    <Link to="/products" className="link">
                    <li className="sidebarListItem">
                        <CategoryOutlined className="sidebarIcon"/>
                        Products
                    </li>
                    </Link>
                    <li className="sidebarListItem">
                        <AccountBalance className="sidebarIcon"/>
                        Transactions
                    </li>
                    <li className="sidebarListItem">
                        <Assessment className="sidebarIcon"/>
                        Reports
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notifications</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        <MailOutline className="sidebarIcon"/>
                        Mail
                    </li>
                    <li className="sidebarListItem">
                        <Feedback className="sidebarIcon"/>
                        Feedback
                    </li>
                    <li className="sidebarListItem">
                        <ChatBubbleOutline className="sidebarIcon"/>
                        Messages
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Employee</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        <WorkOutline className="sidebarIcon"/>
                        Manage
                    </li>
                    <li className="sidebarListItem">
                        <Timeline className="sidebarIcon"/>
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <Report className="sidebarIcon"/>
                        Reports
                    </li>
                </ul>
            </div>
        </div>
        </div>
    );
}

export default Sidebar;