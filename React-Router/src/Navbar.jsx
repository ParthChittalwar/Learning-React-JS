import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const navStyle = {
    navbar: {
      backgroundColor: '#333',
      padding: '1rem',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    },
    title: {
      color: '#fff',
      margin: '0 0 1rem 0',
      fontSize: '1.8rem'
    },
    links: {
      display: 'flex',
      gap: '1.5rem'
    },
    link: {
      color: '#fff',
      textDecoration: 'none',
      fontSize: '1rem',
      transition: 'color 0.3s',
      cursor: 'pointer'
    }
  }

  return (
    <div style={navStyle.navbar}>
      <h1 style={navStyle.title}>Parth Chittalwar</h1>
      <div style={navStyle.links}>
        <Link to='/' style={navStyle.link}>Home</Link>
        <Link to='/About' style={navStyle.link}>About</Link>
        <Link to='/Contact' style={navStyle.link}>Contact</Link>
        <Link to='/Product' style={navStyle.link}>Product</Link>
      </div>
    </div>
  )
}

export default Navbar
