import "./requestBtn.css"
import React, {useState, useRef} from "react"
import {RecordVoiceOver} from "@material-ui/icons"
import UseSWR, { SWRConfig } from 'swr'
const fetcher = url => fetch(url).then(r => {
    return r.json()
  })

export default function RequestBtn() {

    return (
        <div className = "audioPlayer">
            <button className="playPauseButton">
                <RecordVoiceOver/>

            </button>

        </div>
    )
}
