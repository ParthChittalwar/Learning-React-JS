import React, { useState } from 'react'
import About from './About'

const Navbar = () => {
  const [showAbout, setShowAbout] = useState(false)

  const handleAboutClick = (e) => {
    e.preventDefault()
    setShowAbout(true)
  }

  return (
    <div id='navbar'>
        <a href='#Heading'>Home</a>
        <a href='#' onClick={handleAboutClick}>About</a>
        <a href='#'>Contact</a>
        {showAbout && <About />}
    </div>
  )
}

export default Navbar

