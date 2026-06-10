import React from 'react'

const pricecard = () => {
  return (
    <>
      <div className="bg-white border border-gray-200 rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
        <div className="bg-blue-600 text-white text-sm font-semibold py-1 px-3 rounded-full inline-block mb-4">Most Popular</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Pro</h2>
        <h3 className="text-4xl font-bold text-gray-900 mb-4">$99</h3>
        <p className="text-gray-600 mb-6">For Startup And Growing Business</p>
        <button className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">Get Started With Pro</button>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
        <div className="text-gray-600 text-sm font-semibold py-1 px-3 mb-4">Mid Popular</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Business</h2>
        <h3 className="text-4xl font-bold text-gray-900 mb-4">$149</h3>
        <p className="text-gray-600 mb-6">For Organizations and Large Teams</p>
        <button className="w-full bg-gray-200 text-gray-900 font-semibold py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors">Get Started With Business</button>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
        <div className="text-gray-600 text-sm font-semibold py-1 px-3 mb-4">Least Popular</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Basic</h2>
        <h3 className="text-4xl font-bold text-gray-900 mb-4">$49</h3>
        <p className="text-gray-600 mb-6">For Small Business</p>
        <button className="w-full bg-gray-200 text-gray-900 font-semibold py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors">Get Started With Basics</button>
      </div>
    </>
  )
}

export default pricecard
