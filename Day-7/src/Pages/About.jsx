import React from 'react'

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl shadow-lg border border-pink-100">
      <h1 className="text-4xl font-bold mb-3 text-pink-800">About Parth Studio</h1>
      <p className="text-sm text-pink-500 mb-6 font-medium">Learn More About Our Journey</p>

      <div className="space-y-4 mb-8 bg-white p-6 rounded-lg border-l-4 border-pink-300">
        <h2 className="text-2xl font-semibold text-pink-700 mb-4">Who We Are</h2>
        <p className="text-gray-700 leading-relaxed">Parth Studio is dedicated to teaching and sharing knowledge about React JS and modern web development practices.</p>
        <p className="text-gray-700 leading-relaxed">We believe in learning by doing and creating real-world projects that matter.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200 shadow-md">
          <h3 className="text-lg font-bold text-blue-900 mb-2">🎓 Learning</h3>
          <p className="text-sm text-blue-700">Comprehensive React tutorials and courses for all levels</p>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200 shadow-md">
          <h3 className="text-lg font-bold text-green-900 mb-2">🚀 Building</h3>
          <p className="text-sm text-green-700">Create amazing projects with modern technologies</p>
        </div>
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg border border-orange-200 shadow-md">
          <h3 className="text-lg font-bold text-orange-900 mb-2">🌟 Growing</h3>
          <p className="text-sm text-orange-700">Expand your skills and join our community</p>
        </div>
      </div>

      <div className="bg-pink-100 border-l-4 border-pink-300 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-pink-800 mb-3">Our Mission</h3>
        <p className="text-gray-700 leading-relaxed">To empower developers with the knowledge and tools needed to build exceptional web applications using React JS and modern web technologies.</p>
      </div>
    </div>
  )
}

export default About
