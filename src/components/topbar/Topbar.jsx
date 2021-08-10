import React from 'react'
import "./topbar.css"
import {NotificationsNone, Language, Settings } from '@material-ui/icons';
export default function Topbar() {
    return (
        <div classname="topbar">
            <div className="topbarwrapper">
                <div className="topLeft">
                    <span className="logo">VenityFM</span>
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
                        <Settings />
                        
                    </div>
                    <img src="https://cdn.discordapp.com/attachments/776974960345874453/873946188083232848/Venity-New-logo.png" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
