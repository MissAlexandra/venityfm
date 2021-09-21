import React from 'react'
import "./topbar.css"
import {NotificationsNone, Language, Settings } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import JSONPretty from 'react-json-pretty';
export default function Topbar() {
    const { user, logout, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            
        <div classname="topbar">
            <div className="topbarwrapper">
                <div className="topLeft">

                </div>
                
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        
                    </div>
                    <div className="topbarIconContainer">
                        <Settings onClick={() => logout()}/>
                        
                    </div>
                    
                    <img src={user.picture} alt="" className="topAvatar" />
                </div>
            </div>
        </div>
        
        
    ))

}
