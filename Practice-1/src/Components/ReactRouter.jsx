import React from 'react'
import { Link } from 'react-router-dom'

const ReactRouter = () => {
  const containerStyle = {
    maxWidth: '480px',
    margin: '40px auto',
    padding: '24px',
    borderRadius: '14px',
    background: '#f5f7ff',
    boxShadow: '0 16px 30px rgba(15, 23, 42, 0.08)',
    fontFamily: 'Arial, sans-serif',
  }

  const headingStyle = {
    marginBottom: '20px',
    color: '#102a43',
    fontSize: '2rem',
    textAlign: 'center',
  }

  const linkStyle = {
    display: 'block',
    margin: '12px 0',
    padding: '14px 18px',
    borderRadius: '10px',
    background: '#ffffff',
    color: '#1d4ed8',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: 600,
    transition: 'transform 0.2s ease, boxShadow 0.2s ease',
  }

  const linkHoverStyle = {
    transform: 'translateX(2px)',
    boxShadow: '0 10px 20px rgba(16, 36, 102, 0.12)',
  }

  const creditStyle = {
    marginTop: '24px',
    fontSize: '0.9rem',
    color: '#334155',
    textAlign: 'center',
  }

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>React Router</h1>
      <Link to="/form-handling" style={linkStyle}>Form Handling</Link>
      <Link to="/two-way-binding" style={linkStyle}>Two Way Data Binding</Link>
      <Link to="/api-calling" style={linkStyle}>Api Calling</Link>
      <p style={creditStyle}>Developed by Parth Chittalwar</p>
    </div>
  )
}

export default ReactRouter
