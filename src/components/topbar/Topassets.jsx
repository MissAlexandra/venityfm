import React from 'react'
import "./topbar.css"
import {NotificationsNone, Language, Settings } from '@material-ui/icons';
import { Link } from 'react-router-dom';
export default function Topbar() {

    return (   
        <div classname="topbar">
            <div className="topbarwrapper">
                <div className="topLeft">
                    <Link to="/">
                    <span className="logo">VenityFM</span>
                    </Link>
                </div>
            
            </div>
        </div>
        
        
    )

}
