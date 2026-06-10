import React from 'react'

const S2CenterCard = (props) => {
  const cardStyle = {
    backgroundImage: `url(${props.bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '12px',
    color: '#fff',
    padding: '24px',
    minHeight: '320px',
    minWidth: '360px',
    maxWidth: '480px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    position: 'relative',
    boxShadow: '0 6px 18px rgba(0,0,0,0.25)',
    overflow: 'auto',
  }
  
  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: '12px',
  }

  const contentStyle = {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  }

  return (
    <div style={cardStyle}>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <h3>{props.location}</h3>
        <p>{props.price}</p>
      </div>
    </div>
  )
}

export default S2CenterCard
