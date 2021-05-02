import { useStoreActions } from 'easy-peasy';
import React from 'react'
import { useHistory } from 'react-router'
import '../css/card.css'

function Card({info}) {
  
  const addInfo = useStoreActions((actions) => actions.addInfo);
  const open = useHistory()
  function openLive(){
    
    addInfo(info)
    console.log(info)
      open.push('/live')
  }
   
    return (
        <div className='card' 
        onClick ={()=> {
          openLive()
        }}
        >

      
        <p className="title">
            {info.title}
        </p>
            <div className='card_img'>
              <img src ={info.thumbnail} alt ={info.title} />   
            </div>
                
           <div className='match_info'>
           <p>{info.date}</p>
             <p> {info.competition.name} </p>
           </div>
            
        </div>
    )
}

export default Card