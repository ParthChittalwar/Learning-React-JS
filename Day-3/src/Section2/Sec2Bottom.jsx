import React from 'react'
import Pricecard from './pricecard'
const Sec2Bottom = () => {
  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Pricecard />
      </div>
      <div className="mt-12 text-center">
        <h6 className="text-gray-600 text-lg sm:text-xl lg:text-2xl font-semibold animate-bounce">
          Parth Chittalwar
        </h6>
      </div>
    </div>
  )
}

export default Sec2Bottom

