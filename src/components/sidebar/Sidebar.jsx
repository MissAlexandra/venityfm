import "./Sidebar.css"
import {LineStyle,Collections,Announcement,RemoveCircleOutline,FeaturedVideo,Message,Schedule,SettingsInputComponent,AssignmentInd,PostAdd,MailOutline} from "@material-ui/icons"
import { Link } from "react-router-dom"

export default function sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/home">
                            <li className="sidebarListItem active">
                                <LineStyle className="sidebarIcon"/>
                                Home
                        </li>
                        </Link>
                        
                        <li className="sidebarListItem">
                            <Schedule className="sidebarIcon"/>
                            Timetable
                        </li>
                        <Link to="/requests">
                            <li className="sidebarListItem">
                                <SettingsInputComponent className="sidebarIcon"/>
                                Request Line
                        </li>
                        </Link>
                    </ul>
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <SettingsInputComponent className="sidebarIcon"/>
                            Connection Info
                        </li>
                        <li className="sidebarListItem">
                            <Announcement className="sidebarIcon"/>
                            Announcements
                        </li>
                        <li className="sidebarListItem">
                            <RemoveCircleOutline className="sidebarIcon"/>
                            Banned Songs
                        </li>
                    </ul>
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MailOutline className="sidebarIcon"/>
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <Collections className="sidebarIcon"/>
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <Message className="sidebarIcon"/>
                            Messages
                        </li>
                    </ul>
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <Link to="/users">
                            <li className="sidebarListItem">
                                <AssignmentInd className="sidebarIcon"/>
                                Manage Users
                        </li>

                        </Link>
                        
                        <li className="sidebarListItem">
                            <FeaturedVideo className="sidebarIcon"/>
                            Advertisements
                        </li>
                        <li className="sidebarListItem">
                            <PostAdd className="sidebarIcon"/>
                            Post
                        </li>
                    </ul>
                    
                </div>
            </div>
            
        </div>
    )
}
