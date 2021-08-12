import React from 'react'
import UseSWR, { SWRConfig } from 'swr'
const fetcher = url => fetch(url).then(r => {
  return r.json()
})
export default function ArtInfo() {
  const { data, error } = UseSWR('http://188.40.244.179/api/nowplaying', fetcher,{refreshInterval:5000})

  return <div>{data[0].now_playing.song.art}</div>
  
}

