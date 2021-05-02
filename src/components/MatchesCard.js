import React from 'react'
import Card from './Card'
import '../css/cards.css'

function MatchesCard({data}) {
    return (
        <div className="cards container">

        { data.map((item) => {
               return  <Card  key={item.title}  info = {item} />
            })}
       
        </div>
    )
}

export default MatchesCard