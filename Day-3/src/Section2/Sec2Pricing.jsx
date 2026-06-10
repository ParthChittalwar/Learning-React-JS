import React from 'react'
import Top from './Top.jsx'
import Sec2Bottom from './Sec2Bottom.jsx'

const Sec2Pricing = () => {
  return (
    <section className="w-full  from-white to-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Top />
        <div className="mt-8">
          <Sec2Bottom />
        </div>
      </div>
    </section>
  )
}

export default Sec2Pricing

