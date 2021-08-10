import "./featuredinfo.css"
import RadioInfo from "../radio/radioInfo"
import SongInfo from "../radio/songInfo"
import {Person,MusicNote} from "@material-ui/icons"



export default function Featuredinfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Presenter</span>
                <div className="featuredpresentercontainer">
                <span  className="featuredPresenter"><Person/><RadioInfo /></span>
                    
                </div>
                
                
                
                
                
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Current Song</span>
                <div className="featuredpresentercontainer">
                    
                    
                </div>
                <span  className="featuredPresenter"><MusicNote/><SongInfo/></span>
            </div>
            
        </div>
    )
}
