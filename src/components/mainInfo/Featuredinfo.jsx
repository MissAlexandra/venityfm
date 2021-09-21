import "./featuredinfo.css"
import AudioPlayer from "../audioPlayer/AudioPlayer"
import RequestBtn from "../requestbtn/RequestButton"
import RadioInfo from "../radio/radioInfo"
import SongInfo from "../radio/songInfo"

import {Person,MusicNote} from "@material-ui/icons"



export default function Featuredinfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <div className="featuredpresentercontainer">
                
                <span  className="featuredPresenter"><Person/><RadioInfo/></span>
                <div className="featuredpresentercontainer">
                </div>
                {/*Song Info Album Art */}
                <span  className="featuredPresenter"><MusicNote className="radioIcon1"/><SongInfo /></span>    
                </div>
                <AudioPlayer/>
                <RequestBtn/>
            </div>

            
        </div>
    )
}
