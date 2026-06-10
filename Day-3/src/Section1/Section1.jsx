import React from 'react'
import Navbar from './Navbar'
import Center from './Center'
import Bottom from './Bottom'
const Section1 = () => {
  return (
    <div>
      <Navbar />  
      <Center className = "h-screen flex flex-col lg:flex-row items-center lg:items-start gap-8"/>     
      <Bottom />   
    </div>
  )
}

export default Section1
