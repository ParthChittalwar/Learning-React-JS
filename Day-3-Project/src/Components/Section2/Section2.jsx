import React from 'react'
import Sec2Nav from './Sec2Nav'
import Sec2Center from './Sec2Center'
import Sec2Bottom from './Sec2Bottom'

const Section2 = ({ cards }) => {
  return (
    <div>
      <Sec2Nav />
      <Sec2Center cards={cards}/>
      <Sec2Bottom />
    </div>
  )
}

export default Section2