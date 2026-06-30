import React from 'react'

const HeroLeft = () => {
  return (
    // left column: 20% width is handled in parent. Add a white vertical divider and center text.
    <div className="h-full flex  ">
      <div className="text-center mt-7 ml-3 ">
        <h2 className="text-xs font-semibold">Web Design</h2>
        <h2 className="text-xs font-semibold">Branding</h2>
        <h2 className="text-xs font-semibold">App Design</h2>
      </div>
    </div>
  )
}

export default HeroLeft
