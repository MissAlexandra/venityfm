import React from 'react'
import UseSWR, { SWRConfig } from 'swr'
const fetcher = url => fetch(url).then(r => {
  return r.json()
})
export default function RongInfo() {
  const { data, error } = UseSWR('http://188.40.244.179/api/nowplaying', fetcher,{refreshInterval:5000})

  if (error) return <div>Error</div>
  if (!data) return <div>loading...</div>
  if (!data[0].live.streamer_name) return <div>AutoDJ</div>
  return <div>{data[0].live.streamer_name}</div>
  
}

