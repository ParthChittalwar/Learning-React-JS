import React from 'react'
import CenterLeft from './CenterLeft'
import CenterRight from './Centerright'

const Center = () => {
  return (
    <div className="w-full h-125 flex  lg:flex-row items-center lg:items-start gap-8">
      <div className="w-full lg:w-1/2">
        <CenterLeft /> {/* CenterLeft size 1/2 of Center div */}
      </div>
      <div className="w-full lg:w-1/2">
        <CenterRight /> {/* CenterRight size 1/2 of Center div */}
      </div>
    </div>
  )
}

export default Center
