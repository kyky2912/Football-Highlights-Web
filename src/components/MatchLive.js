import { useStoreState } from 'easy-peasy'
import React from 'react'
import { useHistory } from 'react-router'
import '../css/MatchLive.css'
export default function MatchLive() {
    const info = useStoreState((state) => state.LiveInfo )
    const  emb = info.embed.slice(137,228)
    const history = useHistory()
    
    const icon = '<<'
    return (
        <div className="video_page">
            <p className='video_info'> <span onClick={() => history.push('/') } >{icon} Back</span> {info.title} </p>
            <p className="name" >{info.competition.name} </p>
               <div className='frm' >
               <iframe title='the_video' className='frame' src={emb} >
               </iframe>
               </div>
              
            </div>
       
    )
}
