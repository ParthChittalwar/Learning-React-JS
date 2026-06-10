import React from 'react'
import S2CenterCard from './S2CenterCard'

const Sec2Center = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '20px',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      {props.cards.map((elem) => (
        <S2CenterCard
          key={elem.id}
          location={elem.location}
          price={elem.price}
          bg={elem.bg}
        />
      ))}
    </div>
  )
}

export default Sec2Center
 