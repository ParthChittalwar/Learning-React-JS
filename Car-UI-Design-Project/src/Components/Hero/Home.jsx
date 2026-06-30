import React from 'react'
import Nav from './Nav'
import Hero from './Hero'

const Home = () => {
  return (
    <div className="bg-black">
      <Nav />
      <hr className="border-t border-gray-200 m-0" />
      <div className="bg-black h-17"></div>
      <div className="mt-8"></div>
      <Hero />
    </div>
  )
}

export default Home
