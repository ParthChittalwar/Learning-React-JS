import React from 'react'

const Cards = (props) => {

  return (
    <div>
      <h1> My Name Is {props.name} </h1>
      <h2>My Age is {props.age} </h2>
      <h2>My profession is  {props.Profession}</h2>
      <h2>My Phone Number is {props.phone}</h2>
    </div>
  )
}

export default Cards
