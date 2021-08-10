import "./user.css";
import { PermIdentity,CalendarToday,PhoneAndroid,MailOutline,PinDrop,Publish } from "@material-ui/icons";
import { Link } from "react-router-dom";


export default function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img 
                            src="https://cdn.discordapp.com/attachments/776974960345874453/873946188083232848/Venity-New-logo.png"  
                            alt="" 
                            className="userShowImage" 
                        />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Alexa</span>
                            <span className="userShowUserTitle">Developer</span>
                        </div>
                    </div>
                    <div className="userShowBottom"></div>
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon" />
                            <span className="userShowInfoTitle">Alexa</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon" />
                            <span className="userShowInfoTitle">31.01.2000</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon" />
                            <span className="userShowInfoTitle">+44 123 456 789</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon" />
                            <span className="userShowInfoTitle">alexa@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <PinDrop className="userShowIcon" />
                            <span className="userShowInfoTitle">123 fake street</span>
                        </div>
                        
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" placeholder="Alexa" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" placeholder="Alexa" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Name</label>
                                <input type="text" placeholder="Alexandra" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="text" placeholder="Alexa@gmail.com" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input type="text" placeholder="44 123 456 789" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input type="text" placeholder="123 fake street" className="userUpdateInput" />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img className="UserUpdateImg" src="https://cdn.discordapp.com/attachments/776974960345874453/873946188083232848/Venity-New-logo.png" alt="" />
                                <label htmlFor="file"><Publish className="userUpdateIcon"/></label>
                                <input type="file" id="file" style={{display:"none"}}/>
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
