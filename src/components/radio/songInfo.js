import React from 'react'
import UseSWR, { SWRConfig } from 'swr'
import "../mainInfo/Featuredinfo"
const fetcher = url => fetch(url).then(r => {
  return r.json()
})
export default function SongInfo() {
  const { data, error } = UseSWR('http://188.40.244.179/api/nowplaying', fetcher,{refreshInterval:5000})

  if (error) return <div>Error</div>
  if (!data) return <div>loading...</div>
  if (!data[0].now_playing.song.text) return <div>Nothing is playing</div>
  return(
  <div className="songContainer">
    <img src={data[0].now_playing.song.art} className="widgetLgImg1"></img>
    <div>{data[0].now_playing.song.text}</div>
  
  </div>
  )
}

