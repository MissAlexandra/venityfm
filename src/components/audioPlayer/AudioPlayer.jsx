import "./audioPlayer.css"
import React, {useState, useRef} from "react"
import {PlayCircleOutline,PauseCircleOutline, Pause} from "@material-ui/icons"

export default function AudioPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);

    //refs
    const audioPlayer = useRef();
    const togglePlayPause = () => {
        const preValue = isPlaying;
        setIsPlaying(!preValue);
        if (!preValue) {
            audioPlayer.current.play(); 
        } else{
            audioPlayer.current.pause();
        }
    }
    return (
        <div className = "audioPlayer">
            <audio ref={audioPlayer} src="http://188.40.244.179:8000/radio.mp3" preload="metadata"></audio>
            <button className="playPauseButton" onClick={togglePlayPause}>
                { isPlaying ? <PauseCircleOutline/> : <PlayCircleOutline/>}
            </button>

        </div>
    )
}
