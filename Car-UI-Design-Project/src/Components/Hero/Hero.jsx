import React from 'react'
import HeroLeft from './HeroLeft'
import HeroRight from './HeroRight'

const Hero = () => {
  return (
    // Black background with white text. Add top margin (25px) and bottom margin (40px)
    // Layout: left 20% and right 80% using Tailwind widths
    <div className="bg-black text-white   min-h-[80vh] flex">
      <div className="w-1/10 p-2">
        <HeroLeft />
      </div>
      <div className="w-9/10 p-8">
        <HeroRight />
      </div>
    </div>
  )
}

export default Hero
