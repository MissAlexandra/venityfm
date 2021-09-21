import "./audioPlayer.css"
import React, {useState, useRef} from "react"
import {PlayCircleOutline,PauseCircleOutline, Pause} from "@material-ui/icons"
import UseSWR, { SWRConfig } from 'swr'
const fetcher = url => fetch(url).then(r => {
    return r.json()
  })

export default function AudioPlayer() {

    const { data, error } = UseSWR('http://188.40.244.179/api/nowplaying', fetcher,{refreshInterval:5000})
    const [isPlaying, setIsPlaying] = useState(false);
    //refs
    const audioPlayer = useRef();
    const togglePlayPause = () => {
        const preValue = isPlaying;
        setIsPlaying(!preValue);
        if (!preValue) {
            audioPlayer.current.play(); 
            document.title = `VenityFM Playing: ${data[0].now_playing.song.text}`
        } else{
            audioPlayer.current.pause();
            document.title = "VenityFM"
        }
    }
    if (error) return <div>Error</div>
    if (!data) return <div>loading...</div>
    if (!data[0].now_playing.song.text) return <div>Nothing is playing</div>
    return (
        <div className = "audioPlayer">
            <audio ref={audioPlayer} src="http://188.40.244.179:8000/radio.mp3" preload="metadata"></audio>
            <button className="playPauseButton" onClick={togglePlayPause}>
                { isPlaying ? <PauseCircleOutline/> : <PlayCircleOutline/>}
            </button>

        </div>
    )
}
