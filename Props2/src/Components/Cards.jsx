import React from 'react'
import './Cards.css'

const Cards = (props) => {
  return (
    <div>
      <div className = "card">
        <img src = {props.img} alt = "Image Not found" />
        <h1>{props.name}</h1>
        <h2>{props.profession}</h2>
        <h2>{props.age}</h2>
        <h2>{props.city}</h2>
      </div>
    </div>
  )
}

export default Cards
