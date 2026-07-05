import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../Context/UserContext'

const Hero = () => {
const data = useContext(DataContext)

  return (
    <div>
      <h1>Hero</h1>
      <p>Age = {data.age}</p>
    </div>
  )
}

export default Hero
