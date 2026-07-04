import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [data, setData] = useState([])

  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list?page=5&limit=100')
    setData(response.data)
  }

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'sans-serif',
  }

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '20px',
  }

  const buttonStyle = {
    display: 'block',
    margin: '0 auto 30px',
    padding: '10px 18px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  }

  const galleryStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '20px',
  }

  const cardStyle = {
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
    textAlign: 'center',
  }

  const imageStyle = {
    width: '100%',
    height: '220px',
    objectFit: 'cover',
    display: 'block',
  }

  const authorStyle = {
    margin: '12px 0 16px',
    fontSize: '16px',
    color: '#333',
  }

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Picture Gallery</h1>
      <button style={buttonStyle} onClick={getData}>
        Get Data
      </button>

      <div style={galleryStyle}>
        {data.map((item) => (
          <div key={item.id} style={cardStyle}>
            <img style={imageStyle} src={item.download_url} alt={item.author} />
            <h2 style={authorStyle}>{item.author}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
